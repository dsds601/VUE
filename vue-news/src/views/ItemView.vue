<template>
  <div>
    <section>
      <user-profile :info="fetchedItem">
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link>
        <template slot="time">
          {{ 'Posted ' +fetchedItem.time_ago}}
        </template>
      </user-profile>
    </section>

    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>

    <section>
      <div v-html="fetchedItem.content">
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "@/components/UserProfile";

export default {
  components: {UserProfile},
  computed : {
    ...mapGetters(['fetchedItem'])
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM' , id);
  }
}
</script>

<style scoped>
.user-container {
  padding: 0.5rem;
  display: flex;
  align-items: center;
}
.user-description{
  padding-left: 8px;
}
.fa-user{
  font-size: 2.5rem;
}
.time{
  font-size : 0.7rem;
}
</style>