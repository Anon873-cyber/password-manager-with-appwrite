import { Client, Account, OAuthProvider } from "appwrite";
import conf from "../conf/conf";

class Appwrite {
    clint;
    account;
    constructor() {
        this.clint = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectName);

        this.account = new Account(this.clint)
    }

    loginWithGoogle = async () => {
        try {
            await account.createOAuth2Session({
                provider: OAuthProvider.Google
            })
        } catch (error) {
            console.error(error)
        }
    }

    logoutUser = async () => {
        try {
            await account.deleteSession('current')
        } catch (error) {
            console.error(error)
        }
    }

    getUser = async () => {
        try {
            return await account.get()
        } catch (error) {
            console.error(error)
        }




    }

}