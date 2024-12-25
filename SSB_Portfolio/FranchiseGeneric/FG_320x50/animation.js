
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl
//Scene 01

.to(".pizza", {duration: 0.1, ease: "power3.in", opacity:1, stagger: 0.1},"-=0.2")
.to("#txt1", {duration: 0.5, scale:0.5, ease: "back.out(1)", opacity:1},"-=0")
.to("#pizza_wrapper", {duration: 0.5, scale:0, ease: "power3.in", opacity:0},"+=0.8")

.to("#pup_01", {duration: 0.3, scale:0.5, ease: "back.out(2)", opacity:1, force3D:false},"-=0.1")
.to("#pup_02", {duration: 0.3, scale:0.5, ease: "back.out(2)", opacity:1, force3D:false},"-=0.1")
.to("#pup_03", {duration: 0.3, scale:0.5, ease: "back.out(2)", opacity:1, force3D:false},"-=0.1")
.to("#pup_wrapper", {duration: 0.5, scale:0, ease: "power3.in", opacity:0},"+=0.8")

.to("#bulb", {duration: 0.3, scale:0.5, ease: "back.out(2)", opacity:1, force3D:false},"-=0.1")

.to("#ray_wrapper", {duration: 0.5, ease: "power3.in", opacity:1},"-=0.5")
.to("#ray_01", {duration: 0.3, left: 118, top: 109, ease: "back.out(2)", opacity:1, force3D:false},"-=0.2")
.to("#ray_02", {duration: 0.3, left: 109, top: 85, ease: "back.out(2)", opacity:1, force3D:false},"-=0.2")
.to("#ray_03", {duration: 0.3, left: 119, top: 62, ease: "back.out(2)", opacity:1, force3D:false},"-=0.2")
.to("#ray_04", {duration: 0.3, left: 143, top: 50, ease: "back.out(2)", opacity:1, force3D:false},"-=0.2")
.to("#ray_05", {duration: 0.3, left: 167, top: 61, ease: "back.out(2)", opacity:1, force3D:false},"-=0.2")
.to("#ray_06", {duration: 0.3, left: 177, top: 85, ease: "back.out(2)", opacity:1, force3D:false},"-=0.2")
.to("#ray_07", {duration: 0.3, left: 167, top: 110, ease: "back.out(2)", opacity:1, force3D:false},"-=0.2")

.to("#bulb_wrapper", {duration: 0.5, scale:0, ease: "power3.in", opacity:0},"+=1")
.to("#txt1", {duration: 0.5, scale:0.5, ease:"power3.out", opacity:0},"-=0.1")

//Scene 03
.to(".main-copy-2", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, stagger: 0.1},"-=0.3")
.to(".main-copy-2", {duration: 0.5, scale:0.5, ease:"power3.out", opacity:0},"+=1.5")

.to("#txt3", {duration: 0.5, ease: "power3.out", opacity:1},"-=0.3")
.to("#txt3", {duration: 0.5, ease: "power3.out", opacity:0},"+=1.5")

.to(".main-copy-3", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, stagger: 0.1 },"-=0.3")
.to("#cta", {duration: 0.5, scale:0.5, ease: "back.out(0.8)", opacity:1, force3D:false},"-=0.1")
.to("#logo_main",{duration: 0.5, ease:"power3.out", opacity:1 },"-=0");

// tl.seek("seek", true);
// tl.seek(5);

console.log(tl.duration());