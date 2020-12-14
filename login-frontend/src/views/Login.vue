<template>
  <div class="componente mt-d">
      <the-login></the-login>
  </div>
</template>


<script>
// email prueba@gmail.com password micontraseña
import TheLogin from '@/components/auth/TheLogin.vue'

export default {
    name: 'Login',
    components: {
        TheLogin
    }    
}
</script>