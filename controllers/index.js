import { setToDo, getToDo, getToDos, deleteToDo } from "../cache/cache.js";

export const createToDo = (req, res) => {
  const { title, description } = req.body;
  const key = setToDo({ title, description });

  res.send(key);
};

export const getAllToDos = (req, res) => {
  const toDos = getToDos();

  req.send(toDos);
};

export const deleteSingleToDo = (req, res) => {
  const key = deleteToDo({ key });

  req.send(key);
};

export const getSingleToDo = (req, res) => {
  const toDo = getToDo({ key });

  res.send(toDo);
};
