import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueProgressBar from 'vue-progressbar';
import VueMq from 'vue-mq';
import checkView from 'vue-check-view';
import VueLazyload from 'vue-lazyload';
import Slick from 'vue-slick';
import VueScrollTo from 'vue-scrollto';
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
//import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage);
Vue.use(Slick);
Vue.use(VueLazyload, {
  preload: 2
});
Vue.use(checkView);
Vue.use(VueScrollTo, {
     duration: 1000,
     easing: "ease-in-out",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })
//const arena = new Arena();

const options = {
  color: '#000',
  failedColor: '#874b4b',
  thickness: '1px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  }
};

Vue.use(VueProgressBar, options);
// default breakpoints - customize this
Vue.use(VueMq, {
    breakpoints: { 
      sm: 450,
      md: 769,
      lg: 1366,
      xl: Infinity
    }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
