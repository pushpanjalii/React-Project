import conf from "../conf/conf.js";        
import { Client, ID, Databases, Storage, Query} from "appwrite";

export class Service{
    client =  new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
        
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
           return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );      
            return post;
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {

            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        } catch(error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;

        } catch(error) {
            throw error;
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch(error) {
            console.error("Error fetching post:", error);
            throw error;
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
        } catch(error) {
            console.error("Error fetching posts:", error);
            throw error;
        }
    }

    // Method to upload a file to the bucket
    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.error("Error uploading file:", error);
            throw error;
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.error("Error deleting file:", error);
            throw error;
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        );
    }

    
}

const service = new Service();
export default service;