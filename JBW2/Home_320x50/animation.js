
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl

// Faucet
.to(faucet_wrapper, {duration: 0.5, opacity:1, top:0, scale:1, ease: "elastic.out(0.9, 0.7)"},"-=0.1")
.to(".character1", {duration: 0.5, opacity: 1, repeat:0,x:-9280,ease:SteppedEase.config(29), repeat:1, repeatDelay:0.7, yoyo:true},"-=0")
.to(txt1, {duration: 0.5, top:0, scale:1, ease: "elastic.out(0.9, 0.7)", opacity:1},"-=1.1")
.to(faucet_wrapper, {duration: 0.2, opacity:0, top:0, scale:0, ease: Power2.easeOut},"+=0.4")
.to(txt1, {duration: 0.35, top:0, ease: Power2.easeIn, opacity:0},"-=0.4")

 // Birdhouse
.to(".bh_build1", {duration: 4.7, top:36, left:34, ease: Power2.easeIn, opacity:1,},"-=4.7")
.to(".bh_build2", {duration: 4.7, top:3, left:30, ease: Power2.easeIn, opacity:1},"-=4.75")
.to(".bh_build3", {duration: 4.7, top:20, left:47, ease: Power2.easeIn, opacity:1},"-=4.75")
.to(".bh_build4", {duration: 4.7, top:6, left:34, ease: Power2.easeIn, opacity:1},"-=4.75")
.to(".bh_build5", {duration: 4.7, top:3, left:39, ease: Power2.easeIn, opacity:1},"-=4.75")
.to(bh_wrapper, {duration: 0.2, scale:0.8,opacity:1, left:0, ease: Power2.easeIn, repeat:1, yoyo:true},"-=0.09")
.to(txt2, {duration: 0.5, top:0, scale:1, ease: "elastic.out(0.9, 0.7)", opacity:1},"-=0")
.to(txt2, {duration: 0.4, top:0, ease: Power2.easeIn, opacity:0},"+=0.9")
.to(bh_wrapper, {duration: 0.25, scale:0, opacity:0, left:0, ease: Power2.easeOut},"-=0")

 // Gnome
.to(gnome_wrapper, {duration: 0.5, opacity:1, top:0, scale:1, ease: "elastic.out(0.9, 0.7)"},"-=0.1")
.to(".character3", {duration: 0.3, opacity: 1, repeat:0,x:-5120,ease:SteppedEase.config(16)},"+=0.2")
.to(".gnome_txt", {duration: 0.5, top:0, scale:1, ease: "elastic.out(0.9, 0.7)", opacity:1, stagger: 0.08},"-=0.7")
.to(starburst, {duration: 0.3, scale:1.3, ease: Power2.easeIn, opacity:1, repeat:1, yoyo:true},"-=0.2")
.to(gnome_wrapper, {duration: 0.25, scale:0, opacity:0, left:0, ease: Power2.easeOut},"+=0.9")
.to(".gnome_txt", {duration: 0.4, top:0, ease: Power2.easeIn, opacity:0},"-=0.5")

// End Frame
.to(arm_wrapper, {duration: 0.3, opacity:1, left:0, ease: Power2.easeOut},"-=0")
.to(".character4", {duration: 1, opacity: 1, repeat:0,x:-3520,ease:SteppedEase.config(11)},"-=0.1")
.to(".product-img", {duration: 0.6, top:0, ease: "elastic.out(0.9, 0.6)", opacity:1, stagger: 0.08},"-=0.8")
.to(logo, {duration: 0.5, scale:0.75, left:102, ease: Power2.easeOut, opacity:1},"-=1.4")
.to(darkred_bckg, {duration: 0.5, scale:1, left:105, ease: Power2.easeOut, opacity:1},"-=1.4")
.to(tagline, {duration: 0.8, scale:0.5, top:0, ease: "elastic.out(0.5, 0.3)", opacity:1},"-=1")
.to(cta, {duration: 0.5, scale:1, opacity:1, left:0, ease: "elastic.out(0.9, 0.7)"},"-=0.3");

// tl.seek("seek", true);
// tl.seek(7);

console.log(tl.duration());