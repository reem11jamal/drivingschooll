import { Link } from "react-router-dom";


function AddDateCertificate() {
  return (
    <>
      <form
        className='d-flex align-items-center justify-content-between w-100'
        style={{ height: "calc(100vh - 55px)" }}>
        <div
          class='alert alert-info mx-auto d-flex flex-column gap-3'
          style={{ width: "600px" }}
          role='alert'>
          <h1 className='text-center fs-5'>Add Date</h1>

          <div className='d-flex gap-2 align-items-center'>
            <span className='fs-4' style={{ whiteSpace: "nowrap" }}>
            day :{" "}
            </span>
            <input
              type="number"
              className='form-control'
              placeholder='Insurance type'
            />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
            Start Date :{" "}
            </span>
            <input
              type='date'
              className='form-control'
              placeholder='Price'
            />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
            Expiry date :{" "}
            </span>
            <input type='date' className='form-control' placeholder='Gender' />
          </div>
          <div className='d-flex align-items-center justify-content-center gap-3'>
            <button className='btn btn-success '>
              Add
            </button>
            <Link  to='/allDateCertificate' className='btn btn-danger '>
              Back
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddDateCertificate;
