<template>
<div class="project-section-block">
        <div class="ae-text">
          <div class="project-title">
            <span class="title-inner">One Twenty give-or-take Fifteen<span class="year-label">2019</span></span>
          </div>
          <div class="project-meta">
            Participatory Design, Machine Leaning, StoryTelling
          </div>
          <div class="project-details">
            <p>One Twenty give-or-take Fifteen 2018
            The machine One Twenty give-or-take Fifteen is a clock and a rice dispenser. The machine takes 120 ± 15 days to dispense about 2 cups of rice.</p>
            <p>120 days give-or-take 15 is the amount of time it takes for the rice to grow. Aim of the machine is to instigate oblique ways to observe and understand the systems that make up our contemporary culture and social structures. Need for efficiency and convenience has led us to create complex systems of production, transportation and other logistical needs. Because of these systems we find ourself disconnected to natural instincts, the environment and its rhythms.</p>
        </div>
        <div class="diagram" v-lazy-container="{ selector: 'img' }"><img data-src="/projects/12015/d1@2x.png"/></div>
      </div>
      <div class="ae-slider">
      <ProjectSlider v-bind:project="myJson.recent[1]"></ProjectSlider>
    </div>
    <div class="ae-video">
      <div class="project-video">
        <div style="padding-top: 56.25%;background-color: black; position:relative">
          <iframe src="https://player.vimeo.com/video/291293761"  frameborder="0"webkitallowfullscreen mozallowfullscreen allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
        </div>
      </div>
    </div>
    <div class="ae-video">
       <div class="graphic-img" v-lazy-container="{ selector: 'img' }"><img data-src="/projects/12015/p1.jpg"/></div>
       <div>
         <p class="big-arrow">↑</p><p>Timelapse of the rice paddy field, Ink jet print on archival matte paper,
120 ± 15, 2018</p>
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
.ae-text
  grid-column 1 / span 4
.ae-slider
  grid-column 6 / span 7
  margin-top 20vh
.ae-video
  margin 10vh 0
  grid-column 3 / span 8
</style>

