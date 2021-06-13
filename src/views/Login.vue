<template>
  <v-container>
    <v-row>
      <v-form ref="login_form">
        <v-col
          cols="12"
          class="d-flex justify-center align-center flex-column py-8"
        >
          <v-row>
            <v-col cols="12" class="pb-0">
              <h2 class="primary--text">E-Learn</h2>
            </v-col>
          </v-row>
          <v-row class="mx-2">
            <v-col cols="12" class="d-flex justify-center align-center pb-0">
              <v-img src="@/assets/belajar.svg" max-width="200"></v-img>
            </v-col>
            <v-col cols="12" class="pt-3 text-center">
              <h3 class="mb-1">Selamat Datang Di E-Absen</h3>
              <p>Silahkan login untuk melanjutkan absen</p>
            </v-col>
            <v-col cols="12" class="pb-0">
              <p class="mb-2">Username</p>
              <v-text-field
                v-model="username"
                placeholder="Masukan username"
                class="elevation-0"
                solo
                :rules="rules.username"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pt-0 pb-0">
              <p class="mb-0">Password</p>
              <v-text-field
                v-model="password"
                placeholder="Masukan Password"
                type="password"
                class="elevation-0"
                solo
                :rules="rules.password"
              >
                <template #append>
                  <span style="font-size: 0.85rem">Tampilkan</span>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" class="pt-0">
              <v-btn dark color="primary" large block @click="submitForm">LOGIN</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-form>
    </v-row>
  </v-container>
</template>
<script>
import validator from 'validator'
import AuthMixin from '../mixins/auth'

export default {
  name: "Home",
  data(){
    return {
      username: '',
      password: '',
      errors: [],
      rules: {
        username: [ val => !validator.isEmpty(val) || 'Username tidak boleh kosong' ],
        password: [ val => !validator.isEmpty(val) || 'Password tidak boleh kosong' ]
      }
    }
  },
  computed: {
  },
  methods: {
    validateForm(){
      this.$refs.login_form.validate()
    },
    async submitForm(){
      this.validateForm()
      const { username, password } = this
      const isEmptyBoth = username.length === 0 && password.length === 0
      if( isEmptyBoth ) return false
      
      const result = await this.$store.dispatch('loginAction', {username, password})
      const isFailLogin = result?.error
      if( isFailLogin ) return this.errors.push(result.error)

      const { role } = result.userData

      switch( role.role_label ){
        case 'parent':
          this.$router.push('/dashboard/parent')
          break
        case 'teacher':
          this.$router.push('/dashboard/teacher')
          break
      }
    }
  },
  mixins: [AuthMixin]
};
</script>
