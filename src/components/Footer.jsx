import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

const Footer = () => {
  
  
  return (
    <>
      <div className="container-fluid text-center bg-myBlack fixed-bottom pb-5">
        <div className="row justify-content-md-center pt-5">
          <div className="col col-lg-2 fs-1">
            <a href="https://github.com/juan-piedra" target="_blank" rel="noopener noreferrer" className="link-secondary">
              <AiFillGithub />
            </a>
          </div>
          <div className="col col-lg-2 fs-1">
          <a href="https://www.linkedin.com/in/piedrajuan/ " target="_blank" rel="noopener noreferrer" className="link-secondary">
              <AiFillLinkedin />
            </a>
          </div>
          <div className="col col-lg-2 fs-1">
          <a href="https://stackoverflow.com/users/21293335/granolah" target="_blank" rel="noopener noreferrer" className="link-secondary">
              <BsStackOverflow />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
