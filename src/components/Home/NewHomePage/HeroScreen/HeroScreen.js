import React from "react";
import "./HeroScreen.css";

const HeroScreen = () => {
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

  return (
    <div className="container-fluid heroScreen">
      <div className="row">
        <div className="absoluteContent">
          <span className="name">
            <h1 className="fname">AMAN</h1>
            <h1 className="lname">RAWAT</h1>
          </span>
          <p>
            I AM<span> </span>
            <span
              class="txt-rotate text"
              data-period="2000"
              data-rotate='[ "AMAN RAWAT", "WEB DEVELOPER", "BLOGGER"]'
            ></span>
          </p>
        </div>
        <div className="col-lg-4 leftContent"></div>
        <div className="col-lg-8 rightContent">
          {/* <img src={heroImg} alt="Image" /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroScreen;
