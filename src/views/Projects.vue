<template>
  <div class="project-detail-container">
	 <router-view />
  	<div class="section-block">
  		<div class="section-content">
  			<div class="label">Recent Work</div>
  			<ul class="project-list">
  				<li class="project-list-item">
  					<span class="label-date project-date">2019</span>
  						<router-link to="/projects/artificiallyesoteric" exact>Artificially Esoteric
  						</router-link>
  				</li>
  				<li class="project-list-item">
  					<span class="label-date project-date">2019</span>
  						<router-link to="/projects/adobesocial" exact>Adobe Social
  						</router-link>
  				</li>
  				<li class="project-list-item">
  					<span class="label-date project-date">2019</span>
  						<router-link to="/projects/artificiallyesoteric" exact>Artificially Esoteric
  						</router-link>
  				</li>
  				<li class="project-list-item">
  					<span class="label-date project-date">2019</span>
  						<router-link to="/projects/artificiallyesoteric" exact>Artificially Esoteric
  						</router-link>
  				</li>
  			</ul>
  		</div>
  		
  	</div>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'

export default {
  name: "projects", 
  components: {
      Navbar
  }
};
</script>
<style lang="stylus">
//Project Page CSS

.project-detail-container
	padding 2rem

.project-title
	position relative
	display inline-block
	border-bottom 1px solid #000
	font-weight 500
	margin-bottom 2rem
	font-size 1.2rem
	.topLabel
		font-feature-settings "sups"
		padding 2px 0 0 6px
		color #000
.side-note
	text-align right
	font-size .625rem
	text-transform uppercase
	font-family 'Source Code Pro', monospace
	letter-spacing .2px
	opacity .5
	padding 0 1rem 0 2rem
	box-sizing border-box
.intro-container
	padding-top 0px !important
	text-align left
.project-text-block
	max-width 480px
.project-text-block-big
	font-size 2rem
	margin-bottom 2rem
	max-width 580px
.project-video-container
	max-width 980px
.project-content-wrapper
	padding 20px 0
	.project-text-block
		padding 10px 0
		font-size 1rem
.project-image-container
	padding 10px 0
	.img-label
		font-size 12px
		padding 4px 0
	img
		display block
		width 100%
		height auto

</style>