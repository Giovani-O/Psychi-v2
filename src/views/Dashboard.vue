<template>
  <v-row class="mx-10">
    <template v-for="(x, y) in Artists" >
			<v-col
			:key="x"
			class="mt-2"
			cols="12"
			>
			<h2>
				<strong class="pb-0" style="color: white;">
					<router-link class="artist-name" :to="{path: '/artist/' + Artists[y].name}">
						{{ Artists[y].name }}
					</router-link>
				</strong>
			</h2>
			</v-col>


			<v-col
				v-for="z in Albuns"
				:key="`${x}${z}`"
				cols="6"
				md="3"
			>
				<router-link to="/album">
					<v-img
						width="280"
						height="280"
						:src="z.cover"
					></v-img>
					<p> {{ z.artistName }} - {{ z.name }}</p>
				</router-link>
			</v-col>
    </template>
  </v-row>
</template>

<script>
 import axios from 'axios';

export default {
	name: 'Dashboard',
	data() {
		return {
			axiosHeaders: {
				'Content-Type': 'application/json',
			},
			Artists: [
				{
					code: 1,
					name: 'Albums'
				},
			],
			Albuns: [
				// {
				// 	artist: 1,
				// 	code: 1,
				// 	name: 'Primo Victoria'
				// },{
				// 	artist: 1,
				// 	code: 2,
				// 	name: 'Coat of Arms'
				// },{
				// 	artist: 1,
				// 	code: 3,
				// 	name: 'The Last Stand'
				// },{
				// 	artist: 1,
				// 	code: 4,
				// 	name: 'Heroes'
				// },
				// {
				// 	artist: 2,
				// 	code: 5,
				// 	name: 'Symphony of the Enchanted Lands'
				// },
				// {
				// 	artist: 2,
				// 	code: 6,
				// 	name: 'Dawn of Victory'
				// },
				// {
				// 	artist: 2,
				// 	code: 7,
				// 	name: 'Power of the Dragonflame'
				// },
				// {
				// 	artist: 2,
				// 	code: 8,
				// 	name: 'Rain of a Thousand Flames'
				// }
			],
		}
	},
	created() {
		this.getAlbums();
	},
	methods: {
		async getAlbums() {
        console.log('Loading...')
        let allAlbums = await axios.get(
          'http://localhost:3090/Album',
          { headers: this.axiosHeaders }
        );
        console.log(allAlbums.data);
        console.log('Done...')

        for (let i = 0; i < allAlbums.data.length; i++){
          this.Albuns.push(
            {
              artist: 1,
							code: i,
							name: allAlbums.data[i].albumName,
							artistName: allAlbums.data[i].artistName,
							cover: allAlbums.data[i].cover,
            },
          );
        }
      },
	}
}
</script>

<style scoped>
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

	.artist-name {
		color: white;
		text-decoration: none;
	}
	.artist-name:hover{
		color: #8b3eff;
		transition: .5s;
	}
</style>