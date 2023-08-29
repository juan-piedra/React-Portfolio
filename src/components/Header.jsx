import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
      <div className="container-fluid text-center w-auto bg-myWhite">
        <div className="row">
          <div className="col-2 p-5 w-auto">
            <h1>Juan Piedra</h1>
          </div>
          <div className="col p-5">
            <Navigation />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
