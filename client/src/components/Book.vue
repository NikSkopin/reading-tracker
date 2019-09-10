<template>
  <router-link :to="{ name: 'book', params: {bookId: book.id } }" class="nodec">
    <v-card class="mb-4 pa-4" flat hover>
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
        <v-col cols="8" class="pl-0 pr-0">
          <v-col cols="12">
            <p class="display-1 text--primary">{{book.title}}</p>
            <p class="title">by {{book.author}}</p>
          </v-col>
          <v-row>
            <v-col cols="12" class="py-0">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn
                    :to="{ name: 'book', params: {bookId: book.id } }"
                    icon
                    color="primary"
                    v-on="on"
                  >
                    <v-icon dark>mdi-book-open</v-icon>
                  </v-btn>
                </template>
                <span>Details</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn @click="deleteItem(book.id)" icon color="primary" v-on="on">
                    <v-icon>mdi-delete-outline</v-icon>
                  </v-btn>
                </template>
                <span>Delete</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn @click="deleteItem(book.id)" icon color="primary" v-on="on">
                    <v-icon>mdi-file-document-edit-outline</v-icon>
                  </v-btn>
                </template>
                <span>Edit</span>
              </v-tooltip>
            </v-col>

            <v-col cols="12" class="py-0">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on" v-bind:class="{'v-btn--disabled' : isCurrent}">
                    <v-icon color="primary">mdi-book-open-page-variant</v-icon>
                  </v-btn>
                </template>
                <span>Move to Current</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on" v-bind:class="{'v-btn--disabled' : isLater}">
                    <v-icon color="primary">mdi-timer-sand</v-icon>
                  </v-btn>
                </template>
                <span>Move to Want to Read</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on" v-bind:class="{'v-btn--disabled' : isFinished}">
                    <v-icon color="primary">mdi-check-bold</v-icon>
                  </v-btn>
                </template>
                <span>Move to Finished</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-card-actions></v-card-actions>
    </v-card>
  </router-link>
</template>
<script>
import BooksService from "@/services/BooksService";
export default {
  data() {
    return {
      isCurrent: false,
      isLater: false,
      isFinished: false
    };
  },
  props: ["book"],
  mounted() {
    if (this.book.listType === "current") {
      this.isCurrent = true;
    } else if (this.book.listType === "finished") {
      this.isFinished = true;
    } else this.isLater = true;
  },
  methods: {
    async deleteItem(bookId) {
      try {
        await BooksService.deleteItem(bookId);
        this.$router.push({
          name: "mybooks"
        });
      } catch (err) {
        console.log("Can't delete this item");
      }
    }
  }
};
</script>
<style>
.nodec {
  text-decoration: none;
}
</style>
