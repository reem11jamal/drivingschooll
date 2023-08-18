import { Link } from "react-router-dom";

function SingleTrainer() {
  return (
    <>
      <div
        className='d-flex align-items-center justify-content-between w-100'
        style={{ height: "calc(100vh - 55px)" }}>
        <div
          class='alert alert-info mx-auto d-flex flex-column gap-3'
          role='alert'>
          <h1 className='text-center fs-5'>Details trainer</h1>

          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4'>Name Trainer : </span>
            <span className='fw-bold fs-3'>Ahmed Yehia</span>
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4'>Number course : </span>
            <span className='fw-bold fs-3'>45 </span>
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4'>Years of Experience : </span>
            <span className='fw-bold fs-3'>12 Years </span>
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4'>Gender : </span>
            <span className='fw-bold fs-3'>Male </span>
          </div>
          <Link to='/allTrainer' className='btn btn-danger text-white'>
            Back
          </Link>
        </div>
      </div>
    </>
  );
}

export default SingleTrainer;
