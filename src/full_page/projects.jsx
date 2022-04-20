import Landing from "../components/landing";
import ProjectContainer from "../components/project_container";
import Rectangle from "../components/rectangle";
import Footer from "../pages/footer";

function Projects() {
  return (
    <div>
      <Rectangle></Rectangle>
      <Landing></Landing>

      <ProjectContainer></ProjectContainer>
      <div style={{ margin: "2em", height: "6em" }}></div>
      <Footer></Footer>
    </div>
  );
}

export default Projects;
