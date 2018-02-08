import $ from "jquery";

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