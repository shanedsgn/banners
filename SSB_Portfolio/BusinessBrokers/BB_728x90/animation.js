
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl
//Scene 01
.to("#txt1_a", {duration: 0.5, left:-62, ease: "back.out(0.8)", opacity:1},"+=0")
.to("#txt1_b", {duration: 0.5, left:-115, ease: "back.out(0.8)", opacity:1},"-=0.5")

.to(".puzzle-01", {duration: 0.5, scale:0.5, ease: "power3.out", opacity:1, stagger: 0.1},"+=1")
.to(".puzzle-02", {duration: 0.5, scale:0.5, ease: "power3.out", opacity:1, stagger: 0.1},"-=0.4")
.to(".puzzle-03", {duration: 0.5, scale:0.5, ease: "power3.out", opacity:1, stagger: 0.1},"-=0.4")
.to("#text01_wrapper",{duration: 0.5, left: 200, ease:"power3.in", opacity:0},"-=1.2")

//Scene 02
.to("#txt2_a", {duration: 0.5, top:-10, ease: "back.out(0.8)", opacity:1},"-=0.5")
.to("#txt2_b", {duration: 0.5, top:-2, ease: "back.out(0.8)", opacity:1},"-=0.5")

.to("#photo_wrapper",{duration: 0.5, left:0, ease:"power3.out", opacity:1},"-=0.7")
.to("#photo",{duration: 7, scale:0.55, ease:"Sine.easeOut", opacity:1, force3D:false},"-=0.7")

//Scene 03
.to(".puzzle-04", {duration: 0.5, scale:0.5, ease: "power3.out", opacity:1, stagger: 0.1},"-=4.3")
.to(".puzzle-05", {duration: 0.5, scale:0.5, ease: "power3.out", opacity:1, stagger: 0.1},"-=4.1")
.to(".puzzle-06", {duration: 0.5, scale:0.5, ease: "power3.out", opacity:1, stagger: 0.1},"-=4.1")

//Scene 04
.to("#txt3_a", {duration: 0.5, left:-111, ease: "back.out(0.8)", opacity:1},"-=3.9")
.to("#txt3_b", {duration: 0.5, left:-125, ease: "back.out(0.8)", opacity:1},"-=3.9")

.to("#cta", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=3.3")
.to("#logo_main",{duration: 0.5, ease:"power3.out", opacity:1 },"-=2.8");

// // tl.seek("seek", true);
// tl.seek(5);

console.log(tl.duration());