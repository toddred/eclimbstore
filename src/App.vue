<template>
  <div id="app">
    <div id="nav">
      <b-nav tabs>
        <b-nav-item>
          <router-link to="/">Shop</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/cart">Cart</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/account">Account</router-link>
        </b-nav-item>
      </b-nav>
    </div>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>
<style>
</style>
