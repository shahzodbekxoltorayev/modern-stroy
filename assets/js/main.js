$(document).ready(function() {
	$(document).scroll(function(event) {
		var scroll=$(this).scrollTop();
		if($(this).scrollTop()>100){
			$('nav').addClass('fixed');
		}
		else{
			$('nav').removeClass('fixed');
		}
	});

	AOS.init();

});


jQuery("#carousel").owlCarousel({
	autoplay: true,
	lazyLoad: true,
	loop: true,
	margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
  	0: {
  		items: 1
  	},

  	600: {
  		items: 2
  	},

  	1024: {
  		items: 3
  	},

  	1366: {
  		items: 3
  	}
  }
});



function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight){
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		} 
	});
}
