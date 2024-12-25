
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl
//Scene 01
.to("#txt1_a", {duration: 0.6, top:7, ease: "back.out(0.8)", opacity:1},"-=0")
.to("#txt1_b", {duration: 0.6, top:13, ease: "back.out(0.8)", opacity:1},"-=0.5")
.to("#txt1_c", {duration: 0.6, top:9, ease: "back.out(0.8)", opacity:1},"-=0.5")

.to("#cb_circle", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1},"-=0.3")
.to("#cb_check_01", {duration: 0.4, scale:0.9, ease: "back.out(1)", opacity:1},"-=0.2")

.to("#text01_wrapper",{duration: 0.6, top: 150, ease:"sine.in", opacity:0, force3D:false},"+=1")
.to("#cb_wrapper",{duration: 0.5, top: -150, ease:"sine.in", opacity:0, force3D:false},"-=0.6")

//Scene 02
.to("#txt2_a", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1},"-=0.5")
.to("#txt2_b", {duration: 0.6, top:13, ease: "back.out(0.8)", opacity:1},"-=0.5")
.to("#txt2_c", {duration: 0.6, top:13, ease: "back.out(0.8)", opacity:1},"-=0.5")
.to("#txt2_d", {duration: 0.6, top:12, ease: "back.out(0.8)", opacity:1},"-=0.5")

.to("#text02_wrapper",{duration: 0.6, top:100, ease:"sine.inOut", opacity:0, force3D:false},"+=1.5")

//Scene 03
.to("#txt3", {duration: 0.6, ease: "sine.out", opacity:1},"-=0.4")
.to("#cta", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=0.3")
.to("#logo_main",{duration: 0.5, ease:"power3.out", opacity:1 },"-=0");

// tl.seek("seek", true);
// tl.seek(4);

console.log(tl.duration());