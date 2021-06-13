<template>
  <v-row>
    <v-dialog
      v-model="isShowedDialog"
      @click:outside="isClosedDialog"
      scrollable
      persistent
      max-width="600"
    >
      <v-card>
        <v-card-text>
          <v-row>
            <v-col cols="12" class="d-flex pb-0 justify-center">
              <v-img src="@/assets/Warning.svg"></v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-0 text-center" cols="12">
              <h2 class="mb-2">Yakin Ingin Keluar</h2>
              <p class="mb-0">Tekan logout untuk keluar dari aplikasi</p>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="mb-2">
          <v-row>
            <v-col cols="6">
              <v-btn outlined color="red" large block @click="isClosedDialog"> Batal</v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn large color="red" dark block @click="logout"> Logout</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["isShowedDialog"],
  methods: {
    isClosedDialog() {
      this.$emit("closed", true);
    },
    logout(){
      this.$emit("logout", true)
    }
  },
};
</script>

<style>
</style>