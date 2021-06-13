<template>
  <div>
    <v-row class="mt-3 mx-2">
      <v-col class="d-flex justify-start pl-0" cols="8">
        <v-btn class="mr-3" icon><v-icon>mdi-arrow-left</v-icon></v-btn>
        <h2>Tugas</h2>
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
    </v-row>
    <v-row class="mx-2">
      <v-col cols="12">
        <v-card>
          <v-card-title>Tutorial Origami Ayam</v-card-title>
          <v-card-text class="v-card__text--scrollable">
            <v-row>
              <v-col cols="4">
                <v-img
                  src="https://images.unsplash.com/photo-1623312484506-2c16c008d907?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
                ></v-img>
              </v-col>
              <v-col cols="4">
                <v-img
                  src="https://images.unsplash.com/photo-1623312484506-2c16c008d907?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
                ></v-img>
              </v-col>
              <v-col cols="4">
                <v-img
                  src="https://images.unsplash.com/photo-1623312484506-2c16c008d907?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
                ></v-img>
              </v-col>
              <v-col class="pt-0 d-flex" cols="12">
                <v-icon class="mr-2" small>mdi-eye</v-icon>
                <h5>Tanggal tenggat 19 Nov 2017</h5>
              </v-col>
              <v-col class="pt-2" cols="12">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet voluptates earum consequatur fuga provident odit? Illo
                  consectetur animi quaerat culpa corporis, libero quo enim
                  aliquid. Consequuntur cum tenetur eligendi tempore? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
                  in officia omnis, reprehenderit dolores totam necessitatibus
                  odio neque voluptatem non aut hic consequuntur repellat. Ipsum
                  quos quidem omnis reprehenderit provident.
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col class="pb-0" cols="12">
                <label for="">Upload Tugas</label>
                <v-file-input
                  placeholder="Masukan Gambar"
                  class="mt-2"
                  solo
                ></v-file-input>
              </v-col>
              <v-col class="pt-0" cols="12">
                <v-btn block large color="primary">KIRIM</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
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