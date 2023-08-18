import { Link } from "react-router-dom";

function SingleCourse() {
  return (
    <>
      <div
        className='d-flex align-items-center justify-content-between w-100'
        style={{ height: "calc(100vh - 55px)" }}>
        <div
          class='alert alert-info mx-auto d-flex flex-column gap-3'
          role='alert'>
          <h1 className='text-center fs-5'>Details Course</h1>

          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4'>Number course : </span>
            <span className='fw-bold fs-3'>45 </span>
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4'>Starting date : </span>
            <span className='fw-bold fs-3'>10/2/2000 </span>
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4'>Expiry date : </span>
            <span className='fw-bold fs-3'>12/5/2001 </span>
          </div>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <div
              class=' p-3 text-center border border-success'
              style={{ width: "10rem" }}>
              <img
                src='/images/avatar_1.png'
                class='card-img-top rounded-circle w-50 mx-auto '
                alt='...'
              />
              <div class='card-body'>
                <span className='fw-bold mt-2'>Ahmed Yehia</span>
              </div>
            </div>
            <div
              class=' p-3 text-center border border-success'
              style={{ width: "10rem" }}>
              <img
                src='/images/avatar_1.png'
                class='card-img-top rounded-circle w-50 mx-auto '
                alt='...'
              />
              <div class='card-body'>
                <span className='fw-bold mt-2'>Ahmed Yehia</span>
              </div>
            </div>
            <div
              class=' p-3 text-center border border-success'
              style={{ width: "10rem" }}>
              <img
                src='/images/avatar_1.png'
                class='card-img-top rounded-circle w-50 mx-auto '
                alt='...'
              />
              <div class='card-body'>
                <span className='fw-bold mt-2'>Ahmed Yehia</span>
              </div>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-between'>
            <Link to='/courses/12' className='btn btn-primary text-white'>
              Add Trainer
            </Link>
            <button href='#' className='btn btn-danger'>
              Delete
            </button>
            <Link to='/updateCourse/4' className='btn btn-success text-white'>
              Update
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCourse;
