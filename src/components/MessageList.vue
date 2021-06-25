<template>
    <div>
        <Fieldset :toggleable="true" :collapsed="true">
            <template #legend>Добавить сообщение</template>
            <div style="display: flex; flex-direction: column;">
                <Textarea style="width: 100%" v-model="messageText" :autoResize="true"/>
                <Button style="margin-top: 10px; max-width: 150px; align-self: center !important;" icon="pi pi-check"
                        @click="addMessage" label="Добавить"/>
            </div>
        </Fieldset>
        <!--        <v-container style="display: flex; flex-direction: row; justify-items: center; align-items: center;">-->
        <!--        </v-container>-->
        <Divider type="dashed"/>
        <Card class="container" v-for="message in messages" :key="message.id">
            <template #header style="text-align: end">Пользователь: {{message.userId}}</template>
            <template #subtitle style="text-align: end; margin: 0px">{{parseDateFromUtc(message.created)}}</template>
            <template #content>
                <p style="margin: 5px; font-size: 30px">{{message.text}}</p>
            </template>
        </Card>
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
    import moment from "moment";
    import {defineComponent} from "vue";
    import {useToast} from "primevue/usetoast";

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
            const toast = useToast();

            const roomId: any = route.params.roomId;

            let messages: Ref<MessageDto[] | undefined> = ref([]);
            let messageText: Ref<string> = ref('');

            let newMessage = reactive({});
            watch(
                () => store.getters.getMessageMap,
                (state) => {
                    loadDataOrGetFromCache(state);

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
                        if (response.data.content && response.data.content.length > 0) {
                            // response.data.content.reverse();
                            messages.value = response.data.content;
                        }
                    })
                    .catch(error => {
                        toast.add({severity: 'error', summary: 'Ошибка', detail: error, life: 3000});
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
                toast.add({severity: 'error', summary: '1111', detail: "1111", life: 3000});
                if (stompClient && stompClient.connected) {
                    let mess: any = {};
                    mess.roomId = roomId;
                    mess.userId = "00000000-0000-0000-0000-000000000000";
                    mess.text = messageText.value;
                    mess.created = moment.now().toString();
                    stompClient.send("/app/room/" + roomId, JSON.stringify(mess), {'token': localStorage.getItem('token')});
                }
            }

            loadDataOrGetFromCache(store.getters.getMessageMap);


            return {
                messages,
                addMessage,
                messageText,
                newMessage,
                parseDateFromUtc
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
</style>