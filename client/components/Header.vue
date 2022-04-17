<template>
    <div class="flex p-4 justify-content-between border-top-1 border-400 shadow-1">
        <div class="text-2xl">Dashboard</div>
        <div>
            <div @click="logout" class="cursor-pointer">sign out <i class="pi pi-sign-out"></i></div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        async logout(){
            await this.$axios.$post('/logout')
            window.location.reload(true)
        }
    }
}
</script>