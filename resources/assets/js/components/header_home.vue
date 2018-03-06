<template>
<section class="hero is-success">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Vue Router
          </h1>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
            <router-link tag="li" to="laptop" exact>
              <a>Laptops</a>
            </router-link>
            <router-link tag="li" to="mobile">
              <a>Mobiles</a>
            </router-link>
           <router-link tag="li" to="accessories">
              <a>Accessories</a>
            </router-link>
            </ul>
          </div>
        </nav>
      </div>
    </section>
</template>

<script>
    export default {

    }
</script>
