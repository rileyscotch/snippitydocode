<template lang="html">
  <SnipForm :snip="snip[0]" :onSubmit="submit"></SnipForm>
</template>

<script>
import API from '@/lib/API';
import SnipForm from '@/components/SnipForm';
export default {
  components: {
    SnipForm,
  },
  data() {
    return {
      snip: {},
    };
  },
  mounted() {
    const { id } = this.$route.params;
    this.load(id);
  },
  methods: {
    load(id) {
      API.getExample(id)
        .then((snip) => {
          this.snip = snip;
        });
    },
    submit() {
        console.log(this.snip[0])
      API.updateSnip(this.snip[0].id, this.snip[0])
        .then(() => {
          this.$router.push({
            name: 'Snips',
            params: {
              id: this.snip[0].id,
            },
          });
        });
    },
  },
};
</script>

<style lang="css">
</style>