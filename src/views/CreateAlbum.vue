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
					>
					</v-text-field>
					<v-file-input
            label="Capa do Album"
            accept="image/png, image/jpeg, image/bmp"
            prepend-icon="mdi-image"
            dark
            color="#771cff"
          ></v-file-input>
          <v-file-input
            v-for="i in numberOfTracks"
            :key="i"
            label="Faixa"
            prepend-icon="mdi-music"
            append-icon="mdi-plus"
            @click:append="numberOfTracks++"
            dark
            color="#771cff"
          ></v-file-input>
					<v-btn 
            dark 
            color="transparent" 
            class="rounded-pill action-btn mr-4"
          >
						Adicionar Album
					</v-btn>
				</div>
			</v-card>
		</v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      numberOfTracks: 1,
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