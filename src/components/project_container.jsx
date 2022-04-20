import ProjectContent from "./project_content";
import img1 from "../images/project1.png";
import img2 from "../images/project2.png";

function ProjectContainer() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className=" col-md-3 col-6">
          <ProjectContent
            image={img1}
            title="long established"
          ></ProjectContent>
        </div>
        <div className=" col-md-3 col-6">
          <ProjectContent
            image={img1}
            title="long established"
          ></ProjectContent>
        </div>
        <div className=" col-md-3 col-6">
          <ProjectContent
            image={img1}
            title="long established"
          ></ProjectContent>
        </div>
        <div className=" col-md-3 col-6">
          <ProjectContent
            image={img1}
            title="long established"
          ></ProjectContent>
        </div>
        <div className=" col-md-3 col-6">
          <ProjectContent
            image={img1}
            title="long established"
          ></ProjectContent>
        </div>
        <div className=" col-md-3 col-6">
          <ProjectContent
            image={img2}
            title="long established"
          ></ProjectContent>
        </div>
        <div className=" col-md-3 col-6">
          <ProjectContent
            image={img2}
            title="long established"
          ></ProjectContent>
        </div>
        <div className=" col-md-3 col-6">
          <ProjectContent
            image={img2}
            title="long established"
          ></ProjectContent>
        </div>
        <div className=" col-md-3 col-6">
          <ProjectContent
            image={img2}
            title="long established"
          ></ProjectContent>
        </div>
      </div>
      <div className="row">
        <button
          style={{
            margin: "auto",
            background: "#25A0E7",
            borderRadius: "37px",
          }}
          className="btn btn-lg btn-info"
        >
          Load More Project
        </button>
      </div>
    </div>
  );
}

export default ProjectContainer;
