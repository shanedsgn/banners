
var tl = gsap.timeline({delay:0.1});

gsap.ticker.fps(24);

tl
//Scene 01
.to("#tangle", {duration: 10, top:-980, ease: "none", opacity:1, force3D:false},"+=0.2")
.to(".main-copy-1", {duration: 0.8, scale:1, ease: "back.out(0.8)", opacity:1, stagger: 0.1},"-=8.5")
.to(".main-copy-2", {duration: 0.8, scale:1, ease: "back.out(0.8)", opacity:1, stagger: 0.1},"-=4")

//Scene 02
.to(".main-copy-3", {duration: 0.8, scale:0.5, ease: "back.out(0.8)", opacity:1, stagger: 0.1 },"-=0.8")
.to("#logo_symbol", {duration: 0.4, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=0.7")
.to("#text03_wrapper",{duration: 0.5, top: -36, ease:"sine.out", opacity:1, force3D:false},"+=1")

//Scene 03
.to("#logo_symbol", {duration: 0.4, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=0.5")
.to("#txt4", {duration: 0.6, ease: "sine.out", opacity:1},"-=0.3")
.to("#cta", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=0.3")
.to("#logo_main",{duration: 0.5, ease:"power3.out", opacity:1 },"-=0");

// tl.seek("seek", true);
// tl.seek(8);

console.log(tl.duration());