import React from "react";
import "./HomePageStyles.css";
import profileImage from "../images/croped-image.jpg";
import Navbar from "../navbar/Navbar";
// import { counter } from "@fortawesome/fontawesome-svg-core;
import Footer from "../Footer/Footer";
import PopUp_form from "./PopUp_form/PopUp_form";

const HomePage = () => {
  // const [whoIam, setWhoIam] = useState(" ");
  const leftArrow = "<";
  const rightArrow = "/>";
  // useEffect(()=>{
  //     setWhoIam("AMAN RAWAT");
  // }, [])
  // // ----------------------------------
  // text change animation in homePage.
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 450;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  // -------------------------------------

  return (
    <>
      <PopUp_form />
      <Navbar />
      <div className="main_container">
        <img className="profileImage" src={profileImage} alt="profileimage" />
        <div>
          <h1 className="homepage_content1">
            I'AM <span>{leftArrow}</span>
            <span
              class="txt-rotate"
              data-period="2000"
              data-rotate='[ "AMAN RAWAT", "WEB DEVELOPER", "BLOGGER"]'
            ></span>
            <span>{rightArrow}</span>
          </h1>
          <p className="homepage_content2">
            “Instead of freaking out about these constraints, embrace them. Let
            them guide you. Constraints drive innovation and force focus.
            Instead of trying to remove them, use them to your advantage.”
          </p>
        </div>
        <div className="homepage_btn_div">
          <button className="homepage_btn1">
            <a href="portfolio">Portfolio</a>
          </button>
          <button className="homepage_btn2">
            <a href="projects">Projects</a>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
