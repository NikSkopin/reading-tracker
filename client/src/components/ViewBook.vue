<template>
  <Panel title="ViewSong">{{book.title}}</Panel>
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