<template>
<div class="project-section-block">
	<div class="id-touch-text">
		<div class="project-title">
			<span class="title-inner">InDesign Touch<span class="year-label">2016</span></span>
		</div>
		<div class="project-meta">
			User Experience Design, Product Design
		</div>
		<div class="project-details">
			<p>
New Page Layouting System imagined from ground up, focussed on scalability and extensibility to support workflows for cross channel publishing needs.New Page Layouting System imagined from ground up, focussed on scalability and extensibility to support workflows for cross channel publishing needs.New Page Layouting System imagined from ground up, focussed on scalability and extensibility to support workflows for cross channel publishing needs.New Page Layouting System imagined from ground up, focussed on scalability and extensibility to support workflows for cross channel publishing needs.
			</p>
		</div>
	</div>
	<div class="id-touch-slider">
	<ProjectSlider v-bind:project="myJson.previously[2]"></ProjectSlider>
	</div>
	<div class="touch-onb">
		<div>
			Onboarding Experience for InDesign Touch Workspace
			<p class="big-arrow">↓</p>
		</div>
		<iframe style="border:none;" src="http://gunjanb.co/WEB2018/projects/extra/idTouch-ftue/index.html"></iframe>
	</div>
</div>
</template>
<script>
import myData from '@/data.json';
import ProjectSlider from '../components/ProjectSlider.vue'
// @ is an alias to /src
export default {
  name: "Intouch",
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
.id-touch-text
	grid-column 1 / span 4
.id-touch-slider
	grid-column 6 / span 7
	margin-top 20vh
.touch-onb
	text-align center
	margin 10vh 10vw
	grid-column 1 / span 12
	.caption
		text-align center
		padding 2rem 0
	iframe
		width 100%
		min-height 90vh
		margin 0 auto
		border none
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
