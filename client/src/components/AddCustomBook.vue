<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <Panel title="Add Custom Book">
          <form>
            <v-text-field label="Title" v-model="book.title" required :rules="[required]"></v-text-field>
            <v-text-field label="Author" v-model="book.author" required :rules="[required]"></v-text-field>
            <v-text-field label="Genre" v-model="book.genre" required :rules="[required]"></v-text-field>
            <v-text-field
              label="Book Image (link)"
              v-model="book.bookImage"
              required
              :rules="[required]"
            ></v-text-field>
            <v-textarea label="Description" v-model="book.description" required :rules="[required]"></v-textarea>
            <v-select
              v-model="book.selection"
              :items="book.items"
              label="Add to list"
              required
              :rules="[required]"
            ></v-select>
          </form>
          <v-card-actions>
            <v-spacer></v-spacer>
            <div class="err" v-if="error">{{error}}</div>
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
        // googleBooksId: null,
        listType: null,
        selection: null,
        items: ["Reading now", "Want to read", "Finished"]
      },
      required: value => !!value || "Required.",
      error: null
    };
  },
  components: {
    Panel
  },
  methods: {
    async add() {
      console.log(typeof this.book.bookImage, typeof this.book.author);

      this.error = null;
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
      //call API
      try {
        await BooksService.post(this.book);
        this.$router.push({
          name: "mybooks"
        });
      } catch (err) {
        console.log(err);
      }
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
