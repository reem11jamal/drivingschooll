import React from "react";

function UpdateSession() {
  return (
    <>
      <form
        className='d-flex align-items-center justify-content-between w-100'
        style={{ height: "calc(100vh - 55px)" }}>
        <div
          class='alert alert-info mx-auto d-flex flex-column gap-3'
          style={{ width: "600px" }}
          role='alert'>
          <h1 className='text-center fs-5'>Updata Session</h1>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
              Number course :{" "}
            </span>
            <input type='text' className='form-control' placeholder='45' />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
              Starting date :{" "}
            </span>
            <input
              type='text'
              className='form-control'
              placeholder='10/2/2000'
            />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
              Expiry date :{" "}
            </span>
            <input
              type='text'
              className='form-control'
              placeholder='12/5/2001'
            />
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <span className=' fs-4' style={{ whiteSpace: "nowrap" }}>
              Trainer :{" "}
            </span>
            <input
              type='text'
              className='form-control'
              placeholder='Ahmed Mari'
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

export default UpdateSession;
