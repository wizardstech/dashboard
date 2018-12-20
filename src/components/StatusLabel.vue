<template>
  <div :class="`tag is-rounded ${color} ml-10`">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'StatusLabel',
  props: {
    color: String,
    msg: String,
  },
};
</script>
