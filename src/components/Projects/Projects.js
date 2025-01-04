import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { addCart, briotechno, colorSharp2, movieApp, newsMonkey, pokemonApp, projImg1, projImg2, projImg3, youtubeClone } from "../../comman/images";
import { projectData } from "./projectData";

export const Projects = () => {

  // const projects = [
  //   {
  //     title: "briotechno.com",
  //     description: "Design & Development",
  //     imgUrl: briotechno,
  //     link: 'https://briotechno.com/'
  //   },
  //   {
  //     title: "News Monkey",
  //     description: "Design & Development",
  //     imgUrl: newsMonkey,
  //   },
  //   {
  //     title: "Pokemon App",
  //     description: "React, Redux toolkit, Pokemon api",
  //     imgUrl: pokemonApp,
  //   },
  //   {
  //     title: "Movie App",
  //     description: "React, Redux toolkit",
  //     imgUrl: movieApp,
  //   },
  //   {
  //     title: "Add Cart",
  //     description: "React, Redux toolkit",
  //     imgUrl: addCart,
  //   },
  //   {
  //     title: "Youtube Clone",
  //     description: "React, Redux toolkit",
  //     imgUrl: youtubeClone,
  //   },
  // ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Showcasing my skills and expertise, these projects highlight real-world applications of my work. Each includes a brief description, live demos, and code repositories, demonstrating my ability to solve complex problems, adapt to various technologies, and manage projects efficiently.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">React - Clone</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">HTML</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projectData.map((db, index) => {
                              return (
                                <>
                                  {
                                    db.project.map((pj, index) => (

                                      < ProjectCard
                                        key={index}
                                        {...pj}
                                      />
                                    ))
                                  }
                                </>
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projectData.map((db, index) => {
                              return (
                                <>
                                  {
                                    db.clone.map((cl, index) => (
                                      <ProjectCard
                                        key={index}
                                        {...cl}
                                      />
                                    ))
                                  }
                                </>
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projectData.map((db, index) => {
                              return (
                                <>
                                  {
                                    db.html.map((cl, index) => (
                                      <ProjectCard
                                        key={index}
                                        {...cl}
                                      />
                                    ))
                                  }
                                </>
                              )
                            })
                          }
                        </Row>
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
