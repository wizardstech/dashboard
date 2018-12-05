<template>
  <div>
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-one-third">
          <Card title="E-commerce Front">
            <ServerState url="http://as-ecommerce-front.azurewebsites.net/"/>
          </Card>
          <Card title="E-commerce Front Api">
            <ServerState url="http://as-ecommerce-front-api.azurewebsites.net/documentation"/>
          </Card>
          <Card title="E-commerce Backend Api">
            <ServerState url="http://as-ecommerce-api.azurewebsites.net/admin"/>
          </Card>
        </div>
        <div class="column is-one-third">
          <Card title="Consumer Front Api">
            <ServerState url="http://as-consumer-front.azurewebsites.net/"/>
          </Card>
          <Card title="Consumer API">
            <ServerState url="http://as-consumer-api.azurewebsites.net/candidates"/>
          </Card>
        </div>
        <div class="column is-one-third">
          <Card title="Merchant Front">
            <ServerState url="http://as-merchant-front.azurewebsites.net"/>
          </Card>
          <Card title="Mock API">
            <ServerState url="http://as-mock-api.azurewebsites.net/"/>
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
