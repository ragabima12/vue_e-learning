<template>
  <v-row class="mx-2">
    <v-col cols="12" class="d-flex justify-center align-start my-6">
      <v-card width="100%">
        <v-card-title class="flex justify-center">
          <span class="text-subtitle-1 mb-4">Registrasi sebagai : </span>
          <v-tabs class="flex-grow-1" v-model="user.role">
            <v-tab class="flex-grow-1">Orang Tua</v-tab>
            <v-tab class="flex-grow-1">Guru</v-tab>
          </v-tabs>
        </v-card-title>
        <v-form ref="register_form">
          <v-alert type="success" class="mx-3" v-if="isSuccess">
            Registrasi berhasil silahkan login
          </v-alert>
          <v-alert
            type="error"
            class="mx-3"
            v-for="(error, errorIndex) of errors"
            :key="errorIndex"
          >
            {{ error }}
          </v-alert>

          <v-card-text class="v-card__text--scrollable">
            <v-row class="mt-2">
              <v-col cols="12" class="pb-0 pt-0">
                <p class="mb-2">Nama Lengkap</p>
                <v-text-field
                  solo
                  placeholder="Masukan Nama Lengkap"
                  v-model="user.fullname"
                  :rules="rules.fullname"
                  :disabled="isLoading"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pb-0 pt-0">
                <p class="mb-2">Username</p>
                <v-text-field
                  solo
                  placeholder="Masukan Username"
                  v-model="user.username"
                  :rules="rules.username"
                  :disabled="isLoading"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pb-0 pt-0">
                <p class="mb-2">Email</p>
                <v-text-field
                  solo
                  placeholder="Masukan Email"
                  v-model="user.email"
                  :rules="rules.email"
                  :disabled="isLoading"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pb-0 pt-0">
                <p class="mb-2">Password</p>
                <v-text-field
                  solo
                  placeholder="Masukan Password"
                  type="password"
                  v-model="user.password"
                  :rules="rules.password"
                  :disabled="isLoading"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pb-0 pt-0">
                <p class="mb-2">Konfirmasi Password</p>
                <v-text-field
                  solo
                  placeholder="Masukan Konfirmasi Password"
                  type="password"
                  v-model="user.confirm_password"
                  :rules="rules.confirm_password"
                  :disabled="isLoading"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-form>

        <v-card-actions>
          <div class="flex flex-column">
            <v-btn
              large
              dark
              color="primary"
              block
              @click="submitForm"
              :loading="isLoading"
              class="mb-2"
              >DAFTAR</v-btn
            >
            <v-btn
              large
              text
              color="primary"
              block
              :loading="isLoading"
              @click="$router.push('/login')"
              >LOGIN</v-btn
            >
          </div>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import validator from "validator";
export default {
  data() {
    return {
      isLoading: false,
      isSuccess: false,
      errors: [],
      user: {
        role: "",
        fullname: "",
        email: "",
        username: "",
        password: "",
        confirm_password: "",
      },
      rules: {
        fullname: [
          (val) => !validator.isEmpty(val) || "Nama lengkap tidak boleh kosong",
          (val) =>
            val.length <= 80 || "Nama tidak boleh lebih dari 80 karakter",
          (val) => val.length >= 3 || "Nama tidak boleh kurang dari 3 karakter",
        ],
        email: [
          (val) => !validator.isEmpty(val) || "Email tidak boleh kosong",
          (val) => validator.isEmail(val) || "Email tidak valid",
        ],
        username: [
          (val) => !validator.isEmpty(val) || "Username tidak boleh kosong",
        ],
        password: [
          (val) => !validator.isEmpty(val) || "Password tidak boleh kosong",
        ],
        confirm_password: [
          (val) =>
            !validator.isEmpty(val) || "Konfirmasi Password tidak boleh kosong",
        ],
      },
    };
  },

  methods: {
    validateForm() {
      this.$refs.register_form.validate();
    },
    async submitForm() {
      this.validateForm();
      this.isLoading = true;
      this.isSuccess = false;
      this.errors = [];
      const formErrors = Object.entries(this.$refs.register_form.errorBag)
        .map((item) => item[1])
        .filter((error) => error);
      const hasFormError = formErrors.length > 0;

      if (hasFormError) {
        this.isLoading = false;
        return false;
      }

      const invalidConfirmationPassword =
        this.user.password !== this.user.confirm_password;
      if (invalidConfirmationPassword) {
        this.isLoading = false;
        this.errors.push("Konfirmasi password tidak sesuai");
        return false;
      }

      let { fullname, email, username, password, role } = this.user;
      role = (role == 0 && "parent") || "teacher";

      const userData = {
        fullname: fullname,
        email: email,
        username: username,
        password: password,
        role: role,
      };
      const registerResult = await this.$store.dispatch(
        "registerAction",
        userData
      );

      const isRegisterFail = registerResult?.error;
      if (isRegisterFail) {
        errors.push(error);
        this.isLoading = false;
        return false;
      }

      this.isSuccess = true;

      setTimeout(() => {
        this.$router.push("/login");
      }, 1500);

      this.isLoading = false;
    },
  },
};
</script>

<style >
</style>