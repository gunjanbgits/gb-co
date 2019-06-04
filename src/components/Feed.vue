<template>
  <div class="feed">
    <div class="feed-label">
    	Explorations, process and stuff I make out of pure curiosity
    </div>
    <masonry
	  :cols="{default: 8, 1000: 6, 700: 4, 400: 2}"
	  :gutter="16"
	  >
    <!-- <div>{{filteredPosts}}</div> -->
    <div v-for="content in filteredPosts" :key="content.id">
		<div class="feed-tile" v-if="content.class == 'Image'">
	    	<img :src="content.image.display.url" />
	    </div>
		<div class="feed-tile" v-if="content.class == 'Media'">
	    	<img :src="content.image.display.url" />
	    </div>
    </div>
	</masonry>
  </div>
</template>

<script>
export default {
  name: "Feed",
  data(){
		return {
      	p2017: []
   			}
  	},
		created() {
			this.$Progress.start()
			this.arena.channel('gb-co').get()
			  .then(chan => {
				this.p2017 = chan.contents
				this.$Progress.finish()
				})
			  .catch(err => console.log(err))
			},
		computed: {
		  filteredPosts: function () {
		    return this.p2017.slice().reverse().filter((post) => {
		    	if(post.class != "Channel"){
		    		return post;
		    	}
		    })
		  }
		}	
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.feed-label
	font-size 1rem
	text-align center
	margin 2rem	
.feed-tile
	img
		max-width 100%
		max-height 100%
		margin 0 auto
</style>
