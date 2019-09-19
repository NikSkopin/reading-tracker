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
import _ from 'lodash'
export default {
  data() {
    return {
      searchDB: ""
    };
  },
  watch: {
    //input string watcher
    searchDB: _.debounce(async function(value) {
      const route = {
        name: "mybooks"
      };
      if (this.searchDB !== "") {
        route.query = {
          searchDB: this.searchDB
        };
      }
      this.$router.push(route);
    }, 700),
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