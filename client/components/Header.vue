<template>
    <div class="flex p-4 justify-content-between border-top-1 border-400 shadow-1">
        <div class="text-2xl">{{capitalize($route.name)}}</div>
        <div class="flex align-content-center">
            <!-- <div @click="logout" class="cursor-pointer">sign out <i class="pi pi-sign-out"></i></div> -->
            <div class="pt-1"><Avatar :label="firstLetter($store.state.auth['user']['firstname'])" shape="circle" /></div>
            <div><SplitButton :label="$store.state.auth['user']['firstname']" :model="items" class="p-button-text"></SplitButton></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
				{
					label: 'Profile',
					icon: 'pi pi-cog',
					command: () => {
						this.$router.push('/profile')
					}
				},
                {
					label: 'Logout',
					icon: 'pi pi-power-off',
					command: () => {
						this.logout()
					}
				}
			]   
        }
    },
    methods: {
        async logout(){
            await this.$axios.$post('/logout')
            window.location.reload(true)
        },
        capitalize(data) {
             return data.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
        },
        firstLetter(data){
            let item =  data.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase());
            return item[0]
        }
    }
}
</script>