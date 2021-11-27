<template>
  <v-row class=" mt-4 mx-10">
		<v-col cols="12">
			
			<v-card color="main-card">
				<v-progress-linear class="float-start" value="100" color="#771cff"></v-progress-linear>
				<div class="py-16 px-16">
					<v-row>
						<v-col cols="4">
							<v-img
							width="350px"
							height="350px"
							:src="thumbnail"
						>
						</v-img>
						</v-col>
						<v-col cols="8"> 
							<h1 style="color:white">Placeholder Album title</h1>
							<p class="album-info">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Vivamus tincidunt nulla suscipit massa convallis interdum. 
								Cras faucibus magna ac mollis tristique. 
								Aenean quis arcu euismod, interdum turpis ut, bibendum nisi. 
								Etiam tempor justo quis metus fermentum ultrices posuere vitae urna. 
								Pellentesque laoreet odio leo, ac hendrerit nisi feugiat ac. 
								Nulla id efficitur nisi. Nulla condimentum eros nunc, ut ornare sem tempor at. 
								Maecenas nec sollicitudin metus, nec venenatis ante. Donec rhoncus facilisis ipsum nec finibus. 
								Nam volutpat ex non ornare eleifend. Nunc in ante cursus, luctus nunc at, faucibus purus.
							</p>
						</v-col>
					</v-row>

					<v-divider dark class="mt-8 mb-4"></v-divider>
					<h2 style="color: white" class="mb-4">Faixas</h2>

					<v-row>
						<v-col cols="12">
							<v-data-table
								:headers="headers"
								:items="songs"
								outlined
								dark
								class="table"
							>
							</v-data-table>
						</v-col>
					</v-row>
				</div>
			</v-card>
		</v-col>
  </v-row>
</template>

<script>

export default {
	data(){
		return {
			thumbnail: '',
			headers: [
				{
					text: 'Música',
					value: 'songName',
					width: '30%'
				},
				{
					text: 'Artista',
					value: 'artistName',
					width: '30%'
				},
				{
					text: 'Album',
					value: 'albumName',
					width: '30%'
				},
				{
					text: 'Ações',
					value: 'actions',
					width: '10%'
				}
			],
			songs: [
				{ 
					songName: 'Placeholder song 1', 
					artistName: 'Placeholder artist name', 
					albumName: 'Album Name',
					actions: 'Play' 
				},
				{ 
					songName: 'Placeholder song 2', 
					artistName: 'Placeholder artist name', 
					albumName: 'Album Name', 
					actions: 'Play'
				},
				{ 
					songName: 'Placeholder song 3', 
					artistName: 'Placeholder artist name', 
					albumName: 'Album Name', 
					actions: 'Play'
				},
				{ 
					songName: 'Placeholder song 4', 
					artistName: 'Placeholder artist name', 
					albumName: 'Album Name', 
					actions: 'Play'
				},
				{ 
					songName: 'Placeholder song 5', 
					artistName: 'Placeholder artist name', 
					albumName: 'Album Name', 
					actions: 'Play'
				},
				{ 
					songName: 'Placeholder song 6', 
					artistName: 'Placeholder artist name', 
					albumName: 'Album Name', 
					actions: 'Play'
				},
				{ 
					songName: 'Placeholder song 7', 
					artistName: 'Placeholder artist name', 
					albumName: 'Album Name', 
					actions: 'Play'
				},
				{ 
					songName: 'Placeholder song 8', 
					artistName: 'Placeholder artist name', 
					albumName: 'Album Name', 
					actions: 'Play'
				},
				{ 
					songName: 'Placeholder song 9', 
					artistName: 'Placeholder artist name', 
					albumName: 'Album Name', 
					actions: 'Play'
				},
				{ 
					songName: 'Placeholder song 10', 
					artistName: 'Placeholder artist name', 
					albumName: 'Album Name', 
					actions: 'Play'
				},
			]
		}
	},
	mounted() {
		this.thumbnail = require('@/assets/placeholder.jpg');
		this.getAlbums
	},
	methods: {
		
	},
}
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Galada&display=swap');

	.main-card {
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

	.album-info {
		color: rgb(184, 184, 184);
	}

	.thumbnail {
		background-image: url("./../assets/placeholder.jpg");
		background-size: cover;
		display: flex;
	}
	.thumbnail p{
		color: white;
		font-size: 20px;
		align-self: flex-end;
	}

	.table {
		background-color: transparent !important;
		border: .2px solid rgb(36, 36, 36);
	}
</style>