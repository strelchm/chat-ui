<template>
    <div class="cards">
        <div class="card" v-for="room in rooms" :key="room.id">
            <div class="card-title">
                <div class="card-status">Создана: {{parseDateFromUtc(room.created)}}</div>
            </div>
            <p :class="'card-status ' + getChipStyleByType(room.type)" class="card-chip">{{room.type}}</p>
            <div style="font-size: 40px">{{room.name}}</div>
            <v-spacer></v-spacer>
            <v-btn @click="goToMessagePage(room.id)">Сообщения</v-btn>
        </div>
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
                API.getAllRoomsUsingGET()
                    .then((response) => {
                        rooms.value = response.data;

                        rooms.value.forEach(v => {
                            // store.dispatch("subscribe", v.id)
                            const topic: string = "/chat/room/" + v.id;
                            // context.rootState.instance.session
                            store.getters.getStompClient.subscribe(topic, (tick: Message) => {
                                store.dispatch("setMessages", {roomId: v.id, messages: JSON.parse(tick.body)});
                            });
                        })
                    })
                    .catch(error => {
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

    html, body {
        background: #FCEEB5;
        font-family: Abel, Arial, Verdana, sans-serif;
    }

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

    .card-status {
        align-self: flex-end;
        justify-self: flex-end;
        font-size: .8em;
    }

    .card-title {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-items: flex-start;
        align-items: flex-start;
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
        background-color: darksalmon;
    }

    .public-card-chip {
        background-color: aquamarine;
    }

    v-btn {
        justify-self: flex-end;
        align-self: flex-end;
    }
</style>