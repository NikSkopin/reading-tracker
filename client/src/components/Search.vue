<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <Panel title="Search">
          <v-form @submit.prevent="search">
            <v-container fluid>
              <v-layout align-center justify-center>
                <v-flex xs10>
                  <v-text-field label="Search" prepend-icon="search" v-model="searchTerm"></v-text-field>
                </v-flex>
                <v-flex xs2>
                  <v-btn class="ml-2 mr-2" color="primary" type="submit" @click="search">Search</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
          <v-container>
            <v-subheader>Search Results</v-subheader>

            <div v-for="bookElement in searchResults.items" :key="bookElement.id">
              <SearchResult :bookElement="bookElement" />
            </div>
          </v-container>
        </Panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from "@/components/Panel";
import SearchResult from "@/components/SearchResult";
import SearchService from "@/services/SearchService";

export default {
  data() {
    return {
      error: "",
      searchTerm: "",
      searchResults: []
    };
  },
  components: {
    Panel,
    SearchResult
  },
  methods: {
    async search() {
      try {
        const response = await SearchService.search(this.searchTerm);
        this.searchResults = response.data;
      } catch (err) {
        this.error = err;
      }
    }
  }
};
</script>
