<template>
  <div>
    <v-row class="mt-3 mx-2">
      <v-col class="d-flex justify-start pl-0" cols="8">
        <v-btn @click="navBack" class="mr-3" icon><v-icon>mdi-arrow-left</v-icon></v-btn>
        <h2>Tugas</h2>
      </v-col>
    </v-row>
    <v-row class="mx-2">
      <v-col cols="12">
        <v-card>
          <v-card-title>{{ task.task_title || 'Menunggu judul ...' }}</v-card-title>
          <v-card-text class="v-card__text--scrollable">
            <v-row>
              <v-col cols="4" 
                v-for="(image, imageIndex) of task.task_images"
                :key="imageIndex">
                <v-img
                  src="https://images.unsplash.com/photo-1623312484506-2c16c008d907?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
                ></v-img>
              </v-col>
              <v-col class="pt-0 d-flex" cols="12">
                <v-icon class="mr-2" small>mdi-eye</v-icon>
                <h5>Tenggat {{ task.task_duedate && parseDate(task.task_duedate) || 'Mohon menunggu ...' }}</h5>
              </v-col>
              <v-col class="pt-2" cols="12">
                <p>
                  {{ task.task_description || 'Menunggu deskripsi ...' }}
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
import parseDateMixin from '../mixins/parseDate'

export default {
   methods: {
     navBack(){
       this.$router.push('/dashboard/parent/classroom')
     }
   },
   mixins: [parseDateMixin],
   computed: {
     task(){
       return this.$store.state.selected_task
     }
   }
};
</script>

<style>
</style>