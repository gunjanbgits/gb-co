<template>
<div class="project-section-block" v-lazy-container="{ selector: 'img' }">
	<div class="symbi-text">
		<div class="project-title">
			<span class="title-inner">Symbiote I<span class="year-label">2018</span></span>
		</div>
		<div class="project-meta">
			Discursive Design
		</div>
		<div class="project-details">
			<p>
Locusts swarm when a chemical “Serotonin” is released in their body when the environmental conditions are right. Serotonin and Dopamine are released in humans when we drink a sugary drink like Coca-Cola. Coca-Cola as a product, an image, a symbol of prosperity and Western outlook has dominated the world with its sugary delight. The installation explores the symbiotic relationship between Coca-Cola as an object and human beings. Cans of Coca-Cola are personified as swarms of locust taking over the world, consuming everything in their way. 
</p><p>
The installation poses the question of balance in this symbiotic relationship and paves the way for a deeper discource about the complex systems around us. Do human exist to serve this object or does the object exist for the humans to consume? Do humans swarm and organize themselves in complex structures to serve the production of coca-cola ?
			</p>
		</div>
		<div class="diagram" v-lazy-container="{ selector: 'img' }"><img data-src="/projects/symbiote1/d1.jpg"/></div>
	</div>
	<div class="symbi-big-image-side">
       <div class="graphic-img"><img data-src="/projects/symbiote1/01.jpg"/></div>
	</div>
	<div class="symbi-big-image-center">
		<div class="graphic-img"><img data-src="/projects/symbiote1/02.jpg"/></div>
	</div>
</div>
</template>

<script>
import myData from '@/data.json';
import ProjectSlider from '../components/ProjectSlider.vue'
// @ is an alias to /src
export default {
  name: "SymbioteOne",
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
  margin-top 20vh
.symbi-big-image-center
  margin 10vh 0
  grid-column 2 / span 10
</style>
