const URL = import.meta.env.VITE_LOCAL;

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

const createItem = async (data) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    header: { "Content-type": "application/json" },
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

export { getAllItems , createItem};
