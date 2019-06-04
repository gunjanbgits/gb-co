<template>
<div class="project-block">
<div class="project-section-block" v-lazy-container="{ selector: 'img' }">
  <div class="project-title-section">
      <div class="project-title">
      <span class="title-inner">WasteMaker<span class="year-label">2018</span></span>
    </div>
    <div class="project-meta">
      Participatory Design, Information Theory, Performance Art, OpenFrameworks, Machine Learning, Tensorflow
    </div>
  </div>
  <div class="project-info-section">
    <div class="project-details">
      <p>The Wastemaker is a human-machine cataloging system for unquantifiable temporal events. The machine is activated by pushing the button. The machine generates a unique pattern on the screen by analysing, learning and mimick the patterns   in the existing repository. The participant recreates the pattern on the provided stencil. The recreated pattern by the human is then added to the pattern repository which is used by the machine. The machine learning algorithm at initiation was seeded with 5000 randomly generated patterns.</p>
    </div>
    <div class="diagram" ><img data-src="/projects/wastemaker/d1@2x.png"/></div>
  </div>
  <div class="project-graphic-section">
    <div class="graphic-img"><img data-src="/projects/wastemaker/e1.jpg"/></div>
    <div><p class="big-arrow">↑</p><p> Meaning making space, The Wastemaker, 2018</p></div>
  </div>
  <div class="wm-img-grid-1">
    <div class="graphic-img">
      <img data-src="/projects/wastemaker/01.jpg"/>
    </div>
    <div class="caption">1. Participant enters the mark-making space.</div>
  </div>
  <div class="wm-img-grid-2">
    <div class="graphic-img">
      <img data-src="/projects/wastemaker/02.jpg"/>
    </div>
    <div class="caption">2. Participant pushes the button and the machine generates a pattern.</div>
  </div>
  <div class="wm-img-grid-3">
    <div class="graphic-img">
      <img data-src="/projects/wastemaker/03.jpg"/>
    </div>
    <div class="caption">3. Participant observes, contemplate and internalizes the pattern.</div>
  </div>
  <div class="wm-img-grid-4">
    <div class="graphic-img">
      <img data-src="/projects/wastemaker/04.jpg"/>
    </div>
    <div class="caption">4. Participant recreates the pattern and assigns a meaning.</div>
  </div>
  <div class="wm-img-grid-5">
    <div class="graphic-img">
      <img data-src="/projects/wastemaker/05.jpg"/>
    </div>
    <div class="caption">5. Participant contributes the creation to the collective code.</div>
  </div>
  <div class="wm-img-grid-6">
    <div class="graphic-img">
      <img data-src="/projects/wastemaker/06.jpg"/>
    </div>
    <div class="caption">6. Participant exits the meaning-making space.</div>
  </div>
</div>
<div class="project-section-block ">
  <div class="project-graphic-section-middle-big wm-slider-middle">
    <ProjectSlider v-bind:project="myJson.recent[3]"></ProjectSlider>
    <div class="caption-slider"><p class="big-arrow">↑</p><p>Style Transfer with Convolutional Neural Network using the trained model from The Wastemaker, 2018</p></div>
  </div>
</div>
</div>
</template>

<script>
import myData from '@/data.json';
import ProjectSlider from '../components/ProjectSlider.vue'
// @ is an alias to /src
export default {
  name: "Onetwenty",
  components: {
    ProjectSlider
  }, 
  data() {
    return {
      myJson: myData
    }
  }
};
</script>
<style scoped lang="stylus">
.wm-img-grid-1
  grid-column 1 /span 4
.wm-img-grid-2
  grid-column 5 /span 4
.wm-img-grid-3
  grid-column 9 /span 4
.wm-img-grid-4
  grid-column 1 /span 4
.wm-img-grid-5
  grid-column 5 /span 4
.wm-img-grid-6
  grid-column 9 /span 4
.wm-slider-middle
  background-color #f9f9f9
  padding 4rem 20vw 0 20vw
  .caption-slider
    padding 1.5rem 0
    max-width 320px
    margin 0 auto
    text-align center
  .project-graphic-section
    background-color #fff
    box-shadow 0px 0px 25px 0px rgba(0,0,0,0.25)
</style>

