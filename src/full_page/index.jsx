import Landing from "../components/landing";
import ProjectContainer from "../components/project_container";
import Rectangle from "../components/rectangle";
import About from "../pages/about";
import Contact from "../pages/contact";
import Footer from "../pages/footer";
import Mission from "../pages/mission";
import Services from "../pages/services";
import Team from "../pages/team";

function IndexPage() {
  return (
    <div>
      <Rectangle></Rectangle>
      {/* <hr></hr> */}
      {/* <NaviBar></NaviBar> */}
      <Landing></Landing>
      {/* <hr></hr> */}
      {/* <Card heading = 'Rework' content ='your business Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi a magnam ducimus cupiditate dolorem beatae repellendus nobis ea, expedita exercitationem.'></Card> */}
      <Services></Services>
      {/* <hr></hr> */}
      {/* <Rounded></Rounded> */}
      <About></About>
      {/* <ProjectContainer></ProjectContainer> */}
      <Mission></Mission>
      <Team></Team>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default IndexPage;
