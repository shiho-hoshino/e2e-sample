<template>
  <div>
    <v-card>
      <v-card-text>
        <h1 class="title mb-4">
          Login
        </h1>
        <v-text-field
          data-testid="login.email"
          v-model="data.email"
          single-line
          outlined
          dense
        />
        <v-text-field
          data-testid="login.password"
          v-model="data.password"
          single-line
          outlined
          dense
        />
        <div class="mt-2 d-flex justify-center">
          <v-btn
            data-testid="login.btn"
            small
            rounded
            @click="login()"
          >
            Login
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Login',
    };
  },
  data() {
    return {
      data: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      this.$router.push('/');
    },
  },
};
</script>
