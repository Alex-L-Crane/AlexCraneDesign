import $ from "jquery";
import {TweenMax, Power2, TimelineLite} from "gsap";

$(window).bind("load", function() {
    var particlesExist = document.getElementById('particles-js');

    if (particlesExist) {
        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
        particlesJS.load(
            'particles-js',
            'assets/particles.json'
        );
    }
});





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
        .fromTo(astronaut, 5, {rotation: "-=5", y: -5, x: 20, ease: Sine.easeInOut}, {rotation: "0", y: 0, x: 0, ease: Sine.easeInOut});

})($);