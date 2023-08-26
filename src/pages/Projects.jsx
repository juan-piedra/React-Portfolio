import Project from "../components/project";

const Projects = () => {
  return (
    <>
      <div className="container-fluid bg-myBlack h-100">
        <div className="row">
          <div className="col py-4">
            <h2 className="text-myWhite">Projects</h2>
          </div>
        </div>
        <div className="row row-cols-2 text-center">
          <Project />
        </div>
      </div>
    </>
  );
};

export default Projects;
