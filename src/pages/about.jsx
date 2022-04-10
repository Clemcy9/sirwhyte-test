import Rounded from "../components/rounded";
import programer from "../images/programmer.png";
import social from "../images/social-media.png";
import doctor from "../images/doctor.png";
import packaging from "../images/packaging.png";
import "./about.css";

function About() {
  return (
    <div className="aboutParent">
      <div className="container">
        <h2> ABOUT US</h2>
        <div className="about row">
          <Rounded title="App/Website Development" image={programer}></Rounded>
          <Rounded title="Branding/Graphics" image={packaging}></Rounded>
          <Rounded title="Business Consultation" image={doctor}></Rounded>
          <Rounded title="Social media Marketing" image={social}></Rounded>
        </div>
      </div>
    </div>
  );
}

export default About;
<div>
  <Rounded title="App/Website Development"></Rounded>
</div>;
