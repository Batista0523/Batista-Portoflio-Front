import React, { useState } from "react";
import { createItem } from "../../helpers/apicalls";

const Post = () => {
  const [formData, setFormData] = useState({
    title: "",
    descriptions: "",
    repolink: "",
    deployedlink: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createItem(formData);
      if (response && response.id) {
        alert("Item added successfully!");
        setFormData({
          title: "",
          descriptions: "",
          repolink: "",
          deployedlink: "",
        });
      } else {
        console.error("Unexpected response format", response);
        alert("Item addition failed. Please try again");
      }
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Item addition failed. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Add Your Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3"></div>
      </form>
    </div>
  );
};

export default Post;
