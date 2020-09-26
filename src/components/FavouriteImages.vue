<template>
  <div>{{ favImgs }}
    <h1>Available Images</h1>
    <!-- <h1>Favourites Images</h1> -->
    <button @click="favourite = true">Favourite Images</button>
      <table style="width:100%;">
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Resolution width</th>
          <th>Resolution height</th>
        </thead>
        <tbody>
            <tr v-for="(img, ind) in avImgs" :key="ind">
              <td>
                {{img.name}}   
              </td>
              <td>
                {{img.id}}
              </td>
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

export default {
  name: 'AvailableImages',
  data() {
    return {
      avImgs: null
    }
  },
  computed: {
      favImgs: function () {
          return "jolie";
      }
  },
  async created () {
    let context = this;
    ImageService.loadImages().then(function (imgs) {
      console.log('IMAGES');
      console.log(imgs);
        context.avImgs = imgs;
      }).catch();
  }
}
</script>

<style scoped>
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
