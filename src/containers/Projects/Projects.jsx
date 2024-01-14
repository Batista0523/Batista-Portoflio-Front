import React, { useState, useEffect } from "react";
import { getAllItems } from "../../helpers/apicalls";
import "./Projects.scss";
import { images } from "../../constants";

function Projects() {
  const [items, setItems] = useState([]);
  const [expandedItems, setExpandedItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getAllItems();
        setItems(response);
        setExpandedItems(Array(response.length).fill(false));
      } catch (error) {
        console.error("Error fetching items", error);
      }
    };
    fetchItems();
  }, []);

  const toggleDescription = (index) => {
    const updatedExpandedItems = [...expandedItems];
    updatedExpandedItems[index] = !updatedExpandedItems[index];
    setExpandedItems(updatedExpandedItems);
  };

  
  return (
    <div className="projects-container">
      <img src={images.project3} alt="project" />
      <img src={images.note} alt="" />
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-list">
        {items.map((item, index) => (
          <div key={item.id} className="project-item">
            <div className="project-card">
              <div className="card-body">
                <h1 className="card-title">{item.title}</h1>
                <p className="card-text">
                  {expandedItems[index]
                    ? item.descriptions
                    : `${item.descriptions.slice(0, 100)}...`}
                </p>
                  <p className="see-more-link" onClick={() => toggleDescription(index)}>
                    {expandedItems[index] ? "See Less" : "See More"}
                  </p>
                <div className="project-buttons">
                  <a
                    href={item.deployedlink}
                    className="deployed-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={item.repolink}
                    className="github-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}



export default Projects;
