
<template>
  <Wrapper>
    <div class="mini-container center">
      <div class="py-4"></div>


      <img class="dw-img" v-if="this.$store.state.dreamweaver.imageUrl" :src="this.$store.state.dreamweaver.imageUrl" alt="Generated">

      <h4>Progress: {{ this.$store.state.dreamweaver.progress }}</h4>

      <div v-if="this.$store.state.dreamweaver.resourceId" class="btns-controls my-2">
        <a :href="this.$store.state.dreamweaver.imageUrl" download class="btn btn-primary mx-1" >Download</a>
        <div class="btn btn-primary mx-1" @click="upscale">Upscale</div>
        <div class="btn btn-primary mx-1" @click="zoomIn">Zoom In</div>
        <div class="btn btn-primary mx-1" @click="zoomOut">Zoom Out</div>
      </div>
      <div v-if="this.$store.state.dreamweaver.resourceId" class="btn btn-primary my-3" @click="resetAll">New generation</div>
      <div style="text-align: center;" v-if="this.$store.state.dreamweaver.error">
        <h5 class="text-danger">{{this.$store.state.dreamweaver.error}}</h5>
      </div>

      <!-- <div v-if="this.$store.state.chatterblast.conversationId" class="btn btn-primary my-5" @click="resetConversation">New conversation</div> -->
    </div>
  </Wrapper>


  <div class="fixed-bottom cb-input-block">
    <div class="d-flex cb-input-content">
      <div class="cb-input-wrapper">
        <div v-if="!this.$store.state.dreamweaver.isFinal" class="cb-loading-wrapper"></div>
        <input v-model="text" type="text" class="cb-input-item shadow-sm" placeholder="Text.." required>
      </div>
      <div class="cb-input-btn mx-1 shadow-sm cb-input-btn-grey" @click="clearField">
        &#10005;
      </div>
      <div class="cb-input-btn shadow-sm" @click="sendText">
        &#10003;
      </div>
    </div>
  </div>
</template>


<script>
import Wrapper from '../components/Wrapper.vue'

export default{
  components: {
    Wrapper
  },


  mounted(){
    this.$store.dispatch('auth/checkToken', false)


    setInterval(() => {
      if(!this.$store.state.dreamweaver.isFinal && this.$store.state.dreamweaver.jobId){
        this.$store.dispatch('dreamweaver/getStatus')
      }
    }, 2000)
  },


  data(){
    return {
      text: ''
    }
  },
  methods: {
    clearField(){
      this.text = '';
    },

    sendText(){
      if(this.text.length > 0 && this.$store.state.chatterblast.isFinal){
        this.$store.dispatch('dreamweaver/generateImage', this.text)
        this.text = '';
      }
    },
    resetJob(){
      this.$store.dispatch('chatterblast/resetConversation', this.text)
    },

    upscale(){
      this.$store.dispatch('dreamweaver/upscale')
    },
    zoomIn(){
      this.$store.dispatch('dreamweaver/zoomIn')
    },
    zoomOut(){
      this.$store.dispatch('dreamweaver/zoomOut')
    },

    resetAll(){
      this.$store.dispatch('dreamweaver/resetAll')
    }
  }
}
</script>
