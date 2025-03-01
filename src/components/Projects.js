import { Container, Row, Col, Tab, Nav, } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg3 from "../assets/img/project-img3.png";
import pbroker from "../assets/img/pbroker-img.png";
import patlas from "../assets/img/patlas-img.png";
import psocitey from "../assets/img/psocitey-img.png";
import ppotfolio from "../assets/img/pprotfolio-img.png";
import puidesign from "../assets/img/puidesign-img.png";
import pinvitaion from "../assets/img/pinvitaion-img.png";
import puiGame from "../assets/img/puiGame.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const webDevelopmentProjects = [
    {
      title: "Real Estate",
      description: "Create a design using HTML, CSS, and JavaScript, with a backend implemented in PHP and MySQL.",
      imgUrl: pbroker,
    },
    {
      title: "Import & Export",
      description: "Atlas Impex, now live at https://atlasimpex.in/, is a user-friendly import-export platform built with WordPress. It connects global businesses, offering seamless access to a wide range of products and services for international trade.",
      imgUrl: patlas,
    },
    {
      title: "Socitey Managment System",
      description: "The Society Management System is a dynamic platform designed to streamline society-related tasks and data management. Developed using HTML, CSS, and JavaScript for the frontend, with PHP and MySQL powering the backend, it provides a seamless and efficient solution for society administration.",
      imgUrl: psocitey,
    },
    {
      title: "Personal Portfolio",
      description: "This personal portfolio, built with ReactJS, showcases my skills through a responsive, interactive design with smooth animations and dynamic content management, offering an engaging user experience.",
      imgUrl: ppotfolio,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: primg3,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  const uiUxDesignProjects = [
    {
      title: "Flight Booking Application",
      description: "User  Interface Design for flight booking application",
      imgUrl: puidesign,
    },
    {
      title: " Engagment‎ ‎ Invitation video",
      description: "A heartfelt engagement  invitation, creatively designed with Photoshop and Canva to celebrate this special occasion.",
      imgUrl: pinvitaion,
    },
    {

      title: "Quiz App Design",
      description: " A sleek and user-friendly quiz app prototype designed in Figma, featuring an intuitive interface, engaging visuals, and seamless user experience. Perfect for interactive learning and fun quizzes!",
      imgUrl: puiGame,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p> A collection of my Web Development and UI/UX Design projects, showcasing creativity, functionality, and user-centric design. From interactive websites to polished Figma prototypes, each project reflects my passion for building engaging digital experiences.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">UI/UX Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Future Showcase</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            webDevelopmentProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            uiUxDesignProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>  This section is currently empty, but exciting projects are on the way! Stay tuned as I showcase my upcoming Web Development and UI/UX Design work soon..</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
