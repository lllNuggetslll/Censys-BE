import { addToDo, getToDo, getToDos, deleteToDo } from "../cache/cache.js";

export const createToDo = (req, res) => {
  const { title, description } = req.body;
  const key = addToDo({ title, description });

  res.send(key);
};

export const getAllToDos = (req, res) => {
  const toDos = getToDos();

  res.send(toDos);
};

export const deleteSingleToDo = (req, res) => {
  const key = req.params["key"];
  const deletedToDoKey = deleteToDo({ key });

  res.send(deletedToDoKey);
};

export const getSingleToDo = (req, res) => {
  const key = req.params["key"];
  const toDo = getToDo({ key });

  res.send(toDo);
};
