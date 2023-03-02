
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl
.to("#top_milestone",{duration: 0.7, top: -1, opacity:1, ease: "elastic.out(0.3, 0.7)"},"-=0.1")
.to("#gl_logo", {duration: 0.7, scale:0.5, opacity:1, force3D:false, ease: "elastic.out(0.9, 0.7)"},"-=0.5")
.to(".main-copy-2", {duration: 0.7, scale:0.5, opacity:1, stagger: 0.1, force3D:false, ease: "elastic.out(0.9, 0.7)"},"-=0.5")
.to("#cta",{duration: 0.7, left: 203, opacity:1, ease:"elastic.out(0.4, 0.7)"},"-=0.4")
.to(".money-drops", {duration: 1.7, top:250, opacity:1, stagger: 0.25, force3D:false, ease: "sine.inOut",repeat:2},"-=1.5")

.to("#lu_logo", {duration: 0.7, scale:0.5, opacity:1, force3D:false, ease: "elastic.out(0.9, 0.7)"},"-=2.7")
.to(".game-ui", {duration: 0.8, scale:0.5, opacity:1, stagger: 0.2, force3D:false, ease: "elastic.out(0.9, 0.7)"},"-=2.7")
.to(".main-copy-2", {duration: 0.4, opacity:0, ease: "sine.inOut"},"-=3")
.to(".main-copy-3", {duration: 0.7, scale:0.5, opacity:1, stagger: 0.1, force3D:false, ease: "elastic.out(0.9, 0.7)"},"-=2.7")
;

//checks entire duration of the animation (view via inspect element in browser)
console.log("duration is: " + tl.duration());

// // tl.seek("seek", true);
// tl.seek(4);

// console.log(tl.duration());