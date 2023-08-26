/* eslint-disable react/jsx-key */
import jate from "../assets/jatesquare.png";
import landit from "../assets/landit.png";
import ecommerce from "../assets/e-commerce.png";
import notetaker from "../assets/notetaker.png";

const projectsArr = [
  {
    image: jate,
    title: "J.A.T.E.",
    stack: "stack",
    link: "https://github.com/juan-piedra/PWA-Text-Editor",
  },
  {
    image: landit,
    title: "LandIt!",
    stack: "stack",
    link: "https://github.com/juan-piedra/LandIt",
  },
  {
    image: ecommerce,
    title: "E-Commerce Back End",
    stack: "stack",
    link: "https://github.com/juan-piedra/E-Commerce-Back-End",
  },
  {
    image: notetaker,
    title: "Note Taker",
    stack: "stack",
    link: "https://github.com/juan-piedra/Note-Taker-App",
  },
];

const Project = () => {
  return (
    <>
      {projectsArr.map((Object) => (
        <div id="projectContainer" className="p-5">
          <a href={Object.link}>
            <img
              id="projectImg"
              src={Object.image}
              alt="JATE"
              className="col"
            />
          </a>
          <div id="projectMiddle">
            <div id="projectTitle">{Object.title}</div>
            <div id="projectStack">{Object.stack}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Project;

/* <div className="col p-5 text-myWhite">Project 1</div> */
