<template>
  <div>
      <div style="height: 10vh;background-color:#F0F0F0;padding:3px;">
          <span class="name_picture">Name: {{ picture }}</span>
          <router-link to="/" tag="span" class="link">Retour</router-link>
      </div>
     <div>
        <img v-if="srcImg" :src="srcImg" :alt="picture">
     </div>
  </div>
</template>

<script>
import ImageService from './../Service/ImageService'
import { mapGetters } from 'vuex'

export default {
  name: 'ViewImage',
  props: {
    id: String
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
    ImageService.importSrcImage(this.id).then(function (imgs) {
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

.name_picture{
    float:left;
    line-height: 10vh;
}

.link{
  line-height: 10vh;
  float:right;
  cursor:pointer;
}

img {
    max-width: 100%;
    max-height:90vh;
    height: auto;
    width: auto\9; /* ie8 */
}
</style>
