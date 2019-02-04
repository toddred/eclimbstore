<template>
  <div id="app">
    <div id="nav">
      <b-nav tabs>
        <b-nav-item>
          <router-link to="/">Climber Store</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/about">Cart</router-link>
        </b-nav-item>
      
      </b-nav>

    </div>
    <router-view/>
  </div>
</template>

<style>

</style>
