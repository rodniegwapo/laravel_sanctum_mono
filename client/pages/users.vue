<template>
    <div >
        <addModal :display="displayAddModal" @addUser="add" @close="close" />
        <showModal :user="selectedUser" :display="displayUserInfoModal" @close="close" />
        <updateModal :user="selectedUser" :display="displayUpdateModal" @close="close" @updateUserInfo="updateUserInfo" />
        <ConfirmDialog></ConfirmDialog>
        <Card class="card p-4 m-4">
            <template #header>
                <div class="flex justify-content-between px-3">
                    <div>
                        <span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText type="text" v-model="search" class="border-round"  placeholder="Search" />
                        </span>
                    </div>
                    <div>
                    <Button @click="displayModal"   label="Add User" icon="pi pi-plus" class="w-full round-lg "></Button>
                    </div>
                </div>
            </template>
            <template #content>
                <DataTable :value="users"   dataKey="id">
                    <Column field="firstname" header="Firstname"></Column>
                    <Column field="lastname" header="Lastname"></Column>
                    <Column field="email" header="Email"></Column>
                    <!-- <Column field="role.role" header="Role"></Column> -->
                    <Column field="role" header="Role">
                        <template #body="slotProps">
                            <div class="custom-chips bg-orange-500">{{slotProps.data.role.role}}</div>
                        </template>
                    </Column>
                    <Column header="Actions">
                    <template #body="slotProps">
                        <Button icon="pi pi-eye" class="p-button-info  p-button-rounded" @click="showInfo(slotProps.data)" />
                        <Button icon="pi pi-user-edit" class="p-button-success  p-button-rounded" @click="showUpdate(slotProps.data,slotProps.index)"  />
                        <Button icon="pi pi-trash" class="p-button-danger  p-button-rounded" @click="removeUser(slotProps.data,slotProps.index)" />
                    </template>
                    </Column>
                    
                </DataTable>
            </template>
        </Card>
    </div>
</template>
<script>
import addModal from '../modals/addModal'
import showModal from '../modals/showModal'
import deleteModal from '../modals/deleteModal'
import updateModal from '../modals/updateModal'
export default {
    middleware: 'authenticated',
    components: {
        addModal,
        showModal,
        deleteModal,
        updateModal
    },
    data() {
        return {
            items:null,
            displayAddModal: false,
            users: [],
            selectedUser: null,
            displayUserInfoModal:false,
            displayDeleteModal: false,
            displayUpdateModal: false,
            index: null,
            search: null,
            listOfUsers: null     
        }
    },
    
    created() {
    },
    mounted() {
        this.allUsers()
    },
    watch:{
        search (val) {
            if(val){
                
                let found = this.listOfUsers.filter((item)=>{
                    return  val.toLowerCase().split(' ').every(v => item.lastname.toLowerCase().includes(v)) || 
                            val.toLowerCase().split(' ').every(v => item.firstname.toLowerCase().includes(v)) || 
                            val.toLowerCase().split(' ').every(v => item.role['role'].toLowerCase().includes(v)) || 
                            val.toLowerCase().split(' ').every(v => item.email.toLowerCase().includes(v))
                })
                this.users = found
            } else {
                this.users = this.listOfUsers
            }
        }
    },
    methods: {
        displayModal() {
            this.displayAddModal = true
        },
        close(data){
           this.displayAddModal = data
           this.displayUserInfoModal = data
           this.displayUpdateModal = data
        },
        async allUsers () {
            let data = await this.getUser()
            this.users = data
            this.listOfUsers = data
        },
        showInfo(data,key) {
            this.selectedUser = data
            this.displayUserInfoModal = true
            this.index = key
        },
        showUpdate (data,row) {
            this.selectedUser = data
            this.displayUpdateModal = true
            this.index = row
        },
        deleteModal (data) {
            this.selectedUser = data
            this.displayDeleteModal = true
        },
        updateUserInfo(data){
            this.updateUser(data)
            let user = {'firstname': data.firstname,'lastname': data.lastname,'email': data.email,'role': {role: data.role_id.label}}
            this.users.splice(this.index,1,user)
            this.displayUpdateModal = false
        },
        add(data){
            let user = {'firstname': data.firstname,'lastname': data.lastname,'email': data.email,'role': {role: data.role}}
            this.users.push(user)
        },
        removeUser(data,key) {
            this.$confirm.require({
                message: 'Are you sure you want to proceed?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.deleteUser(data)
                    this.users.splice(key,1)
                },
                reject: () => {
                   console.log('no')
                }
            });
        },
    }
}
</script>
<style scoped>
    
</style>
