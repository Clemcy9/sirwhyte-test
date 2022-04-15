import "./rounded.css";
function Rounded(props) {
  return (
    <div className={"roundParent " + props.className}>
      <img src={props.image} alt="" className="rounded-circle img-fluid" />
      <h3>{props.title}</h3>
    </div>
  );
}

export default Rounded;
