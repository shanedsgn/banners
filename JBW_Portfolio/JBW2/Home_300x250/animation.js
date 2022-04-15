
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl

// Faucet
.to(faucet_wrapper, {duration: 0.5, opacity:1, top:0, scale:1, ease: "elastic.out(0.9, 0.7)"},"-=0.1")
.to(".character1", {duration: 0.5, opacity: 1, repeat:0,x:-8700,ease:SteppedEase.config(29), repeat:1, repeatDelay:0.7, yoyo:true},"-=0")
.to(txt1, {duration: 0.5, top:0, scale:1, ease: "elastic.out(0.9, 0.7)", opacity:1},"-=1.1")
.to(faucet_wrapper, {duration: 0.2, opacity:0, top:0, scale:0, ease: Power2.easeOut},"+=0.4")
.to(txt1, {duration: 0.35, top:0, ease: Power2.easeIn, opacity:0},"-=0.4")

 // Birdhouse
.to(".bh_build1", {duration: 2, top:123, left:108, ease: Power2.easeIn, opacity:1,},"-=1.9")
.to(".bh_build2", {duration: 2, top:30, left:100, ease: Power2.easeIn, opacity:1},"-=2")
.to(".bh_build3", {duration: 2, top:77, left:143, ease: Power2.easeIn, opacity:1},"-=2")
.to(".bh_build4", {duration: 2, top:42, left:105, ease: Power2.easeIn, opacity:1},"-=2")
.to(".bh_build5", {duration: 2, top:30, left:123, ease: Power2.easeIn, opacity:1},"-=2")
.to(bh_wrapper, {duration: 0.2, scale:0.5,opacity:1, left:0, ease: Power2.easeIn, repeat:1, yoyo:true},"-=0.09")
.to(txt2, {duration: 0.5, top:0, scale:1, ease: "elastic.out(0.9, 0.7)", opacity:1},"-=0")
.to(txt2, {duration: 0.4, top:0, ease: Power2.easeIn, opacity:0},"+=0.9")
.to(bh_wrapper, {duration: 0.25, scale:0, opacity:0, left:0, ease: Power2.easeOut},"-=0")

 // Gnome
.to(gnome_wrapper, {duration: 0.5, opacity:1, top:0, scale:1, ease: "elastic.out(0.9, 0.7)"},"-=0.1")
.to(".character3", {duration: 0.3, opacity: 1, repeat:0,x:-4800,ease:SteppedEase.config(16)},"+=0.2")
.to(".gnome_txt", {duration: 0.5, top:0, scale:1, ease: "elastic.out(0.9, 0.7)", opacity:1, stagger: 0.08},"-=0.7")
.to(starburst, {duration: 0.3, scale:1.3, ease: Power2.easeIn, opacity:1, repeat:1, yoyo:true},"-=0.2")
.to(gnome_wrapper, {duration: 0.25, scale:0, opacity:0, left:0, ease: Power2.easeOut},"+=0.9")
.to(".gnome_txt", {duration: 0.4, top:0, ease: Power2.easeIn, opacity:0},"-=0.5")

// End Frame
.to(arm_wrapper, {duration: 0.3, opacity:1, left:0, ease: Power2.easeOut},"-=0")
.to(".character4", {duration: 1, opacity: 1, repeat:0,x:-3300,ease:SteppedEase.config(11)},"-=0.1")
.to(".product-img", {duration: 0.6, top:0, ease: "elastic.out(0.9, 0.6)", opacity:1, stagger: 0.08, repeat:1, repeatDelay:0.9, yoyo:true },"-=0.8")
.to(cta, {duration: 0.3, opacity:1, top:0, ease: Power2.easeOut},"-=2.5")
.to(logo, {duration: 1, scale:1, ease: "elastic.out(1, 0.3)", opacity:1, stagger: 0.15 },"-=0")
.to(tagline, {duration: 0.6, scale:0.5, top:0, ease: "elastic.out(0.5, 0.3)", opacity:1, stagger: 0.15 },"-=0.5");

// tl.seek("seek", true);
// tl.seek(2);

console.log(tl.duration());