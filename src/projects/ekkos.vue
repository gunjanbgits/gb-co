<template>
<div class="project-section-block" v-lazy-container="{ selector: 'img' }">
	<div class="ek-text">
		<div class="project-title">
			<span class="title-inner">Ekkos<span class="year-label">2019</span></span>
		</div>
		<div class="project-meta">
			Participatory Design, Machine Leaning, StoryTelling
		</div>
		<div class="project-details">
			<p>
			Ekkos is an iOS application with <span class="bg-gradient">no visual interface.</span> It turns the phone into a haptic echo chamber for the tap and swipe gestures on the screen. When the user first taps, the immediate haptic feedback affirms the detection of a gesture. The sequence of the gestures made on the screen are mirrored by the phone after a delay of 2 seconds using the haptic feedback.</p><p>
			Touch is both immediate and unmediated. Touch has no delay, no medium or “intervening substance” through which the stimulus travels between objects. Touch is the truth, identified with the real. Eyes and ears can be deceived, and taste is personal and subjective, but touch is proof.
		</p>
	</div>
	<div class="diagram" v-lazy-container="{ selector: 'img' }"><img data-src="/projects/ekkos/d1@2x.png"/></div>
</div>
<div class="ek-big-image-side">
	<div class="graphic-img"><img data-src="/projects/ekkos/01.png"/></div>
</div>
<div class="ek-img-grid-1">
	<div class="graphic-img"><img data-src="/projects/ekkos/04.jpg"/></div>
	<div class="caption">Test Environment, The Intervention, 2018</div>
</div>
<div class="ek-img-grid-2">
	<div class="graphic-img"><img data-src="/projects/ekkos/03.jpg"/></div>
	<div class="caption">Activity Area, The Intervention, 2018</div>
</div>
<div class="ek-center-text">
	<div class="project-title">
		<span class="title-inner">The Intervention<span class="year-label">2018</span></span>
	</div>
	<p>
	The participant is asked to spend 7 minutes in the test environment with no specific instructions. Participant behavior is observed and cataloged. </p>
	<p class="ek-list-title">Test Environment Elements</p>
	<ul class="ek-test-env">
		<li>1 x Table (48”x 48”x 36”)</li>
		<li>2 x Big Rocks (Marin Headlands)</li>
		<li>3 x Small Rocks (Baker’s Beach)</li>
		<li>1 x iPhone with Ekkos App (Apple iPhone 8)</li>
		<li>2 x Acorns (Golden Gate Park)</li>
		<li>1 x Feather (Bird - Unknown, Found at Rodeo Beach)</li>
		<li>1 x Metal Folding Chair (Brand uLine)</li>
		<li>1 x Video Recording Device (Canon 5D Mark III)</li>
		<li>1 x Tripod (Manfrotto)</li>
	</ul>
</div>
	<div class="ek-img-big">
      	<div class="graphic-img">
      		<img data-src="/projects/ekkos/05.jpg"/>
      	</div>
    </div>
	<div class="ek-img-small-gif">
      	<div class="graphic-img">
      		<img data-src="/projects/ekkos/patrick.gif"/>
      	</div>
    </div>
  	<div class="caption-bigone">
  		<p>↑<p><p class="impact">
  		Today's mainstream technologies are well designed for rapid consumption of information and linear, sequential action. A side effect of their effectiveness to tasks, however, is a loss of undirected, curiosity-driven exploration in the world.</p>
  	</div>
</div>
</template>

<script>
import myData from '@/data.json';
import ProjectSlider from '../components/ProjectSlider.vue'
// @ is an alias to /src
export default {
  name: "Ekkos",
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
.ek-text
  grid-column 1 / span 4
.ek-big-image-side
  grid-column 6 / span 7
  margin 20vh 0
.ek-center-text
  margin 10vh 0
  grid-column 4 / span 6
.ek-img-big
	grid-column 2 /span 10
.ek-img-small-gif
	grid-column 5 /span 4
	position relative
	.graphic-img
		opacity .85
.caption-bigone
	grid-column 1 /span 12
	position relative
	top -10px
	text-align center
	font-size 5rem
	.impact
		margin 0 20vw
		line-height 1.5
		font-size 2.5rem
.ek-img-grid-1
	grid-column 3 / span 4
.ek-img-grid-2
	grid-column 7 / span 4
.ek-list-title
	font-size 1rem
	margin-bottom 4px
	font-weight 700
.ek-test-env
	margin-bottom 2rem
	li
		font-size 1rem
		margin 0
.bg-gradient
	background #000
	color #fff
	padding 0 4px
</style>
