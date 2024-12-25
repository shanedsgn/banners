
var tl = gsap.timeline({delay:0.1});

gsap.ticker.fps(24);

tl
//Scene 01
.to("#txt1", {duration: 0.5, scale:1, ease: "back.out(0.8)", opacity:1},"-=0")
.to("#tangle", {duration: 8, left:-1400, ease: "none", opacity:1, force3D:false},"+=0.9")
.to("#txt2", {duration: 0.5, scale:1, ease: "back.out(0.8)", opacity:1, stagger: 0.1},"-=6.5")

//Scene 02
.to(".main-copy-3", {duration: 0.8, top:18, ease: "back.out(0.8)", opacity:1, stagger: 0.1 },"-=1")

//Scene 03
.to("#txt4", {duration: 0.6, ease: "sine.out", opacity:1},"-=0.3")
.to("#cta", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=0.3")
.to("#logo_main",{duration: 0.5, ease:"power3.out", opacity:1 },"-=0");

// tl.seek("seek", true);
// tl.seek(7);

console.log(tl.duration());