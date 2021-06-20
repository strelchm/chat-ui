<template>
    <v-app>
        <v-app-bar v-if="isLogOutButVisible" app>
            <v-row align-content="center" justify="center">
                <v-col id="nav">
                    <router-link to="/" class="router-link">Чаты</router-link>
                    <router-link to="/users" class="router-link">Пользователи</router-link>
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                    <v-btn @click="logout" color="primary">logout</v-btn>
                </v-col>
            </v-row>
        </v-app-bar>
        <v-main>
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import {useStore} from "vuex";
    import {useRouter} from "vue-router";
    import {computed} from 'vue';

    export default defineComponent({
        name: 'App',
        setup() {
            const store = useStore();
            const router = useRouter();

            let isLogOutButVisible = computed(() => store.getters.isLogged);


            let logout = () => {
                store.dispatch("logOut"); // logout
                router.push('/login');
            };

            return {
                logout,
                isLogOutButVisible
            }
        }
    })
</script>
<style>
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

