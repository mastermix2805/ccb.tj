window.addEventListener('DOMContentLoaded', ()=>{
	'use strict';

	//header icon
	$(document).ready(function(){
		$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
			$(this).toggleClass('open');
		});
	});
	
	// range
	let fillColor = "#CC1818",
	    emptyColor = "transparent";
	let ranges =  document.querySelectorAll('.input-range--custom');
	let sliderText =  document.querySelectorAll('.sliderText');
	for(let i = 0; i<ranges.length; i++){
		ranges[i].addEventListener('load', function() {
	      let percent = 100*(this.value-this.min)/(this.max-this.min)+'%';
	      this.style.backgroundImage = `linear-gradient( to right, ${fillColor}, ${fillColor} ${percent}, ${emptyColor} ${percent})`;
	    });
	    sliderText[i].innerHTML = 25000;
	    ranges[i].addEventListener('input', function() {
	      let percent = 100*(this.value-this.min)/(this.max-this.min)+'%';
	      this.style.backgroundImage = `linear-gradient( to right, ${fillColor}, ${fillColor} ${percent}, ${emptyColor} ${percent})`;
	      sliderText[i].innerHTML = ranges[i].value
	    });
	}
	
	//baner
	
	
	//news slider
	

})


