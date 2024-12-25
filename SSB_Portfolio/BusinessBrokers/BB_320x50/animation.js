
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl
//Scene 01
.to("#txt1_a", {duration: 0.5, left:-30, ease: "back.out(0.8)", opacity:1},"+=0")
.to("#txt1_b", {duration: 0.5, left:-57, ease: "back.out(0.8)", opacity:1},"-=0.5")

.to(".puzzle-01", {duration: 0.5, scale:0.5, ease: "power3.out", opacity:1, stagger: 0.1},"+=1")
.to(".puzzle-02", {duration: 0.5, scale:0.5, ease: "power3.out", opacity:1, stagger: 0.1},"-=0.4")
.to(".puzzle-03", {duration: 0.5, scale:0.5, ease: "power3.out", opacity:1, stagger: 0.1},"-=0.4")
.to("#text01_wrapper",{duration: 0.5, ease:"power3.in", opacity:0},"-=1")

//Scene 02
.to("#txt2_a", {duration: 0.5, left:-47, ease: "back.out(0.8)", opacity:1},"-=0.4")
.to("#txt2_b", {duration: 0.5, left:-82, ease: "back.out(0.8)", opacity:1},"-=0.5")

//Scene 03
.to(".puzzle-04", {duration: 0.5, scale:0.5, ease: "power3.out", opacity:1, stagger: 0.1},"+=1.2")
.to(".puzzle-05", {duration: 0.5, scale:0.5, ease: "power3.out", opacity:1, stagger: 0.1},"-=0.5")
.to(".puzzle-06", {duration: 0.5, scale:0.5, ease: "power3.out", opacity:1, stagger: 0.1},"-=0.5")

//Scene 04
.to("#txt3_a", {duration: 0.7, top:0, ease: "back.out(0.8)", opacity:1},"-=0.5")
.to("#txt3_b", {duration: 0.7, top:1, ease: "back.out(0.8)", opacity:1},"-=0.7")
.to("#cta", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=0")
.to("#logo_main",{duration: 0.5, ease:"power3.out", opacity:1 },"-=0");

// // tl.seek("seek", true);
// tl.seek(3);

console.log(tl.duration());