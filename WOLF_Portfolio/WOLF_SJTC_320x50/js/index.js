
var masterTimeline = new TimelineMax({paused:true}),
	tl1 = new TimelineMax(),
	tl2 = new TimelineMax(),
	tl3 = new TimelineMax({delay: 2.7}),
	tl4 = new TimelineMax({delay: 2.3}),
	tl5 = new TimelineMax({delay:2.5}),
	tl6 = new TimelineMax({delay:6});


/* Timeline 1 */
tl1.from("#svgcontainer", 1,{alpha:1, top:-300, ease:Power4.easeInOut})
	.to("#svgcontainer", 1, {alpha:1, top:0,ease:Bounce.easeOut},'-=1')
	.to("#shadow", 1, {alpha:1, top:0,ease:Bounce.easeOut},'-=.9')

tl2.from("#text1a", 1,{alpha:0, left:-300, ease:Power4.easeInOut},'-=.9')
	.to("#text1a", 1, {alpha:1, left:0,ease:Power4.easeInOut},'-=1')

	.from("#text1b",1,{alpha:0, left:-300, ease:Power4.easeInOut},'-=.9')
	.to("#text1b", 1, {alpha:1, left:0,ease:Power4.easeInOut},'-=1')

	.from("#text1c",1,{alpha:0, left:-300, ease:Power4.easeInOut},'-=.9')
	.to("#text1c", 1, {alpha:1, left:0,ease:Power4.easeInOut},'-=1');

/* Timeline 2 */
tl3.to("#start", 1, {morphSVG:"#end", yoyo:true, fill:"#02AEED", ease:Bounce.easeOut})
	.to("#start", 1, {y:0, alpha:0},'+=2.5');

/* Timeline 3 */
tl4.to("#bg", 1, {top:250,ease:Power4.easeInOut})
	.to("#bg2", 1, {top:0,ease:Power4.easeInOut},'-=1.4')
	.to("#bg3", 1, {top:0,ease:Power4.easeInOut},'+=2');

/* Timeline 4 */
/* Now closer for...*/
tl5.from("#text2a",1,{alpha:0, left:-300, ease:Power4.easeInOut})
	.to("#text2a", 1, {alpha:1, left:0,ease:Power4.easeInOut},'-=1')
/* when you need... */
	.from("#text2b",1,{alpha:0, left:-300, ease:Power4.easeInOut},'-=.9')
	.to("#text2b", 1, {alpha:1, left:0,ease:Power4.easeInOut},'-=1')
/* it most. */
	.from("#text2c",1,{alpha:0, left:-300, ease:Power4.easeInOut},'-=.9')
	.to("#text2c", 1, {alpha:1, left:0,ease:Power4.easeInOut},'-=1')

tl6.from("#text3a",1,{alpha:0, left:-300, ease:Power4.easeInOut})
	.to("#text3a", 1, {alpha:1, left:0,ease:Power4.easeInOut},'-=1')

	.from("#text3b",1,{alpha:0, left:-300, ease:Power4.easeInOut},'-=.9')
	.to("#text3b", 1, {alpha:1, left:0,ease:Power4.easeInOut},'-=1')

	.from("#text3c",1,{alpha:0, left:-300, ease:Power4.easeInOut},'-=.9')
	.to("#text3c", 1, {alpha:1, left:0,ease:Power4.easeInOut},'-=1')
	
	.to("#logo",1,{alpha:1, top:0,ease:Power4.easeInOut},'-=.9')
	.to("#cta",1 ,{alpha:1,left:0, ease:Power4.easeOut},'-=.4');


// tl3.seek('cta');

masterTimeline.add([tl1, tl2, tl3, tl4, tl5, tl6]);

window.onload = function()
{
    masterTimeline.play();
}

