<template>
  <div>
    <div>
      <Search />
    </div>
    <div>
      <MyBooks />
    </div>
  </div>
</template>

<script>
import MyBooks from "@/components/MyBooks";
import Search from "@/components/Search";
export default {
  components: {
    MyBooks,
    Search
  }
};
</script>

