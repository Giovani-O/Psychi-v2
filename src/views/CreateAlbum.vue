<template>
  <v-row class=" mt-4 mx-10">
		<v-col cols="12">
			
			<v-card color="create-card">
				<v-progress-linear class="float-start" value="100" color="#771cff"></v-progress-linear>
				<div class="py-16 px-16">
					<h1 style="color: white">Adicione um album e suas faixas</h1>
					<v-text-field 
						dark class="create-text" 
						label="Nome do Album" 
						color="#771cff"
						v-model="albumName"
					>
					</v-text-field>
					<v-file-input
            label="Capa do Album"
            accept="image/png, image/jpeg, image/bmp"
            prepend-icon="mdi-image"
            dark
            color="#771cff"
						v-model="cover"
          ></v-file-input>
					<v-row>
						<v-col cols="6">
							<v-text-field
								dark class="create-text"
								label="Nome da Faixa"
								color="#771cff"
								v-model="songs[0].title"
							>
							</v-text-field>
						</v-col>
						<v-col>
							<v-file-input
								label="Faixa"
								prepend-icon="mdi-music"
								dark
								color="#771cff"
								v-model="songs[0].src"
								accept="audio/mpeg"
							></v-file-input>
						</v-col>
						
						<v-col cols="6">
							<v-text-field
								dark class="create-text"
								label="Nome da Faixa"
								color="#771cff"
								v-model="songs[1].title"
							>
							</v-text-field>
						</v-col>
						<v-col>
							<v-file-input
								label="Faixa"
								prepend-icon="mdi-music"
								dark
								color="#771cff"
								v-model="songs[1].src"
							></v-file-input>
						</v-col>

						<v-col cols="6">
							<v-text-field
								dark class="create-text"
								label="Nome da Faixa"
								color="#771cff"
								v-model="songs[2].title"
							>
							</v-text-field>
						</v-col>
						<v-col>
							<v-file-input
								label="Faixa"
								prepend-icon="mdi-music"
								dark
								color="#771cff"
								v-model="songs[2].src"
							></v-file-input>
						</v-col>

						<v-col cols="6">
							<v-text-field
								dark class="create-text"
								label="Nome da Faixa"
								color="#771cff"
								v-model="songs[3].title"
							>
							</v-text-field>
						</v-col>
						<v-col>
							<v-file-input
								label="Faixa"
								prepend-icon="mdi-music"
								dark
								color="#771cff"
								v-model="songs[3].src"
							></v-file-input>
						</v-col>
					</v-row>
					<v-btn 
            dark 
            color="transparent" 
            class="rounded-pill action-btn mr-4"
						@click="saveAlbum()"
          >
						Adicionar Album
					</v-btn>
				</div>
			</v-card>
		</v-col>
  </v-row>
</template>

<script>
import { bus } from '@/main';

export default {
  data() {
    return {
			// Dados básicos de um álbum
			artist: 'Placeholder',
			albumName: '',
			cover: '',
			songs: [
				{
					code: 1,
					title: '',
					src: '',
				},
				{
					code: 2,
					title: '',
					src: '',
				},
				{
					code: 3,
					title: '',
					src: '',
				},
				{
					code: 4,
					title: '',
					src: '',
				},
			],
    }
  },
	methods: {
		saveAlbum(){
			let album = [];
			for(let i = 0; i <= 3; i++) {
				album.push({
					code: this.songs[i].code,
					title: this.songs[i].title,
					// src: this.songs[i].src,
					// src: new Blob([this.songs[i].src], {type: 'audio/mpeg'}),
					src: this.songs[i].src,
					artist: this.artist,
					album: this.albumName,
					cover: this.cover,
				});
			}

			bus.$emit('albumSaved', album);
			window.alert('Album salvo');
			this.$router.push('/dashboard');
		}
	}
}
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Galada&display=swap');

	.create-card {
		background-color: black !important;
	}

	.psychi {
		font-family: 'Galada', cursive;
		font-weight: 100;
	}

	.action-btn {
		border: 1px solid !important;
		border-color: #771cff !important;
	}

	.btn-link {
		color: white !important;
		text-decoration: none !important;
	}
</style>