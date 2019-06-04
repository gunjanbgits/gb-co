<template>
<div class="home">
  <div class="index hidden">
    <div class="index-button">
      <span>-</span>
      <span>INDEX</span>
    </div>
    <div class="index-list">
      <a class="scroll-button" href="#" v-scroll-to="'#artificiallyesoteric'">artificiallyesoteric</a>
    </div>
  </div>
  <div class="section">
    <div class="home-recent-container" id="recent">
      <div class="home-recent-text recent-work">
        <jelly></jelly>
        <span>Recent work investigates systems, tools, and everything in-between. In practice, object-oriented approach focusses on inter-relationship (context and connections) between elements that comprise of the whole, their individual perspectives and boundaries in which they function. This conceptual inquiry manifests itself in form of activated objects and spaces.</span>
      </div>
      <div class="home-recent-graphic big-arrow">
        ↙
      </div>
    </div>
  </div>
      <juju></juju>
      <onetwenty></onetwenty>
      <wastemaker></wastemaker>
      <symbioteone></symbioteone>
      <symbiotetwo></symbiotetwo>
      <destabilize></destabilize>
      <ekkos></ekkos>
    <div class="section-divider">◊ ◊ ◊</div>
    <div class="empty-space" id="previously"></div>
    <div class="home-previous-container">
      <div class="home-previous-text previous-work">
        <span>Working as a <span class="underline-dashed">User Experience Designer</span> at <span class="underline-dashed">Adobe Systems</span> I was responsible for defining user goals, setting design priorities, and deliver end-to-end workflows on projects and initiatives for professional creative tools and enterprise marketing solutions like Creative Cloud Services & Platform, Adobe InDesign and Adobe Social. Partnered with multiple stakeholders, including product managers, engineers, organizational leaders, and other designers to optimize existing experiences and develop new product concepts.</span>
        <div class="big-arrow">
        ↙
      </div>
      </div>
    </div>
      <creativecloud></creativecloud>
      <idnxt></idnxt>
      <idtouch></idtouch>
      <indesign></indesign>
      <adobesocial></adobesocial>
      <div class="section-divider">◊ ◊ ◊</div>
      <div class="contact-message">
        <div class="bye-message">
          <div class="bye-diagram" v-lazy-container="{ selector: 'img' }">
            <img data-src="/projects/dend@2x.png"/>
          </div>
      </div>
      <ul class="horizontal-list">
        <li><a href="mailto:contact@gunjanb.co">contact@gunjanb.co</a></li>
        <li> <a href="/GunjanB-CV.pdf" target="_blank">CV</a></li>
        <li><a href="https://www.linkedin.com/in/gunjan-bhutani-05036b31/" target="_blank">LinkedIn</a></li>
        <li><a href="https://www.instagram.com/gunjanb_co/" target="_blank">Instagram</a></li>
      </ul>
      </div>
      <div class="section-divider">◊ ◊ ◊</div>
</div>
</template>

<script>

import jelly from '@/components/jelly.vue'
import myData from '@/data.json';
import ProjectSlider from '../components/ProjectSlider.vue';
import Feed from '@/components/Feed.vue';
import Juju from '../projects/juju.vue'
import Onetwenty from '../projects/onetwenty.vue'
import Wastemaker from '../projects/wastemaker.vue'
import Symbioteone from '../projects/symbiote.vue'
import Symbiotetwo from '../projects/symbiotetwo.vue'
import Destabilize from '../projects/destabilize.vue'
import Ekkos from '../projects/ekkos.vue'
import Adobesocial from '../projects/adobesocial.vue'
import Creativecloud from '../projects/creativecloud.vue'
import Idnxt from '../projects/idnxt.vue'
import Indesign from '../projects/indesign.vue'
import Idtouch from '../projects/idtouch.vue'

import { TimelineLite } from 'gsap'
// @ is an alias to /src
export default {
  name: "home",
  components: {
    jelly,
    Feed,
    ProjectSlider,
    Juju,
    Onetwenty,
    Wastemaker,
    Symbioteone,
    Symbiotetwo,
    Destabilize,
    Ekkos,
    Adobesocial,
    Creativecloud,
    Idnxt,
    Indesign,
    Idtouch
  }, 
  data() {
    return {
      myJson: myData
    }
  }
};
</script>

<style lang="stylus">
.home
  padding 1rem
.empty-space
  height 120px
  content ""
.big-arrow
  font-size 5rem
.recent-work
  margin 2rem 0 3rem 0
  position relative
  span
    //background-color rgba(214, 255, 0, 0.75)
    text-shadow 1px 1px 0px #FFFFFF
    color #000
.contact-message
  margin 5rem 0
  text-align center
  .bye-message
    margin 2rem 0
    font-size 3rem
  .bye-diagram
    display inline-block
    max-width 50vw
    img
      max-width 100%
      max-height 100%
      margin 0 auto
.home-recent-container
  display grid
  grid-template-columns repeat(12, 1fr)
  grid-gap 1rem
  grid-auto-rows minmax(0px, auto)
  margin-bottom 20vh
  .home-recent-text
    grid-column 7 / span 4
  .home-recent-graphic
    grid-column 6/ span 1
.medium
  .home-recent-text
    grid-column 7 / span 6
  .home-recent-graphic
    grid-column 6/ span 1
.small
  .home-recent-text
    grid-column 1 / span 12
  .home-recent-graphic
    grid-column 1/ span 1

.home-previous-container
  display grid
  grid-template-columns repeat(12, 1fr)
  grid-gap 1rem
  grid-auto-rows minmax(0px, auto)
  .home-previous-text
    margin 30vh 0
    grid-column 7 / span 5
  .home-previous-graphic
    grid-column 2/ span 1
    margin-bottom 40vh
.medium
  .home-previous-text
    grid-column 7 / span 6
  .home-previous-graphic
    grid-column 1/ span 1
.small
  .home-previous-text
    grid-column 1 / span 12
  .home-previous-graphic
    grid-column 1/ span 1

.project-section-block
  display grid
  grid-template-columns repeat(12, 1fr)
  grid-gap 1rem
  grid-auto-rows minmax(0px, auto)
  .project-title-section
    grid-column 1 / span 12
    position relative
  .project-info-section
    grid-column 1 / span 4
  .project-graphic-section
    grid-column 6 / span 7
  .project-graphic-section-middle-small
    margin 4rem 0
    grid-column 3 / span 8
  .project-graphic-section-middle-big
    margin 4rem 0
    grid-column 1 / span 12

.large
  .project-block
    .project-meta
      max-width 60vw
      font-size .875rem
  .caption-bigone
    .impact
      font-size 2rem
      margin 0 10vw

.small
  .caption-bigone
    .impact
      font-size 1.5rem
      margin 0

.medium
  .project-block
    .project-title
      font-size 1.5rem
    .project-meta
      max-width 60vw
      font-size .75rem
    .diagram
      max-width 50vw
  .project-info-section
    grid-column 1 / span 12
  .project-graphic-section
    grid-column 1 / span 12
  .project-graphic-section-middle-small
    grid-column 1 / span 12
  .projectblock
    .project-info-section
      padding-bottom 1rem
      .slider-controller
        position absolute
        bottom -1rem
        right 0
.small
  .project-block
    margin-bottom 6rem
    .project-title
      font-size 1.4rem
    .project-meta
      max-width 100%
      font-size .75rem
  .project-section-block
    display block
  .project-info-section
    grid-column 1 / span 12
  .project-graphic-section
    grid-column 1 / span 12
  .projectblock
    .project-info-section
      padding-bottom 2rem
      .slider-controller
        position absolute
        bottom 0
        right 0
.section-divider
  width 100%
  text-align center
  font-size 2rem

.project-block
  margin-bottom 4rem
  &.mini
    height 50vh
    overflow hidden
    position relative
    &:after
      content ""
      width 100%
      background linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%)
      height 50%
      position absolute
      bottom 0
      left 0
      z-index 9999
  .project-info-section
    position relative
  .project-title
    margin-top 0rem
    margin-bottom 8px
    font-size 2rem
  .title-inner
    padding-bottom 2px
    border-bottom 2px solid #000
    display inline
    line-height 1.8
  .year-label
    vertical-align super
    font-size .875rem
    margin-left 12px
    font-weight 400
  .project-meta
    display block
    font-size 1rem
    opacity .85
    margin-bottom 2rem
    letter-spacing .45px
    max-width 40vw
  .diagram
    margin 3rem 1vw 3rem 0
    img
      max-width 100%
      max-height 100%
      margin 0 auto
  .graphic-img
    img
      max-width 100%
      max-height 100%
      margin 0 auto
  .caption
    font-size 1rem
    p
      font-size 1rem
</style>
