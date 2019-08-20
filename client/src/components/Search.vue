<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <Panel title="Search">
          <v-form @submit.prevent="search">
            <v-container fluid>
              <v-layout align-center justify-center>
                <v-flex xs11>
                  <v-text-field label="Search" prepend-icon="search" v-model="searchTerm"></v-text-field>
                </v-flex>
                <v-flex xs1>
                  <v-btn class="ml-4" type="submit" @click="search">Search</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
          <v-container>
            <v-list threeLine avatar>
              <v-subheader>Search Results</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item v-for="bookElement in searchResults.items" :key="bookElement.id">
                  <v-list-item-avatar tile width="20%" height="100%">
                    <v-img
                      height="200px"
                      width="100%"
                      class="white--text"
                      :src="'http://books.google.com/books/content?id=' + bookElement.id + '&printsec=frontcover&img=1&zoom=1&source=gbs_api'"
                      contain
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{bookElement.volumeInfo.title}}</v-list-item-title>
                    <v-list-item-subtitle>by {{ bookElement.volumeInfo.authors.join(', ') }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-select
                      v-model="book.selection"
                      :items="book.items"
                      label="Add to list"
                      required
                    ></v-select>

                    <v-btn color="primary">Add</v-btn>
                    <!-- <v-btn color="primary" @click="add">Add</v-btn> -->
                  </v-list-item-action>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-container>
        </Panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from "@/components/Panel";
// import Book from "@/components/Book";
import SearchService from "@/services/SearchService";
import BooksService from "@/services/BooksService";

export default {
  data() {
    return {
      searchTerm: "",
      searchResults: [],
      book: {
        title: null,
        author: null,
        genre: null,
        description: null,
        bookImage: null,
        // googleBooksId: null,
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
    async search() {
      try {
        const response = await SearchService.search(this.searchTerm);
        this.searchResults = response.data;
      } catch (err) {}
    }
    /*
    async add() {
      if (this.book.selection === "Reading now") {
        this.book.listType = "current";
      } else if (this.book.selection === "Finished") {
        this.book.listType = "finished";
      } else this.book.listType = "wantToRead";

      const areAllFieldsFilledIn = Object.keys(this.book).every(
        key => !!this.book[key]
      );
      if (!areAllFieldsFilledIn) {
        this.error = "Please fill in all the required fields.";
        return;
      }
      //add book to database
      try {
        await BooksService.post(this.book);
        this.$router.push({
          name: "mybooks"
        });
      } catch (err) {}
    }*/
  }
};
</script>