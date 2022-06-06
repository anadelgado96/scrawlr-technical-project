<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello " />
  <UpVoteList />
  <AddUpVote />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AddUpVote from "./components/AddUpVote.vue";
import UpVote from "./components/UpVote.vue";
import UpVoteList from "./components/UpVoteList.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    UpVoteList,
    AddUpVote,
  },
};
</script>
