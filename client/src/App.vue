<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer v-model="drawer" app>
        <v-list dense>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <router-link to="home" tag="span" class="v-toolbar__title home">
          <v-toolbar-title>Reading Tracker</v-toolbar-title>
        </router-link>

        <!-- TODO: may be you need me later, implement -->
        <!-- <v-appbar-items>
          <v-btn text>Browse</v-btn>
        </v-appbar-items>-->

        <v-spacer></v-spacer>
        <v-toolbar-items>
          <router-link to="login">
            <v-btn text>Sign In</v-btn>
          </router-link>

          <router-link to="register">
            <v-btn text>Sign Up</v-btn>
          </router-link>
        </v-toolbar-items>
      </v-app-bar>

      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <router-view />
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer color="primary" app>
        <span class="white--text">&copy; 2019</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  props: {},
  data: () => ({
    drawer: null
  })
};
</script>


<style lang="scss">
.home {
  cursor: pointer;
}
.home:hover {
  //TODO: make hove effect like for buttons and sandwich
  color: #e0e0e0;
}
</style>
