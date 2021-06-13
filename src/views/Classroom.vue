<template>
  <div>
    <v-row class="mt-3 mx-2">
      <v-col class="d-flex justify-start pl-0" cols="8">
        <v-btn class="mr-3" icon @click="$router.push('/dashboard/parent')"><v-icon>mdi-arrow-left</v-icon></v-btn>
        <h2>Kelas</h2>
      </v-col>
      <v-col class="mt-4" cols="12">
        <h3 class="font-weight-medium">List Tugas Kelas Kesenian</h3>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-card>
          <v-card-text>
            <div class="d-flex align-center mt-3 mb-3">
              <div>
                <h3>Tutorial Origami Ayam</h3>
                <p class="mb-0">Tenggat 19 Nov 2017</p>
              </div>
              <v-chip color="green white--text" class="ml-auto">Selesai</v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-card>
          <v-card-text>
            <div class="d-flex align-center mt-3 mb-3">
              <div>
                <h3>Tutorial Origami Ayam</h3>
                <p class="mb-0">Tenggat 19 Nov 2017</p>
              </div>
              <v-chip color="red white--text" class="ml-auto"
                >Belum Selesai</v-chip
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-card>
          <v-card-text>
            <div class="d-flex align-center mt-3 mb-3">
              <div>
                <h3>Tutorial Origami Ayam</h3>
                <p class="mb-0">Tenggat 19 Nov 2017</p>
              </div>
              <v-chip color="red white--text" class="ml-auto"
                >Belum Selesai</v-chip
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-card>
          <v-card-text>
            <div class="d-flex align-center mt-3 mb-3">
              <div>
                <h3>Tutorial Origami Ayam</h3>
                <p class="mb-0">Tenggat 19 Nov 2017</p>
              </div>
              <v-chip color="red white--text" class="ml-auto"
                >Belum Selesai</v-chip
              >
            </div>
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