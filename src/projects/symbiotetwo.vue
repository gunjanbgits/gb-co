<template>
<div class="project-block">
<div class="project-section-block" v-lazy-container="{ selector: 'img' }">
  <div class="project-title-section">
        <div class="project-title">
      <span class="title-inner">Symbiote II<span class="year-label">2019</span></span>
    </div>
    <div class="project-meta">
      Object Oriented Ontology, Network Theory, Discursive design, Physical Computation, Arduino, Digital Fabrication, Rapid Prototyping.  
    </div>
  </div>
	<div class="project-info-section">
		<div class="project-details">
			<p>
Symbiote - II is an experiment to understand and visualize relationships between devices that are always connected through the internet. We are surrounded by gadgets and gizmos which are constantly communicating to each other but that communication cannot be perceived by us in an intuitive way.</p><p>
The pair of IoT devices imitate the different symbiotic relationship through the embedded feedback generators. The devices reveal the symbiotic nature of their existence on external interventions like changes in proximity, orientation, ambient lighting and temperature by collectively responding through sound and vibrations.
			</p>
		</div>
		<div class="diagram" v-lazy-container="{ selector: 'img' }"><img data-src="/projects/symbiote2/d1@2x.png"/></div>
	</div>
	<div class="project-graphic-section">
       <div class="graphic-img"><img data-src="/projects/symbiote2/01.jpg"/></div>
	</div>
      <div class="symbi-img-grid-1">
      	<div class="graphic-img">
      		<img data-src="/projects/symbiote2/01.gif"/>
      	</div>
      	<div class="caption">Orientation</div>
      </div>
      <div class="symbi-img-grid-2">
      	<div class="graphic-img">
      		<img data-src="/projects/symbiote2/02.gif"/>
      	</div>
      	<div class="caption">Ambient Light and Temprature</div>
      </div>
      <div class="symbi-img-grid-3">
      	<div class="graphic-img">
      		<img data-src="/projects/symbiote2/03.gif"/>
      	</div>
      	<div class="caption">Proximity</div>
      </div>
      <div class="spacer"></div>
</div>
</div>
</template>

<script>
import myData from '@/data.json';
import ProjectSlider from '../components/ProjectSlider.vue'
// @ is an alias to /src
export default {
  name: "Symbiotetwo",
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
.symbi-img-grid-1
  grid-column 1 /span 4
.symbi-img-grid-2
  grid-column 5 /span 4
.symbi-img-grid-3
  grid-column 9 /span 4 
.spacer
  height 4rem
  </style>
