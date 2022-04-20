import "./project_content.css";
function ProjectContent(props) {
  return (
    <div className={"round1Parent " + props.className}>
      <img src={props.image} alt="" className="img-fluid" />
      <h3>{props.title}</h3>
    </div>
  );
}

export default ProjectContent;
