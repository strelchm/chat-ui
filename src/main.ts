import {createApp} from 'vue'
import axios from 'axios';
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import {FORBIDDEN_RESPONSE_CODE, UNAUTHORIZED_RESPONSE_CODE} from "@/http-response-code";

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from "primevue/inputtext";
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Fieldset from 'primevue/fieldset';
import Menubar from 'primevue/menubar';
import Divider from 'primevue/divider';
import Textarea from 'primevue/textarea';

import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import {showToast} from "@/components/toast";
const BASE_URL: string = "http://localhost:8080";
axios.defaults.baseURL = BASE_URL;

// const toast = useToast();

const sendApiResponseError = (error: any) => {
    showToast('Ошибка', error);
}

const sendApiRequestError = (error: any) => {
    showToast('Ошибка', error);
}

axios.interceptors.request.use(
    (requestConfig) => {
        const token: string | null = localStorage.getItem('token');
        if (requestConfig.baseURL && !BASE_URL.localeCompare(requestConfig.baseURL) && token) {
            requestConfig.headers['Authorization'] = 'Bearer ' + token;
        }
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
                if (!store.getters.isLogged) {
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

if (localStorage.getItem("token")) {
    store.dispatch("updateCredentials");
}


store.dispatch("wsConnect");

const app = createApp(App)

app.use(router)
    .use(store)
    .use(PrimeVue)
    .use(vuetify)

app.component('Button', Button);
app.component("InputText", InputText);
app.component("Card", Card);
app.component("Tag", Tag);
app.component("Fieldset", Fieldset);
app.component("Textarea", Textarea);
app.component("Divider", Divider);
app.component("Menubar", Menubar);

app.mount('#app')


