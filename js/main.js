//**** main loading logic

$(document).ready(function(){


	//@@@@ variables @@@@//

	var _DB = {},									// js obj: hold all requests for the current month
		_STORE = chrome.storage.local,				// chrome obj: shortcut object
		$UI = $('body'),							// jQ obj: all elements
		$UI_LOGIN = $UI.find('#login').show(),		// jQ obj: login div
		$UI_ERR_MSG = $UI_LOGIN.find('#login_err'),	// jQ obj: error message div
		login_user_list = []						// array: usernames for autocomplete	
		;

	//@@@@ end variables @@@@//



	//@@@@ functions @@@@//

	function userLogin() {
		/*	called from the #submit button for the log in form
		 *	does error checking, encrypts user and pw for db check
		 *	login info is stored, encrypted, locally - otherwise check is done on server
		 */
		
		var $u = $UI.find('#user'),				// jQ obj: username input
			usr = $u.val(),						// string: username plaintext
			$p = $UI.find('#pw'),				// jQ obj: password input
			pw = $p.val(),						// string: pw plaintext
			$s = $UI.find('#site'),				// jQ obj: site select
			site = $s.val(),					// string: site name plaintext
			store_name = 'login_info_' + usr,	// string: chrome storage label (one per username)
			store_obj = {},						// js obj: chrome storage obj for user credentials (used first time only)
			seed = new Date().getTime(),		// string: randomizer!
			usr_enc,							// string: username encrypted
			pw_enc,								// string: pw encrypted
			err = '';							// string: error string
		
		try {
			
			//**** error checking -- array has msg and element (used to focus)
			if (!site) {
				err = ['Please choose your Site', $s];
			}
			else if (!usr) {
				err = ['Please type in your username', $u];
			}
			else if (!pw) {
				err = ['Please type in your password', $p];
			}
			
			
			if (err) {
				//**** display error string, halt execution
				$UI_ERR_MSG.html(err[0]);
				err[1].focus();
				return false;
			}
			else {
				//**** encrypt info and check local/server -- return userid
				usr_enc = sha256Hash(sha256Hash(usr) + seed);
				pw_enc = sha256Hash(sha256Hash(pw) + seed);
				
				_STORE.get(store_name, function(_rslt_obj) {
					var usr_obj = _rslt_obj[store_name];	// chrome obj: storage object for user
					
					if (usr_obj && (sha256Hash(usr_obj.u + seed) == usr_enc && sha256Hash(usr_obj.p + seed) == pw_enc)) {
						//**** checked locally, load in the interface
						finishLogin(site, usr);
					}
					else if (!usr_obj) {
						//**** nothing local yet, check on server
						$.getJSON(
							'http://toes.tdsb.on.ca/apps/chrome/server/check_creds.php',
							{
								"user": usr_enc,
								"pw": pw_enc,
								"site": site,
								"seed": seed
							},
							function(_rslt){
								if (_rslt.ok == true && _rslt.user == usr_enc) {
									//**** save login info locally
									store_obj[store_name] = {"u": sha256Hash(usr), "p": sha256Hash(pw)};
									_STORE.set(store_obj);
									
									//**** load in interface
									finishLogin(site, usr);
								}
								else {
									//**** ERROR
									$UI_ERR_MSG.html('Your Login info is wrong!');
								}
							}
						);
					}
					else {
						//**** ERROR
						$UI_ERR_MSG.html('Your Login info is wrong!');
					}
				});
				
				
			} // end else if checking creds
			
		} catch(e) {
			//**** UNKNOWN ERROR!
			$UI_ERR_MSG.html('Alternate universe converging! Data corrupt? Not enough vodka? Error: ' + e.description);
		}
		
	} // end userLogin




	function finishLogin(_site, _user){
		/*	if userLogin is correct, this function loads in the DB interface
		 *	for the current month, create a calendar object with all requests, teacher and school info
		 *	once the interface is started, query the server for any changes not downloaded
		 *	if no local data, download for the current month
		 */
		
		
		//**** prep & load UI
		$UI_LOGIN.hide();
		
		//**** save login info -- BUT, username is not encrypted....
		_STORE.set({
			'login_site': _site,
			'login_user_list': addUserToList(_user)
		});
		
		//**** main ui choices along top
		$( "#db_choices_radio" ).buttonset();
		
		//**** remove flex settings (i think this is what I want?) with class
		$UI.find('.body-login').addClass('body');
		
		//**** set radio button "tabs"
		$UI.find('[name=radio]').click(function(){
			var tab = $(this).attr('data-tab');
			$UI.find('.page').hide();
			$UI.find('#' + tab).show();
		})
		
		//****
		$UI.find('#db').show();
		
		//**** check server for DB changes, then create month object
		
		
	} // end finishLogin




	function addUserToList(_string) {
		//***** store usernames in array for autocomplete
		
		if ($.inArray(_string, login_user_list) == -1) {
			login_user_list.push(_string);
		}
		
		return login_user_list;
		
	} // end addUserToList




	function clearErrorMsg() {
		//**** used for login messages
		
		if (this.value != '') $UI_ERR_MSG.html('');
		
	} // end clearErrorMsg


	//@@@@ end functions @@@@//



	//@@@@ logic @@@@//

	//!!!! app start-up
	$UI.find('#loader').hide(); // don't think this thing ever shows - will have to try on dial-up!
	
	$UI.find('#submit').click(userLogin);
	
	$UI_LOGIN.find('#site, #user, #pw').change(clearErrorMsg);
	
	
	//**** set site select value from storage
	_STORE.get('login_site', function(_rslt_obj){
		if (_rslt_obj.login_site) {
			$UI.find('#site').val(_rslt_obj.login_site);
		}
	});

	//**** user input
	_STORE.get('login_user_list', function(_rslt_obj){
		if (_rslt_obj.login_user_list) login_user_list = _rslt_obj.login_user_list;
		
		$UI.find('#user').autocomplete({lookup: login_user_list});
	});

	//!!!! end start-up




	//@@@@ end logic @@@@//



}); //END ready
