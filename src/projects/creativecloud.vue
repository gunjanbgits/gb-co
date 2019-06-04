<template>
	<div class="project-block">
<div class="project-section-block">
	<div class="project-title-section">
		<div class="project-title">
			<span class="title-inner">Creative Cloud Desktop<span class="year-label">2016-17</span></span>
		</div>
		<div class="project-meta">
			User Experience Design, User Interface, Prototyping, Product Design
		</div>
	</div>
	<div class="project-info-section">
		<div class="project-details">
			<ul class="arrowlist">
				<li>Optimized in-app user workflows of app-management, file sync and share, background updates and notification.</li>
				<li>Lead the initiative on complete UI overhaul for the desktop creative cloud client to keep it consistent with the brand.</li>
				<li>Primary focus was on improving the user experience from discovery to first launch of application for new users.</li>
				<li>Integrated the centralized notification system with the desktop client for more personalized experience across the board.</li>
				<li>Worked closely with the marketing team to deliver consistent customer experience across various touch points on web, mobile and desktop.</li>
				<li>Designed standalone custom installers for enterprises.</li>
			</ul>
		</div>
		<div class="diagram" v-lazy-container="{ selector: 'img' }"><img data-src="/projects/thor/d1@2x.png"/></div>
	</div>
	<div class="project-graphic-section" v-lazy-container="{ selector: 'img' }">
	<div class="graphic-img" ><img data-src="/projects/thor/01@2x.jpg"/></div>
	</div>
<!-- 	<div class="cc-big-bg hidden" v-lazy-container="{ selector: 'img' }">
		<div class="caption">Design system for Installer Widgets for Creative Cloud Web.<br/>↓</div>
		<div class="graphic-img"><img data-src="/projects/thor/04@2x.jpg"/></div>
	</div> -->
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
</style>

