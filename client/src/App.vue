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

          <router-link
            :to="{name: 'mybooks'}"
            tag="button"
            class="v-btn v-btn--contained theme--light v-size--default primary ml-4"
            v-if="$store.state.isUserLoggedIn"
          >My books</router-link>

          <router-link
            :to="{name: 'search'}"
            tag="button"
            class="v-btn v-btn--contained theme--light v-size--default primary"
            v-if="$store.state.isUserLoggedIn"
          >Search</router-link>
        </v-toolbar-items>

        <v-spacer></v-spacer>
        <v-toolbar-items>
          <router-link
            :to="{name: 'login'}"
            tag="button"
            class="v-btn v-btn--contained theme--light v-size--default primary"
            v-if="!$store.state.isUserLoggedIn"
          >Login</router-link>

          <router-link
            :to="{name: 'register'}"
            tag="button"
            class="v-btn v-btn--contained theme--light v-size--default primary"
            v-if="!$store.state.isUserLoggedIn"
          >Register</router-link>
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
