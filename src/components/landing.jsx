import "bootstrap/dist/css/bootstrap.min.css";
import land from "../images/lander.png";
import "./landing.css";

function Landing() {
  return (
    <div className="landParent">
      <div className="container">
        <div className="row">
          <div className="landChild1 col-lg-6 col-sm-12">
            <div className="headings">
              <h2>Be Found</h2>
              <h2>Online!</h2>
              <h2>Its simple!</h2>
            </div>
            <div className="paragraph">
              <p>With our expertise, we fuel your social media and</p>
              <p>create apps that promote engaging experience for</p>
              <p>your business</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <img
              className="landChild2"
              src={land}
              alt=""
              style={{ width: "110%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
