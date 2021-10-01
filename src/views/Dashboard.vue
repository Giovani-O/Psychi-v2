<template>
  <v-row class="mx-10">
    <template v-for="n in 4" >
			<v-col
			:key="n"
			class="mt-2"
			cols="12"
			>
			<strong style="color: white;">Artista {{ n }}</strong>
			</v-col>

			<v-col
			v-for="j in 6"
			:key="`${n}${j}`"
			cols="6"
			md="2"
			>
			<v-sheet 
					height="150"
					class="thumbnail"
					elevation="3"
			>
					<p>Album {{ j }}</p>
			</v-sheet>
			</v-col>
    </template>
  </v-row>
</template>

<script>
export default {
	name: 'Dashboard',
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
</style>