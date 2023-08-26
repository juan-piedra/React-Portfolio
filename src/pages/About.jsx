import selfie from '../assets/Pakkun.png'

const About = () => {
  return (
      <div className="container-fluid bg-myBlack h-100">
        <div className="row p-5 ps-4">
          <h2 className="display-2 text-myWhite">About Me</h2>
        </div>
        <img src={selfie} className="px-5"></img>
        <div className="row p-5 ps-5">
          <div id="aboutMe" className="row text-myWhite">
            <p><b>Welcome</b> - my name is Juan Piedra, I am 20 years old, currently living in the Imperial Valley, and I am an aspiring <u>Full Stack Web Developer</u>. I got started by taking a Java course in my community college for fun, and from then on, I've been hooked in learning Computer Science. Everyday I search to learn something new and build upon my skills. I love taking on a challenge and trying to figure it out on my own. If I am defeated, I get up, learn from it, and move onto the next, with hopes of taking on the challenge again and conquering it. Aside from Computer Science, I love to skate and hang out with my friends. I am currently employed at Gamestop, but am actively searching for a role where I can prove my skills. </p>
          </div>
        </div>
      </div>
  )
}

export default About