import "./service-option.css";
import open from "../images/open-icon.png";

function Serviceopt(props) {
  return (
    <div className="optBox">
      <div
        className="container optBoxChild"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h3>{props.content}</h3>
        <a href="">
          {/* <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i> */}
          <img src={open} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Serviceopt;
