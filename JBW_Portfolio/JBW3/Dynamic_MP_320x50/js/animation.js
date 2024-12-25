
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl
// Animation Sequence
.to("#asset_logo", {duration: 0.4, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=0")
.to("#image1",{duration: 0.4, left: 1, ease:"back.out(0.6)", opacity:1, force3D:false, repeat:1, repeatDelay:1.5, yoyo:true},"-=0.1")
.to("#image2", {duration: 0.4, scale:0.5, top: -25, ease: "back.out(0.8)", opacity:1, force3D:false, repeat:1, repeatDelay:1.5, yoyo:true},"-=2.5")

.to("#asset_bar", {duration: 0.6, width: 480, scale:0.5, ease:"power3.out", opacity:1, force3D:false, repeat:1, repeatDelay:2, yoyo:true},"+=0.1")
.to(".txt1", {duration: 0.4, scale:0.5, ease: "back.out(0.8)", opacity:1, stagger: 0.1, force3D:false, repeat:1, repeatDelay:1.5, yoyo:true },"-=3")

.to("#asset_txt2",{duration: 0.4, scale:0.5, ease:"back.out(0.6)", opacity:1, force3D:false},"-=0.1")
.to("#text1",{duration: 0.5, ease:"power3.out", opacity:1 },"-=0");

// tl.seek("seek", true);
// tl.seek(5);

console.log(tl.duration());