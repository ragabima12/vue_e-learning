<template>
  <v-container>
    <v-row>
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
              placeholder="Masukan username"
              class="elevation-0"
              solo
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="pt-0 pb-0">
            <p class="mb-0">Password</p>
            <v-text-field
              placeholder="Masukan Password"
              type="password"
              class="elevation-0"
              solo
            >
              <template #append>
                <span style="font-size: 0.85rem">Tampilkan</span>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" class="pt-0">
            <v-btn dark color="primary" large block>LOGIN</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Home",
};
</script>
