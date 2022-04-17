<template>
  	<div>
        <div class="flex w-full" v-if="$auth.$state.loggedIn">
            <div class="w-20 min-h-screen  bg-gray-custom-700" >
                <sidebar class="w-full" />
            </div>
            <div class="w-80">
                <componentHeader />
                <Nuxt />
            </div>
        </div>
		<div v-else>
			<Nuxt />
		</div>
    </div>
</template>
<script>
import sidebar from '../components/Sidebar'
import componentHeader from '../components/Header'
export default {
    components: {
        sidebar,
        componentHeader
    }
}
</script>
