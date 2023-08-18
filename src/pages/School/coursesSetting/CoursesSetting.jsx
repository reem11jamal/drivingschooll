import React, { useState } from "react";
import "./coursesSetting.css";
import { Link } from "react-router-dom";

function CoursesSetting() {
  return (
    <section className='aboutUs w-100 pb-6' id='about'>
      <div className='container'>
        <h2 className='text-center mt-5 mx-auto'>Courses Setting</h2>

        <div
          className=' d-flex align-items-center flex-column justify-content-center   '
          style={{ margin: "100px 0" }}>
          <div className='services-section d-flex align-items-center justify-content-center  flex-wrap '>
            <Link
              to='/addCourse'
              className={
                "card col-md-3 text-center position-relative rounded border-primary border border-4"
              }
              style={{
                width: "330px",
                transition: "transform 0.3s",
                cursor: "pointer",
                margin: "0 15px",
                zIndex: "0",
              }}>
              <div
                className='d-flex align-items-center justify-content-center rounded-circle '
                style={{
                  width: "150px",
                  height: "150px",
                  border: "10px solid #007bff",
                  transition: "transform 1s",
                  margin: "-75px auto 0",
                  overflow: "hidden",
                }}>
                <img
                  src='https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                  alt='Money'
                  style={{
                    maxWidth: "100%",
                    height: "100%",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <h2 className='text-center position-relative '>Add Course</h2>
              <p>
                You can browse several commercial pages and you can buy whatever
                you want
              </p>
            </Link>
            <Link
              to='/courses'
              className={
                "card col-md-3 text-center position-relative rounded border-primary border border-4"
              }
              style={{
                width: "330px",
                transition: "transform 0.3s",
                cursor: "pointer",
                margin: "0 15px",
                zIndex: "0",
              }}>
              <div
                className='d-flex align-items-center justify-content-center rounded-circle  '
                style={{
                  width: "150px",
                  height: "150px",
                  border: "10px solid #007bff",
                  transition: "transform 1s",
                  margin: "-75px auto 0",
                  backgroundColor: "#cdeeff",
                }}>
                <img
                  src='https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                  alt='Mechanic'
                  style={{
                    maxWidth: "100%",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <h2 className='text-center position-relative '>All Courses</h2>
              <p>
                You can browse several commercial pages and you can buy whatever
                you want
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoursesSetting;
