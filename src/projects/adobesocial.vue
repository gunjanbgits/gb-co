<template>
<div class="project-block">
<div class="project-section-block">
	<div class="project-title-section">
		<div class="project-title">
			<span class="title-inner">Adobe Social<span class="year-label">2012-14</span></span>
		</div>
		<div class="project-meta">
			User Experience Design, User Testing, Prototyping, User Interface Design
		</div>
	</div>
	<div class="project-info-section">
		<div class="project-details">
			<p>I worked on 2013 release of <a href="https://www.adobe.com/experience-cloud/social-integration.html" target="_blank">Adobe Social</a> (Social 3.0), a social marketing solution for enterprises. Working as a User Experience Designer, I was responsible for content planning and publishing workflows.</p>
			<div class="sub-details">
			<p>Mobile First Responsive Web Interface, 
			Multi-Platform Publishing, Custom audience targeting capabilites, Integrated url shortening, Custom Template based usecases, and Multi-level approvals workflows.
			</p>
			<p>The new predictive publishing feature in Adobe Social enabled social teams to deliver content that would best resonate with their audience. The tool makes engagement predictions and timing recommendations using advanced sentiment analysis and predictive text mining algorithms based on historic data around engagement, post time, and sentiment.</p>
			<p>
					Worked closely with the Adobe Research Lab and the Data Sciences team to integrate the capability within the existing publishing workflows.
				</p>
				<p>Content first colloboration and planning workflows with the Content Calendar.</p>
				<p>Publish from anywhere capabilities using the publishing widget that integrated with the rest of the Adobe Marketing Cloud solutions.</p>
			</div>
		</div>
	</div>
	<div class="project-graphic-section">
	<ProjectSlider v-bind:project="myJson.previously[0]"></ProjectSlider>
</div>
</div>
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
.subheading
	display inline-block
	margin-bottom 1rem
	position relative
	&:before
		content "→"
		position absolute
		left -1.5rem
		top -2px
		height 1rem
		width 1.5rem
.sub-details
	font-size 1rem
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
