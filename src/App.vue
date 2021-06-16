<template>
  <div id="nav">
    <button @click="logout">logout</button>
    <router-link to="/">Чаты</router-link> |
    <router-link to="/about">Пользователи</router-link>
  </div>
  <router-view/>
</template>

<script>
  import {useStore} from "vuex";
  import {useRouter} from "vue-router";

  export default {
    setup(){
      const store = useStore();
      const router = useRouter();

      let logout = ()=> {
        store.dispatch("logOut"); // logout
        router.push('/login');
      };

      return {
        logout
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
