import conf from "../conf/conf.js";        
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount(email, password, name) {
        try {
           const userAccount =  await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if (userAccount) {
                //call anither method to set up user profile or additional data if needed
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login ({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

  
    async getCurrentUser() {
    try {
        // Pehle session check karo
        const sessions = await this.account.listSessions();
        if (!sessions.sessions.length) {
            return null; // koi login nahi hai
        }

        // Agar session hai to user data lo
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error", error);
        return null;
    }
}




    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite AuthService logout error:", error);
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService