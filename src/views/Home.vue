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
    <div class="empty-space hidden" id="recent">
    </div>
    <div class="home-recent-container">
      <div class="home-recent-text recent-work">
        <jelly></jelly>
        <span>Recent work investigates systems, tools, and everything in-between. In practice, object-oriented approach focusses on inter-relationship (context and connections) between elements that comprise of the whole, their individual perspectives and boundaries in which they function. This conceptual inquiry manifests itself in form of activated objects and spaces.</span>
      </div>
      <div class="home-recent-graphic big-arrow">
        ↙
      </div>
    </div>
  </div>
    <div id="artificiallyesoteric" class="projectblock section">
      <juju></juju>
    </div>
    <div class="projectblock section">
      <onetwenty></onetwenty>
    </div>
    <div class="projectblock section">
        <wastemaker></wastemaker>
    </div>
    <div class="projectblock section">
        <symbioteone></symbioteone>
    </div>
    <div class="projectblock section">
        <symbiotetwo></symbiotetwo>
    </div>
    <div class="projectblock section">
        <destabilize></destabilize>
    </div>
    <div class="projectblock section">
      <ekkos></ekkos>
    </div>
    <div class="section-divider">◊ ◊ ◊</div>
    <div class="empty-space" id="previously"></div>
    <div class="home-previous-container">
      <div class="home-previous-text previous-work">
        <span>Previous work investigates systems, tools, and everything in-between. In practice, object-oriented approach focusses on inter-relationship (context and connections) between elements that comprise of the whole, their individual perspectives and boundaries in which they function. This conceptual inquiry manifests itself in form of activated objects and spaces.</span>
        <div class="big-arrow">
        ↓
      </div>
      </div>
    </div>
    <div class="projectblock">
      <creativecloud></creativecloud>
    </div>
    <div class="projectblock">
      <idnxt></idnxt>
    </div>
    <div class="projectblock">
      <idtouch></idtouch>
    </div>
    <div class="projectblock">
      <indesign></indesign>
    </div>
    <div class="projectblock">
      <adobesocial></adobesocial>
    </div>
</div>
</template>

<script>

import jelly from '@/components/jelly.vue';
import myData from '@/data.json';
import ProjectSlider from '../components/ProjectSlider.vue'
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
    grid-column 6 / span 4
  .home-previous-graphic
    grid-column 2/ span 1
    margin-bottom 40vh
.medium
  .home-previous-text
    grid-column 1 / span 4
  .home-previous-graphic
    grid-column 1/ span 1
.small
  .home-previous-text
    grid-column 1 / span 4
  .home-previous-graphic
    grid-column 1/ span 1

.project-section-block
  display grid
  grid-template-columns repeat(12, 1fr)
  grid-gap 1rem
  grid-auto-rows minmax(0px, auto)
  .project-info-section
    grid-column 1 / span 4
  .project-graphic-section
    grid-column 5 / span 8
  .project-video-section
    margin 4rem 0
    grid-column 4 / span 6


.img-grid-wastemaker
  display grid
  grid-template-columns auto auto auto
  grid-template-rows auto auto
  grid-gap 10px
  .img-grid-item
    img
      max-width 100%
      max-height 100%
      margin 0 auto


.medium
  .project-info-section
    grid-column 1 / span 12
  .project-graphic-section
    grid-column 1 / span 12
  .projectblock
    .project-info-section
      padding-bottom 1rem
      .slider-controller
        position absolute
        bottom -1rem
        right 0
.small
  .projectblock
    margin-bottom 6rem
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
  font-size 5rem

.projectblock
  margin-bottom 20vh
  .project-info-section
    padding-right 20px
    position relative
  .project-title
    margin-top 1rem
    margin-bottom 8px
    font-size 2rem
    margin-bottom 2rem
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
    display none
    font-size 1rem
    margin-bottom 2.875rem
    opacity .5
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
