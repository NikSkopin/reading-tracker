<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <Panel title="Book Details">
          <v-card class="elevation-1">
            <v-container>
              <v-row>
                <v-col cols="4" class="pa-0">
                  <v-img
                    :src="book.bookImage"
                    height="90%"
                    max-height="300px"
                    contain
                    v-if="book.bookImage"
                  ></v-img>
                  <v-img
                    :src="'http://books.google.com/books/content?id=' + book.googleBooksId + '&printsec=frontcover&img=1&zoom=1&source=gbs_api'"
                    max-height="300px"
                    height="90%"
                    contain
                    v-else
                  ></v-img>
                </v-col>
                <v-col cols="8" class="pa-0">
                  <p class="display-1 text--primary">{{book.title}}</p>
                  <p class="title">by {{book.author}}</p>
                  <p class="subtitle-1">Description:</p>
                  <p>{{book.description}}</p>
                </v-col>
              </v-row>
              <v-card-actions>
                <v-btn
                  dark
                  target="_blank"
                  href="'https://books.google.pl/books?id=' + book.googleBooksId + '&pg=PA1&dq=net&hl=en&sa=X&ved=0ahUKEwjuoomorcbkAhVywosKHW3OAB0Q6AEIKjAA#v=onepage&q=net&f=false'"
                  exact
                  color="primary"
                >Open on Google Books</v-btn>
              </v-card-actions>
            </v-container>
          </v-card>
        </Panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BooksService from "@/services/BooksService";
import Panel from "@/components/Panel";
export default {
  data() {
    return {
      book: {}
    };
  },
  async mounted() {
    const bookId = this.$store.state.route.params.bookId;

    this.book = (await BooksService.show(bookId)).data;
  },
  components: {
    Panel
  }
};
</script>

<style>
</style>