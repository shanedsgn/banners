
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl
// Animation Sequence
.to("#asset_logo", {duration: 0.4, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=0")
.to("#image1",{duration: 0.4, left:-10, ease:"back.out(0.6)", opacity:1, force3D:false},"+=0")
.to("#image2", {duration: 0.4, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=0.2")

.to("#asset_bar", {duration: 0.6, width: 455, scale:0.5, ease:"power3.out", opacity:1, force3D:false},"-=0.4")
.to(".txt1", {duration: 0.4, scale:0.5, ease: "back.out(0.8)", opacity:1, stagger: 0.1, force3D:false },"-=0.2")
.to("#asset_lowes", {duration: 0.4, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=0.8")

.to("#asset_txt2",{duration: 0.4, left: 441, ease:"back.out(0.6)", opacity:1, force3D:false},"+=0")
.to("#text1",{duration: 0.5, ease:"power3.out", opacity:1 },"-=0");

// tl.seek("seek", true);
// tl.seek(2);

console.log(tl.duration());