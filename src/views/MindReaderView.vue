
<template>
  <Wrapper>
    <div class="container center">
      <div class="py-4"></div>
      <input v-if="!this.$store.state.mindreader.loading" id="fileField" class="btn btn-primary" type="file" accept="image/png, image/jpeg" @change="fileSelect">
      <div class="py-3"></div>
      <h4 v-if="this.$store.state.mindreader.loading" class="my-5">Loading..</h4>

      <div style="text-align: center;" v-if="this.$store.state.mindreader.error">
        <h5 class="text-danger">{{this.$store.state.mindreader.error}}</h5>
      </div>

      <img class="dw-img" v-if="url" :src="this.url" alt="Selected">
      <div v-if="url && !this.$store.state.mindreader.loading" class="btn btn-primary my-2" @click="recognize">Recognize</div>

      <h3 v-if="this.$store.state.mindreader.objects.length != 0">Recognition items: {{ this.$store.state.mindreader.objects.length }}</h3>
      <div class="mr-content row">
        <div v-for="obj in this.$store.state.mindreader.objects" class="mr-item" :key="obj">
          <div 
          class="mr-recognized-item" 
          :style="{
            'top': obj.bounding_box.y+'px',
            'left': obj.bounding_box.x+'px',
            'width': 200*((obj.bounding_box.width/((obj.bounding_box.width+obj.bounding_box.x)/100))/100)+'px',
            'height': 200*((obj.bounding_box.height/((obj.bounding_box.height+obj.bounding_box.y)/100))/100)+'px',
          }"
          ></div>
          <img class="mr-img" v-if="url" :src="this.url" alt="Selected">
        </div>
      </div>

    </div>
  </Wrapper>
</template>


<script>
import Wrapper from '../components/Wrapper.vue'

export default{
  components: {
    Wrapper
  },


  mounted(){
    this.$store.dispatch('auth/checkToken', false)
  },


  data(){
    return {
      url: null,
      file: null,
    }
  },
  methods: {
    fileSelect(event){
      const img = event.target.files[0]
      this.file = img
      this.url = URL.createObjectURL(img)
    },

    recognize(){
      this.$store.dispatch('mindreader/recognize', this.file)
    }
  }
}
</script>
