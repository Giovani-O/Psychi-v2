<template>
  <v-row class=" mt-4 mx-10">
		<v-col cols="12">
			
			<v-card color="login-card">
				<v-progress-linear class="float-start" value="100" color="#771cff"></v-progress-linear>
				<div class="py-16 px-16">
					<v-row>
						<v-col cols="5">
							<v-img
							width="400px"
							height="400px"
							:src="thumbnail"
						>
						</v-img>
						</v-col>
						<v-col cols="7">
							<h1 style="color: white">{{ this.$route.params.name }}</h1>
							<p class="artist-bio">
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
							<p class="artist-bio">
								Vestibulum et ultricies mi, nec semper nulla. 
								Donec gravida dolor non libero ullamcorper, sed sollicitudin felis condimentum. 
								Vivamus tempus ipsum ac dui laoreet feugiat. 
								Nam ut erat fringilla, aliquam arcu eu, dignissim felis. 
								Duis ultricies euismod felis eget fringilla. Pellentesque vitae dignissim odio. 
								Cras non vestibulum enim. 
							</p>
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
		}
	},
	mounted() {
		if (this.$route.params.name == 'Sabaton') {
			this.thumbnail = require('@/assets/sabaton.jpg');
		}else{
			this.thumbnail = require('@/assets/rhapsody.jpg');
		}
	}
}
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Galada&display=swap');

	.login-card {
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

	.artist-bio {
		color: rgb(184, 184, 184);
	}
</style>