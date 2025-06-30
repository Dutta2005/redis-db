import Todo from "../model/todo.model.js";
import axios from "axios";

const fillDummyData = async() => {
    await axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
        response.data.map(async (item) => {
            await Todo.create({
                title: item.title,
                body: item.body
            })
        });
    }).catch((error) => {
        console.error("Error fetching data from API:", error);
    });
}

export default fillDummyData;