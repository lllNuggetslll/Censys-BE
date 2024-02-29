import express from "express";
import {
  createToDo,
  getAllToDos,
  getSingleToDo,
  deleteSingleToDo,
} from "../controllers/index.js";

export const router = express.Router();

router.route("/").get(getAllToDos).post(createToDo);

router.route("/:key").get(getSingleToDo).delete(deleteSingleToDo);
