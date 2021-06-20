import SockJS from "sockjs-client";
import Stomp, {Frame, Message} from "webstomp-client";

// @ts-ignore
// @ts-ignore
// @ts-ignore
export default {
    state: {
        connected: null,
        socket: null,
        stompClient: null,
    }, // начальный state для приложения
    mutations: {
        CONNECT(state: any) {
            state.socket = new SockJS("http://localhost:8080/ws");
            state.stompClient = Stomp.over(state.socket);
            state.stompClient.connect(
                {},
                (frame: Frame | undefined) => {
                    state.connected = true;
                    console.log(frame);
                },
                (error: CloseEvent | Frame) => {
                    console.log(error);
                    state.connected = false;
                }
            );
        },
        DISCONNECT(state: any) {
            if (state.stompClient) {
                state.stompClient.disconnect();
            }
            state.connected = false;
        },
        SUBSCRIBE(state: any, roomId: string) {
            const topic: string = "/chat/room/" + roomId;
            // context.rootState.instance.session
            state.stompClient.subscribe(topic, (tick: Message) => {
                console.debug(tick);
                console.debug("GET: " + JSON.parse(tick.body));
                console.debug(tick)
                // state.messagesMap.set(roomId, JSON.parse(tick.body));
                // this.received_messages.push(JSON.parse(tick.body).content);
            });
        },
        UNSUBSCRIBE(state: any, topic: string) {
            state.stompClient.unsubscribe(topic);
        },

    }, // всегда синхронный код
    actions: {
        wsConnect(ctx: any) {
            console.log("CONNECT")
            ctx.commit('CONNECT');
        },
        wsDisconnect(ctx: any) {
            ctx.commit('DISCONNECT');
        },
        // @ts-ignore
        subscribe({ state, commit, rootState }, topic: string) {
            console.log(rootState.instance)
            commit('SUBSCRIBE', topic);
        },
        unsubscribe(ctx: any, topic: string) {
            ctx.commit('UNSUBSCRIBE', topic);
        },
    },
    getters: {
        isConnected(state: any) {
            return state.connected;
        },
        getSocket(state: any) {
            return state.socket;
        },
        getStompClient(state: any) {
            return state.stompClient;
        }
    }
}