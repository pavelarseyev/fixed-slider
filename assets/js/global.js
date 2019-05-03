import "babel-polyfill";

import {binder, fwa} from "./libs/binder";
import {fixedSlider} from "./modules/fixedSlider";


binder({
    bounds: {
        "html": [],
        "body": [],
        ".fixed-slider": fixedSlider
    },
    runTests: false
});
