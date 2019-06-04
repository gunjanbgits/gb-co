<template>
  <div class="jelly">
    <vue-p5 @sketch="sketch"></vue-p5>
  </div>
</template>

<script>
import VueP5 from "vue-p5";
export default {
  name: "jelly",
  components: {
    "vue-p5": VueP5
  },
  methods: {
    sketch(sk) {
      const clicks = [];
      let zoff = 0;
      let x = 80;
      let y = 80;
      let phase = 0;
      let diameter = 10;
      let speed = 1;

      sk.setup = () => {
        sk.createCanvas(160,160);
        sk.background(25);
      }

      sk.draw = () => {
        sk.clear();
        sk.fill(0);
        sk.noStroke();
        sk.fill(255);
        sk.stroke(0);
        sk.strokeWeight(1)

        sk.push();
        sk.stroke(0);
        sk.translate(x, y);
        sk.rotate(sk.PI / 3.0 + zoff);

        for (let a = 0; a < sk.TWO_PI; a += .3) {
            sk.beginShape();
            sk.vertex(0, 0);
            let xoff = sk.map(sk.cos(a+phase), -1, 1, 0, 2);
            let yoff = sk.map(sk.sin(a+phase), -1, 1, 0, 2);
            let r = sk.map(sk.noise(xoff, yoff, zoff), 0, 1, 35, 85);
            let _x = r * sk.cos(a);
            let _y = r * sk.sin(a);
            sk.vertex(_x, _y);
            sk.endShape(sk.CLOSE);
            sk.fill(255);
            sk.ellipse(_x, _y, 10);
        }
        sk.pop();
        sk.stroke(0);
        sk.fill(185);
        sk.ellipse(x, y, 30);
        sk.noStroke();
        sk.fill(255);
        sk.ellipse(x, y, 29);

        zoff +=0.002;
        // //phase += .01;
        // let xoff = sk.map(sk.cos(sk.frameCount), -1, 1, 0, 1);
        // let yoff = sk.map(sk.sin(sk.frameCount), -1, 1, 0, 1);
        // let r = sk.map(sk.noise(xoff, yoff), 0, 1, -1, 1);
        // let _x = r * sk.cos(sk.frameCount);
        // let _y = r * sk.sin(sk.frameCount);
        // x = _x+100;
        // y = _y+100;
        // if (y < -30){
        //     y = sk.height+30;
        // }
        // else if (y > sk.height+30) {
        //     y = -30;
        // }
        // if (x < -30) {
        //     x = sk.width+30;
        // }
        // else if (x > sk.width+30) {
        //     x = -30;
        // }

      }
    }
  }
};
</script>
<style scoped lang="stylus">
.jelly
  color #000
  text-align left
  transform translateX(-2rem)
  margin-bottom 2rem
</style>