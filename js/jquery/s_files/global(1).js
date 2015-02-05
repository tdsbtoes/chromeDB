<!--
//This is a PCF brand specific global.js. You can override the functions defined in default global.js

function submitSimpleSignOff(message){
	if(confirm(message)){
		document.sidenav.action = "/authentication/signOff.ams" ;
		document.sidenav.submit();
		return true;
	}else
		return;
}

//-->

function validateForm2()
{
	form = document.forms["temp2"];
	var SiteID;
	var value = form.sign_in_select.options[form.sign_in_select.selectedIndex].value ;

	if (value == 1)
	{
		this.location.href=txnsite;
	}

	if ( value==2 ) {//pcmc
		openWindow3('https://www.pcmastercard.pcfinancial.ca/rocen/cardapp/contentPG/sign_in_frm.htm', 630, 500);
		return true;
	}
	if ( value==3 ) {//pc points
		openWindow3(' https://pcpoints.pcfinancial.ca/myaccount/', 630, 500);
		return true;
	}
}

function validateForm2SignOff()
{
	form = document.forms["temp2"];
	var SiteID;
	var value = form.sign_in_select.options[form.sign_in_select.selectedIndex].value ;

	if (value == 1)
	{
		this.location.href=txnsite;
	}

	if ( value==2 ) {//pcmc
		if (confirm('\nSelect "OK" to sign out of President'+"'"+'s Choice Financial and go to PC MasterCard.\n\nSelect "Cancel" to return to President'+"'"+'s Choice Financial.')){
		openWindow3('https://www.pcmastercard.pcfinancial.ca/rocen/cardapp/contentPG/sign_in_frm.htm', 630, 500);
		this.location.href = contextRoot + "/authentication/signOff.ams?msg=1" ;
		return true;
		} else {
			return false;
		}


	}
	if ( value==3 ) {//pc points
		if (confirm('\nSelect "OK" to sign out of President'+"'"+'s Choice Financial and go to PC points.\n\nSelect "Cancel" to return to President'+"'"+'s Choice Financial.')){
		openWindow3('https://pcpoints.pcfinancial.ca/myaccount/xhtml/signin.xhtml', 630, 500);
		this.location.href = contextRoot + "/authentication/signOff.ams?msg=1" ;
		return true;
		} else {
			return false;
		}

	}
}

function openWhyJoin(url){//auto scrolling, NOT resizable, for why join pop up
	window.name = "main";
	var Windoww=window.open(url,'Windoww','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=auto,resizable=no,width='+400+',height='+570+',top='+((clientH-570)/2)+',left='+((clientW-416)/2));
	Windoww.focus();
}

function getRegister () {
	thisForm = document.forms["register_form"];
	
	if ( thisForm.product_select[0].checked==true) {		

		this.location.href=txnsite+'/a/authentication/bankRegister1.ams';
	}

	else if (thisForm.product_select[1].checked==true ) {	

		openWindow3('http://www.pcmastercard.pcfinancial.ca/ROCEN/cardApp/contentPG/re_register.asp', 630, 500);	
	}

	else if (thisForm.product_select[2].checked==true){

		openWindow3('https://www.pcpoints.ca/en/secure/index_register.asp', 630, 500);
	}

	else
		alert ( "A selection has not been made.\n\nPlease select OK and choose a selection." )	;
}

 function downloadAcrobat(msg){

    if(confirm(msg)){
		this.location.href = contextRoot + "/authentication/signOff.ams" ;        
	    openWindow3('http://www.adobe.com/support/downloads/main.html', 560, 500);
    }
 }

