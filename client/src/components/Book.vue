<template>
  <v-container fluid>
    <v-layout align-center>
      <v-card width="100%" raised>
        <v-img height="200px" width="100%" class="white--text" :src="book.bookImage">
          <v-card-title class="align-end fill-height dark">{{book.title}}</v-card-title>
        </v-img>
        <v-card-text>
          <p class="display-1 text--primary">{{book.title}}</p>
          <p class="title">{{book.author}}</p>
          <p class="subtitle-1">{{book.description}}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary">Details</v-btn>
          <v-btn color="primary">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  // props: ["image", "title", "author"]
  props: ["book"]
};
</script>
<style>
.bookImg {
  width: 70%;
}
</style>
