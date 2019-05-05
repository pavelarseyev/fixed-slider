export function fixedSlider() {

    let section = $(".slider-section");
    let slider = $(".fixed-slider");
    let spacer = $(".spacer");


    let pusherOffset = 0;
    let pusherHeight = 0;
    let sliderHeight = 0;
    let scrollWidth = 0;
    let neededOffset = 0;
    let neededHeight = 0;
    let neededScroll = 0;
    let timeToMove = 0;

    $(window).resize(function () {
        calcSlider(slider, spacer);
    });

    calcSlider(slider, spacer);

    function calcSlider(slider, spacer) {

        // pusherOffset = $(pusher).offset().top;
        // sliderHeight = $(slider).innerHeight();
        // scrollWidth = $(scrollContainer).innerWidth();
        // neededOffset = (window.innerHeight - sliderHeight) / 2;
        // neededHeight = (pusherOffset - window.innerHeight) + neededOffset;
        // neededScroll = pusherOffset + scrollWidth;
        // pusher.css({"padding-bottom" : scrollWidth, "height" : sliderHeight, "min-height" : sliderHeight});
        // pusherHeight = $(pusher).innerHeight();
        // timeToMove = (pusherOffset + pusherHeight) - (window.innerHeight);


    }

   /* $(window).on("scroll", function () {
        let windowTop = $(this).scrollTop();

        $(".slide").css("transform", "translate3d(" + (-1 * (windowTop - pusherOffset+window.innerWidth)) + "px, 0, 0)");

        if (windowTop > neededHeight && windowTop < timeToMove) {
            slider.addClass("on-view");
            $(".on-view").css({"top" : neededOffset, "position" : "fixed"});
        }

        if(windowTop >= timeToMove) {
            slider.removeClass("on-view");
            slider.css({"top" : neededOffset - (windowTop-timeToMove)});
        }

        if(windowTop < neededHeight){
            slider.css({"top": "auto", "position" : "relative"});
            slider.removeClass("on-view");
        }
    });*/








    //(1-x)*a + x*a
    //(1-x)*a + x*b

    // x=0 ==> a
    // x=1 ==> b

    //a ==> b

    // $(".slides-wrapper").on("scroll", function (e) {
    //     console.log(e);
    // });

    // $(".fixed-slider").on("click", function(e){
    //     console.log(e);
    // });
}