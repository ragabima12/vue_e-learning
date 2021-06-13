<template>
  <div>
    <v-row class="mt-3 mx-2">
      <v-col class="d-flex justify-start pl-0" cols="8">
        <v-btn class="mr-3" icon><v-icon>mdi-arrow-left</v-icon></v-btn>
        <h2>Buat Izin</h2>
      </v-col>
      <v-col class="text-right d-flex justify-end" cols="4">
        <v-menu offset-y offset-x max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="danger" icon>
              <v-avatar color="primary" size="24"
                ><span class="white--text">Av</span></v-avatar
              >
            </v-btn>
          </template>
          <v-card>
            <v-card-text>
              <v-avatar class="mb-3" size="44" color="primary"
                ><span class="white--text text-h5">Av</span></v-avatar
              >
              <h3>Raga Bima Jr</h3>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="showDialogLogout" block color="primary"
                >Logout</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col class="pb-0" cols="12">
                <label for="" class="mb-0">Jenis Izin</label>
                <v-radio-group class="mt-2" v-model="row" row>
                  <v-radio label="Izin" value="radio-1"></v-radio>
                  <v-radio label="Sakit" value="radio-2"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col class="pt-0 pb-0" cols="12">
                <label for="textarea">Keterangan</label>
                <v-textarea
                  placeholder="Masukan Keterangan"
                  class="mt-2"
                  solo
                ></v-textarea>
              </v-col>
              <v-col class="pt-0" cols="12">
                <label for="textarea">Gambar</label>
                <v-file-input
                  placeholder="Masukan Gambar"
                  class="mt-2"
                  solo
                ></v-file-input>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-action>
            <v-row class="mx-2">
              <v-col cols="12" class="mb-2">
                <v-btn block color="primary" large>KIRIM IZIN</v-btn>
              </v-col>
            </v-row>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>