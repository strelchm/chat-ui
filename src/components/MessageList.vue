<template>
    <div>
        <Fieldset :toggleable="true" :collapsed="true" style="margin-top: 10px">
            <template #legend>Добавить сообщение</template>
            <div style="display: flex; flex-direction: column;">
                <Textarea style="width: 100%; margin: 0 !importnt" v-model="messageText" :autoResize="true"/>
                <Button style="margin-top: 10px; max-width: 150px; align-self: center !important;" icon="pi pi-check"
                        @click="addMessage" label="Добавить"/>
            </div>
        </Fieldset>
        <!--        <v-container style="display: flex; flex-direction: row; justify-items: center; align-items: center;">-->
        <!--        </v-container>-->
        <Divider type="dashed"/>
        <div style="display: flex; flex-direction: column; align-items: flex-end; justify-items: flex-end;">
        <Card :style="getMessageStyle(message)" v-for="message in messages" :key="message.id">
            <template #header style="text-align: end; margin: 0px">
                <p style="text-align: end; margin-right: 5px">Пользователь: {{message.userLogin}}</p>
                <p style="text-align: end; margin-right: 5px">{{parseDateFromUtc(message.created)}}</p>
                <div style="font-size: 25px; font-weight: bold">{{message.text}}</div>
            </template>
        </Card>
        </div>
    </div>
</template>

<script lang="ts">
    import {Configuration, MessageControllerApi, MessageDto} from "@/api";
    import axios from "axios";
    import {useRoute} from "vue-router";
    import {Ref} from "@vue/reactivity";
    import {computed, defineComponent, reactive, ref, watch} from "vue";
    import {useStore} from "vuex";
    import {parseDateFromUtc} from "@/components/common";
    import moment from "moment";

    export default defineComponent({
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

            let currentUser = computed(() => store.getters.getSelf);

            let messages: Ref<MessageDto[] | undefined> = ref([]);
            let messageText: Ref<string> = ref('');

            let newMessage = reactive({});
            watch(
                () => store.getters.getMessageMap,
                (state) => {
                    loadDataOrGetFromCache(state);

                    newMessage = state.get(roomId)
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
                        if (response.data.content && response.data.content.length > 0) {
                            // response.data.content.reverse();
                            messages.value = response.data.content;
                        }
                    })
                    .catch(error => {
                        // showToast('Ошибка', error);
                        console.error("messages get error : " + error);
                    })
                    .finally(() => {
                        // alert("loading finished!");
                    });
            };

            let loadDataOrGetFromCache = (state: any) => {
                loadData();

                if (!messages.value || messages.value.length === 0) {
                    let messageArr: MessageDto[] = state.get(roomId);
                    if (messageArr) {
                        messages.value = messageArr;
                    }
                }
            };

            let stompClient = store.getters.getStompClient

            let addMessage = () => {
                if (stompClient && stompClient.connected) {
                    let mess: any = {};
                    mess.roomId = roomId;
                    console.debug("self");
                    console.debug(store.getters.getSelf);
                    mess.userId = store.getters.getSelf.id;
                    mess.text = messageText.value;
                    mess.created = moment.now().toString();
                    stompClient.send("/app/room/" + roomId, JSON.stringify(mess), {'token': localStorage.getItem('token')});
                }
            }

            loadDataOrGetFromCache(store.getters.getMessageMap);

            let getMessageStyle = (message: any) => {
                console.log(currentUser.value.id + "  |||| " + message.userId)
                let str = 'width: 50%; margin: 3px; max-height: 150px !important; ';
                let str2 = currentUser.value && message.userId && currentUser.value.id.localeCompare(message.userId) ?
                    'align-self: flex-end; justify-self: flex-end' :
                    'align-self: flex-start; justify-self: flex-start';
                return str + str2;
            }

            return {
                messages,
                addMessage,
                messageText,
                newMessage,
                parseDateFromUtc,
                currentUser,
                getMessageStyle
            }

        }
    })
</script>

<style scoped>
    /* Chat containers */
    .container {
        border: 2px solid #dedede;
        background-color: #f1f1f1;
        border-radius: 5px;
        padding: 0px;
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

    .p-card > * {
        margin: 0 !important;
        padding: 0 !important;
    }

    .p-card .p-card-subtitle {
        margin: 0 !important;
        padding: 0 !important;
    }

    .p-card .p-card-title {
        margin: 0 !important;
        padding: 0 !important;
    }

    .p-card .p-card-content {
        height: 100px !important;
        margin: 0 !important;
        padding: 0 !important;
    }

    .p-card .p-card-body {
        height: 0px !important;
        margin: 0 !important;
        padding: 0 !important;
    }
</style>