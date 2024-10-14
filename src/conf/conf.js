const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL || process.env.VITE_APPWRITE_URL || ''),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID || process.env.VITE_APPWRITE_PROJECT_ID || ''),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID || process.env.VITE_APPWRITE_DATABASE_ID || ''),
    appwriteBlogsCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID || process.env.VITE_APPWRITE_COLLECTION_ID || ''),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID || process.env.VITE_APPWRITE_BUCKET_ID || '')
};

if (!conf.appwriteUrl) throw new Error("Appwrite URL is missing");
if (!conf.appwriteProjectId) throw new Error("Appwrite Project ID is missing");

export default conf;
