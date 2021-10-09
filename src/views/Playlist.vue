<template>
  <v-row class=" mt-4 mx-10">
		<v-col cols="12">
			
			<v-card color="main-card">
				<v-progress-linear class="float-start" value="100" color="#771cff"></v-progress-linear>
				<div class="py-16 px-16">
					<v-row>

						<v-col cols="12"> 
							<h1 style="color:white">{{ this.$route.params.title }}</h1>
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
			headers: [
				{
					text: 'Música',
					value: 'title',
					width: '30%'
				},
				{
					text: 'Artista',
					value: 'artist',
					width: '28%'
				},
				{
					text: 'Album',
					value: 'albumName',
					width: '28%'
				},
				{
					text: 'Ações',
					value: 'actions',
					width: '14%'
				}
			],
			songs: [
				{ 
					title: 'Placeholder song 1', 
					artist: 'Placeholder artist name', 
					albumName: 'Album Name',
					actions: 'Play | Remover' 
				},
				{ 
					title: 'Placeholder song 2', 
					artist: 'Placeholder artist name', 
					albumName: 'Album Name', 
					actions: 'Play | Remover'
				},
				{ 
					title: 'Placeholder song 3', 
					artist: 'Placeholder artist name', 
					albumName: 'Album Name', 
					actions: 'Play | Remover'
				},
				{ 
					title: 'Placeholder song 4', 
					artist: 'Placeholder artist name', 
					albumName: 'Album Name', 
					actions: 'Play | Remover'
				},
				{ 
					title: 'Placeholder song 5', 
					artist: 'Placeholder artist name', 
					albumName: 'Album Name', 
					actions: 'Play | Remover'
				},
				{ 
					title: 'Placeholder song 6', 
					artist: 'Placeholder artist name', 
					albumName: 'Album Name', 
					actions: 'Play | Remover'
				},
				{ 
					title: 'Placeholder song 7', 
					artist: 'Placeholder artist name', 
					albumName: 'Album Name', 
					actions: 'Play | Remover'
				},
				{ 
					title: 'Placeholder song 8', 
					artist: 'Placeholder artist name', 
					albumName: 'Album Name', 
					actions: 'Play | Remover'
				},
				{ 
					title: 'Placeholder song 9', 
					artist: 'Placeholder artist name', 
					albumName: 'Album Name', 
					actions: 'Play | Remover'
				},
				{ 
					title: 'Placeholder song 10', 
					artist: 'Placeholder artist name', 
					albumName: 'Album Name', 
					actions: 'Play | Remover'
				},
			]
		}
	}
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