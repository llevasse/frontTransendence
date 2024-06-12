async function changeToLogin(){
	const contain = document.getElementById("container");
	const response = await fetch("bodyLessLogin.html");
	const txt = await response.text();
	
	contain.innerHTML=txt;
}

async function changeToHome(){
	const contain = document.getElementById("container");
	const response = await fetch("bodyLessHome.html");
	const txt = await response.text();
	
	contain.innerHTML=txt;
}

async function changeToWhiteMode(){
	const style = document.getElementById("style");
	style.setAttribute('href', "whiteMode.css");
}
