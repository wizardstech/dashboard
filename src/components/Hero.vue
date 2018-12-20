<template>
<section class="is-info is-small">
    <div class="container has-text-centered">
      <p class="title">
        {{ title }}
      </p>
  </div>
</section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: String,
  },
};
</script>
