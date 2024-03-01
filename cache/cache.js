import NodeCache from "node-cache";
import keygen from "keygenerator";

const myCache = new NodeCache();

export const addToDo = ({ title, description }) => {
  const key = keygen._();

  myCache.set(key, {
    title,
    description,
  });

  return key;
};

export const getToDo = ({ key }) => {
  const toDoExists = myCache.has(key);
  console.log("getting todo");
  if (toDoExists) {
    const toDo = myCache.get(key);

    return toDo;
  }

  throw new Error("Not Found");
};

export const getToDos = () => {
  const { data } = myCache;

  const toDos = Object.keys(data).map((key) => ({
    key,
    title: data[key].v.title,
  }));

  return toDos;
};

export const deleteToDo = ({ key }) => {
  const toDoExists = myCache.has(key);

  if (toDoExists) {
    myCache.del(key);

    return key;
  }

  throw new Error("Not Found");
};
