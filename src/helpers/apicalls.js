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
export { getAllItems }