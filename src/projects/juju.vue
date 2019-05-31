<template>
<div class="project-section-block">
	<div class="ae-text">
		<div class="project-title">
			<span class="title-inner">Artificially Esoteric<span class="year-label">2019</span></span>
		</div>
		<div class="project-meta">
			Participatory Design, Machine Leaning, StoryTelling
		</div>
		<div class="project-details">
			<p>
				The 'JUJU' Machine is a contemporary divination tool inspirited in the esoteric methods like tarot cards and bone readings.
			</p>
			<p>
				Participant fills up a JUJU card and places on the projection surface for interpretation. Onboard Camera through some computer vision magic, analyzes the card and a realtime feedback is projected onto the JUJU card using the overhead projector.
			</p>
			<p>
				A JUJU score is generated based on parameters such as - symmetry of the drawn pattern, proximity between elements of patterns, their orientation to each other and closure. The pattern analysis is further fed into a generative character based Long Short-Term Memory (LSTM) Recurrent Neural Network (RNN) that outputs a near meaningful, generic fortune cookiesque, semi-parsed quasi-fortune.
			</p>
		</div>
		<div class="diagram" v-lazy-container="{ selector: 'img' }"><img data-src="/projects/juju/d1@2x.png"/></div>
	</div>
	<div class="ae-slider">
	<ProjectSlider v-bind:project="myJson.recent[0]"></ProjectSlider>
</div>
<div class="ae-caption">
		<div>
			<p>JUJU machine in action at the <a href="https://www.calacademy.org/nightlife" target="_blank">Nightlife @ California Academy of Sciences</a>, where it was first showcased.</p>
			<p class="big-arrow">↓</p></div>
</div>
<div class="ae-video">
	<div class="project-video">
		<div style="padding-top: 56.25%;background-color: black; position:relative">
			<iframe src="https://player.vimeo.com/video/325754264"  frameborder="0"webkitallowfullscreen mozallowfullscreen allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
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
  name: "Juju",
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
  margin-top 30vh
.ae-video
  margin 10vh 0
  grid-column 3 / span 8
.ae-caption
	margin-top 10vh
	grid-column 8 / span 4
</style>
