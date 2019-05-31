<template>
<div class="project-section-block" v-lazy-container="{ selector: 'img' }">
	<div class="id-text">
		<div class="project-title">
			<span class="title-inner">InDesign Next<span class="year-label">2016</span></span>
		</div>
		<div class="project-meta">
			User Experience Design, Product Design
		</div>
		<div class="project-details">
			<p>
New Page Layouting System imagined from ground up, focussed on scalability and extensibility to support workflows for cross channel publishing needs.
			</p>
		</div>
		<div class="diagram">
			<img data-src="/projects/idnxt/d1.jpg"/>
		</div>
	</div>
	<div class="idnxt-slider">
	<div class="graphic-img"><img data-src="/projects/idnxt/01.jpg"/></div>
	</div>
	<div class="id-big-bg">
		<div class="graphic-img"><img data-src="/projects/idnxt/03.jpg"/></div>
	</div>
</div>
</template>
<script>
import myData from '@/data.json';
import ProjectSlider from '../components/ProjectSlider.vue'
// @ is an alias to /src
export default {
  name: "Idnxt",
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

<style lang="stylus">
.id-text
  grid-column 1 / span 4
.idnxt-slider
  grid-column 6 / span 7
  margin-top 20vh
.id-big-bg
  margin 10vh 0
  grid-column 1 / span 12
  .caption
  	text-align center
  	padding 2rem 0
</style>

<!-- <p>
Publisher features enabled marketers to simultaneously post content to Facebook, Google+, and LinkedIn pages; Twitter and Sina Weibo accounts; and your YouTube channels. Marketers could also create, manage and publish to Audience Groups and Page Groups.
</p>
<p>
Mobile First Responsive Web Interface. </p><p>
Improved Information Architecture - Simplified navigation, structure and streamlined taskflows. 
</p><p>
Multi-Platform Publishing, Predictive Publishing Optimization, Custom audience targeting, Integrated link shortening, Template, and Multi-level approvals work-flow.
</p>
<div class="project-section-title">Predictive Publishing</div>
<p>
The new predictive publishing feature in Adobe Social enabled social teams to deliver content that would best resonate with their audience. The tool makes engagement predictions and timing recommendations using advanced sentiment analysis and predictive text mining algorithms based on historic data around engagement, post time, and sentiment.
</p>
<p>
I worked with the Adobe Research Lab and the Data Sciences team to integrate the capability with the existing publishing workflows.
</p> -->
