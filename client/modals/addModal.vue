<template>
    <div>
        <Dialog :visible="display" class="flex justify-content-center" @click="close">
            <template #header>
                <h3 class="px-4">Add user</h3>
            </template>
            <ValidationObserver ref="observer" tag="form">
                <form >
                    <div class="px-4 text-sm " style="width:500px">
                        <div class="flex">
                            <div class="mr-1 w-50">
                                <ValidationProvider name="firstname" rules="required" v-slot="{errors}">
                                    <label for="firstname" class="block text-900 font-medium mb-2 w-full">First Name</label>
                                    <InputText v-model="form['firstname']"  type="text" :class="{'border-error':errors[0]}" class="w-full mb-3" />
                                    <span class="error">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>
                            <div class="ml-1 w-50">
                                <ValidationProvider name="lastname" rules="required" v-slot="{errors}">
                                    <label for="lastname" class="block text-900 font-medium mb-2">Lastname</label>
                                    <InputText v-model="form['lastname']" :class="{'border-error':errors[0]}" type="text" class="w-full mb-3" />
                                    <span class="error">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                        <ValidationProvider name="email" rules="required|email" v-slot="{errors}">
                            <label for="email" class="block text-900 font-medium mb-2">Email</label>
                            <InputText v-model="form['email']" type="text" :class="{'border-error':errors[0]}" class="w-full mb-3" />
                            <span class="error">{{errors[0]}}</span>
                        </ValidationProvider>
                        <ValidationProvider name="roles" rules="required" v-slot="{errors}">
                            <label for="roles" class="block text-900 font-medium mb-2">Roles</label>
                            <Dropdown v-model="form['role_id']"  :options="roles" optionLabel="label" :class="{'border-error':errors[0]}" class="w-full" placeholder="Select a Role" @change="setRole" />
                            <span class="error">{{errors[0]}}</span>
                        </ValidationProvider>
                    </div>
                </form>
            </ValidationObserver>
            <template #footer>
                <Button :disabled="loading" @click="saveUser" label="Submit" class="mx-4" icon="pi pi-check" autofocus />
            </template>
            
        </Dialog>
    </div>
</template>

<script>
export default {
    props: {
        display: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            form: {
                'firstname': '',
                'lastname':'',
                'email': '',
                'password': '',
                'role_id': ''
            },
            selectedRole: '',
            roles: [
                {label: 'admin', value: '1',},
                {label: 'user', value: '2'}
            ],
            loading: false
        }
    },
    methods : {
        close (event) {
            let target = event.target.className
            if(target == 'p-dialog-header-close-icon pi pi-times' ){
                this.$emit('close',false)
            }
        },
        setRole(){
            let found = this.roles.find(data => data.value == this.form['role_id'].value)
            console.log('found',found)
            this.form.role = found.label
        },
        async saveUser () {
            const isValid = await this.$refs.observer.validate()
            // if(isValid){
            //     this.loading = true
            //     this.form['password'] = 'password'
            //     this.form['role_id'] = this.form['role_id'].value
            //     try {
            //         await this.addUser(this.form)
            //         .then((res) => {
            //             this.$emit('close',false)
            //             this.$emit('addUser',this.form)
            //             this.loading = false
            //         })
            //         .catch((err) => {
            //             if(err.response.status ==   422) {
            //                 this.loading = false
            //                 return err.response.data.errors
            //             }
            //         })
            //     } catch (error) {}
            // }
            console.log('this',this.form)
        },
        reset () {
            this.form =  {
                'firstname': '',
                'lastname':'',
                'email': '',
                'password': '',
                'role_id': ''
            }
        }
    }
}
</script>