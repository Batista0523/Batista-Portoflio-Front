import React, { useState, useEffect } from "react";
import { getAllItems } from "../helpers/apicalls";
import "bootstrap/dist/css/bootstrap.min.css";
function Test() {
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
    <div className="container-fluid">
      <h1 className="mb-4 text-center" >this is test</h1>
      <div className="row">
       {items.map((item) =>(
        <div key={item.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
                <div className="card-body">
                    <h3>{item.title}</h3>
                    <p>{item.descriptions}</p>
                    <a href={item.deployedlink} >deployed</a>
                    <br />
                    <a href={item.repolink}>github</a>
                    <br />
                    
                </div>
            </div>
        </div>
       ))}
      </div>
    </div>
  );
}

export default Test;
