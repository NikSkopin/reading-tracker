<template>
  <div>
    <div v-for="bookElement in bookList" :key="bookElement.id">
      <!-- {{bookElement.title}}
      {{bookElement.author}}-->
      <Book :book="bookElement" />
      <!-- <Book :title="bookElement.title" :author="bookElement.author" :image="bookElement.bookImage" /> -->
    </div>
  </div>
</template>
<script>
import BooksService from "@/services/BooksService";
import Book from "@/components/Book";
export default {
  data() {
    return {
      bookList: null
    };
  },
  components: {
    Book
  },
  props: ["listType"],
  async mounted() {
    //do a request to the backend for all current books
    const list = (await BooksService.index()).data;

    //filter books with needed type
    this.bookList = list.filter(element => {
      return element.listType === this.listType;
    });
    console.log(this.bookList);
  }
};
</script>

