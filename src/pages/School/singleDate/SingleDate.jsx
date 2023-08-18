import { Link } from "react-router-dom";


function SingleDate() {
  return (
    <>
      <div
        className='d-flex align-items-center justify-content-between w-100'
        style={{ height: "calc(100vh - 55px)" }}>
        <div
          class='alert alert-info mx-auto d-flex flex-column gap-3'
          role='alert'>
          <h1 className='text-center fs-5'>Details Date</h1>

          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4'>Day : </span>
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
          <Link to='/dates' className='btn btn-danger text-white'>
            Back 
          </Link>
        </div>
      </div>
    </>
  );
}

export default SingleDate;
