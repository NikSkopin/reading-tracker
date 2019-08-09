<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <Panel title="Add Custom Book">
          <form>
            <v-text-field label="Title" v-model="book.title"></v-text-field>
            <v-text-field label="Author" v-model="book.author"></v-text-field>
            <v-text-field label="Genre" v-model="book.genre"></v-text-field>
            <v-text-field label="Book Image (link)" v-model="book.bookImage"></v-text-field>
            <v-textarea label="Description" v-model="book.description"></v-textarea>
            <v-select v-model="book.selection" :items="book.items" label="Add to list" required></v-select>
          </form>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark @click="add">Add</v-btn>
            <v-btn color="primary" dark @click="clear">Clear</v-btn>
          </v-card-actions>
        </Panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from "@/components/Panel";
import BooksService from "@/services/BooksService";
export default {
  data() {
    return {
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
  components: {
    Panel
  },
  methods: {
    add() {
      if (this.book.selection === "Reading now") {
        this.book.listType = "current";
      } else if (this.book.selection === "Finished") {
        this.book.listType = "finished";
      } else this.book.listType = "wantToRead";
      //call API
      BooksService.post(this.book);
    },
    clear() {
      this.book.title = null;
      this.book.author = null;
      this.book.genre = null;
      this.book.description = null;
      this.book.bookImage = null;
      this.book.selection = null;
    }
  }
};
</script>
