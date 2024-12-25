
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl
//Scene 01
.to(".house-seq", {duration: 0.27, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false, stagger: 0.2},"-=0")
.to(".dots-seq",{duration: 0.17, top:0, ease:"power3.out", opacity:1, stagger: 0.2},"-=1.5")
.to(".main-copy-1", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, stagger: 0.1 },"-=1.5")
.to("#all_sequences",{duration: 0.4, ease:"power3.out", opacity:0 },"+=0.9")
.to("#text01_wrapper",{duration: 0.3, top: -75, left:2, scale:1, ease:"sine.out", opacity:1, force3D:false},"-=0.3")
.to("#logo_symbol", {duration: 0.4, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=0")
.to("#txt1_c", {duration: 1, ease:"power3.out", opacity:1},"-=0.4")

//Scene 02
.to(".main-copy-1,#txt1_c",{duration: 0.4, ease:"power3.out", opacity:0 },"+=1.2")
.to(".main-copy-2", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, stagger: 0.1 },"-=0.3")
.to("#cta", {duration: 0.3, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"+=0.2")
.to("#logo_main",{duration: 0.5, ease:"power3.out", opacity:1 },"-=0");

// tl.seek("seek", true);
// tl.seek(7);

console.log(tl.duration());