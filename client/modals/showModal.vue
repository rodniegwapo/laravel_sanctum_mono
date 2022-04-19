<template>
    <div>
        <Dialog :visible="display" v-if="display" class="flex justify-content-center" @click="close"  >
            <template #header>
                <h3 class="px-2">User Information</h3>
            </template>
                <div class="p-2" style="width:500px">
                    Name: {{user['firstname'] + " " + user['lastname']}}
                </div>
                <div class="p-2" style="width:500px">
                    Email: {{user['email']}}
                </div>
                <div class="p-2" style="width:500px">
                    Role: <span class="">{{user['role']['role']}}</span>
                </div>
            <template #footer>
                <Button  class="mx-4"  label="Close"  autofocus @click="dismiss" />
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
            default : () => {}
        }
    },
    data () {
        return {}
    },
    methods : {
        close (event) {
            let target = event.target.className
            if(target == 'p-dialog-header-close-icon pi pi-times' ){
                this.$emit('close',false)
            }     
        },
        dismiss(){
            this.$emit('close',false)
        }
    }
}
</script>