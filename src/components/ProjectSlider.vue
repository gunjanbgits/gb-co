<template>
<div  class="slider-outer">
	<div class="slider-controller">
		<button @click="prev" type="button" class="slick-prev slick-arrow-outer">←</button>
		<div class="slick-counter">
			{{slideCount}}/{{project.images.length}}
		</div>
		<button @click="next" type="button" class="slick-next slick-arrow-outer">→</button>
	</div>
	<div class="project-slider">
		<slick
		ref="slick" :options="slickOptions" @afterChange="handleAfterChange"
		>
		<div v-for="image in project.images" class="image-container">
			<div class="center-image-container">
				<img :src="image" alt="">
			</div>
		</div>
		</slick>
	</div>
</div>
</template>

<script>
import 'slick-carousel/slick/slick.css';
import Slick from 'vue-slick';

export default {
  name: "ProjectSlider",
  components: {
  	Slick
  },
  props: ['project'],
  data() {
        return {
        	slideCount: 1,
			slickOptions: {
				prevArrow: '<button type="button" class="slick-prev">←</button>',
				nextArrow: '<button type="button" class="slick-next">→</button>',
				adaptiveHeight: false
                // Any other options that can be got from plugin documentation
            },        
        }
    },
    methods: {
    	next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },
    	handleAfterChange(event, slick, currentSlide) {
            this.slideCount = currentSlide + 1;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.slider-outer
	margin-top 48px
	position relative
	.project-slider
		position relative
		.slick-arrow
			width 29%
			background-color transparent
			border none
			color #333
			font-size 1.25rem
			font-weight 200
			height 100%
			position absolute
			bottom 0
			cursor pointer
			content "-"
			z-index 999
			text-indent -9999px
		.slick-next
			right 0
			cursor e-resize
		.slick-prev
			left 0
			cursor w-resize
.image-container
	background-color #fff
.center-image-container
	padding 0
	box-sizing border-box
	img
		max-width 100%
		max-height 100%
		margin 0 auto
.slider-controller
	position absolute
	top -48px
	left 0px
.slick-counter
	letter-spacing 2px
	font-size 2rem
	display inline-block
	margin-right .5rem
.slick-arrow-outer
	background-color transparent
	border none
	padding .175rem 0 0 0
	cursor pointer
	content "-"
	margin-right .5rem
	width 48px
	font-size 2rem
</style>
