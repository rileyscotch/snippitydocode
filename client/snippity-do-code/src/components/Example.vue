<template lang="html">
    <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-card-media
          height="1000px"
          width="1000px"
        ></v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{snip[0].title}}</h3>
            <h2>{{snip[0].language}}</h2>
            <div>{{snip[0].description}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
            <v-btn flat
            :to="{
                name: 'Edit',
                params: {
                  id: snip[0].id
                }
            }"
            color="green">Edit</v-btn>
            <v-btn flat @click="deleteSnip()" color="error">Delete</v-btn>
          <v-btn flat color="blue" :href="snip.url" target="_blank">View Docs</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import API from "@/lib/API";

export default {
  data() {
    return {
      snip: {
        id: -1
      }
    };
  },
  mounted() {
    const { id } = this.$route.params;
    this.load(id);
    console.log(id)

  },
  methods: {
    load(id) {
      API.getExample(id).then((snip) => {
        this.snip = snip;
        console.log(this.snip)
      });
    },
    deleteSnip() {
      const { id } = this.$route.params;
      API.deleteSnip(id).then(() => {
        this.$router.push({
          name: "Snips"
        });
      });
    }
  }
};
</script>

<style lang="css">
</style>


