
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl
//Scene 01
.to("#txt1_a", {duration: 0.5, top:0, ease: "back.out(0.8)", opacity:1},"+=0")
.to("#txt1_b", {duration: 0.5, top:0, ease: "back.out(0.8)", opacity:1},"-=0.5")

.to(".puzzle-01", {duration: 0.5, scale:0.5, ease: "power3.out", opacity:1, stagger: 0.1, repeat:1, repeatDelay:0.8, yoyo:true},"+=0.7")
.to(".puzzle-02", {duration: 0.5, scale:0.5, ease: "power3.out", opacity:1, stagger: 0.1, repeat:1, repeatDelay:0.8, yoyo:true},"-=2")
.to(".puzzle-03", {duration: 0.5, scale:0.5, ease: "power3.out", opacity:1, stagger: 0.1, repeat:1, repeatDelay:0.8, yoyo:true},"-=2")
.to("#text01_wrapper",{duration: 0.4, ease:"power3.in", opacity:0},"-=2.2")

//Scene 02
.to("#txt2_a", {duration: 0.5, top:1, ease: "back.out(0.8)", opacity:1},"-=1.6")
.to("#txt2_b", {duration: 0.5, top:2, ease: "back.out(0.8)", opacity:1},"-=1.6")
.to("#blue",{duration: 0.4, ease:"power3.out", opacity:1},"-=0.3")
.to("#text02_wrapper",{duration: 0.5, left:-300, ease:"power3.in", opacity:1},"-=0")

//Scene 03
.to("#photo_wrapper",{duration: 0.4, ease:"power3.out", opacity:1},"-=0.3")
.to("#photo",{duration: 7, scale:0.55, ease:"Sine.easeOut", opacity:1, force3D:false},"-=0.3")

.to(".puzzle-01", {duration: 0.5, scale:0.5, ease: "power3.out", opacity:1, stagger: 0.1, repeat:1, repeatDelay:0.8, yoyo:true},"-=4.5")
.to(".puzzle-02", {duration: 0.5, scale:0.5, ease: "power3.out", opacity:1, stagger: 0.1, repeat:1, repeatDelay:0.8, yoyo:true},"-=4.3")
.to(".puzzle-03", {duration: 0.5, scale:0.5, ease: "power3.out", opacity:1, stagger: 0.1, repeat:1, repeatDelay:0.8, yoyo:true},"-=4.3")

.to("#photo_wrapper",{duration: 0.4, ease:"power3.out", opacity:0},"-=4.1")

//Scene 04
.to("#txt3_a", {duration: 0.5, scale: 0.5, ease: "back.out(0.8)", opacity:1},"-=3.6")
.to("#txt3_b", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1},"-=3.1")
.to("#logo_symbol", {duration: 0.4, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=3.7")
.to("#cta", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=1.6")
.to("#logo_main",{duration: 0.5, ease:"power3.out", opacity:1 },"-=1.4");

// // tl.seek("seek", true);
// tl.seek(4);

console.log(tl.duration());