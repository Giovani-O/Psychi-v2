<template>
  <v-row class=" mt-4 mx-10">
		<v-col cols="12">
			
			<v-card color="login-card">
				<v-progress-linear class="float-start" value="100" color="#771cff"></v-progress-linear>
				<div class="py-16 px-16">
					<h1 style="color: white">Entre ou cadastre sua conta no <span class="psychi">Psychi</span></h1>
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
					<v-btn dark color="transparent" class="rounded-pill action-btn mr-4">
						<router-link class="btn-link" to="/dashboard">Entrar</router-link>
					</v-btn>
					<v-btn dark color="transparent" class="rounded-pill action-btn">
						<router-link class="btn-link" to="/register">Cadastre-se</router-link>
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