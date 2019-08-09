<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <Panel title="My Books">
          <v-container fluid>
            <v-layout align-space-between justify-center column fill-height>
              <v-flex xs12>
                <v-card>
                  <BookList listType="current" />
                </v-card>
                <v-card>
                  <BookList listType="wantToRead" />
                </v-card>
                <v-card>
                  <BookList listType="finished" />
                </v-card>
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
import BookList from "@/components/MyBooks/BookList";
export default {
  components: {
    Panel,
    BookList
  }
};
</script>