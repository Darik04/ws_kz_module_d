
<template>
  <Wrapper>
    <div class="row my-5 justify-content-center">
      <div class="card shadow-sm p-3 m-card m-2 m-card-green">
        <h3>ChatterBlast</h3>
        <p>AI Chat service</p>
        <div class="d-flex justify-content-between">
          <div class="p1"></div>
          <RouterLink to="/chatterblast" class="btn btn-primary m-card-btn">To service</RouterLink>
        </div>
      </div>
      <div class="card shadow-sm p-3 m-card m-2 m-card-gradient">
        <h3>DreamWeaver</h3>
        <p>AI Image generation</p>
        <div class="d-flex justify-content-between">
          <div class="p1"></div>
          <RouterLink to="/dreamweaver" class="btn btn-primary m-card-btn">To service</RouterLink>
        </div>
      </div>
      <div class="card shadow-sm p-3 m-card m-2 m-card-dark">
        <h3>MindReader</h3>
        <p>AI Recognition objects on Image</p>
        <div class="d-flex justify-content-between">
          <div class="p1"></div>
          <RouterLink to="/mindreader" class="btn btn-primary m-card-btn">To service</RouterLink>
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
  }
}
</script>
