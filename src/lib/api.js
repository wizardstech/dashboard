import axios from 'axios';

export default axios.create({
  auth: {
    username: process.env.VUE_APP_JIRA_USERNAME,
    password: process.env.VUE_APP_JIRA_PASSWORD,
  },
});
