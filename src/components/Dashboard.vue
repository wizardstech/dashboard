<template>
  <div >
    <div class="container is-fluid">
      <div class="columns">
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

const { VUE_APP_JIRA_API, VUE_APP_TEAM_BOARD_ID } = process.env;


export default {

  data() {
    return {
      jira: {},
      errors: [],
      sprint: null,
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
      api.get(`${VUE_APP_JIRA_API}/board/${VUE_APP_TEAM_BOARD_ID}/sprint?state=active`).then((res1) => {
        this.sprint = res1.data.values[0].id;
        api.get(`${VUE_APP_JIRA_API}/sprint/${this.sprint}/issue`).then((res2) => {
          this.jira = this.filterRes(res2.data.issues);
        });
      });
    },
  },

  created() { this.getSprintIssues(); },

  mounted() { this.interval = setInterval(() => { this.getSprintIssues(); }, 60000); },

};
</script>
