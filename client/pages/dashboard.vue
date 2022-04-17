<template>
    <div >
        <addModal :display="display" />
        <Card class="card p-4 m-4">

            <template #header>
                <div class="flex justify-content-between px-4">
                    <div>
                        <span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText type="text" class="border-round"  placeholder="Search" />
                        </span>
                    </div>
                    <div>
                    <Button @click="displayModal"   label="Add User" icon="pi pi-plus" class="w-full round-lg "></Button>
                    </div>
                </div>
            </template>
            <template #content>
                <DataTable :value="products" >
                    <Column field="brand" header="Brand"></Column>
                    <Column field="year" header="Year"></Column>
                    <Column field="color" header="Color"></Column>
                    <Column field="vin" header="Vin"></Column>
                    <Column header="Actions">
                    <template #body="slotProps">
                        <Button icon="pi pi-eye" class="p-button-info  p-button-rounded" />
                        <Button icon="pi pi-user-edit" class="p-button-success  p-button-rounded" />
                        <Button icon="pi pi-trash" class="p-button-danger  p-button-rounded" />
                    </template>
            </Column>
                    
                </DataTable>
            </template>
        </Card>
    </div>
</template>
<script>
import addModal from '../modals/addModal'
export default {
    middleware: 'authenticated',
    components: {
        addModal
    },
    data() {
        return {
            items:null,
            display: false,
            products: [

                
                    {"brand": "Volkswagen", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
                    {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
                    {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
                    {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
                    
                ]
        }
    },
    
    created() {
    },
    mounted() {
        
    },
    methods: {
        async logout(){
            await this.$axios.$post('/logout')
            window.location.reload(true)
        },
        displayModal() {
            this.display = true
        }
    }
}
</script>
<style scoped>
    
</style>
