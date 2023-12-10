const URL1 = import.meta.env.VITE_LOCAL;

const getAllItems = () => {
  return fetch(URL1)
    .then((res) => res.json())
    .then((json) => {
      if (json.success && json.data && json.data.payload) {
        return json.data.payload;
      } else {
        console.error("Unexpected response format", json);
        throw new Error("Unexpected response formt");
      }
    });
};
export { getAllItems }