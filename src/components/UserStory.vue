<template>
  <div>
    <img
      class="board-avatar"
      v-if="issue.fields.assignee"
      :src="issue.fields.assignee.avatarUrls['48x48']"
    />
    <img class="board-avatar" v-else src="/user.png" />
    <span class="issue-key">{{ issue.key }}</span> :
    <p class="issue-sum">{{ issue.fields.summary }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserStory',
  props: {
    issue: Object,
  },
};
</script>
