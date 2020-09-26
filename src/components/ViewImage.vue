<template>
  <div>
      <div style="height: 10vh;background-color:#F0F0F0;padding:3px;">
          <span style="float:left;line-height: 10vh;">Name: {{ picture }}</span>
          <router-link to="/" tag="span" class="link">
            Retour
          </router-link>
    </div>
     <div>
        <img v-if="srcImg" :src="srcImg"  style="max-height:90vh;" alt="name">
     </div>
  </div>
</template>

<script>
import ImageService from './../Service/ImageService'
import { mapGetters } from 'vuex'

export default {
  name: 'AvailableImages',
  props: {
    id: String,
    name: String
  },
  data() {
    return {
        srcImg: null,
    }
  },
  computed: {
     ...mapGetters({
            picture: 'GET_PICTURE'
      }),
  },
  async created () {
    let context = this;
    console.log(this.name);
    console.log(this.$route.params.name);
    ImageService.importSrcImage(this.id).then(function (imgs) {
      console.log('SRC img');
      context.srcImg = imgs;
      }).catch();
  },
  methods: {
      toImages() {
      this.$router.push({
          name: "Images"
       });
    },
  }
}
</script>

<style scoped>

.link{
  line-height: 10vh;
  float:right;
  cursor:pointer;
}


button:hover, .link:hover{
 text-decoration: underline;
 opacity: 0.90;
}



button{
  padding: 5px;
  font-size:18px;
  border-radius:2px;
  border-color: transparent;
  background-color:transparent;
  cursor: pointer;
  float:right;
   font-family: Avenir, Helvetica, Arial, sans-serif;
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

img {
    max-width: 100%;
    height: auto;
    width: auto\9; /* ie8 */
}
</style>
