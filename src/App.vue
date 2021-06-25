<template>
    <div>
        <Menubar :model="navBarItems">
            <template #start>Чат</template>

            <template #end>
                <Button v-if="isLogOutButVisible" icon="pi pi-sign-out" @click="logout" class="p-button-secondary" label="Выход"/>
            </template>
        </Menubar>

        <router-view/>
    </div>
</template>

<script lang="ts">
    import {computed, defineComponent} from 'vue'
    import {useStore} from "vuex";
    import {useRouter} from "vue-router";
    import {ref} from 'vue';
    import {useToast} from "primevue/usetoast";
    import { onMounted } from 'vue';

    export default defineComponent({
        name: 'App',
        setup() {
            const store = useStore();
            const router = useRouter();

            const navBarItems = ref([
                {
                    label: 'Чаты',
                    icon: 'pi  pi-users',
                    url: "/"
                },
                {
                    label: 'Пользователи',
                    icon: 'pi pi-user',
                    url: "/users"
                },

            ]);

            let isLogOutButVisible = computed(() => store.getters.isLogged);


            let logout = () => {
                store.dispatch("logOut"); // logout
                router.push('/login');
            };

            // const API: UserControllerApi = new UserControllerApi(
            //     new Configuration(),
            //     axios.defaults.baseURL,
            //     axios
            // );

            // let loadData = () => {
            //     API.getSelfUsingPOST()
            //         .then((response) => {
            //             store.dispatch("updateUser", response.data);
            //
            //             console.log(response.data)
            //         })
            //         .catch(error => {
            //             console.error("rooms get error : " + error);
            //         })
            //         .finally(() => {
            //             // alert("loading finished!");
            //         });
            // };
            //
            // loadData();
            onMounted(() => {
                console.log('mounted')
                const toast = useToast()
                console.log(`toast: `, toast)
                toast.add({
                    severity: 'info',
                    summary: 'info summary',
                    detail: 'info detail',
                    life: 3000
                })
            })

            return {
                logout,
                isLogOutButVisible,
                navBarItems
            }
        }
    })
</script>
<style>
    @import "~primevue/resources/primevue.css";
    @import "~primevue/resources/themes/nova-alt/theme.css";
    @import "~primeicons/primeicons.css";
    /*@import "~primeflex/primeflex.css";*/

    html, body {
        background: #aaaaaa !important;
        font-family: Abel, Arial, Verdana, sans-serif;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .router-link {
        margin-left: 10px;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>

