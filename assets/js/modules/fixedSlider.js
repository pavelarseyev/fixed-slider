export function fixedSlider() {
    let section = $(".slider-section");
    let spacer = $(".spacer");
    let slider = $(".fixed-slider");
    let slides = $(slider).find(".slide");

    let startPoint = 0;
    let sliderHeight = 0;
    let spacerHeight = 0;
    let sectionOffsetTop = 0;
    let neededOffset = 0;
    let timeToMove = 0;
    let padding = 0;
    let slidesOffset = 0;

    function calcSlider(section, slider, spacer) {
        let currentSlides = $(slider).find(".slide");
        let scrollSize = 0;

        slidesOffset = window.innerHeight * 0.5;

        currentSlides.each(function () {
            scrollSize += $(this).outerWidth(true);
        });

        sliderHeight = $(slider).innerHeight();

        sectionOffsetTop = $(section).offset().top;

        neededOffset = (window.innerHeight - sliderHeight) / 2;

        startPoint = sectionOffsetTop - neededOffset;

        padding = scrollSize - slidesOffset;

        $(spacer).css({
            "padding-bottom": padding,
            "height": sliderHeight,
            "min-height": sliderHeight
        });
    }

    function setSlider() {
        let windowTop = $(window).scrollTop();

        spacerHeight = $(spacer).innerHeight();
        timeToMove = (sectionOffsetTop + spacerHeight) - (sliderHeight + neededOffset);

        if (windowTop > (startPoint - slidesOffset)) {
            slides.css("transform", "translate3d(" + (-1 * ((windowTop + slidesOffset) - startPoint)) + "px, 0, 0)");
        } else {
            slides.css("transform", "translate3d(" + 0 + "px, 0, 0)");
        }

        if (windowTop < startPoint) {

            slider.css({"top": "auto", "position": "relative"});
            spacer.css({"padding-top": 0, "padding-bottom": padding});

        } else {

            spacer.css({"padding-bottom": 0, "padding-top": padding});

            if (windowTop < timeToMove) {
                slider.css({"top": neededOffset, "position": "fixed"});
            } else {
                slider.css({"top": "auto", "position": "relative"});
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
}


/*export class SuperSlider {
    constructor(spacer) {
        this.spacer = spacer;
        this.slider = this.spacer.querySelector(".fixed-slider");
        this.slides = this.spacer.querySelectorAll(".fixed-slider .slide");

        this.sliderHeight = this.slider.getBoundingClientRect().height;
        this.spacerOffsetTop = 0;
        this.slidesOffset = window.innerHeight * 0.5;
        this.neededOffsetFromTopOfScreen = 0;
        this.scrollSize = 0;
        this.spacerPadding = 0;
        this.spacerHeight = 0;
        this.startPoint = 0;
        this.endPoint = 0;

        this.init();
    }

    outerWidth(el) {
        let width = el.offsetWidth;
        let style = getComputedStyle(el);

        width += parseInt(style.marginLeft) + parseInt(style.marginRight);

        return width;
    }

    calcSlider = () => {
        this.scrollSize = 0;
        this.neededOffsetFromTopOfScreen = (window.innerHeight - this.sliderHeight) / 2;
        this.spacerOffsetTop = this.spacer.getBoundingClientRect().top + pageYOffset;

        this.startPoint = this.spacerOffsetTop - this.neededOffsetFromTopOfScreen;

        this.slides.forEach((item) => {
            this.scrollSize += this.outerWidth(item);
        });

        this.spacerPadding = (this.scrollSize - this.slidesOffset);
        this.spacerHeight = this.spacer.getBoundingClientRect().height + this.spacerPadding;
    };

    //TODO: finish startCSS for slider. spacer finished;
    setStartCss = () => {
        this.spacer.style.cssText = `
            height: ${this.sliderHeight}px;
            min-height: ${this.sliderHeight}px; 
            display: flex;
            position: relative;
            box-sizing: content-box;
            padding-bottom: ${pageYOffset < this.startPoint ? this.spacerPadding : 0}px;
            padding-top: ${pageYOffset >= this.startPoint ? this.spacerPadding : 0}px; 
        `;


        this.slider.style.cssText = `
            position: ${(pageYOffset < this.startPoint) ? "relative" : (pageYOffset < this.endPoint) ? "fixed" : "relative"};
            top: ${pageYOffset > this.startPoint};
            display: flex;
            padding-left: 100vw;
            padding-right: 100vw;
        `;
    };

    calcProperties = () => {
        let windowTop = pageYOffset;

        this.spacerHeight = this.spacer.offsetHeight + this.spacerPadding;
        this.endPoint = (this.spacerOffsetTop + this.spacerHeight) - (this.sliderHeight + this.neededOffsetFromTopOfScreen);

        if (windowTop > (this.startPoint - this.slidesOffset)) {
            this.slides.forEach(item => {
                item.style.transform = `translate3d(${((windowTop + this.slidesOffset) - this.startPoint) * -1}px, 0, 0)`;
            });
        } else {
            this.slides.forEach(item => {
                item.style.transform = "translate3d(" + 0 + "px, 0, 0)";
            });
        }
    };

    init() {
        this.calcSlider();
        this.setStartCss();
        this.calcProperties();
    }
}


*/
