<template>
    <div class="flex justify-content-center font-system">
        <div class="surface-card p-4 shadow-2 border-round w-full lg:w-4">
            <span class="px-4 text-xs text-red-700" v-if="errors != null">* {{errors.email[0]}}</span>
            <div class="text-center mb-5">
                <img src="images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
                <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                <span class="text-600 font-medium line-height-3">Don't have an account?</span>
                <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
            </div>
            <form @submit.prevent="login" action="">
                <div class="px-4">
                    <label for="email1" class="block text-900 font-medium mb-2">Email</label>
                    <InputText id="email1" v-model="form['email']" type="text" class="w-full mb-3" />
                    
                    <label for="password1" class="block text-900 font-medium mb-2">Password</label>
                    <InputText id="password1" v-model="form['password']" type="password" class="w-full mb-3" />

                    <div class="flex align-items-center justify-content-between mb-6">
                        <div class="flex align-items-center">
                            <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></Checkbox>
                            <label for="rememberme1">Remember me</label>
                        </div>
                        <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
                    </div>

                    <Button :disabled="loading" type="submit" label="Sign In" icon="pi pi-user" class="w-full "><i v-if="loading" class="pi pi-spinner pi-spin py-1"></i></Button>
                    <!-- <Button label="Save" icon="pi pi-check" :loading="isLoading" /> -->

                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    middleware: ['class'],
    data () {
        return {
            checked:'',
            form: {
                'email': '',
                'password': ''
            },
            loading: false,
            errors: null
        }
    },
    methods : {
        async login () {
            this.loading = true
            let errors = null
            try {
                await this.$auth.loginWith('laravelSanctum', {data: this.form})
                    .then((res) => {})
                    .catch((err) => {
                        if(err.response.status ==   422) {
                            errors = err.response.data.errors
                        }
                    })
                    this.errors = errors
                    // if(this.errors == null){
                    //     this.$router.push('/dashboard')
                    // }

            } catch (error) {}
            this.loading = false
        }
    }
}
</script>