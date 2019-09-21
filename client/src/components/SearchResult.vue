<template>
  <v-card max-height="300px">
    <v-row>
      <v-col cols="4">
        <v-img
          :src="'http://books.google.com/books/content?id=' + bookElement.id + '&printsec=frontcover&img=1&zoom=1&source=gbs_api'"
          contain
          max-height="300px"
        ></v-img>
      </v-col>
      <v-col cols="8" class="pl-0 pr-0">
        <v-col cols="12" align-self="start">
          <p class="display-1">{{bookElement.volumeInfo.title}}</p>
          <v-subheader
            class="subtitle-1 pl-0"
            v-if="bookElement.volumeInfo.authors"
          >by {{bookElement.volumeInfo.authors.join(', ')}}</v-subheader>
          <v-subheader class="subtitle-1 pl-0" v-else>by {{"unknown"}}</v-subheader>
        </v-col>
        <v-col cols="12" align-self="end">
          <v-container fluid class="pl-0 pr-0">
            <v-layout align-center justify-space-between>
              <v-flex xs8>
                <v-select v-model="book.selection" :items="book.items" label="Add to list" required></v-select>
              </v-flex>
              <v-flex xs4 class="ml-4">
                <v-btn color="primary" @click="add(bookElement)">Add</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-col>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import BooksService from "@/services/BooksService";

export default {
  data() {
    return {
      error: "",
      book: {
        title: null,
        author: null,
        genre: null,
        description: null,
        bookImage: null,
        googleBooksId: null,
        listType: null,
        selection: null,
        items: ["Reading now", "Want to read", "Finished"]
      }
    };
  },
  props: ["bookElement"],
  methods: {
    async add(bookElement) {
      console.log("selection = ", this.book.selection);
      if (this.book.selection === "Reading now") {
        this.book.listType = "current";
      } else if (this.book.selection === "Finished") {
        this.book.listType = "finished";
      } else this.book.listType = "wantToRead";

      console.log("listtype = ", this.book.selection);

      this.book.title = bookElement.volumeInfo.title;
      if (bookElement.volumeInfo.authors) {
        this.book.author = bookElement.volumeInfo.authors.join(", ");
      } else this.book.author = "unknown";
      if (bookElement.volumeInfo.categories) {
        this.book.genre = bookElement.volumeInfo.categories.join(", ");
      } else this.book.genre = "unknown";
      if (bookElement.volumeInfo.description) {
        this.book.description = bookElement.volumeInfo.description;
      } else this.book.description = "Description is not available";
      this.bookImage = `http://books.google.com/books/content?id=${bookElement.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`;
      this.book.googleBooksId = bookElement.id;

      //add book to database
      try {
        console.log("list type = ", this.book.listType, this.book);

        await BooksService.post(this.book);
        // this.$router.push({
        //   name: "mybooks"
        // });
      } catch (err) {
        this.error = err;
      }
    }
  }
};
</script>

<style>
</style>