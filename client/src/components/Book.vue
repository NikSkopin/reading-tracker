<template>
  <!-- <router-link :to="{ name: 'book', params: {bookId: book.id } }" class="nodec"> -->
  <v-card class="mb-4 pa-4" flat hover>
    <v-row>
      <v-col cols="4" class="pa-0">
        <v-img :src="book.bookImage" height="200px" contain v-if="book.bookImage"></v-img>
        <v-img
          :src="'http://books.google.com/books/content?id=' + book.googleBooksId + '&printsec=frontcover&img=1&zoom=1&source=gbs_api'"
          max-height="200px"
          contain
          v-else
        ></v-img>
      </v-col>
      <v-col cols="8" class="pa-0">
        <v-col cols="12" class="py-0">
          <p class="headline mb-1">{{book.title}}</p>
          <p class="body-1 mb-1">by {{book.author}}</p>
        </v-col>
        <v-row align-content-start>
          <v-col cols="12" class="py-0">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  :to="{ name: 'book', params: {bookId: book.id } }"
                  icon
                  color="primary"
                  v-on="on"
                >
                  <v-icon dark size="22">mdi-book-open</v-icon>
                </v-btn>
              </template>
              <span>Details</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn @click="deleteItem(book.id)" icon color="primary" v-on="on">
                  <v-icon size="22">mdi-delete-outline</v-icon>
                </v-btn>
              </template>
              <span>Delete</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  :to="{ name: 'edit', params: {bookId: book.id }}"
                  icon
                  color="primary"
                  v-on="on"
                >
                  <v-icon size="22">mdi-file-document-edit-outline</v-icon>
                </v-btn>
              </template>
              <span>Edit</span>
            </v-tooltip>
          </v-col>

          <v-col cols="5" class="py-0">
            <div>
              <div class="pa-0 pt-1 mt-3 group-border">
                <p class="subheading group-heading">Move to list</p>

                <v-tooltip bottom class="ml-2">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      @click="changeTo('current', book.id)"
                      icon
                      v-on="on"
                      v-bind:class="{'v-btn--disabled' : isCurrent}"
                    >
                      <v-icon color="primary" size="22">mdi-book-open-page-variant</v-icon>
                    </v-btn>
                  </template>
                  <span>Move to Current</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      @click="changeTo('wantToRead', book.id)"
                      icon
                      v-on="on"
                      v-bind:class="{'v-btn--disabled' : isLater}"
                    >
                      <v-icon color="primary" size="22">mdi-timer-sand</v-icon>
                    </v-btn>
                  </template>
                  <span>Move to Want to Read</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      @click="changeTo('finished', book.id)"
                      icon
                      v-on="on"
                      v-bind:class="{'v-btn--disabled' : isFinished}"
                    >
                      <v-icon color="primary" size="22">mdi-check-bold</v-icon>
                    </v-btn>
                  </template>
                  <span>Move to Finished</span>
                </v-tooltip>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
  <!-- </router-link> -->
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
        this.$emit("bookChanged");
      } catch (err) {
        console.log("Can't delete this item");
      }
    },

    async changeTo(list) {
      this.book.listType = list;

      try {
        await BooksService.put(this.book);
        this.$emit("bookChanged");
      } catch (err) {
        this.error = err;
      }
    }
  }
};
</script>
<style>
.nodec {
  text-decoration: none;
}
.group-border {
  border: 1px solid #1e88e5;
  border-radius: 6px;
  width: 180px;
  position: relative;
  z-index: 1;
}
.group-heading {
  position: absolute;
  color: #1e88e5;
  top: -12px;
  left: 15px;
  z-index: 500;
  background-color: #fff;
  padding: 0 3px;
}
</style>
