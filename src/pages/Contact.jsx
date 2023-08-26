const Contact = () => {
  return (
    <>
      <div className="bg-myBlack h-100">
      <div className="row px-5 pt-3 ps-4">
          <h2 className="display-2 text-myWhite">Contact Me</h2>
        </div>
        <form className="ps-5 pt-3">
          <div className="col-xl-5 pb-2">
            <label htmlFor="validationDefault01" className="form-label text-myWhite">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              required
            />
          </div>
          <div className="col-xl-5 pb-2">
            <label htmlFor="exampleInputEmail1" className="form-label text-myWhite">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="col-xl-5 pb-4">
            <label htmlFor="exampleFormControlTextarea1" className="form-label text-myWhite">
              Message
            </label>
            <textarea
              type='text'
              className="form-control"
              id="validationDefault01"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="col-12 pb-5">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
