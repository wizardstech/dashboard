<template>
  <div>
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-one-third">
          <Card title="Server #1">
            <ServerState url="http://as-ecommerce-front.azurewebsites.net/"/>
          </Card>
          <Card title="Server #2">
            <ServerState url="http://as-ecommerce-front-api.azurewebsites.net/documentation"/>
          </Card>
          <Card title="Server #3">
            <ServerState url="http://as-ecommerce-api.azurewebsites.qzdzqdqzd/en_US/"/>
            <ServerState url="https://www.google.fr"/>
          </Card>
        </div>
        <div class="column is-one-third">
          <Card title="Server #1">
          </Card>
          <Card title="Server #2">
          </Card>
          <Card title="Server #3">
          </Card>
        </div>
        <div class="column is-one-third">
          <Card title="Server #1">
          </Card>
          <Card title="Server #2">
          </Card>
          <Card title="Server #3">
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {
    Card: () => import('@/components/Card.vue'),
    ServerState: () => import('@/components/ServerState.vue'),
  },
};
</script>
