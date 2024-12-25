
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl
//Scene 01
.to("#cb_01", {duration: 0.6, top:20, ease: "back.out(0.8)", opacity:1},"-=0")
.to("#cb_02", {duration: 0.6, top:43, ease: "back.out(0.8)", opacity:1},"-=0.5")

.to("#cb_line_01", {duration: 0.8, left:-20, ease: "back.out(0.8)", opacity:1},"-=0.5")
.to("#cb_check_01", {duration: 0.4, scale:0.5, ease: "back.out(1.5)", opacity:1},"-=0.6")

.to("#cb_line_02", {duration: 0.8, left:-20, ease: "back.out(0.8)", opacity:1},"-=0.5")
.to("#cb_check_02", {duration: 0.4, scale:0.5, ease: "back.out(1.5)", opacity:1},"-=0.6")

.to("#cb_line_03", {duration: 0.8, left:-20, ease: "back.out(0.8)", opacity:1},"-=0.5")
.to("#cb_check_03", {duration: 0.4, scale:0.5, ease: "back.out(1.5)", opacity:1},"-=0.6")

.to("#cb_line_04", {duration: 0.8, left:-20, ease: "back.out(0.8)", opacity:1},"-=0.5")
.to("#cb_check_04", {duration: 0.4, scale:0.5, ease: "back.out(1.5)", opacity:1},"-=0.6")

.to(".main-copy-1", {duration: 0.8, scale:0.5, ease: "back.out(0.8)", opacity:1, stagger: 0.1 },"-=1.2")

.to("#cb_check_02, #cb_check_03, #cb_check_04, #cb_line_01, #cb_line_02, #cb_line_03, #cb_line_04", {duration: 0.3, ease: "sine.out", opacity:0},"+=0.2")
.to("#cb_check_01", {duration: 0.3, left:66, top:122, scale:0.9, ease: "back.out(1)", opacity:1},"-=0.2")
.to("#cb_circle", {duration: 0.4, scale:0.5, ease: "back.out(0.8)", opacity:1},"-=0.3")

.to("#text01_wrapper",{duration: 0.6, left: 300, ease:"sine.in", opacity:0, force3D:false},"+=0.3")
.to("#cb_wrapper",{duration: 0.6, left: -300, ease:"sine.in", opacity:0, force3D:false},"-=0.6")

//Scene 02
.to(".main-copy-2", {duration: 0.8, scale:0.5, ease: "back.out(0.8)", opacity:1, stagger: 0.1 },"-=0.5")
.to("#logo_symbol", {duration: 0.4, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=0.4")
.to("#txt2_a", {duration: 0.55, ease: "back.out(1)", opacity:0},"+=1")

//Scene 03
.to("#logo_symbol", {duration: 0.4, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=0.5")
.to("#txt3", {duration: 0.6, ease: "sine.out", opacity:1},"-=0.3")
.to("#cta", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=0.3")
.to("#logo_main",{duration: 0.5, ease:"power3.out", opacity:1 },"-=0");

// tl.seek("seek", true);
// tl.seek(7);

console.log(tl.duration());