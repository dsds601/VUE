<template>
  <div>
    <user-profile :info="userinfo">
      <div slot="username">{{ userinfo.id }}</div>
      <span slot="time">{{ 'Joined' + userinfo.created }}, </span>
      <span slot="karma">{{ userinfo.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile";
export default {
  components: {
    UserProfile,
  },
  computed: {
    userinfo() {
      return this.$store.state.user
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER' , userName);
  }
}
</script>

<style scoped>

</style>