<template>
<div class="project-section-block">
	<div class="cc-text">
		<div class="project-title">
			<span class="title-inner">Creative Cloud Desktop<span class="year-label">2016-17</span></span>
		</div>
		<div class="project-meta">
			User Experience Design, Product Design
		</div>
		<div class="project-details">
			<p>
I worked on 2013 release of <a href="https://www.adobe.com/experience-cloud/social-integration.html" target="_blank">Adobe Social</a> (Social 3.0), a social marketing solution for enterprises. Working as a User Experience Designer, I was responsible for content planning and publishing workflows.
			</p>
		</div>
	</div>
	<div class="cc-slider" v-lazy-container="{ selector: 'img' }">
	<div class="graphic-img" ><img data-src="/projects/thor/01@2x.jpg"/></div>
	</div>
<!-- 	<div class="cc-big-bg hidden" v-lazy-container="{ selector: 'img' }">
		<div class="caption">Design system for Installer Widgets for Creative Cloud Web.<br/>↓</div>
		<div class="graphic-img"><img data-src="/projects/thor/04@2x.jpg"/></div>
	</div> -->
</div>
</template>
<script>
import myData from '@/data.json';
import ProjectSlider from '../components/ProjectSlider.vue'
// @ is an alias to /src
export default {
  name: "Adobesocial",
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
.cc-text
  grid-column 1 / span 4
.cc-slider
  grid-column 6 / span 7
  margin-top 10vh
.cc-big-bg
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
