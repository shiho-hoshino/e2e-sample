<template>
  <v-app>
    <v-main>
      <v-sheet
        tile
        color="#F9F8FD"
      >
        <v-app-bar
          color="white"
          dense
          flat
          outlined
        >
          <v-toolbar-title>E2E SAMPLE</v-toolbar-title>
        </v-app-bar>
        <v-container
          fluid
        >
          <div
            class="pt-10 pb-10 px-12 mx-auto"
            style="max-width:800px;"
          >
            <nuxt />
          </div>
        </v-container>
        <v-footer
          color="white"
        >
          <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-logout-variant',
          title: 'Logout',
          to: '/login',
        },
      ],
    };
  },
};
</script>
