<template>
<section class="hero is-info is-small">
  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">
        {{ title }}
      </p>
      <p class="subtitle">
        {{ subtitle }}
      </p>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: String,
    subtitle: String,
  },
};
</script>
