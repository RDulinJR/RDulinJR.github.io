function onload(){
	var send = document.getElementById("send");
	send.addEventListener("click", sendEmail, false);
}
function sendEmail(e){
	window.open('mailto:rodneydulinjr@gmail.com', 'Mail');
	e.preventDefault();
}
window.addEventListener("load", onload, false);