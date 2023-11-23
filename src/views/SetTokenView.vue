

<template>
  <Wrapper>
    <div class="mini-2-container">
      <div class="py-5"></div>
      <div class="t-content my-5">
        <h1>Set your token</h1>
        <div class="py-3"></div>
        <div class="form-floating">
          <input v-model="token" id="tokenField" type="text" class="form-control" placeholder="Your token.." required="Required">
          <label for="tokenField">Your Token</label>
        </div>
        <div class="py-2"></div>
        <button style="width: 100%;" class="btn btn-primary" @click="onSubmit">
          Next &rarr;
        </button>
        
      </div>
    </div>
  </Wrapper>
</template>


<script >
import Wrapper from '../components/Wrapper.vue'

export default {
  components: {
    Wrapper
  },
  data(){
    return {
      token: ''
    }
  },
  mounted(){
    this.$store.dispatch('auth/checkToken', true)
  },



  methods: {
    onSubmit(){
      if(this.token.length > 0){
        this.$store.dispatch('auth/setToken', this.token);
      }
    }
  }
}
</script>