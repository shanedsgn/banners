
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl
//Scene 01
.to("#txt1", {duration: 0.5, scale:0.5, ease: "back.out(1)", opacity:1},"-=0")
.to("#icon01", {duration: 0.3, scale:0.5, ease: "back.out(2)", opacity:1, yoyo:true, repeat:1, repeatDelay:0.7, force3D:false},"-=0.1")
.to("#icon02", {duration: 0.3, scale:0.5, ease: "back.out(2)", opacity:1, yoyo:true, repeat:1, repeatDelay:0.7, force3D:false},"-=0")
.to("#icon03", {duration: 0.3, scale:0.5, ease: "back.out(2)", opacity:1, yoyo:true, repeat:1, repeatDelay:0.7, force3D:false},"+=0")
.to("#icon04", {duration: 0.3, scale:0.5, ease: "back.out(2)", opacity:1, yoyo:true, repeat:1, repeatDelay:0.7, force3D:false},"+=0")
.to("#txt1", {duration: 0.5, scale:0.5, ease:"power3.out", opacity:0},"-=0.1")

//Scene 02
.to("#primrose_wrapper",{duration: 0.4, ease:"power3.out", opacity:1},"-=0.3")
.to("#primrose",{duration: 7, scale:0.55, ease:"Sine.easeOut", opacity:1, force3D:false},"-=0.3")
.to(".main-copy-2", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, stagger: 0.1 },"-=7")
.to("#primrose_wrapper",{duration: 0.4, ease:"Sine.easeOut", opacity:0},"-=4")
.to(".main-copy-2", {duration: 0.5, ease: "power3.out", opacity:0},"-=4")

//Scene 03
.to(".main-copy-3", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, stagger: 0.1 },"-=3.7")
.to("#logo_symbol", {duration: 0.4, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=3")
.to("#txt4", {duration: 0.5, ease: "power3.out", opacity:1},"-=2.5")
.to("#cta", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=1.5")
.to("#logo_main",{duration: 0.5, ease:"power3.out", opacity:1 },"-=1.1");

// tl.seek("seek", true);
// tl.seek(4);

console.log(tl.duration());