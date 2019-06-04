<template>
<div class="navbar">
  <div class="nav-on-scroll hidden">
    <div class="nav-logo">Gunjan Bhutani</div>
    <div class="nav-links"></div>
  </div>
  <div class="nav-section-block">
    <div class="nav-section-1 nav-row-1 logo">
      <router-link class="logo-link" to="/">
      Gunjan Bhutani
      </router-link>
    </div>
    <div class="nav-section-2">
      <div class="intro-block">
        Multi-disciplinary designer & creative technologist based in San Francisco, CA. <!-- working with a particular concern towards Systems, Tools and everything in-between. -->
      </div>
    </div>
    <div class="nav-section-2-3">
      <ul class="list-past">
        <li><span class="line-breaker"><span class="scroll-button" href="#" v-scroll-to="'#recent'">recently, MFA Design</span></span><span class="line-breaker"> @ <a href="http://design.cca.edu" target="_blank">California College of the Arts</a></span></li>
        <li><span class="line-breaker"><span class="scroll-button" href="#" v-scroll-to="'#previously'">previously, User Experience Designer</span></span><span class="line-breaker"> @ <a href="https://www.adobe.com/" target="_blank">Adobe</a></span></li>
      </ul>
    </div>
    <div class="nav-section-4 social-links nav-row-1">
      <ul class="horizontal-list">
        <li><a href="mailto:contact@gunjanb.co">contact@gunjanb.co</a></li>
        <li> <a href="/GunjanB-CV.pdf" target="_blank">CV</a></li>
        <li><a href="https://github.com/gunjanbgits" target="_blank">Github</a></li>
        <li><a href="https://www.linkedin.com/in/gunjan-bhutani-05036b31/" target="_blank">LinkedIn</a></li>
        <li><a href="https://www.instagram.com/gunjanb_co/" target="_blank">Instagram</a></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<!-- :class="{navHidden : $route.meta.navHide}" 
:class="{navHidden : $route.meta.navHide}"
:class="{navHidden : $route.meta.navHidden}" -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.navbar
  padding 1rem
  width 100%
  box-sizing border-box
  z-index 999
  color #000
  // .router-link-active
  // .router-link-exact-active
  //   text-decoration none
  //   color #333
.nav-on-scroll
  width 100%
  background-color #fff
  padding 1rem 2rem
  box-shadow 0px 1px 5px 0px rgba(0,0,0,0.15)
  z-index 9999
  position fixed
  top 0
  left 0
  .nav-logo
    cursor pointer

.scroll-button
  text-decoration none
  border-bottom 1px dashed #000
  padding-bottom 2px
  &:hover
    text-decoration none
    cursor s-resize
.logo
  margin-bottom 1rem
  .logo-link
    color #000
    display inline-block
    transition all .3s
    transition-timing-function ease-out
    &:hover
      text-decoration none
  // .router-link-active
  //   border-bottom transparent
.navHidden
  transition-timing-function ease-in
  transition all .3s
  display none !important
.intro-block
  max-width 420px
  margin-bottom 1.5rem
.list-past
  li
    margin-bottom .25rem
    position relative
.social-links
  color inherit
  text-align right
  .horizontal-list
    padding-right 20px
    li
      margin 0
      position relative
      &:after
        position absolute
        right -20px
        bottom 0
        content "↗"
        font-weight 200
.nav-toggle
  position fixed
  right 40px
  top 40px
  height 8px
  width 8px
  transform rotate(45deg)
  background-color #000
  content ""
  z-index 998
.nav-section-block
  display grid
  grid-template-columns repeat(12, 1fr)
  grid-gap 1rem
  grid-auto-rows minmax(0px, auto)
  .nav-section-1
    grid-column 1 / span 3
  .nav-section-2
    grid-column 4 / span 4
  .nav-section-3
    grid-column 7 / span 4
  .nav-section-4
    grid-column 10 / span 3
  .nav-section-2-3
    grid-column 4 / span 6
  .nav-row-1
    grid-row 1
.medium
  .nav-section-block
    display grid
    grid-template-columns repeat(12, 1fr)
    grid-gap 1rem
    grid-auto-rows minmax(0px, auto)
    .nav-section-1
      grid-column 1 / span 3
    .nav-section-2
      grid-column 1 / span 6
    .nav-section-3
      grid-column 7 / span 6
    .nav-section-4
      grid-column 10 / span 3
    .nav-section-2-3
      grid-column 1 / span 8
    .nav-row-1
      grid-row 1
.small
  .logo
    padding-bottom 1rem
  .social-links
    display none !important
  .list-past
    font-size .875rem
  .line-breaker
    display block
  .nav-section-block
    display block
    .nav-section-1
    .nav-section-2
    .nav-section-3
    .nav-section-4
    .nav-section-2-3
    .nav-row-1
      display block
      margin 1rem 0


</style>