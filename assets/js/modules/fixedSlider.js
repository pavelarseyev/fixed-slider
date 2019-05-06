export function fixedSlider() {

    let section = $(".slider-section");
    let slider = $(".fixed-slider");
    let spacer = $(".spacer");

    let startPoint = 0;
    let sliderHeight = 0;
    let spacerHeight = 0;
    let sectionOffsetTop = 0;
    let neededOffset = 0;
    let timeToMove = 0;
    let padding = 0;

    function calcSlider(section, slider, spacer) {
        let slides = $(slider).find(".slide");
        let scrollSize = 0;

        slides.each( function () {
            scrollSize += $(this).outerWidth(true);
        });

        sliderHeight = $(slider).innerHeight();

        sectionOffsetTop = $(section).offset().top;

        neededOffset = (window.innerHeight - sliderHeight) / 2;

        startPoint = sectionOffsetTop - neededOffset;

        padding = scrollSize - sliderHeight - (window.innerWidth);

        $(spacer).css({"padding-bottom" : padding, "height" : sliderHeight, "min-height" : sliderHeight});
    }

    function setSlider(){
        let windowTop = $(window).scrollTop();

        spacerHeight = $(spacer).innerHeight();
        timeToMove = (sectionOffsetTop + spacerHeight) - (sliderHeight + neededOffset);

        
        console.log(windowTop,startPoint, timeToMove);
        $(".slide").css("transform", "translate3d(" + (-1 * (windowTop - (section[0].getBoundingClientRect().y + neededOffset))) + "px, 0, 0)");

        if (windowTop < startPoint) {
            slider.removeClass("on-view").css({"top" : "auto", "position" : "relative"});
            spacer.css({"padding-top" : 0, "padding-bottom" : padding});
        } else {
            spacer.css({"padding-bottom" : 0, "padding-top" : padding});

            if (windowTop < timeToMove) {
                slider.addClass("on-view").css({"top": neededOffset, "position": "fixed"});
            } else {
                slider.removeClass("on-view").css({"top" : "auto", "position" : "relative"});
            }
        }
    }

    calcSlider(section, slider, spacer);
    setSlider();

    $(window).on("ready resize", function () {
        calcSlider(section, slider, spacer);
        setSlider();
    });

    $(window).on("scroll", function () {
        setSlider();
    });


    //(1-x)*a + x*a
    //(1-x)*a + x*b

    // x=0 ==> a
    // x=1 ==> b

    //a ==> b

}