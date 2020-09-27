// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/css/main.css";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faVuejs, faWordpressSimple, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faVuejs, faWordpressSimple, faFileCode, faNodeJs)

require("typeface-josefin-sans");
require("typeface-baloo-paaji");

export default function (Vue, { router, head, isClient }) {
  Vue.component("Layout", DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)

  head.script.push({
    src: "https://stats.erichier.tech/js/index.js",
    async: true,
    defer: true,
    "data-domain": "erichier.tech"
  });

}
