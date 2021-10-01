<template>
  <v-row class=" mt-4 mx-10">
		<v-col cols="12">
			
			<v-card color="login-card">
				<v-progress-linear class="float-start" value="100" color="#771cff"></v-progress-linear>
				<div class="py-16 px-16">
					<h1 style="color: white">Cadastre-se no <span class="psychi">Psychi</span></h1>
					<v-text-field 
						dark class="login-text" 
						label="Nome de usuário" 
						color="#771cff"
					>
					</v-text-field>
					<v-text-field 
						dark class="login-text" 
						label="E-mail" 
						color="#771cff"
					>
					</v-text-field>
					<v-text-field 
						dark class="login-text" 
						label="Senha" 
						color="#771cff"
					>
					</v-text-field>
					<v-text-field 
						dark class="login-text" 
						label="Confirmar Senha" 
						color="#771cff"
					>
					</v-text-field>
					<v-select
						dark
						:items="userType"
						item-text="type"
						item-value="code"
						label="Tipo de usuário"
					>
					</v-select>
					<v-btn dark color="transparent" class="rounded-pill action-btn">Cadastrar</v-btn>
				</div>
			</v-card>
		</v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
			userType: [
				{
					code: 1,
					type: 'Ouvinte'
				},
				{
					code: 2,
					type: 'Artista'
				}
			],
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
</style>