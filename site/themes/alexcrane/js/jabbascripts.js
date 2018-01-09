/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load(
    'particles-js',
    'assets/particles.json',
    function () {
        console.log('callback - particles.js config loaded');
    }
);

(function($) {

    var astronaut = $('.m-astronaut__wrap'),
        logo = $('.m-home-logo__logo'),
        connection = $('.m-astronaut__connection'),
        moon = $('.m-moon__wrap'),
        social = $('.m-social'),
        tlLoad = new TimelineLite(),
        tlAstronaut = new TimelineMax({repeat: -1});

    tlLoad

        .to( astronaut, 1.5, {right: -20, ease: Sine.easeInOut})
        .to( logo, 2, {autoAlpha: 1}, "-=.5")
        .to( connection, 1.5, {width: '40%', ease: Bounce.easeOut}, 2)
        .to( moon, 2.5, {bottom: 0, ease: Expo.easeOut}, 2)
        .to( social, 2, {left: 0, ease: Expo.easeOut}, 2.4);

    tlAstronaut
        .fromTo(astronaut, 5, {rotation: "0", y: 0, x:0, ease: Sine.easeInOut}, {rotation: "+=5", y: -10, x: -5, ease: Sine.easeInOut})
        .fromTo(astronaut, 5, {rotation: "+=5", y: -10, x: -5, ease: Sine.easeInOut}, {rotation: "0", y: 0, x: -10, ease: Sine.easeInOut})
        .fromTo(astronaut, 5, {rotation: "-=5", y: 0, x: -10 , ease: Sine.easeInOut}, {rotation: "-=5", y: -5, x: 5, ease: Sine.easeInOut})
        .fromTo(astronaut, 5, {rotation: "-=5", y: -5, x: 5, ease: Sine.easeInOut}, {rotation: "0", y: 0, x:0, ease: Sine.easeInOut})
        .fromTo(astronaut, 5, {rotation: "0", y: 0, x:0, ease: Sine.easeInOut}, {rotation: "+=5", y: -10, x: 20, ease: Sine.easeInOut})
        .fromTo(astronaut, 5, {rotation: "+=5", y: -10, x: 20, ease: Sine.easeInOut}, {rotation: "0", y: 0, x: 40, ease: Sine.easeInOut})
        .fromTo(astronaut, 5, {rotation: "-=5", y: 0, x: 40 , ease: Sine.easeInOut}, {rotation: "-=5", y: -5, x: 20, ease: Sine.easeInOut})
        .fromTo(astronaut, 5, {rotation: "-=5", y: -5, x: 20, ease: Sine.easeInOut}, {rotation: "0", y: 0, x: 0, ease: Sine.easeInOut});;

})(jQuery);


// JWPLayers Setup
jwplayer("KBProcessVid").setup({
    "skin": {
        "name": "kineticbeats"
    },
    "file": "http://content.jwplatform.com/videos/6isgoXbx-QtYW5DgW.mp4",
    "image": "http://content.jwplatform.com/thumbs/6isgoXbx-1280.jpg",
    "width": "100%",
    "stretching": "fill",
    "autostart": false,
    "repeat": true,
    "controls": false,
    "mute": true
});

jwplayer("KBDemoVid").setup({
    "skin": {
        "name": "kineticbeats"
    },
    "file": "http://content.jwplatform.com/videos/t1AsHX3I-QtYW5DgW.mp4",
    "image": "http://content.jwplatform.com/thumbs/t1AsHX3I-1280.jpg",
    "width": "100%",
    "stretching": "fill",
    "autostart": false,
    "repeat": true,
    "controls": false,
    "mute": true
});


// KineticBeats process video width
$(document).ready(function() {
    // Optimaisation: Store the references outside the event handler:
    var $window = $(window);
    var containersize = $(".l-centered-column").width();

    function checkWidth() {
        var windowsize = $window.width();
        if ( windowsize > 900 ){
            var marginLeft = (windowsize - containersize) / 2;
            $(".KBProcessVidWrap").css({ marginLeft: marginLeft });
        } else {
            $(".KBProcessVidWrap").css({ marginLeft: 0 });
        }
    }

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});


// Scrollmagic
// init controller
var controller = new ScrollMagic.Controller();
function toggleKBProcessVid(event) {

    if(event.type=="enter") {
        jwplayer("KBProcessVid").play();
    }
    else if(event.type=="leave") {
        jwplayer("KBProcessVid").pause();
    }
}

var controller = new ScrollMagic.Controller();
function toggleKBDemoVid(event) {

    if(event.type=="enter") {
        jwplayer("KBDemoVid").play();
    }
    else if(event.type=="leave") {
        jwplayer("KBDemoVid").pause();
    }
}

// add listeners
new ScrollMagic.Scene({
    triggerElement: "#KBProcessVid",
    duration: 700
}).on("enter leave", toggleKBProcessVid).addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#KBDemoVid",
    duration: 700
}).on("enter leave", toggleKBDemoVid).addTo(controller);

