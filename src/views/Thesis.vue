<template>
  <div class="thesis">
    <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
      <div class="section-container">
        <div class="content">
          <h5 class="underline">Exploiting the Unintentional</h5>
          <h6>Gunjan Bhutani</h6>
        </div>
      </div>
    </div>
    <div class="section">
      Second section ...
    </div>
  </full-page>
  </div>
</template>
<script>
export default {
  name: "thesis",
  data() {
    return {
      options: {
        menu: '#menu'
      },
    }
  }
};
</script>
<style lang="stylus">
@import url("https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css")
.section-container
  width 100%
  height 100%
  position relative
  .content
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
</style>