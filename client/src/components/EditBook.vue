<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <Panel title="Edit Book">
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
              v-model="selection"
              :items="items"
              item-text="list"
              item-value="list"
              label="Move to list"
              required
              :rules="[required]"
            ></v-select>
          </form>
          <v-card-actions>
            <v-spacer></v-spacer>
            <div class="err" v-if="error">{{error}}</div>
            <v-btn color="primary" dark @click="save">Save</v-btn>
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
        listType: null
        // selection: null
        // items: ["Reading now", "Want to read", "Finished"]
      },
      items: [
        { list: "Reading now" },
        { list: "Want to read" },
        { list: "Finished" }
      ],
      selection: { list: "" },

      required: value => !!value || "Required.",
      error: null
    };
  },
  components: {
    Panel
  },
  async mounted() {
    try {
      const bookId = this.$store.state.route.params.bookId;

      this.book = (await BooksService.show(bookId)).data;
      this.book.bookImage = `http://books.google.com/books/content?id=${this.book.googleBooksId}&printsec=frontcover&img=1&zoom=1&source=gbs_api`;

      if (this.book.listType === "current") {
        this.selection.list = "Reading now";
      } else if (this.book.listType === "finished") {
        this.selection.list = "Finished";
      } else this.selection.list = "Want to read";

      console.log(this.selection.list);
    } catch (err) {
      this.error = err;
    }
  },
  methods: {
    async save() {
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

      //   const bookId = this.$store.state.route.params.bookId;
      try {
        await BooksService.put(this.book);
        this.$router.push({
          name: "mybooks"
        });
      } catch (err) {
        this.error = err;
      }
    }
  }
};
</script>
