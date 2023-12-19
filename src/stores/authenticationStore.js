import {defineStore } from "pinia";
import Accounts from '@/accounts.json';
import { useRouter } from 'vue-router';

export const useAuthenticationStore = defineStore('accounts',{
    //state
    state: () => ({
        accountList: Accounts,
        authenticated: false,
        account: "",
    }),
    actions: {
        login(mail, password) {
          this.account = this.accountList.find((account) => account.email === mail && account.password === password);
          if(this.account){
            this.authenticated = true;
            console.log(this.account)
            alert('succesvol ingelogd.');
            
            this.$router.go(-1);
          }
          else{
            alert('The user credentials are incorrect.')
          }
        },
        logout() {
            this.authenticated = false;
          },
      },
})
