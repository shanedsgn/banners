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
		var delay				="+=.08";
	
		var banner				= document.getElementById("banner");
		var swimmer				= document.getElementById("frame1_swimmer");
		var text1a				= document.getElementById("frame1_text1");
		var text1b				= document.getElementById("frame1_text2");
		var gradient			= document.getElementById("frame2_gradient");
		var h2h					= document.getElementById("frame3_here2help");
		var h2hglow				= document.getElementById("frame3_here2helpglow");
		var product				= document.getElementById("frame5_product");
		var text2a				= document.getElementById("frame4_text2a");
		var text2b				= document.getElementById("frame4_text2b");
		var text2c				= document.getElementById("frame4_text2c");
		var text2d				= document.getElementById("frame4_text2d");
		var cta					= document.getElementById("frame5_cta");
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
			introTimeline.to(swimmer, 4.5, {scaleX: 1.1, scaleY: 1.1, rotation:0.001, alpha:1, ease: Power2.easeOut, force3D:false});
	 		introTimeline.from(text1a, 0.3, {scale:5.50, rotation: -5, x: 0, y:0, alpha:0, ease: Power2.easeOut},"-=4.3");
	 		introTimeline.from(text1b, 0.3, {scale:5.50, rotation: -5, x: 50, y:0, alpha:0, ease: Power2.easeOut},"-=3.8");

	 		//gradient fades in
	 		introTimeline.to(gradient, 0.5, {opacity:1,ease: Power2.easeOut},"-=1.5");
	 		
	 		//hth logo animates in and shifts up
	 		introTimeline.staggerTo(".logo", 0.5, {y:0, rotation: 360, opacity:1, scale: 1, ease: Power3.easeOut}, 0.1, "-=1");
			introTimeline.staggerTo(".bubbles", 0.6, {y:0, opacity:1, scale: 1, ease: Elastic.easeOut.config(1, 0.3), transformOrigin:'20% 50%'}, 0.1, "-=0.8");
			introTimeline.to(h2h, 0.5, {y:68, opacity:1,ease: Back.easeOut.config(1.7)},"-=0.2");
			introTimeline.to(h2hglow, 0.5, {opacity:1},"-=0");
			introTimeline.to(h2hglow, 0.5, {opacity:0},"-=0");
			introTimeline.to(frame_3, 1.5, {y:-121, alpha: 1, ease: Elastic.easeOut.config(0.8, 0.8)},"+=0.5");

			//takeaway copy
			introTimeline.to(text2a, 0.3, {x:100, y:-20, opacity:1, ease: Power2.easeOut},"-=0.9");
			introTimeline.to(text2b, 0.3, {x:100, y:-20, opacity:1, ease: Power2.easeOut},"-=0.8");
			introTimeline.to(text2c, 0.3, {x:100, y:-20, opacity:1, ease: Power2.easeOut},"-=0.7");
			introTimeline.to(text2d, 0.3, {x:100, y:-20, opacity:1, ease: Power2.easeOut},"-=0.6");

	 		//product image
	 		introTimeline.from(product, 0.7, {rotation: 150, x:250, y:100, alpha: 0, ease: Back.easeInOut.config(1.3)},"-=1.5");
	 		
	 		//CTA
	 		introTimeline.from(cta, 1, {x:0, y:200, alpha: 0, ease: Elastic.easeOut.config(0.8, 0.8), onComplete:addEventListeners},"-=0.2");	
			
			//checks entire duration of the animation (view via inspect element in browser)
			console.log("duration is: " + introTimeline.duration());
			
			introTimeline.play();
			// introTimeline.seek(6);
		}
		
		function addEventListeners() {
		   /* JK-COMMENT - this is now added at the end of the animation */
		   overButton.addEventListener('mouseover', handleOver);
		   overButton.addEventListener('mouseout', handleOut); 
		}
		function handleOver(event){
			TweenLite.to(h2hglow, 0.5, {opacity:0.7, ease: Power2.easeOut,overwrite:true});
			TweenLite.to(product, 0.5, {x:0, y:-25, ease: Power2.easeOut,overwrite:true});
		}
		function handleOut(event){
			TweenLite.to(h2hglow, 0.5, {opacity:0, ease: Power2.easeOut,overwrite:true});
		 	TweenLite.to(product, 0.5, {x:0, y:-2, ease: Power2.easeOut,overwrite:true});
		}
		
		function handleclickthrough(event){
			EB.clickthrough();
			console.log('EXIT');
		}

	}

};
