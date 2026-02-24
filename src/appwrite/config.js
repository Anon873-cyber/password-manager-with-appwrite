import { Client, Account, OAuthProvider } from "appwrite";

class Appwrite {
    clint
    constructor() {
        this.clint = new Client()
            .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
            .setProject('<PROJECT_ID>');

    }
}