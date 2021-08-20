import React, { useEffect, useState } from "react";
import "./Hprojects.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
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
      <div className="webProjects_title">
        <h1>Web Projects</h1>
      </div>
      <Navbar />
      {loading ? (
        <div className="blocks">
          {mlProjects.map((content, index) => {
            return (
              <ProjectBox
                hidden_link="true"
                img={img2}
                title={content.title}
                quote={content.quote}
                link={content.link}
              />
            );
          })}
        </div>
      ) : (
        <div className="loading">Loading Projects...</div>
      )}

      <Footer />
    </>
  );
};

export default WebProjects;

// const mlProjects = [
//   {
//     title: "Image Finder (Live)",
//     quote: "Find your thoughts",
//     link: "/image_finder",
//   },
//   {
//     title: "Notes_Universe (Live)",
//     quote: "Share & Learn",
//     link: "https://notes-universe.web.app",
//   },
//   {
//     title: "Dairy_Listing_Web with PWA (Live)",
//     quote: "Purity Is King",
//     link: "https://dairy-need.web.app/",
//   },
//   {
//     title: "Free Resume Maker (Live)",
//     quote: "Design Your Thoughts",
//     link: "/live_tools",
//   },
//   {
//     title: "TikTacToe Browser Game",
//     quote: "Learn & Play",
//     link: "https://github.com/Aman-Rawat001/TicTacToe-Browser-Game",
//   },
//   {
//     title: "Responsive Bootstrap Wesbite",
//     quote: "Design Your Thoughts",
//     link: "https://github.com/Aman-Rawat001/Fully-Responsive-Bootstrap-Wesbite-",
//   },
//   {
//     title: "Android Chat Application",
//     quote: "Chat without security issues",
//     link: "https://github.com/Aman-Rawat001/react-native-chat-application",
//   },
//   {
//     title: "Instagram Post Creator",
//     quote: "That's Why Hackers Always Win",
//     link: "https://github.com/Aman-Rawat001/InstaPostCreator-v2.0",
//   },
//   {
//     title: "Website Pricing Template",
//     quote: "Design Your Own World",
//     link: "https://github.com/Aman-Rawat001/Pricing-Template-For-Websites",
//   },
//   {
//     title: "Blood Donation App",
//     quote: "Interesting In Predictive Analytics",
//     link: "https://github.com/Aman-Rawat001/Blood-donation-website",
//   },
//   {
//     title: "Blogging Website (Live)",
//     quote: "A Directory Of Wonderfull Things",
//     link: "http://futuretech.epizy.com",
//   },
//   {
//     title: "Responsive Dance Wesbite",
//     quote: "Interesting In Predictive Analytics",
//     link: "https://github.com/Aman-Rawat001/Fully-fledged-dance-website",
//   },
// ];
