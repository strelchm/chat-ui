<template>
    <v-app>
        <Menubar :model="navBarItems">
            <template #start>
                Чат
            </template>
<!--            <template #item="{item}">-->
<!--                <a :href="item.url">{{item.name}}</a>-->
<!--&lt;!&ndash;                <router-link to="item.url" class="router-link">{{item.name}}</router-link>&ndash;&gt;-->
<!--            </template>-->
            <template #end>
                <Button v-if="isLogOutButVisible" icon="pi pi-sign-out" @click="logout" class="p-button-secondary" label="Выход"/>
            </template>
        </Menubar>
        <!--            <template #start>-->
        <!--                <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" height="40" class="p-mr-2">-->
        <!--            </template>-->
        <!--            <template #end>-->
        <!--                <InputText placeholder="Search" type="text" />-->
        <!--            </template>-->

        <!--        <v-app-bar v-if="isLogOutButVisible" app>-->
        <!--            <v-row align-content="center" justify="center">-->
        <!--                <v-col id="nav">-->

        <!--                </v-col>-->
        <!--                <v-spacer></v-spacer>-->
        <!--                <v-col>-->
        <!--                    <v-btn @click="logout" color="primary">logout</v-btn>-->
        <!--                </v-col>-->
        <!--            </v-row>-->
        <!--        </v-app-bar>-->
        <v-main>
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
    import {computed, defineComponent} from 'vue'
    import {useStore} from "vuex";
    import {useRouter} from "vue-router";
    import {ref} from 'vue';

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

            return {
                logout,
                isLogOutButVisible,
                navBarItems
            }
        }
    })
</script>
<style>
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

