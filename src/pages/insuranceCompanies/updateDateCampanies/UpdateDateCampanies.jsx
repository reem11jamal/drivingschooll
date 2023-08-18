import React from "react";

function UpdateDateCampanies() {
  return (
    <>
      <form
        className='d-flex align-items-center justify-content-between w-100'
        style={{ height: "calc(100vh - 55px)" }}>
        <div
          class='alert alert-info mx-auto d-flex flex-column gap-3'
          style={{ width: "600px" }}
          role='alert'>
          <h1 className='text-center fs-5'>Updata date</h1>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
            day :{" "}
            </span>
            <input type='nuber' className='form-control' placeholder='dsf' />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
            Start Date :{" "}
            </span>
            <input
              type='date'
              className='form-control'
              placeholder='2/5/2020'
            />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
            Expiry date :{" "}
            </span>
            <input
              type='date'
              className='form-control'
              placeholder='8/4/2021'
            />
          </div>
          <button to='/courses/12' className='btn btn-success '>
            Update
          </button>
        </div>
      </form>
    </>
  );
}

export default UpdateDateCampanies;
