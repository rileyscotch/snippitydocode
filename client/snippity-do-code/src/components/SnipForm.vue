<template lang="html">
  <v-layout>
    <v-flex xs12>
      <v-form ref="form" v-model="valid">
        <v-textarea
          label="Title"
          v-model="snip.title"
          :rules="titleRules"
          required
        ></v-textarea>
        <v-textarea
          label="Language"
          v-model="snip.language"
          required
        ></v-textarea>
        <v-textarea
          label="Description"
          v-model="snip.description"
          multi-line
        ></v-textarea>
        
        <v-textarea
          label="Url"
          v-model="snip.url"
        ></v-textarea>
        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["snip", "onSubmit"],
  data() {
    return {
      valid: true,
      titleRules: [
        title => {
          if (title.trim() === "") return "Title must not be empty.";
          return true;
        }
      ],
      descriptionRules: [
        description => {
          if (description.trim() === "") return "Description must not be empty.";
          return true;
        }
      ]
    };
  },
  methods: {
    submit() {
      if (this.valid) {
        this.onSubmit();
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style lang="css">
</style>