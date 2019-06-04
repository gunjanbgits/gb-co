<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <div class="wrapper" :class="$mq | mq({ sm: 'small', md: 'medium', lg: 'large', xl: 'xlarge'})">
      <navbar/>
        <router-view />
<!--       <transition name="fade" mode="out-in">
      </transition> -->
    </div>
  </div>
</template>

<script>
import 'normalize.css';
import Navbar from './components/Navbar.vue'
import Lefooter from './components/Footer.vue'

export default {
    name: 'App',
    components: {
      Navbar,
      Lefooter
    },
    data(){
      return{
        scrollPosition: 0
      }
    },
    mounted () {
      window.addEventListener('scroll', this.updateScroll);
      //  [App.vue specific] When App.vue is finish loading finish the progress bar
      this.$Progress.finish();
    },
    created () {
      //  [App.vue specific] When App.vue is first loaded start the progress bar
      this.$Progress.start()
      //  hook the progress bar to start before we move router-view
      this.$router.beforeEach((to, from, next) => {
        //  does the page we want to go to have a meta.progress object
        if (to.meta.progress !== undefined) {
          let meta = to.meta.progress
          // parse meta tags
          this.$Progress.parseMeta(meta)
        }
        //  start the progress bar
        this.$Progress.start()
        //  continue to next page
        next()
      })
      //  hook the progress bar to finish after we've finished moving router-view
      this.$router.afterEach((to, from) => {
        //  finish the progress bar
        this.$Progress.finish()
      })
    },
    methods: {
      updateScroll() {
        this.scrollPosition = window.scrollY
      }
    },
    destroy() {
    window.removeEventListener('scroll', this.updateScroll)
    }
  }
</script>

<style lang="stylus">

@font-face {

  font-family: 'Zirkon';
  src: url('./assets/fonts/GT-Zirkon-Book.eot'); /* IE9 Compat Modes */
  src: url('./assets/fonts/GT-Zirkon-Book.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/GT-Zirkon-Book.woff') format('woff'), /* Pretty Modern Browsers */
       url('./assets/fonts/GT-Zirkon-Book.ttf')  format('truetype'); /* Safari, Android, iOS */
  font-weight: normal;
  font-style: normal;
}
@font-face {

  font-family: 'Maison';
  src: url('./assets/fonts/MaisonNeue-Mono.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/MaisonNeue-Mono.woff') format('woff'), /* Pretty Modern Browsers */
       url('./assets/fonts/MaisonNeue-Mono.ttf')  format('truetype'); /* Safari, Android, iOS */
  font-weight: normal;
  font-style: normal;
}

@font-face {

  font-family: 'Zirkon';
  src: url('./assets/fonts/GT-Zirkon-Book-Italic.otf')  format('truetype'); /* Safari, Android, iOS */
  font-weight: normal;
  font-style: italic;
}

// font-family: 'Space Mono', monospace;
// font-family: 'Neuton', serif;
  // font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

#app
  font-style normal
  font-family 'Zirkon', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-rendering optimizeLegibility
  font-kerning normal
  font-feature-settings "kern" 1,'ss01' 0,'ss02' 0,'ss03' 0,'ss04' 0;
  background-color #fff
  box-sizing border-box
  position relative
  line-height 1.5
  letter-spacing -.1px
  padding 1rem

.xlarge
  font-size 1.375rem
.large
  font-size  1.1rem
.medium
  font-size 1rem
.align-right
  text-align right
.italics
  font-style italic
  letter-spacing -.5px
.light
  opacity .5
.underline-dashed
  padding-bottom 2px
  border-bottom 1px dashed #000

// .section-block
//   display grid
//   grid-template-columns repeat(12, 1fr)
//   grid-gap 1rem
//   grid-auto-rows minmax(0px, auto)
//   .section-title
//     grid-column 1/3
//   .section-content
//     grid-column 3/8
//   .section-side-note
//     grid-column 1/3
//   .section-1
//     grid-column 1 / span 3
//   .section-2
//     grid-column 4 / span 3
//   .section-3
//     grid-column 7 / span 3
//   .section-4
//     grid-column 10 / span 3
//   .section-2-3
//     grid-column 4 / span 6
//   .section-3-4
//     grid-column 7 / span 6
//   .section-2-3-4
//     grid-column 4 / span 9
//   .grid-row-1
//     grid-row 1
//   .grid-row-2
//     grid-row 2
//   .grid-row-3
//     grid-row 3
//   .grid-row-4
//     grid-row 4
  

.mono
  font-family 'Source Code Pro', monospace

.serif
  font-family 'Source Serif Pro', serif
  
#nav
  a
    color #000
    &.router-link-exact-active
      color #000

h4
  font-size .875rem
  font-weight 200
  margin 0
  line-height 1.8rem
  margin-bottom 1rem
h1
h2
h3
h5
  font-weight 400
  margin 4px 0
  font-size 2rem
h6
  margin 8px 0 32px 0
  font-weight 400
  font-style normal
  font-size .75rem
  color #111

p
  margin 0
  margin-bottom 1rem

ul
  list-style none
  margin 0
  padding 0
  li
    margin-bottom .5rem

.arrowlist
  li
    position relative
    margin-left 1.5rem
    &:before
      content "→"
      position absolute
      left -1.5rem
      top -2px
      height 1rem
      width 1.5rem

::selection {
  background: #dedede;
  color: #000;
  opacity: 1;
  text-shadow: none;
}
.hidden
  display none !important
a
  color #0000ff
  text-decoration none
  &:hover
    text-decoration underline

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

img[lazy='loaded'] {
  opacity: 0;
  animation-name: fadein;
  animation-duration: .5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-direction: normal;
  animation-timing-function: ease-out;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}

textarea, select, input, button { outline: none; }

</style>
