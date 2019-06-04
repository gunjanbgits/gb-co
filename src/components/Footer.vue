<template>
  <div class="leFooter">
  	<ul>
  		<li><router-link to="/" exact>Home</router-link></li>
  		<li><router-link to="/about" exact>About</router-link></li>
  		<li><router-link to="/Projects" exact>Projects</router-link></li>
  	</ul>
  </div>
</template>

<script>
export default {
  name: "Lefooter"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

.leFooter
	padding 20px
	ul
		list-style none
		margin 0
		padding 0

</style>