<template>
  <div>
    <v-row class="mt-3 mx-2">
      <!-- App Bar -->
      <v-col cols="6">
        <h2>Beranda</h2>
      </v-col>
      <v-col class="text-right d-flex justify-end" cols="6">
        <v-btn @click="showDialogJoin" color="danger" icon>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-menu offset-y offset-x max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="danger" icon>
              <v-avatar color="primary" size="32"
                ><span class="white--text">{{ user.alias }}</span></v-avatar
              >
            </v-btn>
          </template>
          <v-card class="py-2">
            <v-card-text>
              <v-avatar class="mb-4" size="44" color="primary"
                ><span class="white--text text-h5">{{
                  user.alias
                }}</span></v-avatar
              >
              <h3>{{ user.fullname }}</h3>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="showDialogLogout" block color="primary"
                >Logout</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-col>
      <!-- App Bar End -->

      <!-- List Work -->
      <v-col class="mt-4" cols="12">
        <h3 class="font-weight-medium mb-3">Tugas Yang Belum Beres</h3>
        <v-card>
          <v-card-text class="v-card__text--scrollable">
            <div
              class="task-list"
              v-for="(task, taskIndex) of taskUnsubmitted"
              :key="taskIndex"
              @click="selectTask(task)"
            >
              <div class="d-flex align-center my-3">
                <div>
                  <h3>{{ task.task_title }}</h3>
                  <p class="mb-0 mt-2">
                    Tenggat {{ parseDate(task.task_duedate) }}
                  </p>
                </div>
                <v-chip color="red white--text" class="ml-auto"
                  >Belum Selesai</v-chip
                >
              </div>
              <v-divider></v-divider>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- List Work End -->

      <!-- List Class -->
      <v-col class="pb-0" cols="12">
        <h3 class="font-medium mb-3">List Kelas</h3>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-card>
          <v-card-text class="v-card__text--scrollable">
            <div class="classroom-list" @click="$router.push('/dashboard/parent/classroom')">
              <div class="d-flex align-center my-3">
                <div>
                  <h3>Kelas Kesenian</h3>
                  <p class="mb-0">Yurita Ayuningtias, S.Pd</p>
                </div>
                <v-avatar size="50" color="primary white--text" class="ml-auto"
                  >YA</v-avatar
                >
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <JoinClassroom
      @closed="ShowJoinClass = false"
      :isShowedDialog="ShowJoinClass"
    />
    <LogoutDialog
      @closed="ShowLogoutDialog = false"
      :isShowedDialog="ShowLogoutDialog"
      @logout="logout"
    />
  </div>
</template>

<script>
import JoinClassroom from "../../components/DialogJoinClass.vue";
import LogoutDialog from "../../components/DialogLogout.vue";
import ParseDateMixin from "../../mixins/parseDate";
import AuthMixin from "../../mixins/auth";
import Moment from "moment";

Moment.locale("id");

export default {
  data() {
    return {
      ShowJoinClass: false,
      ShowLogoutDialog: false,
    };
  },
  mixins: [AuthMixin, ParseDateMixin],
  components: {
    JoinClassroom,
    LogoutDialog,
  },
  methods: {
    selectTask(task) {
      this.$store.commit("setSelectedTask", task);
      this.$router.push("/dashboard/parent/task/detail");
    },
    showDialogJoin() {
      this.ShowJoinClass = true;
    },
    showDialogLogout() {
      this.ShowLogoutDialog = true;
    },
    logout() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      this.$router.push("/login");
    },
  },
  computed: {
    user() {
      let userData = this.$store.state.user;
      if (userData?.fullname) {
        const alias = userData.fullname
          .split(" ")
          .map((names) => names[0].toUpperCase())
          .join("");
        userData.alias = alias.substr(0, 2);
      }
      return userData;
    },
    taskUnsubmitted() {
      let tasks = this.$store.state.task_list;
      if (tasks) {
        tasks = tasks.filter((task) => !task.is_submitted);
      }
      return tasks;
    },
  },
};
</script>

<style>
</style>