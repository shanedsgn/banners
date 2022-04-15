
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl
.to("#hero",{duration: 0.4, scale:0.5, opacity:1, ease:"power2.easeOut"},"-=0.2")
.to(".txt.one", {duration: 0.8, left:0, ease: "elastic.out(0.9, 0.7)", opacity:1, stagger: 0.1 },"-=0.1")
.to("#txt2", {duration: 0.8, left:0, ease: "elastic.out(0.9, 0.6)", opacity:1, stagger: 0.08 },"+=0.6")
.to("#hero",{duration: 0.8, left: -45, ease:"power3.out"},"+=1")
.to(".txt",{duration: 0.8, left: -45, ease:"power3.out"},"-=0.8")
.to("#logo",{duration: 0.3, top: -4, ease:"power3.out"},"-=0.7")
.to("#disclaimer",{duration: 0.4, ease:"power2.out", opacity: 1},"-=0.5")
.to(".bubbles-ani", {duration: 1, scale:1, ease: "elastic.out(1, 0.3)", opacity:1, stagger: 0.15 },"-=1")
.to("#cta",{duration: 0.7, top:0, ease: "elastic.out(0.9, 0.9)", opacity: 1},"-=0.9")
;

// tl.seek("seek", true);
// tl.seek(5);

console.log(tl.duration());