async function changeToLogin(){
	const contain = document.getElementById("container");
	const response = await fetch("bodyLess/login.html");
	const txt = await response.text();
	
	contain.innerHTML=txt;
}

async function changeToHome(){
	const contain = document.getElementById("container");
	const response = await fetch("bodyLess/home.html");
	const txt = await response.text();
	
	contain.innerHTML=txt;
}

async function changeToLightMode(){
	const style = document.getElementById("style");
	style.setAttribute('href', "lightMode.css");
}

async function changeToDarkMode(){
	const style = document.getElementById("style");
	style.setAttribute('href', "darkMode.css");
}
