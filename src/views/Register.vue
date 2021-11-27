<template>
  <v-row class=" mt-4 mx-10">
		<v-col cols="12">
			
			<v-card color="login-card">
				<v-progress-linear class="float-start" value="100" color="#771cff"></v-progress-linear>
				<div class="py-16 px-16">
					<h1 style="color: white">Cadastre-se no <span class="psychi">Psychi</span></h1>
					<v-text-field 
						dark class="login-text" 
						:label="selectedUserType == 1 ? 'Nome de usuário' : 'Nome do artista'" 
						color="#771cff"
						v-model="Fields.name"
					>
					</v-text-field>
					<v-text-field 
						dark class="login-text" 
						label="E-mail" 
						color="#771cff"
						v-model="Fields.email"
					>
					</v-text-field>
					<v-text-field 
						dark class="login-text" 
						label="Senha" 
						color="#771cff"
						type="password"
						v-model="Fields.password"
					>
					</v-text-field>
					<v-text-field 
						dark class="login-text" 
						label="Confirmar Senha" 
						color="#771cff"
						type="password"
						v-model="confirmPassword"
					>
					</v-text-field>
					<v-select
						dark
						:items="userType"
						v-model="selectedUserType"
						item-text="type"
						item-value="code"
						label="Tipo de usuário"
					>
					</v-select>
					<v-btn dark color="transparent" class="rounded-pill action-btn" @click="saveUser()">
						Cadastrar
					</v-btn>
				</div>
			</v-card>
		</v-col>
  </v-row>
</template>

<script>
import axios from 'axios';
// import DataService from '@/services/DataService.js';

export default {
  data() {
    return {
			selectedUserType: 1,
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
			Fields: {
				name: '',
				email: '',
				password: '',
				artist: false,
			},
			confirmPassword: '',
			headers: {
				'Content-Type': 'application/json',
			}
    }
  },
	components: {
		// DataService,
	},
	watch: {
		selectedUserType() {
			if (this.selectedUserType == 1){
				this.Fields.artist = false;
			}else{
				this.Fields.artist = true;
			}
		}
	},
	methods: {
		saveUser() {
			if (!this.Fields.name || !this.Fields.email || !this.Fields.password) {
				window.alert('Preencha todos os campos');
				return;
			}

			if (this.Fields.password != this.confirmPassword) {
				window.alert('As senhas estão diferentes');
				return;
			}

			// let lFields = JSON.stringify(this.Fields);

			axios.post(
				'http://localhost:3090/User',
				this.Fields,
				{ headers: this.headers}
			).then(response => {
				window.alert('Usuário cadastrado com sucesso');
				this.$router.push('/login');
				console.log('Sucesso: ', response);
			}).catch(error => {
				console.log('Erro: ', error);
			});
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