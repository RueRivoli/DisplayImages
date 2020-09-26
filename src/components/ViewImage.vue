<template>
  <div>
     <button class="pale" @click="favourite = false" style="margin-right:10px;">All Images</button>
    <button class="green" @click="favourite = true">Favourite Images</button>
      <!-- <li tabindex="0" class="pointer f-right">
        <router-link to="/favoriteimages" tag="span">Favourites images</router-link>
     </li> -->
        <img src="srcImg" alt="">
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
    ImageService.importSrcImage(1).then(function (imgs) {
      console.log('IMAGES');
      console.log(imgs);
        context.avImgs = imgs;
        console.log(context.favImgs);
      }).catch();
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
