<template>
  <button @click="addNewUpVoteItem()" class="add-up-vote-button">
    <img alt="Add Up Vote" src="../assets/add.svg" />
  </button>
</template>

<script>
export default {
  name: "AddUpVote",
  data() {
    return {
      newUpVoteItem: "",
    };
  },
  methods: {
    addNewUpVoteItem() {
      this.$store.dispatch("addNewUpVote", this.newUpVoteItem);
    },
  },
};
</script>

<style scoped>
.add-up-vote-button {
  width: 50px;
  height: 50px;
  background-color: #e2e2e2;
  border: 0px;
  border-radius: 7px;
}
.add-up-vote-button img {
  width: 40px;
}
</style>