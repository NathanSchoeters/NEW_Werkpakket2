import {defineStore } from "pinia";
import Accounts from '@/accounts.json';
import { useCartStore } from "./shoppingCartStore";

export const useAuthenticationStore = defineStore('accounts',{
    //state
    state: () => ({
        accountList: Accounts,
        authenticated: false,
        account: "",
        cart: useCartStore(),
    }),
    actions: {
        login(mail, password) {
          this.account = this.accountList.find((account) => account.email === mail && account.password === password);
          if(this.account){
            this.authenticated = true;
            console.log(this.account)
            alert('Log in was succesfull.');
          }
          else{
            alert('The user credentials are incorrect.')
          }
        },
        logout() {
            this.authenticated = false;
            this.cart.cartItems.splice(0,this.cart.cartItems.length);
          },
    },
})
