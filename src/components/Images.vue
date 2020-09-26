<template>
  <div style="margin-top:5vh;">
    <div style="height:15vh;">
       <button :class="{ underline: !exposeFavourites, 'm-r-10': true }" @click="changeExposure(false)" >All Images</button>
      <button :class="{ underline: exposeFavourites}" @click="changeExposure(true)" >Favourite Images</button>
    </div>
    <div class="grid-container">
      <div class="grid-item" v-for="(img, ind) in imgs" :key="ind" @click="toView(img.id, img.name)">
        <div>{{img.name}}</div>
       </div>
    </div>
  </div>
</template>

<script>
import ImageService from './../Service/ImageService'
import { mapGetters } from 'vuex'

export default {
  name: 'Images',
  data() {
    return {
      avImgs: null,
    }
  },
  computed: {
      favImgs: function () {
        if (this.avImgs) return this.avImgs.filter(ig => ig.favourite === true);
        return null
      },
      imgs: function () {
        if (this.exposeFavourites) return this.favImgs;
        else return this.avImgs
      },
    ...mapGetters({
            exposeFavourites: 'GET_EXPOSE'
      }),
  },
  methods: {
    toView(id, name) {
      this.$store.commit('PICTURE', name);
      this.$router.push({
          name: "ViewImage",
          params: {
            id: id,
            name: name
          }
       });
    },
    changeExposure(bl) {
       this.$store.commit('EXPOSE', bl);
       console.log(this.exposeFavourites);
    }
  },
  async created () {
    let context = this;
    ImageService.loadImages().then(function (imgs) {
        context.avImgs = imgs;
        console.log(context.favImgs);
      }).catch();
  }
}
</script>

<style scoped>

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: 25vh 25vh 25vh;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 30px;
  text-align: center;
  cursor:pointer;
  line-height: 20vh;
  margin: 5px;
  color: black;
  border-radius: 15px;
  box-shadow: -3px -3px 10px 2px rgba(0,0,0,.3) inset, 0 0 0 2px rgba(255, 255, 255, .6) inset, 0 0 0 1px rgba(0,0,0,.5), 2px 2px 10px rgba(0,0,0,.6);
  background-color: lightgrey;
  background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, lightyellow 35px, lightyellow 40px);
}

.grid-item:hover {
  opacity: 0.8;
  color:white;
  border-color:white;
}

button{
  padding: 5px;
  font-size:18px;
  border-radius:2px;
  border-color: transparent;
  background-color:transparent;
  cursor: pointer;
}

button:hover{
    opacity: 0.90;
}

button:focus {outline:0;}

</style>
