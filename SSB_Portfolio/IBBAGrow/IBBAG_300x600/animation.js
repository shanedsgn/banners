
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl
//Scene 01
.to("#txt1_a", {duration: 0.65, left: -17, ease: "back.out(0.9)", opacity:1},"-=0")
.to("#txt1_b", {duration: 0.65, left: 23, ease: "back.out(0.9)", opacity:1},"-=0.5")
.to("#txt1_c", {duration: 0.65, left: 19, ease: "back.out(0.9)", opacity:1},"-=0.5")
.to("#txt1_d", {duration: 0.6, scale:0.5, ease: "back.out(0.9)", opacity:1},"-=0.1")

.to("#grow_02", {duration: 0.5, top:120, ease: "back.out(0.9)", opacity:1},"-=1.4")
.to("#grow_01", {duration: 0.4, top:146, ease: "back.out(0.9)", opacity:1},"-=1.1")

.to("#plant_01a", {duration: 0.4, top:86, ease: "back.out(0.9)", opacity:1},"-=1")
.to("#plant_01aa", {duration: 0.4, top:85, ease: "back.out(0.9)", opacity:1},"-=0.9")

.to("#plant_01b", {duration: 0.4, top:114, left:205, ease: "back.out(0.9)", opacity:1},"-=0.8")
.to("#plant_01bb", {duration: 0.4, top:107, left:210, ease: "back.out(0.9)", opacity:1},"-=0.7")

.to("#plant_01c", {duration: 0.4, top:114, left:190, ease: "back.out(0.9)", opacity:1},"-=0.6")
.to("#plant_01cc", {duration: 0.4, top:107, left:178, ease: "back.out(0.9)", opacity:1},"-=0.5")

.to("#text01_wrapper",{duration: 0.6, left: -300, ease:"sine.in", opacity:0, force3D:false},"+=1")
.to("#grow_wrapper",{duration: 0.6, left: 300, ease:"sine.in", opacity:0, force3D:false},"-=0.6")

//Scene 02
.to(".main-copy-2", {duration: 0.7, scale:0.5, ease: "back.out(0.8)", opacity:1, stagger: 0.2 },"-=0.5")
.to("#logo_symbol", {duration: 0.4, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=0.5")

//Scene 03
.to("#txt3", {duration: 0.6, ease: "back.out(0.8)", opacity:1},"-=0")
.to("#cta", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"+=0")
.to("#logo_main",{duration: 0.5, ease:"power3.out", opacity:1 },"-=0");

// tl.seek("seek", true);
// tl.seek(7);

console.log(tl.duration());