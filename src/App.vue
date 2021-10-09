<template>
  <v-app id="PsychiApp">

    <!-- APPBAR-->

    <v-app-bar 
      app 
      dark 
      color="#040404" 
      fixed
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link title="Psychi || Home" to="/dashboard" class="psychi">
          Psychi
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/createalbum">
        <v-icon title="Adicionar Albuns/Músicas" class="mr-4">mdi-plus</v-icon>
      </router-link>
      <router-link title="Login" to="/login">
        <v-icon large>mdi-account-circle</v-icon>
      </router-link>
    </v-app-bar>

    <!-- NAVDRAWER -->

    <v-navigation-drawer
      dark
      v-model="drawer"
      fixed
      temporary
      color="#040404"
    >
      <v-text-field
        outlined
        class="mt-4 pl-2 pr-2 rounded-pill"
        placeholder="Buscar"
        height="1"
        append-icon="mdi-magnify"
        color="#771cff"
      >
      </v-text-field>

      <h3 class="drawer-title">Playlists</h3>
      <div>
        <v-list-item v-for="item in playlists" :key="item">
          <router-link :to="{path: '/playlist/' + item.title}">
            <v-btn 
              :color="btnColor" 
              width="100%"
              class="btn-link ml-0 mr-0"
            >
              {{ item.title }}
            </v-btn>
          </router-link>
        </v-list-item>
      </div>
    </v-navigation-drawer>

    <!-- MAIN -->

    <v-main 
      class="grey darken-4 lighten-2 mb-16 pb-10"
      color="main-view"
    >
      <router-view></router-view>
    </v-main>

    <!-- FOOTER -->

    <v-footer 
      dark
      fixed
      min-height="80"
      color="#040404" 
    >
      <div style="min-width: 250px" class="playing">
        <v-row>
          <v-col cols="3">
            <v-img
              width="44.5"
              height="44.5"
              src="@/assets/placeholder.jpg"
            ></v-img>
          </v-col>
          <v-col cols="9">
            <h4 id="song-title">{{ current.title}}</h4>
            <h6 id="artist-name">{{ current.artist }}</h6>
          </v-col>
        </v-row>
      </div>
      <v-spacer></v-spacer>

      <div>
        <v-btn 
          v-if="!loopStatus"
          :color="btnColor" 
          class="rounded-lg mr-2 ml-2"
          @click="toggleLoop()"
        >
          <v-icon small>
            mdi-repeat
          </v-icon>
        </v-btn>
        <v-btn 
          v-if="loopStatus"
          :color="btnColor" 
          class="rounded-lg mr-2 ml-2"
          @click="toggleLoop()"
        >
          <v-icon small>
            mdi-repeat-once
          </v-icon>
        </v-btn>
        <v-btn 
          :color="btnColor" 
          class="rounded-lg mr-2 ml-2"
          @click="prev()"
        >
          <v-icon>
            mdi-skip-previous
          </v-icon>
        </v-btn>
        <v-btn
          v-if="!isPlaying"
          :color="btnColor" 
          class="rounded-lg mr-2 ml-2"
          @click="play(current)"
        >
          <v-icon large>
            mdi-play
          </v-icon>
        </v-btn>
        <v-btn
          v-if="isPlaying"
          :color="btnColor" 
          class="rounded-lg mr-2 ml-2"
          @click="pause()"
        >
          <v-icon large>
            mdi-pause
          </v-icon>
        </v-btn>
        <v-btn 
          :color="btnColor" 
          class="rounded-lg mr-2 ml-2"
          @click="next()"
        >
          <v-icon>
            mdi-skip-next
          </v-icon>
        </v-btn>
        <v-btn 
          :color="btnColor" 
          class="rounded-lg mr-2 ml-2"
        >
          <v-icon small>
            mdi-shuffle-variant
          </v-icon>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <div style="min-width: 250px">
        <v-slider
          hint="Volume"
          max="100"
          min="0"
          color="#771cff"
          v-model="audioVolume"
        ></v-slider>
      </div>
    </v-footer>
  </v-app>
</template>

<script>

  export default {
    data() { 
      return {
        // Instância de um novo elemento de audio do HTML5
        player: new Audio(),

        current: {},
        index: 0,
        isPlaying: false,
        loopStatus: false,
        audioVolume: 0.05,
        drawer: null,
        components: {
        },
        songs: [
          {
            title: 'Elevation',
            artist: 'Edictum',
            src: require('@/assets/audio/elevation.mp3'),
          },
          {
            title: 'Neon Renegade',
            artist: 'Harris Heller',
            src: require('@/assets/audio/neonrenegade.mp3'),
          },
          {
            title: 'Cyber Attack',
            artist: 'Infraction',
            src: require('@/assets/audio/cyberattack.mp3'),
          }
        ],
        playlists: [
          {
            code: 1,
            title: 'Playlist Synthwave',
          },
          {
            code: 2,
            title: 'Playlist Folk Metal',
          },
          {
            code: 3,
            title: 'Playlist Barroca',
          },
          {
            code: 4,
            title: 'Playlist Hardbass',
          },
          {
            code: 5,
            title: 'Playlist Power Metal',
          },
          {
            code: 6,
            title: 'Playlist Symphonic Metal',
          },
          {
            code: 5,
            title: 'Playlist Hard Rock',
          },
          {
            code: 5,
            title: 'Playlist EDM',
          },
          {
            code: 5,
            title: 'Playlist Punk Rock',
          },
          {
            code: 5,
            title: 'Playlist Pop',
          },
        ],
        btnColor: 'transparent'
      }
    },
    watch: {
      audioVolume(){
        this.player.volume = (this.audioVolume / 100);  
      }
    },
    created() {
      this.current = this.songs[this.index];
      this.player.src = this.current.src;
      this.player.volume = this.audioVolume;
      this.current = this.songs[0];
      this.loopStatus = false;
    },
    methods: {
      play(song) {
        if (typeof song.src != "undefined"){
          this.current = song;
          this.player.src = this.current.src;
        }
        this.player.play();
        this.isPlaying = true;
      },
      pause() {
        this.player.pause();
        this.isPlaying = false;
      },
      next() {
        this.index++;
        if (this.index > this.songs.length - 1){
          this.index = 0;
        }

        this.current = this.songs[this.index];
        this.play(this.current);
      },
      prev() {
        this.index--;
        if (this.index < 0){
          this.index = this.songs.length - 1;
        }

        this.current = this.songs[this.index];
        this.play(this.current);
      },
      toggleLoop(){
        this.loopStatus = !this.loopStatus;
        this.player.loop = this.loopStatus;
      }
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Galada&display=swap');
  
  .psychi {
    font-family: 'Galada', cursive;
    font-size: 28px;
    color: white;
    text-decoration: none;
  }

  .main-view {
    background-color: #000000;
  }

  .drawer-title {
    text-align: center;
    color: white;
  }

  .btn-link{
    color: white;
    text-decoration: none;
    width: 220px !important;
  }

  .btn-link:hover {
    color: #771cff;
    transition: .5s;
  }
</style>
