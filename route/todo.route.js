import { Router } from "express";
import { getAllTodos } from "../controller/todo.controller.js";

const router = Router();

router.get("/todos", getAllTodos);

export default router;