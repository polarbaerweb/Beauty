import * as webp from "./base_modules/webp_extension_handler.js";
import * as burger from "./base_modules/burger.js"
import * as aside from "./aside_handler/aside_handler.js";
import * as card_handler from "./card_handler/card_handler.js";
import * as form from "./forms_handler/form_handler.js"
import * as button from "./button_handler/button_handler.js";
import * as error from "./error_handler/error_handler.js";
import * as success from "./success_handler/success_handler.js";
import * as login from "./authentication/login/login.js";
import * as logout from "./authentication/logout/logout.js";
import * as signup from "./authentication/signup/signup.js";
import * as reset_password from "./authentication/reset_password/reset_password.js";
import * as track_viewport_resizing from "./base_modules/background_modification/track_viewport_resizing.js";
import { SwiperOperation } from "./swiper/swiper.js";

webp.handleWebpSupporter()


const swiper_operation = new SwiperOperation()
swiper_operation.attachMethodToButton()