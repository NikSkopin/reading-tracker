<template>
  <div>
    <div v-for="bookElement in bookList" :key="bookElement.id">
      <Book :book="bookElement" />
    </div>
  </div>
</template>
<script>
import BooksService from "@/services/BooksService";
import Book from "@/components/Book";
export default {
  data() {
    return {
      bookList: []
    };
  },
  components: {
    Book
  },
  props: ["listType"],
  watch: {
    "$route.query.searchDB": {
      //once a query string search value changes, get list of books from server
      immediate: true,
      async handler(value) {
        const list = (await BooksService.index(value)).data;

        this.bookList = list.filter(element => {
          return element.listType === this.listType;
        });
      }
    }
  }
};
</script>
