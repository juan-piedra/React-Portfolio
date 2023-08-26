import resume from '../assets/Resume_Juan_Piedra.pdf'

const Resume = () => {
  return (
    <>
      <div className="container-fluid bg-myBlack h-100">
        <div className="row py-3 text-myWhite">
          <h2>Resume</h2>
        </div>
        <div className="row py-3 text-myWhite">
            <embed type="application/pdf" src={ resume } width='100%' height='600px' title='Resume'></embed>
        </div>
      </div>
    </>
  );
};

export default Resume;
