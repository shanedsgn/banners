
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl
//Scene 01 - Intro
.to("#pin_01", {duration: 0.55, top:57, ease: "back.out(0.8)", opacity:1},"-=0")
.to("#navy", {duration: 0.55, top:195, ease: "back.out(0.5)", opacity:1},"-=0.5")

//Scene 02A - Pins (Set 01)
.to("#pin_02", {duration: 0.55, top:138, ease: "back.out(0.8)", opacity:1},"+=0.2")
.to("#pin_03", {duration: 0.55, top:27, ease: "back.out(0.8)", opacity:1},"-=0.4")
.to("#pin_04", {duration: 0.55, top:139, ease: "back.out(0.8)", opacity:1},"-=0.4")
.to("#pin_05", {duration: 0.55, top:35, ease: "back.out(0.8)", opacity:1},"-=0.4")
.to("#pin_06", {duration: 0.55, top:105, ease: "back.out(0.8)", opacity:1},"-=0.4")
.to("#pin_07", {duration: 0.55, top:85, ease: "back.out(0.8)", opacity:1},"-=0.4")
.to("#pin_08", {duration: 0.55, top:131, ease: "back.out(0.8)", opacity:1},"-=0.4")
.to("#pin_09", {duration: 0.55, top:5, ease: "back.out(0.8)", opacity:1},"-=0.4")
.to("#pin_10", {duration: 0.55, top:103, ease: "back.out(0.8)", opacity:1},"-=0.4")

//Scene 02B - Pins (Set 02)
.to("#pin_11", {duration: 0.55, top:3, ease: "back.out(0.8)", opacity:1},"-=0.4")
.to("#pin_12", {duration: 0.55, top:83, ease: "back.out(0.8)", opacity:1},"-=0.4")
.to("#pin_13", {duration: 0.55, top:50, ease: "back.out(0.8)", opacity:1},"-=0.4")
.to("#pin_14", {duration: 0.55, top:134, ease: "back.out(0.8)", opacity:1},"-=0.4")
.to("#pin_15", {duration: 0.55, top:30, ease: "back.out(0.8)", opacity:1},"-=0.4")
.to("#pin_16", {duration: 0.55, top:88, ease: "back.out(0.8)", opacity:1},"-=0.4")
.to("#pin_17", {duration: 0.55, top:31, ease: "back.out(0.8)", opacity:1},"-=0.4")

//Scene 02 - Text
.to("#txt1_a", {duration: 0.55, scale:0.5, ease: "back.out(1)", opacity:1},"-=3.2")
.to("#txt1_a", {duration: 0.4, ease: "power3.out", opacity:0},"-=2.3")

.to("#txt1_b", {duration: 0.55, scale:0.5, ease: "back.out(1)", opacity:1},"-=2.2")
.to("#txt1_b", {duration: 0.4, ease: "power3.out", opacity:0},"-=1")

.to("#txt1_c", {duration: 0.55, scale:0.5, ease: "back.out(1)", opacity:1},"-=0.9")
.to("#txt1_c", {duration: 0.4, ease: "power3.out", opacity:0},"+=0.1")

//Scene 03 - Finale
.to("#pins", {duration: 0.4, ease: "power3.out", opacity:0},"-=0.3")
.to("#yellow", {duration: 0.4, ease: "power3.out", opacity:1},"-=0.4")

.to("#logo_symbol", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=0.2")
.to(".main-copy-1", {duration: 0.7, scale:0.5, ease: "back.out(0.8)", opacity:1, stagger: 0.1 },"-=0.2")
.to("#logo_main",{duration: 0.5, ease:"power3.out", opacity:1 },"-=0.3")
.to("#cta", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"+=0");

// tl.seek("seek", true);
// tl.seek(1);

console.log(tl.duration());