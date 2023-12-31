const URL = import.meta.env.VITE_DEPLOYED;

const getAllItems = async () => {
  const res = await fetch(URL);
  const json = await res.json();
  if (json.success && json.data && json.data.payload) {
    return json.data.payload;
  } else {
    console.error("Unexpected response format", json);
    throw new Error("Unexpected response formt");
  }
};

const getOneItem = (id) => {
  return fetch(`${URL}/${id}`)
    .then((res) => res.json())
    .then((json) => {
      if (json.id) {
        return json;
      } else {
        console.error("Unexpected response format:", json);
        throw new Error("Unexpected response format");
      }
    })
    .catch((err) => console.error(err));
}

const createItem = async (data) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  };
  try {
    const res = await fetch(URL, options);
    const json = await res.json();
    return json;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export { getAllItems, createItem, getOneItem};
