<template>
    <div>
        <v-container style="display: flex; flex-direction: row; justify-items: center; align-items: center;">
            <textarea v-model="messageText" style="border: 1px #2c3e50 !important; "/>
            <v-btn @click="addMessage">+ Добавить сообщение</v-btn>
        </v-container>
        <v-divider></v-divider>
        <div class="container" v-for="message in messages" :key="message.id">
            <p style="text-align: end">{{parseDateFromUtc(message.created)}}</p>
            <p style="text-align: end">Пользователь: {{message.userId}}</p>
<!--            <p>{{message.updated}}</p>-->
            <p style="margin: 20px; font-size: 20px">{{message.text}}</p>
        </div>
    </div>
</template>

<script lang="ts">
    import {Configuration, MessageControllerApi, MessageDto} from "@/api";
    import axios from "axios";
    import {useRoute} from "vue-router";
    import {Ref} from "@vue/reactivity";
    import {reactive, ref, watch} from "vue";
    import {useStore} from "vuex";
    import {parseDateFromUtc} from "@/components/common";

    export default {
        name: "MessageList",
        setup() {
            const API: MessageControllerApi = new MessageControllerApi(
                new Configuration(),
                axios.defaults.baseURL,
                axios
            );

            const route = useRoute();
            const store = useStore();

            const roomId: any = route.params.roomId;

            let messages: Ref<MessageDto[] | undefined> = ref([]);
            let messageText: Ref<string> = ref('');

            let newMessage = reactive({});
            watch(
                () => store.getters.getMessageMap,
                (state) => {
                    loadData()
                    console.log("''''''''" + roomId)
                    console.log(state)
                    console.log(state.get(roomId))
                    newMessage = state.get(roomId)
                    console.log("changed~")
                    console.log(state.get(roomId))
                    console.log(newMessage)
                    console.log("changed~++++++")
                },
                {deep: true}
            );
            // watch: {
            //     person: {
            //         mapp: function(newValue:any) {
            //             console.log("Person with ID:" + newValue.id + " modified")
            //             console.log("New age: " + newValue.age)
            //         },
            //         deep: true
            //     }
            // }
            // watch(() => mapp.value, (newV: any) => {
            //         console.log("///" + newV)
            //         newMessage.value = newV
            //     }
            // );
            // watch: {
            //     item: {
            //         handler(val){
            //             // do stuff
            //         },
            //         deep: true
            //     }
            // }
            let loadData = () => {
                API.getAllMessagesUsingGET(roomId)
                    .then((response) => {
                        messages.value = response.data.content;
                    })
                    .catch(error => {
                        console.error("messages get error : " + error);
                    })
                    .finally(() => {
                        // alert("loading finished!");
                    });
            };

            let stompClient = store.getters.getStompClient

            let addMessage = () => {
                console.log("Send message:" + messageText.value);
                if (stompClient && stompClient.connected) {
                    let mess: any = {};
                    mess.roomId = roomId;
                    mess.userId = "00000000-0000-0000-0000-000000000000";
                    mess.text = messageText.value;
                    console.log(JSON.stringify(mess));
                    stompClient.send("/app/room/" + roomId, JSON.stringify(mess), {'token': localStorage.getItem('token')});
                }
            }

            loadData();


            return {
                messages,
                addMessage,
                messageText,
                newMessage,
                parseDateFromUtc
            }

        }
    }
</script>

<style scoped>
    /* Chat containers */
    .container {
        border: 2px solid #dedede;
        background-color: #f1f1f1;
        border-radius: 5px;
        padding: 10px;
        margin: 10px 0;
    }

    /* Darker chat container */
    .darker {
        border-color: #ccc;
        background-color: #ddd;
    }

    /* Clear floats */
    .container::after {
        content: "";
        clear: both;
        display: table;
    }

    /* Style images */
    .container img {
        float: left;
        max-width: 60px;
        width: 100%;
        margin-right: 20px;
        border-radius: 50%;
    }

    /* Style the right image */
    .container img.right {
        float: right;
        margin-left: 20px;
        margin-right: 0;
    }

    /* Style time text */
    .time-right {
        float: right;
        color: #aaa;
    }

    /* Style time text */
    .time-left {
        float: left;
        color: #999;
    }
</style>