<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#"><span>Tryout</span> online</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><img src="/assets/img/icons8-menu-20.png" alt=""></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto ">
            <li class="nav-item ">
              <router-link :to="{name : 'dashboard'}" class="nav-link ">Dashboard</router-link>
            </li>
            <li class="nav-item ">
              <router-link :to="{name : 'dashboard'}" class="nav-link ">Result</router-link>
            </li>
            <li class="nav-item ">
              <router-link :to="{name : 'dashboard'}" class="nav-link ">Profile</router-link>
            </li>
            <li class="nav-item ">
              <router-link :to="{name : 'dashboard'}" class="nav-link ">Logout</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>