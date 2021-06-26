// @ts-ignore
export default {
    state: {
        subscribes: new Map<string, boolean>(),
    }, // начальный state для приложения
    mutations: {
        // @ts-ignore
        SUBSCRIBE(state: any,  {id, subs}) {
            state.subscribes.set(id, subs);

        },
    }, // всегда синхронный код
    actions: {
        // @ts-ignore
        roomSubscribed(ctx: any, {id, subs}) {
            ctx.commit('SUBSCRIBE', {id, subs});
        },
    },
    getters: {
        getSubscribes(state: any) {
            return state.subscribes;
        },
    }
}