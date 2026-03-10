import conf from "../conf/conf.js"
import { Client, ID, TablesDB, } from "appwrite"


class Service {
    client;
    tablesDB;

    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.tablesDB = new TablesDB(this.client)
    }

    addPassword = async ({ siteName, password, username, url, notes }) => {
        try {
            return await this.tablesDB.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: ID.unique(),
                data: {
                    siteName, password, username, url, notes
                }
            })
        } catch (error) {
            console.log(error)
            return null
        }

    }

    updatePassword = async (rowId, { siteName, password, username, url, notes }) => {

        try {
            return await this.tablesDB.updateRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: rowId,
                data: {
                    siteName,
                    password,
                    username,
                    url,
                    notes
                }
            })

        } catch (error) {
            console.log(error)
            return null
        }
    }

    deletePassword = async (rowId) => {
        try {
            const response = await this.tablesDB.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: rowId
            });

            return response;

        } catch (error) {
            console.log(error);
            return null;
        }

    }

    getpasswords = async (DbId) => {
        try {
            const response = await this.tablesDB.listRows(DbId)
            return response;
        } catch (error) {
            console.error("Error fetching passwords:", error);
        }
    }

}

const service = new Service()
export default service;
