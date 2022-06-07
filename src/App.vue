<template>
<h1>Scrawlr</h1>
<h3>Vue.js 3 Technical Assessment </h3>
<p>Ana Karen Delgado </p>
  <UpVoteList upVoteListId="0" />
  <UpVoteList upVoteListId="1" />
  <UpVoteList upVoteListId="2" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import UpVote from "./components/UpVote.vue";
import UpVoteList from "./components/UpVoteList.vue";

export default {
  name: "App",
  components: {
    UpVoteList,
  },
};
</script>
