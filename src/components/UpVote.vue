<template>
  <button
    @click="toggleUpVoteStatus(UpVote)"
    v-bind:class="
      UpVote.selected ? 'up-vote-button selected' : 'up-vote-button'
    "
  >
    <img alt="Up Vote" src="../assets/arrow-up.svg" />
  </button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UpVote",
  props: ["UpVote"],
  methods: {
    ...mapActions({
      toggleUpVoteStatus: "toggleUpVoteStatus",
    }),
  },
};
</script>

<style scoped>
.up-vote-button {
  width: 50px;
  height: 50px;
  background-color: #f4f6f8;
  border: 0px;
  border-radius: 7px;
}
.up-vote-button img {
  width: 40px;
}
.selected {
  background-color: #e5e8fd;
}
.selected img {
  color: #253cf2;
}
</style>