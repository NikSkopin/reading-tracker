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
            <ol class="search-results">
              <li
                class="search-result"
                v-for="bookElement in searchResults.items"
                :key="bookElement.id"
              >
                <!-- <Book :book="bookElement" /> -->
                {{bookElement.volumeInfo.title}}
              </li>
            </ol>
          </v-container>
        </Panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from "@/components/Panel";
import Book from "@/components/Book";
import SearchService from "@/services/SearchService";
export default {
  data() {
    return {
      searchTerm: "",
      searchResults: []
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
  }
};
</script>