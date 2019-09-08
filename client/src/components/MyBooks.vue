<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <Panel title="My Books">
          <v-container fluid>
            <v-layout align-space-between justify-center column fill-height>
              <v-flex xs12>
                <v-card class="mb-10">
                  <v-card-title class="text-uppercase" primary-title>reading now</v-card-title>
                  <BookList listType="current" />
                </v-card>
                <v-card class="mb-10">
                  <v-card-title class="text-uppercase" primary-title>want to read</v-card-title>

                  <BookList listType="wantToRead" />
                </v-card>
                <v-card>
                  <v-card-title class="text-uppercase" primary-title>already done</v-card-title>

                  <BookList listType="finished" />
                </v-card>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <router-link to="mybooks/add" tag="span" class="v-toolbar__title home">
                    <v-btn color="primary">Add Custom Book</v-btn>
                  </router-link>
                  <router-link to="/search" tag="span" class="v-toolbar__title home">
                    <v-btn color="primary">Google Books Search</v-btn>
                  </router-link>
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
export default {
  components: {
    Panel,
    BookList
  }
};
</script>