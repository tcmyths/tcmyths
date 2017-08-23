var tcm = (function() {
	/* constants used by this module */
	var cookieName = "tcm_consent";
	var cookieSet = "yes";
	var cookieExp = 180; // expiration time of consent in days
	var showOnConsent = 'tcm_consent_set';
	var hideOnConsent = 'no_tcm_consent_set';

	/* Functions meant to be called from only inside of this module */
	
	function tcmi_hideDiv( divToHide ){
		var textDiv = document.getElementById( divToHide );
		if ( textDiv != null ) {
			textDiv.style.display = "none";
		}
		return 0;
	}
	function tcmi_showDiv( divToShow ){
		var textDiv = document.getElementById( divToShow);
		if ( textDiv != null ) {
			textDiv.style.display = "block";
		}
		return 0;
	}

	function tcmi_setCookie(cName, cValue, expDays) {
		var d = new Date();
		d.setTime(d.getTime() + (expDays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
		return 0;
	}

	function tcmi_getCookie(cName) {
		var name = cName + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		var caLen = ca.length;
		for(var i = 0; i < caLen ; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	function tcmi_setDivState(showOnConsent, hideOnConsent){
		tcmi_showDiv (showOnConsent);
		tcmi_hideDiv (hideOnConsent);		
	}
	
	/* Functions meant to be called from outside of this module */
	
	function tmi_getConsentCookie() {
		var cookieVal = tcmi_getCookie(cookieName);
		return cookieVal;
	}

	function tmi_btnClick(showOnConsent, hideOnConsent){
		var cookieVal = tcmi_getCookie(cookieName);
		var now = new Date();
		if (cookieVal == "") {
			tcmi_setCookie (cookieName, now, cookieExp);
			tcmi_setDivState(showOnConsent, hideOnConsent)
		}
		alert("Thank you for your consent to participate.");
		return 0;
	}

	function tmi_init(showOnConsent, hideOnConsent){
		var cookieVal = tcmi_getCookie(cookieName);
		if (cookieVal != "") {
			tcmi_setDivState(showOnConsent, hideOnConsent);
		}
		return 0;
	}
	
	document.addEventListener("DOMContentLoaded", function(event) { 
		tmi_init(showOnConsent, hideOnConsent);
	});
	/* reaturn functions that can be called from outside the module 	*/
	
	var exportFns = {};
		exportFns.init = tmi_init;
		exportFns.btnClick = tmi_btnClick;
		exportFns.getConsentCookie = tmi_getConsentCookie;
	return exportFns;
})();