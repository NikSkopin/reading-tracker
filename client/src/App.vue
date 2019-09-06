<template>
  <div id="app">
    <v-app>
      <v-app-bar app color="primary" dark>
        <router-link :to="{name: 'home'}" tag="span" class="v-toolbar__title home">
          <v-toolbar-title>Reading Tracker</v-toolbar-title>
        </router-link>
        <v-toolbar-items>
          <!-- <v-btn text>
            <router-link :to="{name: 'home'}" tag="span" class="v-btn__content">Dashboard</router-link>
          </v-btn>-->

          <v-btn text v-if="$store.state.isUserLoggedIn">
            <router-link :to="{name: 'mybooks'}" tag="span" class="v-btn__content">My books</router-link>
          </v-btn>

          <v-btn text>
            <router-link :to="{name: 'search'}" tag="span" class="v-btn__content">Search</router-link>
          </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn text v-if="!$store.state.isUserLoggedIn">
            <router-link :to="{name: 'login'}" tag="span" class="v-btn__content">Login</router-link>
          </v-btn>

          <v-btn text v-if="!$store.state.isUserLoggedIn">
            <router-link :to="{name: 'register'}" tag="span" class="v-btn__content">Register</router-link>
          </v-btn>
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
.err {
  color: red;
}
</style>
