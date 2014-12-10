function logout() {
	var xhre = new XMLHttpRequest() ;
        xhre.open("GET",'login.pl?action=logout_js',true,"logout","logout");
        xhre.send("");
}

logout();
