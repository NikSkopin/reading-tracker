<template>
  <v-form>
    <v-container fluid>
      <v-layout align-center justify-center>
        <v-flex xs12>
          <v-text-field
            label="Search by author, title, genre or description "
            prepend-icon="search"
            v-model="searchDB"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      searchDB: ""
    };
  },
  watch: {
    //input string watcher
    searchDB(value) {
      const route = {
        name: "mybooks"
      };
      if (this.searchDB !== "") {
        route.query = {
          searchDB: this.searchDB
        };
      }
      this.$router.push(route);
    },
    //route watcher (address, i.e. mybooks?searchDB=value)
    "$route.query.searchDB": {
      immediate: true,
      handler(value) {
        this.searchDB = value;
      }
    }
  }
};
</script>

<style>
</style>