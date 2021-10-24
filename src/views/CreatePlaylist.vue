<template>
  <v-row class=" mt-4 mx-10">
		<v-col cols="12">
			
			<v-card color="create-card">
				<v-progress-linear class="float-start" value="100" color="#771cff"></v-progress-linear>
				<div class="py-16 px-16">
					<h1 style="color: white">Crie uma playlist</h1>
					<v-text-field 
						dark class="create-text" 
						label="Nome da playlist" 
						color="#771cff"
						v-model="albumName"
					>
					</v-text-field>
          <v-combobox
            v-model="playlistSongs"
            :items="localSongs"
            label="Músicas"
            dark
            color="#771cff"
            multiple
          >
          </v-combobox>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { bus } from '@/main';

export default {
  data(){
    return {
      localSongs: [],
      playlistSongs: [],
    }
  },
  mounted(){
    bus.$on('createPlaylist', (data) => {
      this.localSongs = data;
    })
  }
}
</script>

<style>
  .create-card {
		background-color: black !important;
	}
</style>