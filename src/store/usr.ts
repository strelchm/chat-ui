import SockJS from "sockjs-client";
import Stomp, {Frame, Message} from "webstomp-client";

// @ts-ignore
export default {
    state: {
        user: null,
        subscribed: null,
    }, // начальный state для приложения
    mutations: {
        UPDATE(state: any, usr: any) {
            state.user = usr;

        },
        SET_SUBSCRIBED(state: any, s: boolean) {
            state.subscribed = s;

        },
    }, // всегда синхронный код
    actions: {
        updateUser(ctx: any, subs: boolean) {
            ctx.commit('UPDATE', subs);
        },
        setSubscribed(ctx: any, subs: boolean) {
            ctx.commit('SET_SUBSCRIBED', subs);
        },
    },
    getters: {
        getSelf(state: any) {
            return state.user;
        },
        isSubscribed(state: any) {
            return state.subscribed;
        },
    }
}