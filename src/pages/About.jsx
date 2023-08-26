import selfie from '../assets/Pakkun.png'

const About = () => {
  return (
      <div className="container-fluid bg-myBlack h-100">
        <div className="row p-5">
          <h2 className="text-myWhite">About Me</h2>
        </div>
        <img src={selfie} className="px-5"></img>
        <div className="row text-myWhite">Description</div>
      </div>
  )
}

export default About