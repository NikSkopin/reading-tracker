<template>
  <v-card class="white elevation-2">
    <v-toolbar dark flat>
      <v-toolbar-title>Register</v-toolbar-title>
    </v-toolbar>
    <v-spacer></v-spacer>
    <div class="pl-4 pr-4 pt-2 pb-2">
      <input type="email" name="email" placeholder="email" v-model="email" />
      <input type="password" name="password" placeholder="password" v-model="password" />
      <div class="error" v-html="error"></div>
      <v-btn color="pink" @click="register">Register</v-btn>
    </div>
  </v-card>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      this.error = null;
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>
    
<style scoped>
.error {
  color: red;
}
</style>
