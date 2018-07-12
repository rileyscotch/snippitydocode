<template lang="html">
  <SnipForm :snip="snip" :onSubmit="submit"></SnipForm>
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
      snip: {
        title: '',
        language: '',
        description: '',
        url: '',
      },
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
      this.snip.quantity = Number(this.snip.quantity);
      API.updateSnip(this.snip.id, this.snip)
        .then(() => {
          this.$router.push({
            name: 'snip',
            params: {
              id: this.snip.id,
            },
          });
        });
    },
  },
};
</script>

<style lang="css">
</style>