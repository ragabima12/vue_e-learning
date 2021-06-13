<template>
  <v-row class="mt-2 mx-2">
    <v-col cols="12">
      <v-row>
        <v-col cols="6">
          <h2>Raga Bima Jr</h2>
          <p>Paud 2</p>
        </v-col>
        <v-col class="text-right d-flex justify-end" cols="6">
          <v-btn color="danger" icon>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn color="danger" icon>
            <v-icon>mdi-logout-variant</v-icon>
          </v-btn>
          <v-btn color="danger" icon>
            <v-avatar color="primary" size="24"></v-avatar>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import AuthMixin from '../../mixins/auth'

export default {
  name: 'Test',
  mixins: [AuthMixin]
};
</script>

<style>
</style>