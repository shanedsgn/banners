
var tl = gsap.timeline({delay:0.2});

gsap.ticker.fps(24);

tl

// Car (Scene 1)
.to(car01_wrapper, {duration: 0.7, left:0, opacity:1, top:0, ease: "elastic.out(0.9, 0.7)"},"-=0.1")
.to("#car_01b", {duration: 0.3, left:115, rotation:-30, transformOrigin:"0px 50px", opacity:1, ease: "elastic.out(0.9, 0.7)"},"-=0.2")
.to("#car_02a", {duration: 0.2, left:-364, ease: Power2.easeIn, opacity:1,},"-=0.3")
.to(starburst1, {duration: 0.3, scale:1.3, ease: Power2.easeIn, opacity:1, repeat:1, yoyo:true},"-=0.1")
.to(txt1_a, {duration: 0.5, top:0, scale:1, ease: "elastic.out(0.9, 0.7)", opacity:1},"-=0.4")
.to(car01_wrapper, {duration: 0.2, ease: Power2.easeIn, opacity:0,},"-=0.4")

// Car (Scene 2)
.to("#car_02a", {duration: 1, left:135, ease: "elastic.out(0.9, 0.7)", opacity:1,},"+=0.8")
.to(txt1_a, {duration: 0.3, top:0, opacity:0},"-=1.02")
.to(".character1", {duration: 0.5, opacity: 1, repeat:0,x:-5700,ease:SteppedEase.config(19), repeat:1, repeatDelay:0.5, yoyo:true},"-=0.3")
.to("#car_02b", {duration: 0.5, left: 165, top:65, rotation:50, transformOrigin:"105px 0px", opacity:1, ease: "elastic.out(0.9, 0.7)", repeat:1, repeatDelay:0.8, yoyo:true},"-=1.5")
.to("#spray_wrapper", {duration: 0.3, top:0, opacity:0},"-=0")
.to(txt1_b, {duration: 0.5, top:0, scale:1, ease: "elastic.out(0.9, 0.7)", opacity:1},"-=1.5")
.to(starburst2, {duration: 0.3, scale:1.3, ease: Power2.easeIn, opacity:1, repeat:1, yoyo:true},"-=0.1")
.to(txt1_b, {duration: 0.35, top:0, scale:0, ease: Power2.easeOut, opacity:0},"-=0")

// Car (Scene 3)
.to(car02_wrapper, {duration: 0.5, opacity:1, top:0, left: -120, scale:0.5, ease: "elastic.out(0.8, 0.9)"},"-=0.3")
.to(surprise, {duration: 0.4, scale:2.5, top:-40, ease: Power2.easeOut, opacity:1},"-=0.2")
.to(surprise_wrapper, {duration: 0.1, top:0, opacity:0},"+=0")
.to(".two_txt", {duration: 0.5, top:0, scale:1, ease: "elastic.out(0.9, 0.7)", opacity:1, stagger: 0.08},"+=0")
.to(car02_wrapper, {duration: 0.5, opacity:1, top:0, left: -450, ease: Power2.easeOut},"+=1")
.to(".two_txt", {duration: 0.4, top:0, ease: Power2.easeIn, opacity:0},"-=0.5")
.to(dust, {duration: 0.2, left: 550, ease: Power2.easeIn, opacity:1,},"-=0.65")
.to(dust, {duration: 0.2, left: 520, ease: Power2.easeOut, opacity:0,},"-=0.3")

// // End Frame
.to(arm_wrapper, {duration: 0.3, opacity:1, left:0, ease: Power2.easeOut},"-=0.1")
.to(".character4", {duration: 1, opacity: 1, repeat:0,x:-3300,ease:SteppedEase.config(11)},"-=0.1")
.to(".product-img", {duration: 0.6, top:0, ease: "elastic.out(0.9, 0.6)", opacity:1, stagger: 0.08, repeat:1, repeatDelay:0.5, yoyo:true },"-=0.8")
.to(cta, {duration: 0.3, opacity:1, top:0, ease: Power2.easeOut},"-=2.5")
.to(logo, {duration: 1, scale:1, ease: "elastic.out(1, 0.3)", opacity:1, stagger: 0.15 },"-=0")
.to(tagline, {duration: 0.6, scale:0.5, top:0, ease: "elastic.out(0.5, 0.3)", opacity:1, stagger: 0.15 },"-=0.5");

// tl.seek("seek", true);
// tl.seek(5);

console.log(tl.duration());