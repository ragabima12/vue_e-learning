<template>
  <v-row class="mx-2">
    <v-col cols="12" class="d-flex justify-center align-center">
      <v-card width="100%">
        <v-card-title>
          <v-tabs class="flex-grow-1">
            <v-tab class="flex-grow-1">Siswa</v-tab>
            <v-tab class="flex-grow-1">Guru</v-tab>
          </v-tabs>
        </v-card-title>
        <v-card-text class="v-card__text--scrollable">
          <v-row class="mt-2">
            <v-col cols="12" class="pb-0 pt-0">
              <p class="mb-2">Nama Lengkap</p>
              <v-text-field
                solo
                placeholder="Masukan Nama Lengkap"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pb-0 pt-0">
              <p class="mb-2">Username</p>
              <v-text-field solo placeholder="Masukan Username"></v-text-field>
            </v-col>
            <v-col cols="12" class="pb-0 pt-0">
              <p class="mb-2">Email</p>
              <v-text-field solo placeholder="Masukan Email"></v-text-field>
            </v-col>
            <v-col cols="12" class="pb-0 pt-0">
              <p class="mb-2">Password</p>
              <v-text-field solo placeholder="Masukan Password"></v-text-field>
            </v-col>
            <v-col cols="12" class="pb-0 pt-0">
              <p class="mb-2">Konfirmasi Password</p>
              <v-text-field
                solo
                placeholder="Masukan Konfirmasi Password"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="mb-2 pt-0">
              <v-btn large dark color="primary" block>DAFTAR</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style >
</style>