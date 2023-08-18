import { Link } from "react-router-dom";
function AddExam() {
  return (
    <>
      <form
        className='d-flex align-items-center justify-content-between w-100'
        style={{ height: "calc(100vh - 55px)" }}>
        <div
          class='alert alert-info mx-auto d-flex flex-column gap-3'
          style={{ width: "600px" }}
          role='alert'>
          <h1 className='text-center fs-5'>Add exam</h1>

          <div className='d-flex gap-2 align-items-center'>
            <span className='fs-4' style={{ whiteSpace: "nowrap" }}>
              Number exam :{" "}
            </span>
            <input
              type="number"
              className='form-control'
              placeholder='Name Trainer'
            />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
            Starting date :{" "}
            </span>
            <input
              type='date'
              className='form-control'
              placeholder='Years of Experience'
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
            <Link  to='/courses' className='btn btn-danger '>
              Back
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddExam;
