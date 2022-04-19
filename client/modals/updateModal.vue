<template>
    <div>
        <Dialog :visible="display" class="flex justify-content-center" @click="close">
            <template #header>
                <h3 class="px-4">Update user</h3>
            </template>
            <ValidationObserver ref="observer" tag="form">
                <form >
                    <div class="px-4 text-sm " style="width:500px">
                        <div class="flex">
                            <div class="mr-1 w-50">
                                <ValidationProvider name="firstname" rules="required" v-slot="{errors}">
                                    <label for="firstname" class="block text-900 font-medium mb-2 w-full">First Name</label>
                                    <InputText v-model="form['firstname']" :class="{'border-error':errors[0]}"   type="text" class="w-full mb-3" />
                                    <span class="error">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>
                            <div class="ml-1 w-50">
                                <ValidationProvider name="lastname" rules="required" v-slot="{errors}">
                                    <label for="lastname" class="block text-900 font-medium mb-2">Lastname</label>
                                    <InputText v-model="form['lastname']" :class="{'border-error':errors[0]}"  type="text" class="w-full mb-3" />
                                    <span class="error">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                        <ValidationProvider name="email" rules="required|email" v-slot="{errors}">
                            <label for="email" class="block text-900 font-medium mb-2">Email</label>
                            <InputText v-model="form['email']" :class="{'border-error':errors[0]}"  type="text" class="w-full mb-3" />
                            <span class="error">{{errors[0]}}</span>
                        </ValidationProvider>
                        <ValidationProvider name="roles" rules="required" v-slot="{errors}">
                            <label for="roles" class="block text-900 font-medium mb-2">Roles</label>
                            <Dropdown optionValue="1" dataKey="value" v-model="form['role_id']" :class="{'border-error':errors[0]}"  :options="roles" 
                                optionLabel="label" class="w-full" placeholder="Select a Role"  >
                            </Dropdown>
                            <!-- <span class="error">{{errors[0]}}</span> -->
                        </ValidationProvider>
                    </div>
                </form>
            </ValidationObserver>
            <template #footer>
                <Button :disabled="loading" @click="update" label="update" class="mx-4" icon="pi pi-check" autofocus />
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
        },
        user: {
            type: Object,
            default: () => {}
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
                {label: 'Admin', value: '1'},
                {label: 'User', value: '2'}
            ],
            loading: false
        }
    },
    watch: {
        user (val) {
           this.form = val
           this.form['role_id'] = {label:val.label ,value: val.role_id}
        console.log('this form',this.form)
        }
    },
    methods : {
        setRole(){
            let found = this.roles.find(data => data.value == this.form['role_id'].value)
            console.log('found',found)
            this.form.role = found.label
        },
        close (event) {
            let target = event.target.className
            if(target == 'p-dialog-header-close-icon pi pi-times' ){
                this.$emit('close',false)
            }     
        },
        dismiss(){
            this.$emit('close',false)
        },
        async update () {
            const isValid = await this.$refs.observer.validate()
            if(isValid){
                this.$emit('updateUserInfo',this.form)
            }
            
        }
    }
}
</script>