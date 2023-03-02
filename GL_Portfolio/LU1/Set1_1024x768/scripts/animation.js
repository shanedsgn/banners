
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl
.to("#ground",{duration: 0.6, top: 598, opacity:1, ease:"sine.inOut"},"-=0.3")
.to("#phone",{duration: 0.8, top: 52, opacity:1, force3D:false, ease: "elastic.out(0.5, 0.7)"},"-=0.16")
.to("#apple",{duration: 0.6, top: 540, opacity:1, ease: "elastic.out(0.5, 0.7)"},"-=0.6")
.to("#phone",{duration: 1, top: 0, opacity:1, ease: "sine.inOut", repeat:7, yoyo:true},"-=0")
.to("#phone_screen1",{duration: 0.3, opacity:0, ease:"sine.inOut"},"-=5.3")
.to("#phone_screen2",{duration: 0.3, opacity:1, ease:"sine.inOut"},"-=5.3")

.to("#gl_logo", {duration: 0.7, scale:1, opacity:1, force3D:false, ease: "elastic.out(0.9, 0.7)"},"-=8.6")
.to(".copy-build-1", {duration: 0.7, scale:1, opacity:1, stagger: 0.1, force3D:false, ease: "elastic.out(0.9, 0.7)"},"-=8.4")
.to("#cta",{duration: 0.7, top: 475, opacity:1, ease:"elastic.out(0.4, 0.7)"},"-=7.8")
.to(".copy-build-1",{duration: 0.3, opacity:0, ease:"sine.inOut"},"-=5.4")

.to("#gl_logo", {duration: 0.8, top: 51, left: 80, scale:0.75, opacity:1, force3D:false, ease: "elastic.out(0.5, 0.7)"},"-=5.2")
.to("#lu_logo", {duration: 0.7, scale:1, opacity:1, force3D:false, ease: "elastic.out(0.9, 0.7)"},"-=5.1")
.to(".copy-build-2", {duration: 0.7, scale:1, opacity:1, stagger: 0.1, force3D:false, ease: "elastic.out(0.9, 0.7)"},"-=5")

.to(".money-drops", {duration: 1.6, top:800, opacity:1, stagger: 0.25, force3D:false, ease: "sine.inOut",repeat:2},"-=7.5")
;

//checks entire duration of the animation (view via inspect element in browser)
console.log("duration is: " + tl.duration());

// tl.seek("seek", true);
// tl.seek(4);

// console.log(tl.duration());