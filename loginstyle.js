function welcome(){
let username=document.getElementById('username').value;
let userpassword=document.getElementById('userpass').value;
if (username=="") {
	alert(" Please Input your Username");
}else if (userpassword=="") {
	alert(" Please Input your password");
	}
	else{
		window.open("index.html");
	}
}