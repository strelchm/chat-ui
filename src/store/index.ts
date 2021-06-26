// @ts-ignore
import { createStore } from 'vuex'
import credentials from "@/store/credentials";
import ws from "@/store/ws";
import messages from "@/store/message-holder";
import usr from "@/store/usr";
import subscribes from "@/store/subscribes";

// @ts-ignore
export default createStore({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
      // @ts-ignore
      credentials,
      ws,
      // @ts-ignore
      messages,
      usr,
      subscribes
    }
})
