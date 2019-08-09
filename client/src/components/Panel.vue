<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <slot>This slot is empty</slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["title"]
};
</script>
