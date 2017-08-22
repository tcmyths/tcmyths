	function tcmi_hideDiv( divToHide ){
		var textDiv = document.getElementById(divToHide );
		if ((textDiv !== null) && (textDiv !== undefined)) {
			textDiv.style.display = "none";
		}
	}
	function tcmi_showDiv( divToShow ){
		var textDiv = document.getElementById(divToShow);
		if ((textDiv !== null) && (textDiv !== undefined)) {
			textDiv.style.display = "block";
		}
	}

	function tcm_init(){
		cookieVal = tcmi_getCookie("clicked");
		if (cookieVal == "yes") {
			tcmi_showDiv ("secrettext");
			tcmi_hideDiv ("notsecret");
		}
		return 0;
	}

	function tcm_btnClick(){
		cookieVal = tcmi_getCookie("clicked");
		if (cookieVal != "yes") {
			tcmi_setCookie ("clicked", "yes", 90);
		}
		alert("Thank you for your consent to participate.");
		return 0;
	}

	function tcmi_setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function tcmi_getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		caLen = ca.length;
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
