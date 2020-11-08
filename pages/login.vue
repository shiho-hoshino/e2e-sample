<template>
  <div>
    <v-card>
      <v-card-text>
        <h1 class="title mb-4">
          Login
        </h1>
        <ValidationObserver ref="form">
          <v-form>
            <ValidationProvider
              rules="required"
              :name="'メールアドレス'"
              v-slot="{errors}"
            >
              <v-text-field
                data-testid="login.email"
                v-model="data.email"
                :error-messages="errors"
                label="メールアドレス"
                outlined
                dense
              />
            </ValidationProvider>
            <ValidationProvider
              rules="required"
              name="パスワード"
              v-slot="{errors}"
            >
              <v-text-field
                data-testid="login.password"
                v-model="data.password"
                :error-messages="errors"
                label="パスワード"
                outlined
                dense
              />
            </ValidationProvider>
            <div class="mt-2 d-flex justify-center">
              <v-btn
                data-testid="login.btn"
                color="secondary"
                small
                elevation="0"
                @click="login()"
              >
                Login
              </v-btn>
            </div>
          </v-form>
        </ValidationObserver>

        <nuxt-link
          data-testid="link.signup"
          class="caption secondary--text"
          :to="'/signup'"
        >
          新規登録
        </nuxt-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate';

export default {
  layout: 'login',
  head() {
    return {
      title: 'Login',
    };
  },
  components: {
    ValidationObserver,
    ValidationProvider,
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
    async login() {
      const isValid = await this.$refs.form.validate();
      if (!isValid) {
        return;
      }
      this.$router.push('/');
    },
  },
};
</script>
