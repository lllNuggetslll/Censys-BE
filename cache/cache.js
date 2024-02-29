import NodeCache from "node-cache";
import keygen from "keygenerator";

const myCache = new NodeCache();

export const setToDo = ({ title, description }) => {
  const key = keygen._();

  myCache.set(key, {
    title,
    description,
  });
  console.log(`setToDo: ${JSON.stringify(myCache.data)}`);

  return key;
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
  return myCache.data.map(({ key, title }) => ({ key, title }));
};

export const deleteToDo = ({ key }) => {
  const toDoExists = myCache.has(key);

  if (toDoExists) {
    myCache.delete(key);

    return key;
  }

  throw new Error("Not Found");
};
