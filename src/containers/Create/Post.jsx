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
      <p className="lead">
        We deeply value your feedback and appreciate your trust in my services.
        If you believe that my work has significantly contributed to the
        success of your business, I kindly invite you to share your experience
        here. Your insights are not only crucial to my continuous improvement
        but also assist others in making informed decisions about my
        capabilities and commitment.
      </p>

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
        <div className="mb-3">
          <label htmlFor="repolink">Repository Link</label>
          <input
            type="text"
            name="repolink"
            id="repolink"
            className="form-control"
            value={formData.repolink}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="deployedlink">Website</label>
          <input
            type="text"
            name="deployedlink"
            id="deployedlink"
            className="form-control"
            value={formData.deployedlink}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descriptions" className="form-label">
            Descriptions
          </label>
          <textarea
            className="form-control"
            id="descriptions"
            name="descriptions"
            value={formData.descriptions}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default Post;
