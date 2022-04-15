var adDiv;
var userAgent 			= navigator.userAgent.toLowerCase();
var mobileMode 			= false;
var isIE= false;

function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
		isIE=true;
		
		console.log('we are IE')
        
    }
    else  // If another browser, return 0
    {
       console.log('we are not IE')
    }

    return false;
}

window.onload= function(){

	function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

	// Ad visible, start ad/animation.
	initEB();

	function startAd() {
		 
		console.log("starting")
		adDiv = document.getElementById("ad");
		var introTimeline 		= new TimelineMax();
		// var currentDuration 	= introTimeline.duration(); //gets current duration
		var banner				= document.getElementById("banner");
		var fridge				= document.getElementById("frame1_fridge");
		var fridgeshadow		= document.getElementById("frame1_fridgeshadow");
		var text1a				= document.getElementById("frame1_text1a");
		var text1b				= document.getElementById("frame1_text1b");
		var bulb				= document.getElementById("frame2_bulb");
		var bulbshadow			= document.getElementById("frame2_bulbshadow");
		var bulbglow			= document.getElementById("frame2_bulbglow");
		var text2a				= document.getElementById("frame2_text2a");
		var text2b				= document.getElementById("frame2_text2b");
		var dollar1				= document.getElementById("frame3_dollar1");
		var dollar2				= document.getElementById("frame3_dollar2");
		var dollar3				= document.getElementById("frame3_dollar3");
		var furnace				= document.getElementById("frame3_furnace");
		var furnaceshadow		= document.getElementById("frame3_furnaceshadow");
		var text3a				= document.getElementById("frame3_text3a");
		var text3b				= document.getElementById("frame3_text3b");
		var text3c				= document.getElementById("frame3_text3c");
		var hp					= document.getElementById("frame4_hp");
		var hpshadow			= document.getElementById("frame4_hpshadow");
		var money				= document.getElementById("frame4_money");
		var text4a				= document.getElementById("frame4_text4a");
		var text4b				= document.getElementById("frame4_text4b");
		var text4bglow			= document.getElementById("frame4_text4bglow");
		var logo				= document.getElementById("frame4_logo");
		var cta					= document.getElementById("frame4_cta");
		var overButton			= document.getElementById("overButton");

		TweenLite.ticker.fps(24);
		TweenLite.defaultOverwrite = "none";

		/* JK-COMMENT - only activating the CLICK event, until the animation is finished */
		//addEventListeners();
		overButton.addEventListener("click", handleclickthrough);
		
		startAnimation();
		// introTimeline.duration(15); //adjusts the timeScale of myAnimation so that it fits into exactly 10 seconds on its parent timeline

		function switchIcon(){
			console.log('done');
			//icon.style.backgroundImage = "url('replay.svg')";
		}

		function startAnimation(){
			introTimeline.to(banner, 0.2, {opacity:1,ease: Power2.easeOut});
			introTimeline.from(fgrd1_box, 0.5, {y: -600, opacity:1, ease: Elastic.easeOut.config(0.8, 1)}, "-=0");
			introTimeline.from(frame1_animate, 0.9, {rotationX:30, rotationY:-100, x:320, y:-130, opacity:1, ease: Elastic.easeOut.config(0.6, 0.5)}, "-=0.4");	
			introTimeline.to(fridge, 0.5, {opacity:1, ease: Power2.easeOut});
			introTimeline.to(fridgeshadow, 1, {opacity:1, ease: Power2.easeOut},"-=1.3");
			introTimeline.from(text1a, 0.7, {x: 0, y:200, alpha:0, ease: Elastic.easeOut.config(0.8, 0.8)},"-=1.3");
			introTimeline.from(text1b, 0.7, {x: 0, y:200, alpha:0, ease: Elastic.easeOut.config(0.8, 0.8)},"-=1.2");
			introTimeline.fromTo(".fridgey", 0.3, {x:-1}, {x:1, repeat:4, ease:RoughEase.ease.config({strength:10, points:20, template:Linear.easeNone, randomize:false}) , clearProps:"x"}, "-=0.9");
			introTimeline.to(frame1_animate, 0.5, {rotationX:-30, rotationY:50,  x:-290, y:140, opacity:1, ease: Power2.easeIn},"+=1.2");
			introTimeline.to(text1b, 0.5, {opacity:0, y:200, ease: Power2.easeIn},"-=0.5");
			introTimeline.to(text1a, 0.5, {opacity:0, y:200, ease: Power2.easeIn},"-=0.45");

			//smoke
			introTimeline.to(frame1_smoke, 0.1, {opacity:1, ease: Power2.easeOut},"-=2.3");
			introTimeline.to(frame1_smoke, 2, {y:-70, ease: Power4.easeOut},"-=2.4");
			introTimeline.to(".smoke",0.4,{opacity: 1, repeat:0,x:-1000,ease:SteppedEase.config(5)},"-=2.3");
			introTimeline.to(frame1_smoke, 1, {opacity:0, y:-70, ease: Power4.easeOut},"-=2");
			

	 		//scene 2 - light bulb
			introTimeline.from(fgrd2_box, 0.5, {y: -600, opacity:1, ease: Elastic.easeOut.config(0.8, 1)}, "-=0.3");
			introTimeline.to(fgrd2_back, 0.3, {opacity:1, ease: Power2.easeOut},"-=0.4");
			introTimeline.from(frame2_animate, 0.9, {rotationX:30, rotationY:-100, x:320, y:-130, opacity:1, ease: Elastic.easeOut.config(0.6, 0.5)}, "-=0.4");	
			introTimeline.to(bulb, 0.5, {opacity:1, ease: Power2.easeOut});
			introTimeline.to(bulbshadow, 1, {opacity:0.3, ease: Power2.easeOut},"-=1.3");
			introTimeline.from(text2a, 0.7, {x: 0, y:200, alpha:0, ease: Elastic.easeOut.config(0.8, 0.8)},"-=1.3");
			introTimeline.from(text2b, 0.7, {x: 0, y:200, alpha:0, ease: Elastic.easeOut.config(0.8, 0.8)},"-=1.2");
			introTimeline.to(frame2_animate, 0.5, {rotationX:-30, rotationY:50,  x:-290, y:140, opacity:1, ease: Power2.easeIn},"+=1.2");
			introTimeline.to(text2b, 0.5, {opacity:0, y:200, ease: Power2.easeIn},"-=0.5");
			introTimeline.to(text2a, 0.5, {opacity:0, y:200, ease: Power2.easeIn},"-=0.45");

			//bulb glow
			introTimeline.to(bulbglow, 0.1, {opacity:1, ease: Power2.easeOut},"-=2.4");
			introTimeline.to(".glow",0.3,{opacity: 1, repeat:3, x:-768,ease:SteppedEase.config(3)},"-=2.3");

			//scene 3 - gas furnace
			introTimeline.from(fgrd3_box, 0.5, {y: -600, opacity:1, ease: Elastic.easeOut.config(0.8, 1)}, "-=0.1");
	 		introTimeline.to(fgrd3_back, 0.3, {opacity:1, ease: Power2.easeOut},"-=0.4");
	 		introTimeline.from(frame3_animate, 0.9, {rotationX:50, rotationY:-100, x:320, y:-130, opacity:1, ease: Elastic.easeOut.config(0.6, 0.5)}, "-=0.4");	
			introTimeline.to(furnace, 0.5, {opacity:1, ease: Power2.easeOut});
			introTimeline.to(furnaceshadow, 1, {opacity:0.3, ease: Power2.easeOut},"-=1.3");
			introTimeline.from(text3a, 0.7, {x: 0, y:200, alpha:0, ease: Elastic.easeOut.config(0.8, 0.8)},"-=1.3");
			introTimeline.from(text3b, 0.7, {x: 0, y:200, alpha:0, ease: Elastic.easeOut.config(0.8, 0.8)},"-=1.2");
			introTimeline.from(text3c, 0.7, {x: 0, y:200, alpha:0, ease: Elastic.easeOut.config(0.8, 0.8)},"-=1.1");
			introTimeline.to(frame3_animate, 0.5, {rotationX:-30, rotationY:50,  x:-230, y:140, opacity:1, ease: Power2.easeIn},"+=1.2");
			introTimeline.to(text3c, 0.5, {opacity:0, y:200, ease: Power2.easeIn},"-=0.5");
			introTimeline.to(text3b, 0.5, {opacity:0, y:200, ease: Power2.easeIn},"-=0.45");
			introTimeline.to(text3a, 0.5, {opacity:0, y:200, ease: Power2.easeIn},"-=0.4");
			
			// dollar animations
			introTimeline.to(frame3_dollars, 0.5, {opacity:1, ease: Power2.easeOut},"-=3");
			
			//dollar1
			introTimeline.from(dollar1, 1.5, {x: 0, y:400, alpha:1, ease: Power2.easeOut},"-=2.5");
			introTimeline.to(frame3_sparkleA, 0.3, {opacity:1, ease: Power2.easeOut},"-=2.1");
			introTimeline.to(".character1",0.3,{opacity: 1, repeat:0,x:-1455,ease:SteppedEase.config(5)},"-=2");
			introTimeline.from(dollar1, 0.5, {x: 0, y:400, alpha:0, opacity:0, ease: Power2.easeOut},"-=2");

			//dollar2
			introTimeline.from(dollar2, 1.8, {x: 0, y:400, alpha:1, ease: Power2.easeOut},"-=2.3");
			introTimeline.to(frame3_sparkleB, 0.3, {opacity:1, ease: Power2.easeOut},"-=1.9");
			introTimeline.to(".character2",0.3,{opacity: 1, repeat:0,x:-1455,ease:SteppedEase.config(5)},"-=1.8");
			introTimeline.from(dollar2, 0.5, {x: 0, y:400, alpha:0, opacity:0, ease: Power2.easeOut},"-=1.75");
			
			//dollar3
			introTimeline.from(dollar3, 1.8, {x: 0, y:400, alpha:1, ease: Power2.easeOut},"-=2");
			introTimeline.to(frame3_sparkleC, 0.3, {opacity:1, ease: Power2.easeOut},"-=1.7");
			introTimeline.to(".character3",0.3,{opacity: 1, repeat:0,x:-1455,ease:SteppedEase.config(5)},"-=1.6");
			introTimeline.from(dollar3, 0.5, {x: 0, y:400, alpha:0, opacity:0, ease: Power2.easeOut},"-=1.5");

			//scene 4 - heat pump
	 		introTimeline.from(frame4_animate, 0.9, {rotationX:50, rotationY:-100, x:325, y:-130, opacity:1, ease: Elastic.easeOut.config(0.6, 0.5)}, "-=0.1");	
			introTimeline.to(hp, 0.5, {opacity:1, ease: Power2.easeOut});
			introTimeline.to(hpshadow, 1, {opacity:0.3, ease: Power2.easeOut},"-=1.3");
			introTimeline.from(".star1", 0.7, {x:250, y:0, opacity:1, ease: Elastic.easeOut.config(0.6, 0.5)},"-=1");
			introTimeline.from(".star2", 0.7, {x:250, y:0, opacity:1, ease: Elastic.easeOut.config(0.6, 0.5)},"-=0.9");
			introTimeline.from(".star3", 0.7, {x:150, y:0, opacity:1, ease: Elastic.easeOut.config(0.6, 0.5)},"-=0.8");
			introTimeline.from(money, 0.7, {x:0, y:50, opacity:0, ease: Elastic.easeOut.config(0.6, 0.5)},"-=1.2");
			introTimeline.from(text4a, 0.7, {x: 0, y:200, alpha:0, ease: Elastic.easeOut.config(0.8, 0.8)},"-=1.3");
			introTimeline.from(text4b, 0.7, {x: 0, y:200, alpha:0, ease: Elastic.easeOut.config(0.8, 0.8)},"-=1.2");
			introTimeline.to(text4bglow, 0.5, {opacity:1, ease: Power2.easeOut},"-=1");
			introTimeline.to(text4bglow, 0.5, {opacity:0, ease: Power2.easeOut},"-=0.6");
			introTimeline.to(cta, 0.3, {opacity:1, scaleX: 1, scaleY: 1, ease: Back.easeOut.config(1.7)},"-=0.5");
			introTimeline.to(logo, 0.5, {opacity:1, ease: Power2.easeOut, onComplete:addEventListeners}, "-=0.3");
			
			//checks entire duration of the animation (view via inspect element in browser)
			console.log("duration is: " + introTimeline.duration());
			
			introTimeline.play();
			// introTimeline.seek(9);
		}
		
		function addEventListeners() {
		   /* JK-COMMENT - this is now added at the end of the animation */
		   overButton.addEventListener('mouseover', handleOver);
		   overButton.addEventListener('mouseout', handleOut); 
		}
		function handleOver(event){
			TweenMax.staggerTo(".star", 0.3, {x:0, y:-8, ease: Power2.easeOut,overwrite:true}, 0.1);
			TweenLite.to(text4bglow, 0.5, {opacity:0.5, ease: Power2.easeOut,overwrite:true});
		}
		function handleOut(event){
		 	TweenLite.to(text4bglow, 0.5, {opacity:0, ease: Power2.easeOut,overwrite:true});
		 	TweenMax.staggerTo(".star", 0.5, {x:0, y:0, ease: Power2.easeOut,overwrite:true}, 0.1);
		}
		
		function handleclickthrough(event){
			EB.clickthrough();
			console.log('EXIT');
		}

	}

};
