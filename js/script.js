'use strict'; 

let acordionVanilla = document.getElementById("accordion-vanillajs");
let headers = acordionVanilla.querySelectorAll("h3");

for(let i=0; i<headers.length; i++) {
	headers[i].addEventListener("click", function() {
		removeAllAciveClass();
		this.classList.add("active");
	});
}

function removeAllAciveClass() {
	for (let i=0; i<headers.length; i++) {
		headers[i].classList.remove("active");
	}
}