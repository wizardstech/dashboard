<template>
  <div >
    <div class="container is-fluid">
      <div v-if="isLoading">
        <div class="text-center">
            <img class="loader-spin" src="/spinner.gif">
        </div>
      </div>
      <div v-else class="columns">
        <div class="column is-2">
          <Card title="To do">
            <div v-for="issue in this.jira.todo" :key="issue.id">
              <UserStory :issue="issue" />
            </div>
          </Card>
        </div>
        <div class="column is-2">
          <Card title="In Progress">
            <div v-for="issue in this.jira.wip" :key="issue.id">
              <UserStory :issue="issue" />
            </div>
          </Card>
        </div>
        <div class="column is-2">
          <Card title="Blocked">
            <div v-for="issue in this.jira.blocked" :key="issue.id">
              <UserStory :issue="issue" />
            </div>
          </Card>
        </div>
        <div class="column is-2">
          <Card title="In Review">
            <div v-for="issue in this.jira.review" :key="issue.id">
              <UserStory :issue="issue" />
            </div>
          </Card>
        </div>
        <div class="column is-2">
          <Card title="To be validated">
            <div v-for="issue in this.jira.tbv" :key="issue.id">
              <UserStory :issue="issue" />
            </div>
          </Card>
        </div>
        <div class="column is-2">
          <Card title="Done">
            <div v-for="issue in this.jira.done" :key="issue.id">
              <UserStory :issue="issue" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import api from '../lib/api';
import filterIssues from '../lib/jira';

const { VUE_APP_JIRA_API, VUE_APP_TEAM_BOARD_ID, VUE_APP_REFRESH_US } = process.env;


export default {

  data() {
    return {
      jira: {},
      errors: [],
      sprint: null,
      isLoading: false,
    };
  },

  name: 'Dashboard',

  components: {
    Card: () => import('@/components/Card.vue'),
    UserStory: () => import('@/components/UserStory.vue'),
  },

  methods: {
    filterRes(issues) {
      return filterIssues(issues);
    },
    getSprintIssues() {
      this.isLoading = true;
      api.get(`${VUE_APP_JIRA_API}/board/${VUE_APP_TEAM_BOARD_ID}/sprint?state=active`).then((res1) => {
        this.sprint = res1.data.values[0].id;
        api.get(`${VUE_APP_JIRA_API}/sprint/${this.sprint}/issue`).then((res2) => {
          this.jira = this.filterRes(res2.data.issues);
          this.isLoading = false;
        });
      });
    },
  },

  created() { this.getSprintIssues(); },

  mounted() { this.interval = setInterval(() => { this.getSprintIssues(); }, VUE_APP_REFRESH_US); },

};
</script>
