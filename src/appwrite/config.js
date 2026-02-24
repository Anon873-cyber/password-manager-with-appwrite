import { Client, Account, OAuthProvider } from "appwrite";

class Appwrite {
    clint;
    account;
    constructor() {
        this.clint = new Client()
            .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
            .setProject('<PROJECT_ID>');
            
            this.account  = new Account(this.clint)
    }
}