<template>
  <div class="dashboard">
    <the-dash-board></the-dash-board>
  </div>
</template>

<script>
// @ is an alias to /src
import TheDashBoard from '../components/auth/TheDashBoard.vue'

export default {
  name: 'DashBoard',
  components: {
    TheDashBoard
  }
}
</script>
