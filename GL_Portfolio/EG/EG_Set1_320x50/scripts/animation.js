
var tl = gsap.timeline({delay:0.3, repeat: 2});
var repeat = tl.repeatDelay(); 

gsap.ticker.fps(24);

tl
.to("#gl_logo", {duration: 0.7, scale:0.5, opacity:1, force3D:false, ease: "elastic.out(0.9, 0.7)"},"-=0")

.to("#child",{duration: 0.6, left: 0, opacity:1, ease:"power4.out"},"-=0.5")
.to("#card_shell", {duration: 0.7, scale:0.5, opacity:1, stagger: 0.1, force3D:false, ease: "elastic.out(0.9, 0.7)"},"-=0.1")
.to("#card_overlay",{duration: 0.1, opacity:1, ease:"sine.inOut"},"-=0.6")

.to(".copy-build-1", {duration: 0.7, left:82, opacity:1, stagger: 0.1, ease:"elastic.out(0.4, 0.7)"},"-=0.9")

.to("#milestone1", {duration: 0.7, scale:0.5, opacity:1, stagger: 0.1, force3D:false, ease: "elastic.out(0.9, 0.7)"},"-=0.5")
.to("#milestone2", {duration: 0.4, top:20, left: 273, opacity:1, force3D:false, rotation: "12", ease: "back.out(1)"},"-=0.5")

.to("#cta",{duration: 0.7, top: 24, opacity:1, ease:"elastic.out(0.4, 0.7)"},"-=0")
;

tl.repeatDelay(2); 

//checks entire duration of the animation (view via inspect element in browser)
console.log("duration is: " + tl.duration());

// tl.seek("seek", true);
// tl.seek(1);
