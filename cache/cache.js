import NodeCache from "node-cache";

const myCache = new NodeCache();

export const addToDo = ({ title, description }) => {
  const toDoExists = myCache.has(title);

  if (toDoExists) {
    throw new Error("Not Found");
  }

  myCache.set(title, {
    title,
    description,
  });

  const toDo = myCache.get(title);

  return toDo;
};

export const getToDo = ({ key }) => {
  const toDoExists = myCache.has(key);

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
