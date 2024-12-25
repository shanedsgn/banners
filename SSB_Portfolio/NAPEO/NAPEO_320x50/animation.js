
var tl = gsap.timeline({delay:0.1});

gsap.ticker.fps(24);

tl
//Scene 01
.to("#txt1", {duration: 3.5, left:-450, ease: "none", opacity:1},"-=0")
.to("#txt2_a", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1},"-=0.2")
.to("#txt2_b", {duration: 0.5, left:-67, ease: "back.out(0.8)", opacity:1},"-=0.2")
.to("#txt2_a, #txt2_b", {duration: 0.6, ease: "sine.out", opacity:0},"+=0.6")

//Scene 02
.to("#txt3_a", {duration: 0.8, top:4, ease: "back.out(0.8)", opacity:1},"-=0.6")
.to("#txt3_b", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1},"-=0.2")
.to("#txt3_a, #txt3_b", {duration: 0.6, ease: "sine.out", opacity:0},"+=0.6")

//Scene 03
.to("#txt4", {duration: 0.6, ease: "sine.out", opacity:1},"-=0.3")
.to("#cta", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=0.3")
.to("#logo_main",{duration: 0.5, ease:"power3.out", opacity:1 },"-=0");

// tl.seek("seek", true);
// tl.seek(3);

console.log(tl.duration());