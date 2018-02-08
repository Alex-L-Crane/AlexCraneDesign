import $ from "jquery";

// JWPLayers Setup

$(window).bind("load", function() {
    var KBProcessVidExists = document.getElementById('KBProcessVid');
    var KBDemoVidExists = document.getElementById('KBDemoVid');

    if (KBProcessVidExists) {
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
    }

    if (KBDemoVidExists) {
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
    }
});


