import React, { useEffect, useState } from "react";
import "./Hprojects.css";
import firebase from "../../firebase";
import ProjectBox from "./ProjectBox";
import img2 from "../images/img2.jpg";

const WebProjects = () => {
  const [mlProjects, setMlProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const db = firebase.firestore();
  const fetchMlProjects = async () => {
    const response = db.collection("mlProjects");
    const data = await response.orderBy("order", "asc").get();
    const tempArray = [];
    data.docs.forEach((item) => {
      const tempObj = {
        title: item.data().title,
        quote: item.data().quote,
        link: item.data().link,
      };
      tempArray.push(tempObj);
    });
    setMlProjects(tempArray);
    setLoading(true);
  };
  useEffect(() => {
    fetchMlProjects();
  }, []);
  return (
    <>
      <div className="bg-gray">
        <div className="webProjects_title container py-5">
          <h1 className="aboutTitle montserrat600">
            WEB DEVELOPMENT PROJECTS SO FAR
          </h1>
          <hr className="mb-5" />
          {loading ? (
            <div className="blocks row">
              {mlProjects.map((content, index) => {
                return (
                  <div className="col-lg-4 col-12">
                    <ProjectBox
                      hidden_link="true"
                      img={img2}
                      title={content.title}
                      quote={content.quote}
                      link={content.link}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="loading montserrat600">Loading Projects...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default WebProjects;
