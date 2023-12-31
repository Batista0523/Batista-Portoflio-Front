import React, { useState, useEffect } from "react";
import { getAllItems } from "../../helpers/apicalls";
import "./Projects.scss"; 

function Projects() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getAllItems();
        setItems(response);
      } catch (error) {
        console.error("Error fetching items", error);
      }
    };
    fetchItems();
  }, []);

  
  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-list">
        {items.map((item) => (
          <div key={item.id} className="project-item">
            <div className="project-card">
              <div className="card-body">
                <h1 className="card-title">{item.title}</h1>
                <p className="card-text">{item.descriptions}</p>
                <div className="project-buttons">
                  <a
                    href={item.deployedlink}
                    className="deployed-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Deployed
                  </a>
                  <a
                    href={item.repolink}
                    className="github-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
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
