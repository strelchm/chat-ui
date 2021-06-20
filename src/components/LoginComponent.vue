<template>
    <div class="container" style="display: flex; flex-direction: column; justify-items: center; align-items: center; height:100%">
        <div style="align-self: center; justify-self:center;">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" v-model="input.login" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" v-model="input.password" required>

            <v-btn type="submit" v-on:click="login" style="align-self: center !important; justify-self:center !important;">Login</v-btn>
        </div>
    </div>
</template>

<script lang="ts">
    import {useStore} from "vuex";
    import {LoginRequestDto} from "@/api";
    import {reactive} from "vue";
    import {useRouter} from "vue-router";

    class LoginDtoImpl implements LoginRequestDto {
    }

    export default {
        name: "LoginComponent",
        setup() {
            const store = useStore();
            const router = useRouter();
            let input: LoginRequestDto = reactive(new LoginDtoImpl());
            let login = () => {
                store.dispatch("logIn", input)
                    .then(() => {
                        router.push("/") // редирект на домашнюю странцу todo {strelchm}
                        // ctx.root.$router.go(-1); // редирект на предыдущую страницу
                    })
                    .catch((err: any) => {
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