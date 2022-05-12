<template>
  <div class="login-page">
    <div class="breadcrumb">
      <breadcrumbs title="注册页面" text="注册"></breadcrumbs>
    </div>
    <div class="login-area w">
      <register></register>
    </div>
  </div>
</template>

<script>
import breadcrumbs from '@/components/assembly/breadcrumbs-area.vue'
import register from '@/components/register/register.vue'

export default {
  components: {
    breadcrumbs,
    register
  }
}
</script>

<style lang="less" scoped>
.login-area {
  padding: 100px 0;
  width: 550px;
}
</style>
