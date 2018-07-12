<template lang="html">
  <SnipForm :snip="snip" :onSubmit="submit"></SnipForm>
</template>

<script>
import API from "@/lib/API";
import SnipForm from "@/components/SnipForm";
export default {
  components: {
    SnipForm
  },
  data() {
    return {
      snip: {
        title: "",
        language: "",
        description: "",
        url: ""
      }
    };
  },
  methods: {
    submit() {
      API.createSnip(this.snip).then(({ id }) => {
        this.$router.push({
          name: "Snips",
          params: {
            id
          }
        });
      });
    }
  }
};
</script>

<style lang="css">
</style>