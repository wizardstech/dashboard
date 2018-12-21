<template>
<div>
  <span v-if="result">{{ name }}<StatusLabel msg="is Up" color="is-success" /> </span>
  <span v-else-if="isLoading">{{ name }}<StatusLabel msg="is loading" color="is-warning" /> </span>
  <span v-else>{{ name }}<StatusLabel msg="is Down" color="is-danger" /> </span>
</div>
</template>

<script>

import api from '../lib/api';

const { VUE_APP_REFRESH_SERVER } = process.env;

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
      isLoading: false,
    };
  },

  methods: {
    isUp() {
      this.isLoading = true;
      api.get(this.url)
        .then((res) => {
          this.result = res.status;
          this.isLoading = false;
        })
        .catch((e) => {
          this.errors.push(e);
          this.isLoading = false;
        });
    },
  },

  created() {
    this.isUp();
  },

  mounted() {
    this.interval = setInterval(() => {
      this.isUp();
    }, VUE_APP_REFRESH_SERVER);
  },

};

</script>
