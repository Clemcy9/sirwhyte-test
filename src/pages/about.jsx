import Rounded from "../components/rounded";
import programer from "../images/programmer.png";
import social from "../images/social-media.png";
import doctor from "../images/doctor.png";
import packaging from "../images/packaging.png";
import "./about.css";

function About() {
  return (
    <div className="aboutParent" id="about">
      <div className="container">
        <h2> ABOUT US</h2>
        <div className="about row">
          <Rounded
            className=""
            title="App/Website Development"
            image={programer}
          ></Rounded>
          <Rounded
            className=""
            title="Branding/Graphics"
            image={packaging}
          ></Rounded>
          <Rounded
            className=""
            title="Business Consultation"
            image={doctor}
          ></Rounded>
          <Rounded
            className=""
            title="Social media Marketing"
            image={social}
          ></Rounded>
        </div>
        <h3 className="aboutFooter">
          With our expertise, we fuel your social media and create apps that
          promote engaging experience for your business
        </h3>
      </div>
    </div>
  );
}

export default About;
<div>
  <Rounded title="App/Website Development"></Rounded>
</div>;
