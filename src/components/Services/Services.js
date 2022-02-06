import React from "react";
import DMImg from "../images/ourServices.png";
import servicesBanner from "../images/servicesBanner.jpg";
import webDevImg from "../images/webDevImg.jpg";
import seoImg from "../images/seoImg.png";
import ppcImg from "../images/ppcImg.png";
import webImg from "../images/webImg.png";
import smmImg from "../images/smmImg.png";
import DMkeys from "../images/DMkeys.jpg";
import Contact from "../Home/NewHomePage/contact/Contact";
import "./Services.css";

const ourServices = [
  {
    name: "Website Designing & Development",
    desc: "Full website creation for small and medium businesses. Websites include business, blogging, affiliate, e-commerce & custom",
    img: webDevImg,
  },
  {
    name: "Search Engine Optimization(SEO)",
    desc: "On-page, Off-page SEO for your website, increase organic traffic & DA, ranking decrease SC, high authority backlinks, keyword research",
    img: seoImg,
  },
  {
    name: "Social Media Marketing(SMM)",
    desc: "Social Media marketing includes instagram, facebook paga handling, boost post & engagement by organic and inorganic methods",
    img: smmImg,
  },
  {
    name: "Search Engine Marketing (SEM/PPC)",
    desc: "Search engine marketing includes campaign creation, google ads for leads, conversions, traffic, brand awareness, etc",
    img: ppcImg,
  },
  {
    name: "High Conversion Landing pages",
    desc: "Landing page creation for businesses, affiliate marketers, for selling products & services",
    img: webDevImg,
  },
  {
    name: "Website Handling",
    desc: "Regular post & content upload, upload blogs with on-page SEO, new section creation, regular revisions",
    img: webImg,
  },
];

const Services = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="servicesBanner">
          <img src={servicesBanner} />
        </div>

        {/* section-1 */}
        <div className="container-fluid bgGray mb-5">
          <div className="container">
            <div className="row ourDMServices">
              <div className="col-lg-6 DMText">
                <div className="">
                  <h3 className="montserrat600 pt-4">
                    We Offer Full Digital Marketing Services
                  </h3>
                  <p className="mulish400">
                    We offer digital marketing services for small and
                    medium-level businesses and enterprises. We have offered
                    more than 10 clients including brands, coaching centers,
                    schools, politicians, restaurants, and many more.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="DMImage">
                  <img src={DMImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section-2 */}
        <div className="container mb-5 servicesSection-2">
          <h1 className="text-center montserrat600">Our Services</h1>
          <div className="row serviceBox">
            {ourServices.map((item, idx) => {
              return (
                <>
                  <div className="col-lg-6 mt-3">
                    <div className="boxShadow p-3" id={`boxshadow${idx}`}>
                      <div className="row serviceDisplayFlex">
                        <div className="col-lg-6">
                          <h3 className="montserrat600">{item.name}</h3>
                          <hr />
                          <p className="mulish400">{item.desc}</p>
                        </div>
                        <div className="col-lg-6 serviceImgBox">
                          <img src={item.img} />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* section-3 */}
        <div className="servicesSection-3">
          <h1 className="text-center montserrat600 titleColor mb-3">
            keys To Becoming Successful In Business
          </h1>
          <img className="DMbanner" src={DMkeys} />
        </div>
        {/* section-4 contact us */}
        <div>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Services;
