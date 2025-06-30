import Todo from "../model/todo.model.js";
import { connectRedis } from "../config/redis.js";

let redisConnectionClient;

(async () => {
    redisConnectionClient = await connectRedis();
})();

export const getAllTodos = async (req, res) => {
    try {
        const allTodos = await redisConnectionClient.get("todos");

        if (allTodos) {
            console.log("Data from redis");
            return res.status(200).json(JSON.parse(allTodos));
        }

        const todos = await Todo.find();

        await redisConnectionClient.set("todos", JSON.stringify(todos));
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Error fetching todos", error });
    }
}