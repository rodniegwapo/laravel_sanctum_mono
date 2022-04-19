import Vue from 'vue'

const mixin = {
   methods: {
        async addUser(data){
			return await this.$axios.$post('/api/add_user',data)
		},
		async getUser () {
			return await this.$axios.$get('/api/get_user')
		},
		async  deleteUser (data) {
			await this.$axios.post('/api/delete_user',data)
		},
		async updateUser (data) {
			await this.$axios.$post('/api/update_user',data)
				.then((res) => {})
				.catch((err) => {
					if(err.response.status ==   422) {
						return errors = err.response.data.errors
					}
				})
		}
  	}
}

Vue.mixin(mixin)