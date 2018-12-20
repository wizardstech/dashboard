<template>
    <footer class="footer-custom fixed-footer">
      <div class="content has-text-centered">
        <div class="columns">
            <div class="column is-one-quarter">
                <TeamInfos />
            </div>
            <div class="column is-one-quarter">
                <ServerState name="Front App" url="http://localhost:8080/front"/>
            </div>
            <div class="column is-one-quarter">
                <ServerState name="Api Gateway" url="http://localhost:8080/api"/>
            </div>
            <div class="column is-one-quarter">
                <ServerState name="Backend" url="http://localhost:8080/back"/>
            </div>
      </div>
    </div>
</footer>
</template>

<script>


export default {
  name: 'Hero',
  props: {
    title: String,
    subtitle: String,
  },
  components: {
    ServerState: () => import('@/components/ServerState.vue'),
    TeamInfos: () => import('@/components/TeamInfos.vue'),
  },
};
</script>
