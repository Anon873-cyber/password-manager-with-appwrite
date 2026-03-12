import conf from "../conf/conf.js"
import { Client, ID, Databases, Storage, Query } from "appwrite"

class Service {
    client;
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    createPassword = async ({ siteName, password, username, url, notes }) => {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    siteName,
                    password,
                    username,
                    url,
                    notes
                }
            )
        } catch (error) {
            console.log(error)
            return null
        }
    }

    updatePassword = async (documentId, { siteName, password, username, url, notes }) => {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId,
                {
                    siteName,
                    password,
                    username,
                    url,
                    notes
                }
            )
        } catch (error) {
            console.log(error)
            return null
        }
    }

    deletePassword = async (documentId) => {
        try {
            const response = await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId
            )

            return response
        } catch (error) {
            console.log(error)
            return null
        }
    }

    getpasswords = async () => {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId
            )

            return response.documents
        } catch (error) {
            console.error("Error fetching passwords:", error)
            return []
        }
    }
}

const service = new Service()
export default service;
