import DefaultLayout from '~/layouts/Default.vue'
import '~/resources/scss/main.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCertificate, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { i18n } from '../src/i18n'
import VueTippy, { TippyComponent } from "vue-tippy";
import VueFuse from 'vue-fuse'

config.autoAddCss = false;
library.add(faGithub, faLinkedinIn, faBars, faStackOverflow, faCertificate, faSun, faMoon)
import VueDisqus from 'vue-disqus'

// import Vssue from 'vssue';
// import GithubV3 from '@vssue/api-github-v3';
// import 'vssue/dist/vssue.css'
export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.use(i18n)
  appOptions.i18n = i18n
  Vue.use(VueTippy);
  Vue.use(VueFuse);

  Vue.use(VueDisqus);
  // Vue.use(Vssue, {
  //   api: GithubV3,
  //   owner: 'LucasFelixAquino',
  //   repo: 'LFXA-Site',
  //   clientId: process.env.GRIDSOME_VSSUE_CLIENT_ID,
  //   clientSecret: process.env.GRIDSOME_VSSUE_CLIENT_SECRET_ID,
  // })

  Vue.component("tippy", TippyComponent);
  // Add attributes to HTML tag
  head.htmlAttrs = { class: 'min-h-full antialiased' }

  // Add attributes to BODY tag
  head.bodyAttrs = { class: 'text-black-900 leading-normal text-lg' }

}