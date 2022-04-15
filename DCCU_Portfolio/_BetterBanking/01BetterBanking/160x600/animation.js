
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl
.to("#hero",{duration: 0.4, scale:0.5, opacity:1, ease:"power2.easeOut"},"-=0.2")
.to(".main-copy-1", {duration: 0.8, left:0, ease: "elastic.out(0.9, 0.7)", opacity:1, stagger: 0.1 },"-=0.1")
.to("#hero",{duration: 1, top: -97, ease:"power3.out"},"+=1")
.to("#logo",{duration: 1, top: 25, ease:"power3.out"},"-=1")
.to(".end-copy-1", {duration: 1, top:0, ease: "elastic.out(0.9, 0.6)", opacity:1, stagger: 0.08 },"-=0.8")

.to(".bubbles-ani", {duration: 1, scale:1, ease: "elastic.out(1, 0.3)", opacity:1, stagger: 0.15 },"-=0.5")
.to("#cta",{duration: 0.7, top:0, ease: "elastic.out(0.9, 0.9)", opacity: 1},"=-0.9")
.to("#disclaimer",{duration: 0.4, ease:"power2.out", opacity: 1},"-=0.3")

;

// tl.seek("seek", true);
// tl.seek(3);

console.log(tl.duration());