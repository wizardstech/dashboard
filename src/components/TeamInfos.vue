<template>
<div>
  <span class="team-name">{{ team }}</span>
  <span class="sprint ml-10" v-if="sprint">Sprint {{ sprint.name }} </span>
</div>
</template>

<script>

import api from '../lib/api';

const { VUE_APP_JIRA_API, VUE_APP_TEAM_BOARD_ID } = process.env;

export default {

  data() {
    return {
      sprint: {},
      team: process.env.VUE_APP_TEAM,
      errors: [],
    };
  },

  methods: {
    getActiveSprint() {
      api.get(`${VUE_APP_JIRA_API}/board/${VUE_APP_TEAM_BOARD_ID}/sprint?state=active`)
        .then((res) => {
          const currentSprint = res.data.values[0];
          this.sprint = currentSprint;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },

  created() {
    this.getActiveSprint();
  },

  mounted() {
    this.interval = setInterval(() => {
      this.getActiveSprint();
    }, 86400000);
  },

};

</script>
