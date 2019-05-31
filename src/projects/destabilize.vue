<template>
<div class="project-section-block" v-lazy-container="{ selector: 'img' }">
	<div class="symbi-text">
		<div class="project-title">
			<span class="title-inner">DeStablize<span class="year-label">2019</span></span>
		</div>
		<div class="project-meta">
			Participatory Design, Machine Leaning, StoryTelling
		</div>
		<div class="project-details">
			<p>
The machine is made up of 16 linear-actuators which move the small patch of land along the z-axis, emulating the motion of waves. The motion of the waves is driven by the data captured from the waves at <a href="https://goo.gl/maps/aYPzqk3mJS27e4oS6" target="_blank">Mission Creek, San Francisco.</a> The machine is a site specific object gesture that raises the question - </p><h2>What’s the fascination
with stable ground ?
			</h2>
		</div>
		<div class="diagram" v-lazy-container="{ selector: 'img' }"><img data-src="/projects/destabilize/d1@2x.png"/></div>
	</div>
	<div class="symbi-big-image-side">
       <div class="graphic-img"><img data-src="/projects/destabilize/01.jpg"/></div>
	</div>
	<div class="ds-video">
	<div class="project-video">
		<div style="padding-top: 56.25%;background-color: black; position:relative">
			<iframe src="https://player.vimeo.com/video/325741087"  frameborder="0"webkitallowfullscreen mozallowfullscreen allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
		</div>
	</div>
</div>
</div>
</template>

<script>
import myData from '@/data.json';
import ProjectSlider from '../components/ProjectSlider.vue'
// @ is an alias to /src
export default {
  name: "Destabilize",
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
.symbi-text
  grid-column 1 / span 4
.symbi-big-image-side
  grid-column 6 / span 7
  margin-top 30vh
.ds-video
  margin 10vh 0
  grid-column 3 / span 8
</style>
