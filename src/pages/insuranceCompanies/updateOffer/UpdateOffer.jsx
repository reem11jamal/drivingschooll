import React from "react";

function UpdateOffer() {
  return (
    <>
      <form
        className='d-flex align-items-center justify-content-between w-100'
        style={{ height: "calc(100vh - 55px)" }}>
        <div
          class='alert alert-info mx-auto d-flex flex-column gap-3'
          style={{ width: "600px" }}
          role='alert'>
          <h1 className='text-center fs-5'>Updata Offer</h1>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
            Insurance type :{" "}
            </span>
            <input type='string' className='form-control' placeholder='dsf' />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
            Price :{" "}
            </span>
            <input
              type='number'
              className='form-control'
              placeholder='456465'
            />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
            Price car :{" "}
            </span>
            <input
              type='number'
              className='form-control'
              placeholder='789'
            />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
            Duration :{" "}
            </span>
            <input
              type='number'
              className='form-control'
              placeholder='20'
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

export default UpdateOffer;
