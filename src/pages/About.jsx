import selfie from '../assets/Pakkun.png'

const About = () => {
  return (
      <div className="container-fluid bg-myBlack h-100">
        <div className="row p-5 ps-4">
          <h2 className="display-2 text-myWhite">About Me</h2>
        </div>
        <img src={selfie} className="px-5"></img>
        <div className="row p-5 ps-5">
          <div className="row text-myWhite">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate maxime quasi laudantium earum vero sapiente eius illo corrupti natus, ad reprehenderit assumenda rem ipsa incidunt culpa tempora ullam? Sed, praesentium repellat incidunt nemo obcaecati at maiores deserunt quam quidem impedit! Magnam fugit totam aperiam, nemo nulla quos! Eaque corporis non, consectetur atque facere maxime dolores quam voluptate ullam adipisci nulla illum veritatis doloribus! Vero saepe tenetur autem quibusdam odit delectus provident placeat commodi numquam, a aspernatur iure cupiditate omnis, eligendi dolorum tempore aliquam quia praesentium officia iste consectetur? Omnis, cum fuga atque delectus in exercitationem iste laudantium ipsum itaque.</div>
        </div>
      </div>
  )
}

export default About