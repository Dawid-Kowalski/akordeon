'use strict'; 

let acordionVanilla = document.getElementById("accordion-vanillajs");
let headersVanilla = acordionVanilla.querySelectorAll("h3");

for(let i=0; i<headersVanilla.length; i++) {
	headersVanilla[i].addEventListener("click", function() {
		removeAllAciveClass();
		this.classList.add("active");
	});
}

function removeAllAciveClass() {
	for (let i=0; i<headersVanilla.length; i++) {
		headersVanilla[i].classList.remove("active");
	}
}

$(document).ready(function(){

	$(".accordion-jquery-div:first").show();

    $(".accordion-jquery-h3").click(function(){
    	$(this).siblings(".accordion-jquery-div").hide();
    	$(this).next().toggle("blind",500);
    });

});

