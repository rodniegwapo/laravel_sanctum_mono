<template>
    <div >
        <div class=" border-400 profile-wrapper m-4  overflow-hidden position-relative">
            <div class="profile-top-head w-full">
                <div class="flex justify-content-end pr-3">
                    <Breadcrumb :home="home" :model="items" class="p-menuitem-text">
                    <template #item="{item}">
                        dsds
                        <a :href="item.url" class="bread">{{item.label}}</a>
                    </template>
                </Breadcrumb>
                </div>
            </div>
            <div class="flex avatar-wrapper position-relative  w-full align-content-start" >
                <div class="avatar ml-4"> 
                    <img class="w-full" src="../../assets/images/profile.png" alt="">
                </div>
                <div class="title">
                    <div class="text-3xl">Rodnie Lecera</div>
                    <div class="text-sm">Web Developer</div>
                </div>
            </div>
            <div>
                <profile />
            </div>
        </div>
    </div>
</template>
<script>
import profile from './__profile'
export default {
    components: {
        profile
    },
    data () {
        return {
            home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label: 'Profile'},
                {label: 'Employment'},
                {label: 'Account'},
                {label: 'Compensation'},
                {label: 'Documents'},
                {label: 'Notes'}
            ],
        }
    }
}
</script>

<style >
    .profile-wrapper {
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        overflow: hidden;
        box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
        border-radius: 3px;
    }
    .profile-top-head {
        /* background: rgb(246,246,246);
        background: linear-gradient(212deg, rgba(246,246,246,1) 0%, rgba(255,255,255,1) 30%, rgba(0,0,0,1) 100%); */
        background: #282e38;
        min-height: 200px;
    }
    .avatar {
        display: flex;
        align-items: center;
        width: 120px;
        height: 120px;
        background: white;
        overflow: hidden;
        border-radius: 300px;
        margin-top: -75px;
        box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
    }
    .avatar-wrapper .title {
        margin-top: -54px;
        margin-left: 20px;
        color: #fff3d1;
    }
    .avatar-wrapper {
        background: #37404c;
        padding-bottom: 14px;
    }
    .p-breadcrumb.p-component.p-menuitem-text {
        background-color: transparent;
        border: none;
    }
    .bread {
        background: red !important;
    }
    .p-menuitem-link {
        color: white !important;
    }
    .profile-wrapper .p-menuitem-text {
        color: #fff3d1 !important;
    }
    

</style>