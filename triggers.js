r_slider = document.getElementById("r_slider");
g_slider = document.getElementById("g_slider");
b_slider = document.getElementById("b_slider");

info_button = document.getElementById("info");
save_button = document.getElementById("save");

function triggers() {
//Changes the background color, when the sliders are moved
	r_slider.addEventListener("mousemove", changeColor);
	g_slider.addEventListener("mousemove", changeColor);
	b_slider.addEventListener("mousemove", changeColor);
	
	//Implementation for mobile devices
	r_slider.addEventListener("touchmove", changeColor);
	g_slider.addEventListener("touchmove", changeColor);
	b_slider.addEventListener("touchmove", changeColor);

//Saves the recent color, when the sliders are moved
	r_slider.addEventListener("mousemove", lastColor);
	g_slider.addEventListener("mousemove", lastColor);
	b_slider.addEventListener("mousemove", lastColor);
	
	//Implementation for mobile devices
	r_slider.addEventListener("touchmove", lastColor);
	g_slider.addEventListener("touchmove", lastColor);
	b_slider.addEventListener("touchmove", lastColor);
	
//Saves the chosen color, when the button is clicked
	info_button.addEventListener("click", infoColor);
	
//Saves the chosen color, when the button is clicked
	save_button.addEventListener("click", saveColor);
}