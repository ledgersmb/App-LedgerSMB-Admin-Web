function logout() {
	var xhre = new XMLHttpRequest() ;
        xhre.open("GET",'logout',true,"logout","logout");
        xhre.send("");
}

logout();
