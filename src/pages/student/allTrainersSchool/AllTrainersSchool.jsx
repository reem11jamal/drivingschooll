import React from 'react'
import { Link } from "react-router-dom";

import { Search } from "@material-ui/icons";
function AllTrainersSchool() {
    const pages = [
        {
          img: "/images/avatar_1.png",
          name: "Ahmed Mari",
        },
        {
          img: "/images/avatar_1.png",
          name: "Ahmed Mari",
        },
        {
          img: "/images/avatar_1.png",
          name: "Ahmed Mari",
        },
        {
          img: "/images/avatar_1.png",
          name: "Ahmed Mari",
        },
        {
          img: "/images/avatar_1.png",
          name: "Ahmed Mari",
        },
        {
          img: "/images/avatar_1.png",
          name: "Ahmed Mari",
        },
        {
          img: "/images/avatar_1.png",
          name: "Ahmed Mari",
        },
        {
          img: "/images/avatar_1.png",
          name: "Ahmed Mari",
        },
      ];
      return (
        <>
          <div className=' products p-2'>
            <div
              className='py-3 px-4 mt-2 fs-4 fw-bold text-center'
              style={{ borderBottom: "1px solid #999" }}>
              All Trainers
            </div>
            <div className=' d-flex align-items-center justify-content-center'>
            <form className='w-50 position-relative my-3 mx-2 ' role='search'>
              <input
                className='form-control bg-white fw-bold'
                type='search'
                placeholder='Find the trainre you want'
                style={{ height: "50px", fontFamily: "inherit " }}
              />
              <Search
                className=' fs-3  position-absolute top-50'
                style={{
                  fontSize: "30",
                  right: "10px",
                  transform: "translatey(-50%)",
                }}
              />
            </form>
            </div>
    
            <div className='' style={{ minHeight: "300px" }}>
              <div className='row d-flex flex-wrap gap-3 justify-content-center m-0 p-0 '>
                {pages?.map((post) => (
                  <div class='card p-3 text-center' style={{ width: "18rem" }}>
                    <img
                      src={post.img}
                      class='card-img-top rounded-circle w-50 mx-auto '
                      alt='...'
                    />
                    <div class='card-body'>
                      <h2>{post.name}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      );
}

export default AllTrainersSchool
