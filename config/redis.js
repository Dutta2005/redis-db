import {createClient} from "redis";
import dotenv from "dotenv";

dotenv.config();

export const connectRedis = async () => {
    try {
        const client = createClient({
            url: process.env.REDIS_URL
        });

        client.on("error", (err) => console.error("Redis Client Error", err));
        await client.connect();
        console.log("Redis connected successfully");
        return client;
    } catch (error) {
        console.error("Redis connection error:", error);
        throw new Error("Failed to connect to Redis");
    }
}