

<template>
  {{ $route.params.id }}
<div class="container mt-4">
  <h4>상세페이지</h4>
  <h5>{{ blogContent[$route.params.id].title }}</h5>
  <p>{{ blogContent[$route.params.id].content }}</p>
  <router-view></router-view>
</div>
</template>
<script>
export default {
  name: "Detail",
  props:{
    blogContent: Array,
  },
}
</script>
<style scoped lang="scss">

</style>