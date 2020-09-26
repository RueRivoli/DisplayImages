<template>
  <div>
     <button class="pale" @click="changeExposure(false)" style="margin-right:10px;">All Images</button>
    <button class="green" @click="changeExposure(true)">Favourite Images</button>
      <!-- <li tabindex="0" class="pointer f-right">
        <router-link to="/favoriteimages" tag="span">Favourites images</router-link>
     </li> -->
      <table style="width:100%;margin-top:10px;">
        <thead>
          <!-- <th>Id</th> -->
          <th>Name</th>
          <th>Resolution width</th>
          <th>Resolution height</th>
        </thead>
        <tbody>
            <tr v-for="(img, ind) in imgs" :key="ind">
              <td @click="toView(img.id)">
                {{img.name}}
              </td>
              <!-- <td>
                {{img.id}}
              </td> -->
              <td>
                {{img.resolution.width}}
              </td>
               <td>
                {{img.resolution.height}}
              </td>
            </tr>
          </tbody>
      </table>
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
            exposeFavourites: 'GET_EXPOSE',
      }),
  },
  methods: {
    toView(id) {
      console.log("ID");
      console.log(id);
      this.$router.push({
          name: "ViewImage",
          params: {
            id: id
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
