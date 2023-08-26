const Contact = () => {
  return (
    <>
      <div className="bg-myBlack h-100">
        <form className="ps-5 pt-5">
          <div className="col-md-4 pb-2">
            <label htmlFor="validationDefault01" className="form-label text-myWhite" >
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              required
            />
          </div>
          <div className="col-md-4 pb-2">
            <label htmlFor="exampleInputEmail1" className="form-label text-myWhite">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="col-md-4 pb-4">
            <label htmlFor="exampleFormControlTextarea1" className="form-label text-myWhite">
              Message
            </label>
            <textarea
              type='text'
              className="form-control"
              id="validationDefault01"
              rows="5"
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
