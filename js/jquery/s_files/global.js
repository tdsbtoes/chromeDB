if (window.screen) {
    var clientW = Math.floor(screen.availWidth);
    var clientH = Math.floor(screen.availHeight);
}


function openWindow(url) {//standard size defined for generic pop up content
    window.name = "main";
    var Window1 = window.open(url, 'Window1', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=580,height=500,top=' + ((clientH - 500) / 2) + ',left=' + ((clientW - 577) / 2));
    Window1.focus();
}

//look for element helpPageNumber to find page to be opened
function openHelpPageByStatus(url) {
	var num = document.getElementById('helpPageNumber').value;
	var splitString = url.split(".");
	var newUrl = splitString[0] + num + "." + splitString[1];
	openWindow(newUrl);
}

function replaceWindow(url) //target url back to main browser and close the popup
{
    opener.location = url;
    setTimeout("window.close()", 500);
}

function backToMainWindow(url) //target url back to main browser from the popup.
{
    opener.location = url;

}

function openWindow2(url, w, h) {//customizable size with no tool bars, for calculators, amicus deposit register info, pavilion locator,...etc
    window.name = "main";
    var Window2 = window.open(url, 'Window2', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=' + w + ',height=' + h + ',top=' + ((clientH - h) / 2) + ',left=' + ((clientW - w) / 2));
    Window2.focus();

}
function openWindow3(url, w, h) {//customizable size with standard tool bars, for pc points
    window.name = "main";
    var Window3 = window.open(url, 'Window3', 'toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=' + w + ',height=' + h + ',top=' + ((clientH - h) / 2) + ',left=' + ((clientW - w) / 2));
    Window3.focus();
}

function openWindow4(url, w, h) {//auto scrolling, NOT resizable, for why join pop up
    window.name = "main";
    var Window4 = window.open(url, 'Window4', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=auto,resizable=no,width=' + w + ',height=' + h + ',top=' + ((clientH - h) / 2) + ',left=' + ((clientW - w) / 2));
    Window4.focus();
}

function openWhyJoin(url) {//auto scrolling, NOT resizable, for why join pop up
    window.name = "main";
    var Windoww = window.open(url, 'Windoww', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=auto,resizable=no,width=' + 416 + ',height=' + 570 + ',top=' + ((clientH - 570) / 2) + ',left=' + ((clientW - 416) / 2));
    Windoww.focus();
}

function closeWhyJoin() {
    window.opener.location.href = contextRoot + "/productapplications/applyNowPresignOn.ams";
    setTimeout('self.close()', 1000);
}

function openWindow5(url, w, h) {//external links
    window.name = "main";
    Window5 = window.open(url, 'Window5', 'toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=577,height=500,top=' + ((clientH - 500) / 2) + ',left=' + ((clientW - 577) / 2));
    Window5.focus();
}

function openWindow6(url) {//standard size defined for generic pop up content
    window.name = "main";
    var Window6 = window.open(url, 'Window6', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=760,height=500,top=' + ((clientH - 500) / 2) + ',left=' + ((clientW - 747) / 2));
    Window6.focus();
}

function getFieldHelp(url) {//field level help pop up
    window.name = "main";
    Window5 = window.open(url, 'Window5', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=577,height=300,top=' + ((clientH - 300) / 2) + ',left=' + ((clientW - 560) / 2));
    Window5.focus();

}

function openPrintPage(url) {//open print version content page with .page extension
    url = url + "?layout=print";
    window.name = "main";
    Window1 = window.open(url, 'printWindow', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=577,height=500,top=' + ((clientH - 500) / 2) + ',left=' + ((clientW - 577) / 2));
    Window1.focus();
}

function getPrintPage() {//for printer friendly version button for ".page"
    var captureURL = document.location.href;
    //alert(captureURL);
    //var indexstart= captureURL.indexOf("/");
    //alert(indexstart);
    var indexend = captureURL.lastIndexOf(".");
    //alert(indexend);
    var finstring = captureURL.slice(0, indexend) + ".page?layout=print";
    //alert(finstring);
    openWindow(finstring);
}

function getPrintVersion() {//for printer friendly version button for ".ams"
    var captureURL = document.location.href;
    //alert(captureURL);
    //var indexstart= captureURL.indexOf("/");
    //alert(indexstart);
    var indexend = captureURL.lastIndexOf(".");
    //alert(indexend);
    var finstring = captureURL.slice(0, indexend) + ".ams?layout=print&printMode=true";
    //alert(finstring);
    openWindow(finstring);
}

function getStatusDetailsPrintVersion(status) {//for printer friendly version button for ".ams"
    var captureURL = document.location.href;
    var indexend = captureURL.lastIndexOf(".");
    var finstring = captureURL.slice(0, indexend) + ".ams?layout=print&printMode=true&status=" + status;
    openWindow(finstring);
}

function getPrintVersionPopUp() {//for printer friendly version button for ".ams"
    var captureURL = document.location.href;
    //alert(captureURL);
    //var indexstart= captureURL.indexOf("/");
    //alert(indexstart);
    var indexend = captureURL.lastIndexOf(".");
    //alert(indexend);
    var finstring = captureURL.slice(0, indexend) + ".ams?layout=print&pageFrom=spa";
    //alert(finstring);
    openWindow(finstring);
}

function openPrinterFriendlyWindow() {
    url = "/";
    if (contextRoot != "") {
        url = contextRoot;

    } else {
        url = "";
    }
    url += "/resources/blank.html";
    PrinterFriendlyWindow = window.open(url, 'PrinterFriendlyWindow', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=560,height=500,top=' + ((clientH - 500) / 2) + ',left=' + ((clientW - 560) / 2));
    return PrinterFriendlyWindow;
}

function printPage() {//print this page
    var platform = navigator.platform;
    if (window.print) {
        //setTimeout('window.print();',200);
        window.print();
    }
    else if (platform.indexOf("mac") != -1 || platform.indexOf("Mac") != -1) {
        alert("Press 'Cmd+p' on your keyboard to print article.");
    }
    else {
        alert("Press 'Ctrl+p' on your keyboard to print article.")
    }
}

function mOver(imgName) {
    var currentImage = eval("document.getElementById('" + imgName + "')");
    var imgSource = currentImage.src;
    var num = imgSource.indexOf("_off.gif");
    if (num > -1) {
        currentImage.src = imgSource.slice(0, num) + "_over.gif";
    }
}

function mOut(imgName) {
    var currentImage = eval("document.getElementById('" + imgName + "')");
    var imgSource = currentImage.src;
    var num = imgSource.indexOf("_over.gif");
    if (num > -1) {
        currentImage.src = imgSource.slice(0, num) + "_off.gif";
    }
}
function setCookie(name, value, expires, path, domain, secure) {
    var curCookie = name + "=" + escape(value) +
                    ((expires) ? "; expires=" + expires.toGMTString() : "") +
                    ((path) ? "; path=" + path : "") +
                    ((domain) ? "; domain=" + domain : "") +
                    ((secure) ? "; secure" : "");
    document.cookie = curCookie;
}

function getCookie(name) {
    var prefix = name + "=";
    var cookieStartIndex = document.cookie.indexOf(prefix);
    if (cookieStartIndex == -1)
        return null;
    var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex +
                                                      prefix.length);
    if (cookieEndIndex == -1)
        cookieEndIndex = document.cookie.length;
    return unescape(document.cookie.substring(cookieStartIndex +
                                              prefix.length, cookieEndIndex));
}

function deleteCookie(name, path, domain) {
    if (getCookie(name)) {
        document.cookie = name + "=" +
                          ((path) ? "; path=" + path : "") +
                          ((domain) ? "; domain=" + domain : "") +
                          "; expires=Thu, 01-Jan-70 00:00:01 GMT"
    }
}

function getWizardErrorHelp(errorCode) {//error help pop up for wizard
    Window6 = window.open(contextRoot + '/productapplications/errorHelp.ams?errorCode=' + errorCode, 'Window6', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=560,height=300,top=' + ((clientH - 300) / 2) + ',left=' + ((clientW - 400) / 2));
    Window6.focus();
}
function fixDate(date) {
    var base = new Date(0);
    var skew = base.getTime();
    if (skew > 0)
        date.setTime(date.getTime() - skew);
}

//Method to generate random number used for TCI cookie
function generateTCI()
{
    var random = Math.round(Math.random() * 9999999999999999);
    return random;
}
//Method to get the domain host name like pcfinancial.ca
function getHostname(count)
{
    var domain = "" + this.location.hostname;
    if (domain.indexOf(".") != -1)
    {
        var arr = domain.split(".");
        arr = arr.reverse();
        domain = "";
        len = arr.length;
        for (var i = 0; i < count; i++)
        {
            domain = "." + arr[i] + domain;
        }
    }
    var len = domain.length;
    domain = domain.substring(1, len);
    return domain;
}

function linkToPage(filePath) {
    this.location.href = filePath;
}

function backToStep(filePath, backToStepNumber) {
    var finalPath = filePath + "?reprocess=false&backToStepNumber=" + backToStepNumber;
    this.location.href = finalPath;
}

function backToStepPop(filePath, backToStepNumber) {
    var finalPath = filePath + "&reprocess=false&backToStepNumber=" + backToStepNumber;
    this.location.href = finalPath;
}

function signOff(message) {//signOff from banking
    if (confirm(message)) {
        this.location.href = contextRoot + "/authentication/signOff.ams";
        return true;
    }
}

function signOff() {//signOff from banking without message
        this.location.href = contextRoot + "/authentication/signOff.ams";

}

function signOffReturnToSignIn() {//signOff from banking without message and return to PreSignOn
        this.location.href = contextRoot + "/authentication/signOff.ams?returnToSignIn=true";

}
function onloadFunction()
{
    if (document.forms[0] && document.forms[0].elements[1])
    {
        if (document.forms[0].elements[1].type != 'hidden')
        {
            document.forms[0].elements[1].focus();
        }
    }
    positionLeftPanelDisclaimer();
}
function getBrandFromDomain() {
    var domain = "" + this.location.hostname;
    var brandId = "cdcb";
    // by default
    if (domain.indexOf("cdcbanking") != -1) {
        brandId = "cdcb";
    } else if (domain.indexOf("pcfinancial") != -1) {
        brandId = "pcf";
    }
    return brandId;
}
function isBrand1() {
    if ("cdcb" == getBrandFromDomain()) {
        return true;
    } else {
        return false;
    }
}
function isBrand2() {
    if ("pcf" == getBrandFromDomain()) {
        return true;
    } else {
        return false;
    }
}
function getCookieExpiry() {
    var expdate = new Date ();
    expdate.setTime(expdate.getTime() + (24 * 60 * 60 * 1000 * 31));
    return expdate;
}
var sURL = unescape(window.location.pathname);
//capture the url
function gotoEnglish() {
    setCookie('affinity', getBrandFromDomain() + '.en_CA', getCookieExpiry(), '/', getHostname(2), false);
    this.location.href = sURL;
    //fix for bug #3462
}
function gotoFrench() {
    setCookie('affinity', getBrandFromDomain() + '.fr_CA', getCookieExpiry(), '/', getHostname(2), false);
    this.location.href = sURL;
    //fix for bug #3462
}


function gotoMktEnglish() {
    setCookie('affinity', getBrandFromDomain() + '.en_CA', getCookieExpiry(), '/', getHostname(2), false);
    this.location.href = sURL;
}
function gotoMktFrench() {
    setCookie('affinity', getBrandFromDomain() + '.fr_CA', getCookieExpiry(), '/', getHostname(2), false);
    this.location.href = sURL;
}
function redirect(url) {
    this.location.href = url;
}

function gotoSite() {
    var index = document.forms["headerForm"].select_site.selectedIndex;
    var val = document.forms["headerForm"].select_site.options[index].value;
    if (val == 'cibcVisa')
    {
        openWindow3(cibcOnline, 800, 600);
    }
    if (val == 'txnsite')
    {
        this.location.href = txnsite;
    }
}

function gotoSiteSignOff(msg) {
    var index = document.forms["headerForm"].select_site.selectedIndex;
    var val = document.forms["headerForm"].select_site.options[index].value;
    if (val == 'cibcVisa')
    {
        if (confirm(msg)) {
            openWindow3(cibcOnline, 800, 600);
            this.location.href = contextRoot + "/authentication/signOff.ams";
            return true;
        }
    }
    if (val == 'txnsite')
    {
        this.location.href = txnsite;
    }
}

function openSessionSummary(url, msg) {
    /*if (confirm (msg)){
      window.location.href=url;
    }*/
    openWarningForProductApplication(url, msg);
}
function openWarningForProductApplication(url, msg) {
    if (confirm(msg)) {
        window.location.href = url;
    }
}

function goToURL(url) {
    window.location.href = url;
}


function openPDF(pdfFile)
{
    pdfpop = window.open(pdfFile, "pdfpop", "width=700,height=560,toolbar,scrollbars,menubar,resizable,top=100,left=100");
}


function signOffGotoURL(url, msg) {
    if (confirm(msg)) {
        openWindow3(url, 800, 600);
        this.location.href = contextRoot + "/authentication/signOff.ams";
        return true;
    }
}

function positionLeftPanelDisclaimer() {
    if (document.getElementById('leftPanel') != null && document.getElementById('leftPanelDisclaimer') != null) {
        var heightContent,contentPanelHeight,leftPanelDisclaimerHeight,curtop = 0,curleft;
        leftPanelHeight1 = (document.getElementById('leftPanel').offsetHeight);
        contentPanelHeight = (document.getElementById('contentPanel').offsetHeight);
        if ((leftPanelHeight1 ) < contentPanelHeight) {
            document.getElementById('leftPanel').style.height = ((leftPanelHeight1 ) < contentPanelHeight)?contentPanelHeight:leftPanelHeight1;
        }
        leftPanelHeight = (document.getElementById('leftPanel').offsetHeight);
        obj = document.getElementById('leftPanel');
        if (obj.offsetParent)
        {
            while (obj.offsetParent)
            {
                curtop += obj.offsetTop;
                curleft = obj.offsetLeft;
                obj = obj.offsetParent;
            }
        }
        else if (obj.y)
        {
            curtop += obj.y;
            curleft = obj.x;
        }
        leftPanelDisclaimerHeight = (document.getElementById('leftPanelDisclaimer').offsetHeight);
        leftPanelDisclaimerTop = (leftPanelHeight + curtop) - leftPanelDisclaimerHeight;

        if ((leftPanelHeight1 ) < contentPanelHeight) {
            document.getElementById('leftPanelDisclaimer').style.position = "absolute";
            document.getElementById('leftPanelDisclaimer').style.top = leftPanelDisclaimerTop;
        }
    }
    var containerTop = 0;
    if (document.getElementById('serverId') != null) {
        obj1 = document.getElementById('serverId');
        if (obj1.offsetTop) {
            containerTop += obj1.offsetTop;
        } else if (obj1.y) {
            containerTop += obj1.y;
        }
        var contHeight = document.getElementById('serverId').offsetHeight;
        document.getElementById('container').style.positon = "absolute";
        document.getElementById('container').style.height = (containerTop + contHeight);
    }
}

// for limiting number of characters in textarea only
function textLimit(field, maxlen) {
	if (field.value.length > maxlen)
		field.value = field.value.substring(0, maxlen);
}


//toggles between dropdown and text field
//please note: dorpdown and text field
function toggleStyle(dropdownListID, inputTextID, switchStyleTo, questionNumber)
{	
	var dropdowndiv = document.getElementById(dropdownListID);
	var inputTextdiv = document.getElementById(inputTextID);
	var inputTextdFielddiv = document.getElementById(inputTextID + questionNumber);
	var dropdownFielddiv = document.getElementById(dropdownListID + questionNumber);
	if (switchStyleTo == 'inputText') {
		dropdowndiv.style.display = "none";
		inputTextdiv.style.display = "";
		if(dropdownFielddiv.value!="")
		{
			inputTextdFielddiv.value=dropdownFielddiv.value;
		}
		inputTextdFielddiv.disabled = "";
		dropdownFielddiv.disabled = "true";
	}
	if (switchStyleTo == 'dropdownList') {
		dropdowndiv.style.display = "";
		inputTextdiv.style.display = "none";
		inputTextdFielddiv.disabled = "true";
		dropdownFielddiv.disabled = "";
	}
  return false;
}

function toggleStyleNoValueAssignment(dropdownListID, inputTextID, switchStyleTo, questionNumber)
{	
	var dropdowndiv = document.getElementById(dropdownListID);
	var inputTextdiv = document.getElementById(inputTextID);
	var inputTextdFielddiv = document.getElementById(inputTextID + questionNumber);
	var dropdownFielddiv = document.getElementById(dropdownListID + questionNumber);
	if (switchStyleTo == 'inputText') {
		inputTextdiv.value = "";
		dropdowndiv.style.display = "none";
		inputTextdiv.style.display = "";
		if(dropdownFielddiv.value!="")
		{
			//inputTextdFielddiv.value=dropdownFielddiv.value;
			dropdownFielddiv.value = "";
		}
		inputTextdFielddiv.disabled = "";
		dropdownFielddiv.disabled = "true";
	}else if (switchStyleTo == 'dropdownList') {
		inputTextdFielddiv.value = "";
		dropdownFielddiv.value = "";
		dropdowndiv.style.display = "";
		inputTextdiv.style.display = "none";
		inputTextdFielddiv.disabled = "true";
		dropdownFielddiv.disabled = "";
	}
  return false;
}

 function downloadAcrobat(msg){

    if(confirm(msg)){
		this.location.href = contextRoot + "/authentication/signOff.ams" ;        
	    openWindow3('http://www.adobe.com/support/downloads/main.html', 560, 500);
    }
 }
