//Sliders
r_slider = document.getElementById("r_slider");
g_slider = document.getElementById("g_slider");
b_slider = document.getElementById("b_slider");

//Content container
content = document.getElementById("content");
//Infobox
info_box = document.getElementById("infobox");
headline = document.getElementById("headline");
color_code = document.getElementById("colorcode");

//Recent color
Rgb = localStorage.Rgb;
rGb = localStorage.rGb;
rgB = localStorage.rgB;


if(typeof (localStorage.sRgb) == "undefined" || localStorage.sRgb.length == 0) {
	//If the localstorage are not yet set, create empty arrays
	saved_Rgb = new Array();
	saved_rGb = new Array();
	saved_rgB = new Array();
	//Write the colors back to the localstorage
	localStorage.setItem("sRgb", JSON.stringify(saved_Rgb));
	localStorage.setItem("srGb", JSON.stringify(saved_rGb));
	localStorage.setItem("srgB", JSON.stringify(saved_rgB));
} else {
	//Load saved colors from localstorage
	saved_Rgb = JSON.parse(localStorage.getItem("sRgb"));
	saved_rGb = JSON.parse(localStorage.getItem("srGb"));
	saved_rgB = JSON.parse(localStorage.getItem("srgB"));

}

//Get the length of the current array
var saved_position = saved_Rgb.length;


function changeColor(color) {
	//Changes the background-color, when the sliders are moved
	document.body.style.background = "rgb("+r_slider.value+","+g_slider.value+","+b_slider.value+")";
}

function lastColor() {
	//Saves the current chosen color to the localstorage
	localStorage.Rgb = r_slider.value;
	localStorage.rGb = g_slider.value;
	localStorage.rgB = b_slider.value;	
}

function loadColors() {
	//Sets the last color to grey, if the localstorage items are empty
	if (typeof (Rgb) == "undefined" || Rgb == "NaN") {
		Rgb = 112;
	}
	
	if (typeof (rGb) == "undefined" || rGb == "NaN") {
		rGb = 112;
	}
	
	if (typeof (rgB) == "undefined" || rgB == "NaN") {
		rgB = 112;
	}

	//Sets the background-color to the last chosen color
	document.body.style.background = "rgb("+Rgb+","+rGb+","+rgB+")";
	
}

function loadSliders() {
	//Sets the slider values to the last chosen color codes
	r_slider.value = Rgb;
	g_slider.value = rGb;
	b_slider.value = rgB;
}

function infoColor() {
	//Shows the current chosen color code
	headline.style.borderColor = "rgb("+r_slider.value+","+g_slider.value+","+b_slider.value+")";
	colorcode.innerHTML = r_slider.value+","+g_slider.value+","+b_slider.value;
}

function saveColor() {
	//Update the length of the current array
	var saved_position = saved_Rgb.length;
	//Attach the new color to the array
	saved_Rgb[saved_position] =	r_slider.value;
	saved_rGb[saved_position] =	g_slider.value;
	saved_rgB[saved_position] =	b_slider.value;
	//Write the colors back to the localstorage
	localStorage.setItem("sRgb", JSON.stringify(saved_Rgb));
	localStorage.setItem("srGb", JSON.stringify(saved_rGb));
	localStorage.setItem("srgB", JSON.stringify(saved_rgB));
	//Tell user, that the color is saved
	alert("Color saved");
}

function savedColors() {
	var color_boxes = "";
	for(var i=0;i<saved_position;i++){
		color_boxes = color_boxes+"<span class='colorbox' style='background-color: rgb("+saved_Rgb[i]+","+saved_rGb[i]+","+saved_rgB[i]+");'></span>";
	}
	content.innerHTML = color_boxes;
}


