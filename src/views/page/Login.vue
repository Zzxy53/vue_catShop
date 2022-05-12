<template>
  <div class="login-page">
    <div class="breadcrumb">
      <breadcrumbs title="登录页面" text="登录"></breadcrumbs>
    </div>
    <div class="login-area w">
      <loginview></loginview>
    </div>
  </div>
</template>

<script>
import breadcrumbs from '@/components/assembly/breadcrumbs-area.vue'
import loginview from '@/components/Login/login.vue'

export default {
  components: {
    breadcrumbs,
    loginview
  }
}
</script>

<style lang="less" scoped>
.login-area {
  padding: 100px 0;
  width: 550px;
}
</style>
