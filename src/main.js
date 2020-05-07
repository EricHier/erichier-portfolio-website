// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/css/main.css";
import "aos/dist/aos.css";

require("typeface-josefin-sans");
require("typeface-baloo-paaji");

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)

  head.script.push({
    src: "https://stats.erichier.tech/js/index.js",
    async: true,
    defer: true,
    "data-domain": "erichier.tech"
  });
}
