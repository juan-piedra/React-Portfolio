import resume from '../assets/Resume_Juan_Piedra.pdf'

const Resume = () => {
  return (
    <>
      <div className="container-fluid bg-myBlack h-100">
      <div className="row px-5 pt-3 ps-4">
          <h2 className="display-2 text-myWhite">Resume</h2>
        </div>
        <div className="row py-3 text-myWhite">
            <iframe type="application/pdf" src={ resume } width='100%' height='900px' title='Resume'></iframe>
        </div>
      </div>
    </>
  );
};

export default Resume;
