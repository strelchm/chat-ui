import {ToastType} from "@/components/toast";
import {RoomDtoTypeEnum} from "@/api";
<template>
    <div class="cards">
        <Card class="card" v-for="room in rooms" :key="room.id">
            <template #title>{{room.name}}</template>
            <template #subtitle>Создана: {{parseDateFromUtc(room.created)}}</template>
            <template #content>
                <Tag :class="'card-status ' + getChipStyleByType(room.type)">{{room.type}}</Tag>
            </template>
            <template #footer>
                <Button icon="pi pi-check" @click="goToMessagePage(room.id)" label="Сообщения"/>
            </template>
        </Card>
    </div>
</template>

<script lang="ts">
    import {RoomDto, RoomDtoTypeEnum} from "../api/models";
    import {ref} from "vue";
    import {Configuration, RoomControllerApi} from "../api";
    import axios from "axios";
    import {Ref} from "@vue/reactivity";
    import {useRouter} from "vue-router";
    import {useStore} from "vuex";
    import {Message} from "webstomp-client";
    import {parseDateFromUtc} from "@/components/common";
    import {showToast, ToastType} from "@/components/toast";

    export default {
        name: "Home",
        components: {},
        setup() {
            const router = useRouter();
            const store = useStore();

            const API: RoomControllerApi = new RoomControllerApi(
                new Configuration(),
                axios.defaults.baseURL,
                axios
            );

            let rooms: Ref<RoomDto[]> = ref([]);

            let loadData = () => {
                let subscribes: Map<string, boolean> = store.getters.getSubscribes;
                API.getAllRoomsUsingGET()
                    .then((response) => {
                        rooms.value = response.data;

                        // if (!store.getters.isSubscribed) {
                        rooms.value.forEach(v => {
                            // store.dispatch("subscribe", v.id)
                            const topic: string = v.type === RoomDtoTypeEnum.BOT ?
                                "/user/chat/room/00000000-0000-0000-0000-000000000000" :
                                "/chat/room/" + v.id;
                            // context.rootState.instance.session
                            let roomIdString: string | undefined = v.type === RoomDtoTypeEnum.BOT ? "00000000-0000-0000-0000-000000000000" : v.id;
                            if (roomIdString && !subscribes.get(roomIdString)) {
                                store.getters.getStompClient.subscribe(topic, (tick: Message) => {
                                    store.dispatch("setMessages", {roomId: v.id, messages: JSON.parse(tick.body)});
                                    if (router.currentRoute.value.name && (
                                        String(router.currentRoute.value.name).localeCompare('MessageList') !== 0 ||
                                        !roomIdString || String(router.currentRoute.value.params.roomId).localeCompare(roomIdString) !== 0
                                    )) {
                                    console.debug("--- " + router.currentRoute.value.params.roomId + " --- " +roomIdString)
                                    console.debug(String(router.currentRoute.value.name).localeCompare('MessageList') !== 0)
                                        if (roomIdString != null) {
                                            console.log(String(router.currentRoute.value.params.roomId).localeCompare(roomIdString) !== 0)
                                        }
                                    console.debug(String(router.currentRoute.value.params.roomId).localeCompare("00000000-0000-0000-0000-000000000000") !== 0)
                                        showToast('Сообщение из ' + v.name, tick.body, ToastType.SUCCESS, 3000);
                                    }
                                    store.dispatch("roomSubscribed", {id: roomIdString, subs: true});
                                });
                            }
                        });

                        store.getters.getStompClient.subscribe("/user/chat/error", (tick: Message) => {
                            showToast('Ошибка dc', tick.body);
                        });

                        store.dispatch("setSubscribed", true)
                        // }
                    })
                    .catch(error => {
                        // showToast('Ошибка4', error);
                        console.error("rooms get error : " + error);
                    })
                    .finally(() => {
                        // alert("loading finished!");
                    });
            };

            let goToMessagePage = (roomId: number) => {
                router.push("/rooms/" + roomId + "/messages")
            }

            let getChipStyleByType = (type: RoomDtoTypeEnum) => {
                switch (type) {
                    case RoomDtoTypeEnum.PUBLIC:
                        return 'private-card-chip';
                    case RoomDtoTypeEnum.PRIVATE:
                        return 'public-card-chip';
                }
            }

            loadData();
            return {
                rooms,
                goToMessagePage,
                parseDateFromUtc,
                getChipStyleByType
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Abel');

    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
    }

    .cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .card {
        min-width: 450px;
        height: 250px;
        background-color: #fff;
        background: linear-gradient(#f8f8f8, #fff);
        box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
        border-radius: 6px;
        overflow: hidden;
        position: relative;
        margin: 1.5rem;
        display: flex;
        flex-direction: column;
    }

    .card-chip {
        display: inline-block;
        padding: 0 25px;
        width: 100px;
        height: 50px;
        font-size: 16px;
        line-height: 50px;
        border-radius: 25px;
        background-color: #f1f1f1;
    }

    .private-card-chip {
        background-color: #42b983;
    }

    .public-card-chip {
        background-color: #f44336;
    }
</style>