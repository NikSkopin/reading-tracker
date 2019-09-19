<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <Panel title="My Books">
          <v-container fluid>
            <v-layout align-space-between justify-center column fill-height>
              <v-flex xs12>
                <BookSearchDB />
                <v-card class="mb-10">
                  <v-card-title class="text-uppercase" primary-title>reading now</v-card-title>
                  <BookList :listType="current" />
                </v-card>
                <v-card class="mb-10">
                  <v-card-title class="text-uppercase" primary-title>want to read</v-card-title>

                  <BookList :listType="wantToRead" />
                </v-card>
                <v-card>
                  <v-card-title class="text-uppercase" primary-title>already done</v-card-title>

                  <BookList :listType="finished" />
                </v-card>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn :to="{ name: 'book-create'}" color="primary">Add Custom Book</v-btn>
                  <v-btn color="primary" :to="{name: 'search'}">Google Books Search</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </Panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from "@/components/Panel";
import BookList from "@/components/BookList";
import BookSearchDB from "@/components/BookSearchDB";
export default {
  data() {
    return {
      current: "current",
      wantToRead: "wantToRead",
      finished: "finished"
    };
  },
  components: {
    Panel,
    BookList,
    BookSearchDB
  }
};
</script>