$(document).ready(function(){

	init();


});

function init(){
	$('canvas').hide();
	$('#navet').show();
	displayAnimations();

}

function displayAnimations(){
	$(".button").on("click", function(){
		var buttonClass = $(this).attr("class").replace("button ", "");
		if($(this).attr("data-active") == "active"){
			$(this).attr("data-active", "").css({"background-color" : "blue", 'border':"none", "color":"#FFF"});
			switch(buttonClass){
				case "pot":
					$("#potimarron").hide();
					break;
			
				case "champ":
					$("#champignons2").hide();
					break;
			
				case "carot":
					$("#carottes2").hide();
					break;
			
				case "from":
					$("#fromage").hide();
					break;
			
				case "radi":
					$("#radis").hide();
					break;
			
				case "sals":
					$("#salsifis").hide();
					break;
			
				case "chic":
					$("#chicoree").hide();
					break;
			
				case "chat":
					$("#chataignes").hide();
					break;
			
				case "leg":
					$("#legumes").hide();
					break;
				case "pai":
					$("#pain").hide();
					break;
				case "tof":
					$("#tofu").hide();
					break;
				case "nav":
					$("#navet").hide();
					break;
			}
		}
		else{
			$(this).attr("data-active", "active").css({"background-color" : "white", 'border':"1px solid blue", "color":"blue"});
			switch(buttonClass){
				case "pot":
					$("#potimarron").show();
					break;
			
				case "champ":
					$("#champignons2").show();
					break;
			
				case "carot":
					$("#carottes2").show();
					break;
			
				case "from":
					$("#fromage").show();
					break;
			
				case "radi":
					$("#radis").show();
					break;
			
				case "sals":
					$("#salsifis").show();
					break;
			
				case "chic":
					$("#chicoree").show();
					break;
			
				case "chat":
					$("#chataignes").show();
					break;
			
				case "leg":
					$("#legumes").show();
					break;
				case "pai":
					$("#pain").show();
					break;
				case "tof":
					$("#tofu").show();
					break;

				case "nav":
					$("#navet").show();
					break;
			}
		}
	});
}