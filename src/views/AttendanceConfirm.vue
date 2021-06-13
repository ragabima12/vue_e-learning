<template>
  <v-row class="mx-2">
    <v-col class="d-flex justify-center align-center flex-column" cols="12">
      <div>
        <div class="d-flex justify-center align-center">
          <v-img class="" src="@/assets/Confirm.svg" width="200"></v-img>
        </div>
        <h1 class="mb-4 text-center">Peringatan</h1>
        <p class="text-center mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus
          excepturi ab voluptatibus veritatis iste ipsa.
        </p>
        <v-row>
          <v-col class="d-flex" cols="12">
            <v-btn-toggle class="flex-grow-1">
              <v-btn class="flex-grow-1">Hadir</v-btn>
              <v-btn class="flex-grow-1">Izin</v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <v-btn class="mt-4" dark large block text color="primary"
          >Nanti Saja</v-btn
        >
      </div>
    </v-col>
  </v-row>
</template>
