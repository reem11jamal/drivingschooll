import { Link } from "react-router-dom";


function AddOffer() {
  return (
    <>
      <form
        className='d-flex align-items-center justify-content-between w-100'
        style={{ height: "calc(100vh - 55px)" }}>
        <div
          class='alert alert-info mx-auto d-flex flex-column gap-3'
          style={{ width: "600px" }}
          role='alert'>
          <h1 className='text-center fs-5'>Add Offer</h1>

          <div className='d-flex gap-2 align-items-center'>
            <span className='fs-4' style={{ whiteSpace: "nowrap" }}>
            Insurance type :{" "}
            </span>
            <input
              type="string"
              className='form-control'
              placeholder='Insurance type'
            />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
            Price :{" "}
            </span>
            <input
              type='number'
              className='form-control'
              placeholder='Price'
            />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
            Price car :{" "}
            </span>
            <input type='number' className='form-control' placeholder='Gender' />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
            Duration :{" "}
            </span>
            <input type='number' className='form-control' placeholder='Duration' />
          </div>
          <div className='d-flex align-items-center justify-content-center gap-3'>
            <button className='btn btn-success '>
              Add
            </button>
            <Link  to='/courses' className='btn btn-danger '>
              Back
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddOffer;
