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

        <v-toolbar-items>
          <router-link to="home">
            <v-btn text>Dashboard</v-btn>
          </router-link>

          <router-link to="books" v-if="$store.state.isUserLoggedIn">
            <v-btn text>My books</v-btn>
          </router-link>

          <router-link to="search">
            <v-btn text>Search</v-btn>
          </router-link>
        </v-toolbar-items>

        <v-spacer></v-spacer>
        <v-toolbar-items>
          <router-link to="login" v-if="!$store.state.isUserLoggedIn">
            <v-btn text>Login</v-btn>
          </router-link>

          <router-link to="register" v-if="!$store.state.isUserLoggedIn">
            <v-btn text>Register</v-btn>
          </router-link>
          <v-btn text v-if="$store.state.isUserLoggedIn" @click="logout">Logout</v-btn>
        </v-toolbar-items>
      </v-app-bar>

      <v-content>
        <router-view />
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
  }),
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "home"
      });
    }
  }
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
