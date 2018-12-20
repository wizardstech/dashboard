<template>
    <div class="body-bg fullscreen-app">
        <Dashboard/>
        <Footer/>
    </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    Dashboard: () => import('@/components/Dashboard.vue'),
    Footer: () => import('@/components/Footer.vue'),
  },
};
</script>
