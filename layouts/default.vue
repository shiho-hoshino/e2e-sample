<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            nuxt
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-app-bar
        dense
        flat
      >
        <v-app-bar-nav-icon@click="drawer=true" />
        <v-toolbar-title>Title</v-toolbar-title>
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
      <v-footer>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
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
