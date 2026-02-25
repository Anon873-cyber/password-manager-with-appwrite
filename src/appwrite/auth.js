import { Client, Account, OAuthProvider } from "appwrite";
import conf from "../conf/conf";

class AuthService {
    client;
    account;
    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
    }

    loginWithGoogle = async () => {
        try {
            
            await this.account.createOAuth2Session({
                provider: OAuthProvider.Google,
                success: "http://localhost:5173/",
                failure: "http://localhost:5173/login"
            })
        } catch (error) {
            console.error(error)
            return null;
        }
    }

    logoutUser = async () => {
        try {
            await this.account.deleteSession('current')
        } catch (error) {
            console.error(error)
            return null;
        }
    }

    getUser = async () => {
        try {
            return await this.account.get()
        } catch (error) {
            console.error(error)
            return null;
        }

    }


}

const authService = new AuthService();
// exporting new instence 
export default authService

