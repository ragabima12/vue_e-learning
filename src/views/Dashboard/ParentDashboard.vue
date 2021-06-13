<template>
  <div class="overflow-hidden">
    <v-app-bar absolute color="white" elevate-on-scroll>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-row class="mt-3 mx-2">
      <!-- App Bar -->
      <!-- <v-col cols="6">
        <h2>Beranda</h2>
      </v-col>
      <v-col class="text-right d-flex justify-end" cols="6">
        <v-btn @click="showDialogJoin" color="danger" icon>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
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
      </v-col> -->
      <!-- App Bar End -->

      <!-- List Work -->
      <v-col class="mt-4" cols="12">
        <h3 class="font-weight-medium mb-3">Tugas Yang Belum Beres</h3>
        <v-card>
          <v-card-text>
            <div class="d-flex align-center">
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
        <v-card class="mt-4">
          <v-card-text>
            <div class="d-flex align-center">
              <div>
                <h3>Tutorial Origami Ikan</h3>
                <p class="mb-0">Tenggat 20 Nov 2017</p>
              </div>
              <v-chip color="red white--text" class="ml-auto"
                >Belum Selesai</v-chip
              >
            </div>
          </v-card-text>
        </v-card>
        <v-card class="mt-4">
          <v-card-text>
            <div class="d-flex align-center">
              <div>
                <h3>Cara Memasak</h3>
                <p class="mb-0">Tenggat 20 Nov 2017</p>
              </div>
              <v-chip color="red white--text" class="ml-auto" @click="logout"
                >Belum Selesai</v-chip
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- List Work End -->

      <!-- List Class -->
      <v-col cols="12">
        <h3 class="font-medium mb-3">List Kelas</h3>
      </v-col>
    </v-row>
    <JoinClassroom
      @closed="ShowJoinClass = false"
      :isShowedDialog="ShowJoinClass"
    />
    <LogoutDialog
      @closed="ShowLogoutDialog = false"
      :isShowedDialog="ShowLogoutDialog"
    />
  </div>
</template>

<script>
import JoinClassroom from "../../components/DialogJoinClass.vue";
import LogoutDialog from "../../components/DialogLogout.vue";
import AuthMixin from "../../mixins/auth";
export default {
  data() {
    return {
      ShowJoinClass: false,
      ShowLogoutDialog: false,
    };
  },
  mixins: [AuthMixin],
  components: {
    JoinClassroom,
    LogoutDialog,
  },
  methods: {
    showDialogJoin() {
      this.ShowJoinClass = true;
    },
    showDialogLogout() {
      this.ShowLogoutDialog = true;
    },
    logout(){
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      this.$router.push('/login')
    }
  }
};
</script>

<style>
</style>