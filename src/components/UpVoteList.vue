<template>
  <div class="upVoteList">
    <UpVote v-for="(UpVote, index) in upVotes" :key="index" :UpVote="UpVote" />
  </div>
</template>

<script>
/*This will fetch from the store the number of upvotes*/
import { mapState } from "vuex";
import UpVote from "./UpVote.vue";
export default {
  components: {
    UpVote,
  },
  computed: {
    ...mapState({
      upVotes: "upVotes",
    }),
  },
};
</script>

<style scoped>
.upVoteList {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
  border: 1px solid rgb(199, 196, 196);
  border-radius: 10px;
  max-width: 500px;
  margin: auto;
  overflow: auto;
}
</style>