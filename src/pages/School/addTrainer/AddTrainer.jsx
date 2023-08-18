import { Link } from "react-router-dom";


function AddTrainer() {
  return (
    <>
      <form
        className='d-flex align-items-center justify-content-between w-100'
        style={{ height: "calc(100vh - 55px)" }}>
        <div
          class='alert alert-info mx-auto d-flex flex-column gap-3'
          style={{ width: "600px" }}
          role='alert'>
          <h1 className='text-center fs-5'>Add Trainer</h1>

          <div className='d-flex gap-2 align-items-center'>
            <span className='fs-4' style={{ whiteSpace: "nowrap" }}>
              Name Trainer :{" "}
            </span>
            <input
              type='text'
              className='form-control'
              placeholder='Name Trainer'
            />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
              Years of Experience :{" "}
            </span>
            <input
              type="number"
              className='form-control'
              placeholder='Years of Experience'
            />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
              Gender :{" "}
            </span>
            <input type='text' className='form-control' placeholder='Gender' />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
              Age :{" "}
            </span>
            <input type='number' className='form-control' placeholder='Age' />
          </div>
          <div className='d-flex align-items-center justify-content-center gap-3'>
            <button className='btn btn-success '>
              Add
            </button>
            <Link  to='/allTrainer' className='btn btn-danger '>
              Back
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddTrainer;
