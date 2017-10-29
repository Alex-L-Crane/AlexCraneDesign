(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

(function ($) {

    var astronaut = $('.m-astronaut__wrap'),
        logo = $('.m-home-logo__logo'),
        connection = $('.m-astronaut__connection'),
        moon = $('.m-moon__wrap'),
        social = $('.m-social'),
        tlLoad = new TimelineLite(),
        tlAstronaut = new TimelineMax({ repeat: -1 });

    tlLoad.to(astronaut, 1.5, { right: -20, ease: Sine.easeInOut }).to(logo, 2, { autoAlpha: 1 }, "-=.5").to(connection, 1.5, { width: '40%', ease: Bounce.easeOut }, 2).to(moon, 2.5, { bottom: 0, ease: Expo.easeOut }, 2).to(social, 2, { left: 0, ease: Expo.easeOut }, 2.4);

    tlAstronaut.fromTo(astronaut, 5, { rotation: "0", y: 0, x: 0, ease: Sine.easeInOut }, { rotation: "+=5", y: -10, x: -5, ease: Sine.easeInOut }).fromTo(astronaut, 5, { rotation: "+=5", y: -10, x: -5, ease: Sine.easeInOut }, { rotation: "0", y: 0, x: -10, ease: Sine.easeInOut }).fromTo(astronaut, 5, { rotation: "-=5", y: 0, x: -10, ease: Sine.easeInOut }, { rotation: "-=5", y: -5, x: 5, ease: Sine.easeInOut }).fromTo(astronaut, 5, { rotation: "-=5", y: -5, x: 5, ease: Sine.easeInOut }, { rotation: "0", y: 0, x: 0, ease: Sine.easeInOut }).fromTo(astronaut, 5, { rotation: "0", y: 0, x: 0, ease: Sine.easeInOut }, { rotation: "+=5", y: -10, x: 20, ease: Sine.easeInOut }).fromTo(astronaut, 5, { rotation: "+=5", y: -10, x: 20, ease: Sine.easeInOut }, { rotation: "0", y: 0, x: 40, ease: Sine.easeInOut }).fromTo(astronaut, 5, { rotation: "-=5", y: 0, x: 40, ease: Sine.easeInOut }, { rotation: "-=5", y: -5, x: 20, ease: Sine.easeInOut }).fromTo(astronaut, 5, { rotation: "-=5", y: -5, x: 20, ease: Sine.easeInOut }, { rotation: "0", y: 0, x: 0, ease: Sine.easeInOut });;
})(jQuery);

},{}]},{},[1]);

//# sourceMappingURL=alexcrane.js.map
