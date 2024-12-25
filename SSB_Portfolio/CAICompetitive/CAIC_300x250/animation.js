
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl
//Scene 01
// .to("#bank", {duration: 0.7, left:5, ease: "back.out(0.3)", opacity:1, yoyo:true, repeat:1, repeatDelay:2.4, force3D:false},"-=0")
.to("#txt1_a", {duration: 0.55, scale:0.5, ease: "back.out(1)", opacity:1},"-=0")
.to("#txt1_b", {duration: 0.55, top:86, ease: "back.out(1)", opacity:1},"-=0")
.to("#txt1_c", {duration: 0.55, top:112, ease: "back.out(1)", opacity:1},"-=0.5")
.to("#text01_wrapper",{duration: 0.5, left: 300, ease:"sine.in", opacity:0, force3D:false},"+=1")

//Scene 02
.to("#txt2_a", {duration: 0.55, scale:0.5, ease: "back.out(1)", opacity:1},"-=0.3")
.to("#txt2_b", {duration: 0.55, top:86, ease: "back.out(1)", opacity:1},"-=0")
.to("#txt2_c", {duration: 0.55, top:112, ease: "back.out(1)", opacity:1},"-=0.5")
.to("#txt2_d", {duration: 0.55, scale:0.5, ease: "back.out(1)", opacity:1},"-=0")
.to("#text02_wrapper",{duration: 0.5, left: 300, ease:"sine.in", opacity:0, force3D:false},"+=1")
.to("#bank, #blue", {duration: 0.55, ease: "back.out(1)", opacity:0},"-=0.3")

//Scene 03
.to("#logo_symbol", {duration: 0.4, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=0.5")
.to("#txt3", {duration: 0.6, scale:0.5, ease: "back.out(0.8)", opacity:1},"-=0.4")
.to("#cta", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"+=0")
.to("#logo_main",{duration: 0.5, ease:"power3.out", opacity:1 },"-=0");

// tl.seek("seek", true);
// tl.seek(5);

console.log(tl.duration());