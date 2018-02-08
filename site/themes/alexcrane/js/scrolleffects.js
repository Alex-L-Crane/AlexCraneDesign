import $ from "jquery";
import ScrollMagic from 'scrollmagic';
//import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

// init controller
$(window).bind("load", function() {
    const controller = new ScrollMagic.Controller();
    const KBProcessVidExists = document.getElementById('KBProcessVid');
    const KBDemoVidExists = document.getElementById('KBDemoVid');

    if (KBProcessVidExists) {
        function toggleKBProcessVid(event) {
            if(event.type=="enter") {
                jwplayer("KBProcessVid").play();
            }
            else if(event.type=="leave") {
                jwplayer("KBProcessVid").pause();
            }
        }

        new ScrollMagic.Scene({
            triggerElement: "#KBProcessVid",
            duration: 700
        }).on("enter leave", toggleKBProcessVid).addTo(controller);
    }

    if (KBDemoVidExists) {
        function toggleKBDemoVid(event) {
            if(event.type=="enter") {
                jwplayer("KBDemoVid").play();
            }
            else if(event.type=="leave") {
                jwplayer("KBDemoVid").pause();
            }
        }

        new ScrollMagic.Scene({
            triggerElement: "#KBDemoVid",
            duration: 700
        }).on("enter leave", toggleKBDemoVid).addTo(controller);
    }
})