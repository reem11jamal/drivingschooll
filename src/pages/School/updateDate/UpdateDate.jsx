import React from "react";
import { Link } from "react-router-dom";


function UpdateDate() {
  return (
    <>
      <form
        className='d-flex align-items-center justify-content-between w-100'
        style={{ height: "calc(100vh - 55px)" }}>
        <div
          class='alert alert-info mx-auto d-flex flex-column gap-3'
          style={{ width: "600px" }}
          role='alert'>
          <h1 className='text-center fs-5'>Updata Date</h1>

          <div className='d-flex gap-2 align-items-center'>
            <span className='fs-4' style={{ whiteSpace: "nowrap" }}>
              Day :{" "}
            </span>
            <input
              type='text'
              className='form-control'
              placeholder='45'
            />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
              Starting date :{" "}
            </span>
            <input
              type='date'
              className='form-control'
            />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
              Expiry date :{" "}
            </span>
            <input
              type='date'
              className='form-control'
            />
          </div>
          <div className='d-flex justify-content-center align-items-center gap-3'>
            <button className='btn btn-success '>Update</button>
            <Link to='/dates' className='btn btn-danger '>
              Back
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default UpdateDate;
