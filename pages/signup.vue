<template>
  <div>
    <v-card>
      <v-card-text>
        <h1 class="title mb-4">
          新規登録
        </h1>
        <ValidationObserver ref="form">
          <v-form>
            <v-row>
              <v-col
                class="pb-0"
                cols="12"
              >
                <ValidationProvider
                  rules="required|email"
                  name="メールアドレス"
                  v-slot="{errors}"
                >
                  <v-text-field
                    data-testid="signup.email"
                    v-model="email"
                    :error-messages="errors"
                    placeholder="メールアドレスを入力してください"
                    label="メールアドレス"
                    color="success"
                    persistent-hint
                    outlined
                    dense
                  />
                </ValidationProvider>
              </v-col>
              <v-col
                class="pb-0"
                cols="12"
              >
                <ValidationProvider
                  :rules="'required|min:8|strength'"
                  name="パスワード"
                  v-slot="{errors}"
                >
                  <v-text-field
                    data-testid="signup.password"
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    :error-messages="errors"
                    hint="※半角英数字大文字小文字記号を含む8文字以上"
                    placeholder="パスワードを入力してください"
                    label="パスワード"
                    color="success"
                    name="password"
                    ref="password"
                    persistent-hint
                    validate-on-blur
                    outlined
                    dense
                    @click:append="show1 = !show1"
                  />
                </ValidationProvider>
                <!-- <v-progress-linear
                  :background-opacity="'0.5'"
                  :color="score.color"
                  :value="score.value"
                /> -->
              </v-col>
              <v-col
                class="pb-0"
                cols="12"
              >
                <ValidationProvider
                  rules="required|confirmed"
                  name="パスワード"
                  v-slot="{errors}"
                >
                  <v-text-field
                    data-testid="signup.conform"
                    v-model="conform"
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show2 ? 'text' : 'password'"
                    :error-messages="errors"
                    placeholder="再度パスワードを入力してください"
                    label="確認用パスワード"
                    target="password"
                    color="success"
                    name="conform"
                    outlined
                    dense
                    @click:append="show2 = !show2"
                  />
                </ValidationProvider>
              </v-col>
              <v-col
                class="pb-0"
                cols="6"
              >
                <ValidationProvider
                  rules="required"
                  name="苗字"
                  v-slot="{errors}"
                >
                  <v-text-field
                    data-testid="signup.first_name"
                    v-model="first_name"
                    :error-messages="errors"
                    placeholder=""
                    label="苗字"
                    color="success"
                    persistent-hint
                    outlined
                    dense
                  />
                </ValidationProvider>
              </v-col>
              <v-col
                class="pb-0"
                cols="6"
              >
                <ValidationProvider
                  rules="required"
                  name="名前"
                  v-slot="{errors}"
                >
                  <v-text-field
                    data-testid="signup.last_name"
                    v-model="last_name"
                    :error-messages="errors"
                    placeholder=""
                    label="名前"
                    color="success"
                    persistent-hint
                    outlined
                    dense
                  />
                </ValidationProvider>
              </v-col>
              <v-col
                class="pb-0"
                cols="6"
              >
                <ValidationProvider
                  rules="required"
                  name="苗字カナ"
                  v-slot="{errors}"
                >
                  <v-text-field
                    data-testid="signup.first_name_kana"
                    v-model="first_name_kana"
                    :error-messages="errors"
                    placeholder=""
                    label="苗字カナ"
                    color="success"
                    persistent-hint
                    outlined
                    dense
                  />
                </ValidationProvider>
              </v-col>
              <v-col
                class="pb-0"
                cols="6"
              >
                <ValidationProvider
                  rules="required"
                  name="名前カナ"
                  v-slot="{errors}"
                >
                  <v-text-field
                    data-testid="signup.last_name_kana"
                    v-model="last_name_kana"
                    :error-messages="errors"
                    placeholder=""
                    label="名前カナ"
                    color="success"
                    persistent-hint
                    outlined
                    dense
                  />
                </ValidationProvider>
              </v-col>
              <v-col
                class="pb-0"
                cols="6"
              >
                <ValidationProvider
                  rules="required"
                  name="電話番号"
                  v-slot="{errors}"
                >
                  <v-text-field
                    data-testid="signup.phone_number"
                    v-model="phone_number"
                    :error-messages="errors"
                    placeholder=""
                    label="電話番号"
                    color="success"
                    persistent-hint
                    outlined
                    dense
                  />
                </ValidationProvider>
              </v-col>
            </v-row>
            <div class="mt-2 d-flex justify-center">
              <v-btn
                data-testid="login.btn"
                color="secondary"
                small
                elevation="0"
                @click="signup()"
              >
                登録する
              </v-btn>
            </div>
          </v-form>
        </ValidationObserver>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate';
import zxcvbn from 'zxcvbn';

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
      show1: false,
      show2: false,
      email: '',
      password: '',
      conform: '',
      first_name: '',
      last_name: '',
      first_name_kana: '',
      last_name_kana: '',
      phone_number: '',
      postal_code: '',
    };
  },
  computed: {
    score() {
      const result = zxcvbn(this.password);
      switch (result.score) {
        case 4:
          return {
            color: 'light-blue',
            value: 100,
          };
        case 3:
          return {
            color: 'light-green',
            value: 75,
          };
        case 2:
          return {
            color: 'yellow',
            value: 50,
          };
        case 1:
          return {
            color: 'orange',
            value: 25,
          };
        default:
          return {
            color: 'red',
            value: 0,
          };
      }
    },
  },
  methods: {
    async signup() {
      const isValid = await this.$refs.form.validate();
      if (!isValid) {
        return;
      }
      this.$router.push('/');
    },
  },
};
</script>
