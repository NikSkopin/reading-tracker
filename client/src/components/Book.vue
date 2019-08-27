<template>
  <v-container fluid>
    <v-list avatar>
      <v-list-item-group color="primary">
        <v-list-item>
          <v-list-item-avatar tile width="20%" height="100%">
            <v-img :src="book.bookImage" contain v-if="book.bookImage"></v-img>
            <v-img
              :src="'http://books.google.com/books/content?id=' + book.googleBooksId + '&printsec=frontcover&img=1&zoom=1&source=gbs_api'"
              contain
              v-else
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <p class="display-1 text--primary">{{book.title}}</p>
            <p class="title">by {{book.author}}</p>
          </v-list-item-content>
        </v-list-item>
        <div>
          <v-btn color="primary">
            <router-link
              :to="{ name: 'book', params: {bookId: book.id } }"
              tag="span"
              class="v-btn__content"
            >Details</router-link>
          </v-btn>

          <v-btn color="primary" @click="deleteItem(book)">Delete</v-btn>
        </div>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>
<script>
import BooksService from "@/services/BooksService";
export default {
  props: ["book"],
  methods: {
    async deleteItem(book) {
      try {
        console.log("deleteitem", book);
        await BooksService.deleteItem(book);
      } catch (err) {
        console.log("Can't delete this item");
      }
    }
  }
};
</script>
<style>
</style>
