import {ToastType} from "@/components/toast";
<template>
    <div class="container" style="display: flex; flex-direction: column; justify-items: center; align-items: center; height:100%">
        <div style="align-self: center; justify-self:center;">
            <label id="uname"><b>Логин</b></label>
            <InputText type="text" placeholder="Введите логин" name="uname" v-model="input.login" />

            <label id="psw"><b>Пароль</b></label>
            <InputText type="password" placeholder="Введите пароль" name="psw" v-model="input.password" />

            <Button type="submit" v-on:click="login" style="align-self: center !important; justify-self:center !important;">Войти</Button>
        </div>
    </div>
</template>

<script lang="ts">
    import {useStore} from "vuex";
    import {Configuration, LoginRequestDto, UserControllerApi} from "@/api";
    import {reactive} from "vue";
    import {useRouter} from "vue-router";
    import {showToast, ToastType} from "@/components/toast";
    import axios from "axios";

    class LoginDtoImpl implements LoginRequestDto {
    }

    export default {
        name: "LoginComponent",
        setup() {
            const store = useStore();
            const router = useRouter();
            let input: LoginRequestDto = reactive(new LoginDtoImpl());
            const API: UserControllerApi = new UserControllerApi(
                new Configuration(),
                axios.defaults.baseURL,
                axios
            );
            let login = () => {
                store.dispatch("logIn", input)
                    .then(() => {
                        router.push("/") // редирект на домашнюю странцу todo {strelchm}
                        // ctx.root.$router.go(-1); // редирект на предыдущую страницу
                        showToast('Приветствие', "Добро пожаловать, " + input.login, ToastType.SUCCESS, 3000);

                        // let loadData = () => {
                            API.getSelfUsingPOST()
                                .then((response) => {
                                    store.dispatch("updateUser", response.data);
                                })
                                .catch(error => {
                                    console.error("rooms get error : " + error);
                                })
                                .finally(() => {
                                    console.debug("User is : ");
                                    console.debug(store.getters.getSelf);
                                });
                        // };
                        //
                        // loadData();

                    })
                    .catch((err: any) => {
                        // showToast('Ошибка', err);
                        console.error("error during login action: " + err);
                    })
                    .finally(() => {
                    });
            }
            return {
                login,
                input
            }
        }
    }
</script>

<style scoped>
    /* Bordered form */
    form {
        border: 3px solid #f1f1f1;
    }

    /* Full-width inputs */
    input[type=text], input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    /* Set a style for all buttons */
    button {
        background-color: #04AA6D;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }

    /* Add a hover effect for buttons */
    button:hover {
        opacity: 0.8;
    }

    /* Extra style for the cancel button (red) */
    .cancelbtn {
        width: auto;
        padding: 10px 18px;
        background-color: #f44336;
    }

    /* Center the avatar image inside this container */
    .imgcontainer {
        text-align: center;
        margin: 24px 0 12px 0;
    }

    /* Avatar image */
    img.avatar {
        width: 40%;
        border-radius: 50%;
    }

    /* Add padding to containers */
    .container {
        padding: 16px;
    }

    /* The "Forgot password" text */
    span.psw {
        float: right;
        padding-top: 16px;
    }

    /* Change styles for span and cancel button on extra small screens */
    @media screen and (max-width: 300px) {
        span.psw {
            display: block;
            float: none;
        }

        .cancelbtn {
            width: 100%;
        }
    }
</style>