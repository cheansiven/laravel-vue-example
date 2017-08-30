<template>
<section class="hero is-success">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Shopping Page 
          </h1>
          <h2 class="subtitle">
            Shopping is more comfortable here ;-)
          </h2>
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
           <router-link tag="li" to="tab">
              <a>Tablets</a>
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
