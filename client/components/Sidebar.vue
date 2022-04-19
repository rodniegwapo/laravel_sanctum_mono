<template>
    <div class=" sidebar w-20 min-h-screen  bg-gray-custom-700 sidebar" >
        <div class="bg-gray-custom-900 w-full  p-4 pl-5 text-400 text-2xl">Netlink</div>
        <div class="px-2">
            <ul>
                <li class=" text-400 font-semibold" :class="{active:$route.name == 'dashboard'}" >  
                    <span class="pi pi-external-link">
                        <NuxtLink to="/dashboard">Dashboard</NuxtLink>
                    </span> 
                </li>
                <li :class="{active:$route.name == 'users'}"  class=" text-400 font-semibold">
                     <span class="pi pi-external-link">
                         <NuxtLink class="text-gray" to="users">Users</NuxtLink>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        
    }
}
</script>