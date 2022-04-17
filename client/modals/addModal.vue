<template>
    <div>
        <Dialog :visible="display"  :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}" >
            <template #header>
                <h3>Header</h3>
            </template>
            Content
            <template #footer>
                <Button label="No" icon="pi pi-times" class="p-button-text"/>
                <Button label="Yes" icon="pi pi-check" autofocus />
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
            
        }
    },
    methods : {
        sample () {
            console.log('smaple')
        }
    }
}
</script>