<template>
<div>
  <div v-if="result"> <StatusLabel msg="is Up" color="is-success" /> </div>
  <div v-else> <StatusLabel msg="is Down" color="is-danger" /> </div>
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
  },

  data() {
    return {
      result: null,
      errors: [],
    };
  },

  created() {
    api.get(this.url)
      .then((res) => {
        this.result = res.status;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },

  mounted() {
    this.interval = setInterval(() => {
      api.get(this.url)
        .then((res) => {
          this.result = res.status;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    }, 30000);
    console.log(this.result);
  },

};

</script>
