const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectName: String(import.meta.env.VITE_APPWRITE_PROJECT_NAME),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

}

export default conf

