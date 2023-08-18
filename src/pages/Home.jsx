import React from "react";
import Hero from "../Utils/hero/Hero";
import Body from "../Utils/body/Body";

function Home() {
  return (
    <div>
      <div style={{ height: "calc(100vh - 50px)" }}>
        <Hero />
        <Body />
      </div>
      {/* <div className='d-flex align-items-center justify-content-center'>
        <div
          className='sidebar'
          style={{ flex: 1, backgroundColor: "#f7f6f6" }}>
          <ul
            style={{ height: "calc(100vh - 58px" }}
            className='d-flex flex-column gap-4 py-5'>
            <Link
              to='/courses'
              className='li__home fw-bold fs-3 text-secondary border-2 border-bottom'>
              Courses
            </Link>
            <Link
              to='/allTrainer'
              className='li__home fw-bold fs-3 text-secondary border-2 border-bottom'>
              Trainers
            </Link>
            <Link
              to=''
              className='li__home fw-bold fs-3 text-secondary border-2 border-bottom'>
              Sessions
            </Link>
            <Link
              to='/dates'
              className='li__home fw-bold fs-3 text-secondary border-2 border-bottom'>
              Dates
            </Link>
          </ul>
        </div>
        <div className='image' style={{ flex: 4 }}>
          <img
            style={{ height: "calc(100vh - 58px", width: "100%" }}
            src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
            alt=''
          />
        </div>
      </div> */}
    </div>
  );
}

export default Home;
