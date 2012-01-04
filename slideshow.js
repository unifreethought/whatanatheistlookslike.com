/** 
 * What An Atheist Looks Like.com
 * By, UNI Freethinkers and Inquirers
 * Author: Adam Shannon
 */
 
(function () {

	var 
		WAIT_TIME = 7.5 * 1000,
		IMG_MIN = 0,
		interval,
		slideshow = document.querySelector("#slideshow"),
		slideshow_container = document.querySelector("#slideshow_container"),
		base_href = 'pictures/';

	function rand() {
		return +(((Math.random()*IMG_MAX-1)/1.0).toString().split('.')[0])+1;
	}
	
	function change_image() {
		slideshow.src = base_href + rand() + '.jpg';
	}
	
	function set_new_interval() {
		change_image();
		interval = setInterval(function () {
			change_image();
		}, WAIT_TIME);
	}
		
	// Show an image on load and
	// then move through them.
	change_image();
	set_new_interval();
	
})();
