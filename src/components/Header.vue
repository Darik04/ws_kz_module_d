<template>
  <header class="header top-fixed shadow-sm">
    <div class="container h-container">
        <h1 class="h-h1">WS Kazakhstan</h1>
        <ul class="navbar-nav">
            <li class="nav-item">
                <a v-if="this.$store.state.auth.token" class="btn nav-link" @click="this.$store.dispatch('auth/logout')">Logout</a>
            </li>

        </ul>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>