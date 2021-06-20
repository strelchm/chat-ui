import { createApp } from 'vue'
import axios from 'axios';
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import {FORBIDDEN_RESPONSE_CODE, UNAUTHORIZED_RESPONSE_CODE} from "@/http-response-code";

const BASE_URL:string = "http://localhost:8080";
axios.defaults.baseURL = BASE_URL;

const sendApiResponseError = (error: any) => {
    console.error(error);
}

const sendApiRequestError = (error: any) => {
    console.error(error);
}

axios.interceptors.request.use(
    (requestConfig) => {
        console.log("try")
        const token: string | null = localStorage.getItem('token');
        if (requestConfig.baseURL && BASE_URL.localeCompare(requestConfig.baseURL) === 0 && token) {
            requestConfig.headers['Authorization'] = 'Bearer ' + token;
        }
        console.log("yess")
        return requestConfig;
    },
    (error) => {
        sendApiRequestError(error);
        return Promise.reject(error)
    }
);

axios.interceptors.response.use(
    response => {
        // console.debug('AXIOS response:', JSON.stringify(response, null, 2)); // JUST 4 TEST
        return response
    },
    error => {
        if (error.response) {
            if ((error.response.status === UNAUTHORIZED_RESPONSE_CODE || error.response.status === FORBIDDEN_RESPONSE_CODE) && store.getters.isLogged) {
                store.dispatch("logOut");
                console.warn("axios.interceptors.response: logout with 401 / 403 code cause");
            } else if (error.response.status >= 300) {
                if(!store.getters.isLogged) {
                    router.push("login").catch(reason => console.warn("axios.interceptors.response: " + reason));
                }
                sendApiResponseError(error.response.data.message);
            }
        } else if (error.request) {
            sendApiResponseError("error request: " + error.message);
        } else {
            sendApiResponseError(error.message);
        }

        return Promise.reject(error);
    }
);

router.beforeEach((to, from, next) => {
        console.log("--->")
        const token: string | null = localStorage.getItem("token");
        const isLoginPage: boolean = to.path.localeCompare('/login') === 0;
        // store.dispatch('setCurrentPageInfo', new CurrentPagePayload(to.meta.title, to.meta.prev));
        if (to.matched.some(record => record.meta.requiresAuth) && (!token)) {
            console.warn("router.beforeEach: go to login page - no token fined")
            next("/login");
        }
        next();
    }
);

if(localStorage.getItem("token")) {
    store.dispatch("updateCredentials");
}


store.dispatch("wsConnect");

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
