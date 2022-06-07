<template>
  <div class="row">
    <div class="upVoteList">
      <UpVote
        v-for="(UpVote, index) in $store.state.upVotesList[upVoteListId].upVotes"
        :key="index"
        :UpVote="UpVote" :upVoteListId="upVoteListId"
      />
    </div>
    <AddUpVote :upVoteListId="upVoteListId"/>
  </div>
</template>

<script>

//import { mapState } from "vuex";
import UpVote from "./UpVote.vue";
import AddUpVote from "./AddUpVote.vue";

export default {
  components: {
    UpVote,
    AddUpVote,
  },
  props: ["upVoteListId"],
  /* created() {
    console.log(this.upVoteListId);
  }
  computed: {
    ...mapState({
      upVotes: "upVotes",
    }),
  },*/
};
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  margin: auto;
  margin-bottom: 10px;
}
.upVoteList {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
  border: 1px solid rgb(199, 196, 196);
  border-radius: 10px;
  width: 500px;
  margin: auto;
  overflow: auto;
}
</style>