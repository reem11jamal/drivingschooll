import React from "react";
import { Link } from "react-router-dom";


function UpdateTrainer() {
  return (
    <>
      <form
        className='d-flex align-items-center justify-content-between w-100'
        style={{ height: "calc(100vh - 55px)" }}>
        <div
          class='alert alert-info mx-auto d-flex flex-column gap-3'
          style={{width:"600px"}}
          role='alert'>
          <h1 className="text-center fs-5">Updata Trainer</h1>

          <div className='d-flex gap-2 align-items-center'>
            <span className='fs-4' style={{whiteSpace:"nowrap"}}>Name Trainer : </span>
            <input type="text" className="form-control" placeholder="Ahmed Yehia" />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{whiteSpace:"nowrap"}}>Years of Experience : </span>
            <input type="text" className="form-control" placeholder="12 Years" />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{whiteSpace:"nowrap"}}>Gender : </span>
            <input type="text" className="form-control" placeholder="Male" />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{whiteSpace:"nowrap"}}>Age : </span>
            <input type="text" className="form-control" placeholder="15" />
          </div>
          <button to='/courses/12' className='btn btn-success '>
            Update
          </button>
        </div>
      </form>
    </>
  );
}

export default UpdateTrainer;
