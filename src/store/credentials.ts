import axios from 'axios'
import {Configuration, LoginControllerApi, LoginRequestDto} from "@/api";

export default {
    state: {
        logged: null
    }, // начальный state для приложения
    mutations: {
        SET_DATA(state: any) {
            state.logged = true;
        },
        LOGIN(state: any, payload: string) { // todo {strelchm} remove code duplicate from previous method
            localStorage.setItem('token', payload);
            state.logged = true;
        },
        CLEAR_TOKEN(state: any) {
            console.debug("CLEAR_TOKEN mutation...");
            localStorage.removeItem('token');
            // localStorage.removeItem('currentLocal');

            state.logged = false;
            // todo {strelchm} - etc log params clear from vuex
            axios.defaults.headers.common['Authorization'] = null; // todo {strelchm} - to interseptors?
        }
    }, // всегда синхронный код
    actions: {
        updateCredentials(ctx: any) {
            ctx.commit('SET_DATA');
        },
        clearCredentials(ctx: any) {
            ctx.commit('CLEAR_TOKEN'); // коммитим мутацию с новым значением
        },
        logIn(ctx: any, dto: LoginRequestDto) {
            console.debug("logIn action VUEX 4 user: " + dto.login);

            return new Promise((resolve, reject) => {
                const API: LoginControllerApi = new LoginControllerApi(
                    new Configuration(),
                    axios.defaults.baseURL,
                    axios
                )
                API.loginUsingPOST(dto)
                    .then((response) => {
                        console.log("respo:::")
                        ctx.commit('LOGIN', response.data.token);
                        console.log("Добро пожаловать, " + dto.login + "!");
                        resolve(response.data.token)
                    })
                    .catch(error => {
                        console.error("logIn: error during login action: " + error);
                        reject(error);
                        ctx.state.logged = false;
                        // throw e;
                    })
                    .finally(() => {
                        // alert("loading finished!");
                    });
            });
        },
        logOut(ctx: any) {
            ctx.commit('CLEAR_TOKEN');
            ctx.state.logged = false;
        },
    },
    getters: {
        isLogged(state: any) {
            return state.logged;
        }
    }
}