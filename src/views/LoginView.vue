<script>
import { useAuthenticationStore } from '@/stores/authenticationStore.js';

export default {
    data() {
        return {
            authenticater: useAuthenticationStore(),
            mail: "",
            password: "",
        };
    },
    methods: {
    async logIn() {
      await this.authenticater.login(this.mail, this.password);
      if (this.authenticater.authenticated) {
        this.$router.push('/cart');
      }
    },
    logOut() {
      this.authenticater.logout();
    },
    }
}
</script>
<template>
    <section v-if="!authenticater.authenticated" class="login">
        <div class="login-top">
            <img class="login-top-logo" src="@/assets/Illustrashop.png" alt="Logo">
        </div>
        <div class="login-form">
            <label class="login-form-label" for="email">Email</label>
            <input v-model="mail" class="login-form-input" type="text" name="email">
            <label class="login-form-label" for="password">Password</label>
            <input v-model="password" class="login-form-input" type="text" name="password">
            <button class="login-form-button" @click="logIn" type="button">Log in</button>
        </div>
    </section>
    <section v-else class="login">
        <div class="login-logout">
            <button class="login-form-button logoutButton" @click="logOut">Log out</button>
        </div>
    </section>
</template>