import Card from "../components/card";
import "./services.css";
import icon1 from "../images/web-dev-icon.png";
import bg2 from "../images/bg2.png";
import playbth from "../images/playBtn.png";
import "../icons/font-awesome-4.7.0/css/font-awesome.min.css";
import ServiceOption from "../components/service-option";

function Services() {
  return (
    <div>
      <div className="container serviceParent">
        <h2>You need everything to stand out right!</h2>
        <div className="cards row">
          <Card
            className="col-lg-4"
            content="Provide a valid, navigable address as the href value. If you cannot providesx-a11y/anchor-is-valid    a valid href"
            heading="Repurpose"
          ></Card>
          <Card
            className="col-lg-4 "
            content="Provide a valid, navigable address as the href value. If you cannot providesx-a11y/anchor-is-valid    a valid href"
            heading="Rework"
          ></Card>
          <Card
            className="col-lg-4"
            content="Provide a valid, navigable address as the href value. If you cannot providesx-a11y/anchor-is-valid    a valid href"
            heading="Repeat"
          ></Card>
        </div>
        <h1>Our Services</h1>
      </div>
      <div className="box">
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h2>Application/Website Development</h2>
          <a href="">
            <img src={icon1} alt="" style={{}} />
          </a>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img src={bg2} alt="" style={{ width: "100%" }} />
        <a href="">
          <img
            src={playbth}
            alt=""
            style={{
              width: "82px",
              position: "absolute",
              left: "43.5vw",
              top: "34%",
            }}
          />
        </a>
      </div>
      <div className="container light">
        <h2>Light, Fast & Powerful Websites</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ width: "650px" }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <button
            className="btn btn-primary"
            style={{
              background: "#0E0A5C",
              width: "215px",
              height: "64px",
            }}
          >
            See projects
          </button>
        </div>
      </div>
      <div>
        <ServiceOption content="Branding and Graphics design"></ServiceOption>
        <ServiceOption content="Consultation and Business Dev"></ServiceOption>
        <ServiceOption content="Digital Marketing/Advertising"></ServiceOption>
      </div>
    </div>
  );
}

export default Services;
