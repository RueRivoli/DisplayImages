<template>
  <div>
     <button class="pale" @click="toImages" style="margin-right:10px;">Retour</button>
     <img :src="srcImg" alt="">
  </div>
</template>

<script>
import ImageService from './../Service/ImageService'

export default {
  name: 'AvailableImages',
  props: {
    id: Number,
  },
  data() {
    return {
        srcImg: null,
    }
  },
  async created () {
    let context = this;
    ImageService.importSrcImage(this.id).then(function (imgs) {
      console.log('SRC img');
      console.log(imgs);
      context.srcImg = imgs;
        console.log(context.favImgs);
      }).catch();
  },
  methods: {
      toImages() {
      this.$router.push({
          name: "AvailableImages"
       });
    },
  }
}
</script>

<style scoped>

button{
  padding: 5px;
  background-color: #1E969D;
  color: white;
  border-radius:2px;
  border-color: transparent;
  cursor: pointer;
}

.pale{
   background-color: #cad49d;
  color: black;
}

.green{
  background-color: #1E969D;
  color: white;
}


button:hover{
    opacity: 0.90;
}


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
