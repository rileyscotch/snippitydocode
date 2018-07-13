<template lang="html">
   <v-layout row wrap>
    <v-flex xs4 v-for="snip in snips" :key="snip.id">
      <v-card>
        <!-- <v-card-media
          height="200px"
        ></v-card-media> -->

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{snip.title}}</h3>
            <h2>{{snip.language}}</h2>
            <div>{{snip.description}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="blue" :href="snip.url" target="_blank">View Docs</v-btn>
           <v-btn flat color="white" :to="{ 
               name: 'Example',
               params: {
                   id: snip.id
               }
             }">Examples</v-btn>
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
      snips: []
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      API.getSnips().then(snips => {
        this.snips = snips;
      });
    }
  }
};
</script>

<style lang="css">
</style>
