<template>
    <div class="body-bg" >
        <Hero class="banner-bg has-shadow mb-20" title="Wizards" subtitle="Awesome Dashboard"/>
        <Dashboard/>
    </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    Dashboard: () => import('@/components/Dashboard.vue'),
    Hero: () => import('@/components/Hero.vue'),
  },
};
</script>
