<template>
  <div style="margin-top:5vh;">
    <div style="height:15vh;">

     <button :class="{ underline: !exposeFavourites, pale: true}" @click="changeExposure(false)" style="margin-right:10px;">All Images</button>
    <button :class="{ underline: exposeFavourites, green: true}" @click="changeExposure(true)" style="margin-bottom:20px;">Favourite Images</button>
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
  name: 'AvailableImages',
  data() {
    return {
      avImgs: null,
      favourite: false
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
      console.log("ID");
      console.log(id);
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
      console.log('change Exposure');
      console.log(bl);
       this.$store.commit('EXPOSE', bl);
       console.log(this.exposeFavourites);
    }
  },
  async created () {
    let context = this;
    ImageService.loadImages().then(function (imgs) {
      console.log('IMAGES');
      console.log(imgs);
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

.highlight{
  font-weight: bold;
  cursor: pointer;
}

button{
  padding: 5px;
  font-size:18px;
  /* background-color: #1E969D;
  color: white; */
  border-radius:2px;
  border-color: transparent;
  cursor: pointer;
}

.pale{
   /* background-color: #cad49d; */
   background-color:transparent;
  color: black;
}

.green{
  background-color: #1E969D;
  color: white;
   background-color:transparent;
  color: black;
}

.underline{
  text-decoration: underline;
  /* font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif; */
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

button:focus {outline:0;}

</style>
