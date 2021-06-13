<template>
  <v-row>
    <v-dialog
      v-model="isShowedDialog"
      @click:outside="isClosedDialog"
      scrollable
      max-width="600"
      persistent
    >
      <v-card>
        <v-card-title>
          <h4>Gabung Kelas</h4>
          <v-spacer></v-spacer>
          <v-btn icon @click="isClosedDialog">
            <v-icon color="red">mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pb-2 mt-4 d-flex flex-column justify-center">
          <label class="mb-2" for="JoinClass">Gabung Kelas</label>
          <v-text-field solo placeholder="Masukan Kode Kelas"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn dark color="primary" block large>GABUNG</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["isShowedDialog"],
  methods: {
    isClosedDialog() {
      this.$emit("closed", true);
    },
  },
};
</script>

<style>
</style>