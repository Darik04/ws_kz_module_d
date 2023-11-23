
<template>
  <Wrapper>
    <div class="mini-container">
      <div class="py-4"></div>
      <div v-if="this.$store.state.chatterblast.text" class="cb-chat-item">
        <h3>You:</h3>
        <div class="card p-3">{{this.$store.state.chatterblast.text}}</div>
      </div>
      <div class="py-4"></div>
      <div v-if="this.$store.state.chatterblast.answer" class="cb-chat-item">
        <h3>ChatterBlast:</h3>
        <div class="card p-3 cb-chat-answer-card"><p>{{this.$store.state.chatterblast.answer}}<span class="animated-cursor">|</span></p></div>
      </div>


      <div style="text-align: center;" v-if="!this.$store.state.chatterblast.answer && !this.$store.state.chatterblast.text">
        <h1>Text to chat please!</h1>
      </div>
      <div style="text-align: center;" v-if="this.$store.state.chatterblast.error">
        <h5 class="text-danger">{{this.$store.state.chatterblast.error}}</h5>
      </div>

      <div v-if="this.$store.state.chatterblast.conversationId" class="btn btn-primary my-5" @click="resetConversation">New conversation</div>
    </div>
  </Wrapper>


  <div class="fixed-bottom cb-input-block">
    <div class="d-flex cb-input-content">
      <div class="cb-input-wrapper">
        <div v-if="!this.$store.state.chatterblast.isFinal" class="cb-loading-wrapper"></div>
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
      if(!this.$store.state.chatterblast.isFinal && this.$store.state.chatterblast.conversationId)
      this.$store.dispatch('chatterblast/getAnswer')
    }, 1000)
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
        this.$store.dispatch('chatterblast/sendMessage', this.text)
        this.text = '';
      }
    },
    resetConversation(){
      this.$store.dispatch('chatterblast/resetConversation', this.text)
    },
  }
}
</script>
