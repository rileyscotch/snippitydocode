  <template>
  <v-app id="inspire" dark>
      <v-navigation-drawer
        v-model="drawer"
        clipped
        fixed
        app
      >
        <v-list dense>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>view_list</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link :to="{ name: 'Snips'}"> Snips</router-link></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Snippity-Do-Code</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout>
            <router-view> </router-view>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer app fixed>
        <span>&copy; 2018</span>
      </v-footer>
    </v-app>
  </template>

  <script>
export default {
  data: () => ({
    drawer: true
  }),
  props: {
    source: String
  }
};
</script>

  <style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
