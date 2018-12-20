<template>
<div>
  <span v-if="result">{{ name }}<StatusLabel msg="is Up" color="is-success" /> </span>
  <span v-else>{{ name }}<StatusLabel msg="is Down" color="is-danger" /> </span>
</div>
</template>

<script>

import api from '../lib/api';

export default {

  components: {
    StatusLabel: () => import('@/components/StatusLabel.vue'),
  },

  props: {
    url: String,
    name: String,
  },

  data() {
    return {
      result: null,
      errors: [],
    };
  },

  methods: {
    isUp() {
      api.get(this.url)
        .then((res) => {
          this.result = res.status;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },

  created() {
    this.isUp();
  },

  mounted() {
    this.interval = setInterval(() => {
      this.isUp();
    }, 20000);
  },

};

</script>
