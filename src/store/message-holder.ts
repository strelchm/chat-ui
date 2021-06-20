import axios from 'axios'
import {Configuration, LoginControllerApi, LoginRequestDto, MessageDto} from "@/api";
import SockJS from "sockjs-client";
import Stomp, {Frame, Message} from "webstomp-client";

export default {
    state: {
        messagesMap: new Map<string, MessageDto[]>(),
    },
    mutations: {
        // @ts-ignore
        SET_MESSAGES(state: any, {roomId, messages}) {
           let messageArr: MessageDto[] = state.messagesMap.get(roomId);
            if(!messageArr) {
                messageArr =  [];
            }
            messageArr.push(messages)
            state.messagesMap.set(roomId, messageArr)

            console.debug("**********************")
            console.debug(state.messagesMap.get(roomId))
            console.debug(state.messagesMap)
            console.debug("**********************")
            // state.messagesMap.set(roomId, messages);
        },
        CLEAR_MESSAGES(state: any, roomId: string) {
           state.messagesMap.set(roomId, []);
        },
    },
    actions: {
        // @ts-ignore
        setMessages(ctx: any, {roomId, messages}) {
            ctx.commit('SET_MESSAGES', {roomId, messages});
        },
        clearMessages(ctx: any, roomId: string) {
            ctx.commit('CLEAR_MESSAGES', roomId);
        }
    },
    getters: {
        getMessageMap(state: any): Map<string, MessageDto[]> {
            return state.messagesMap;
        }
    }
}