import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";
import { AirlineSeatReclineNormal, DateRange, InsertLinkSharp, PeopleAlt } from "@material-ui/icons";

function Body() {
  return (
    <>
      <section id='features' class='features my-5'>
        <div class='container' data-aos='fade-up'>
          <div class='row' data-aos='zoom-in' data-aos-delay='100'>
            <Link to="/courses-setting" class=' col-md-3 mt-4 mt-md-0'>
              <div class='icon-box'>
                <AirlineSeatReclineNormal/>
                <h3>
                  <a href=''>Courses</a>
                </h3>
              </div>
            </Link>
            <Link to="" class=' col-md-3 mt-4 mt-md-0'>
              <div class='icon-box'>
                <PeopleAlt/>
                <h3>
                  <a href=''>Trainers</a>
                </h3>
              </div>
            </Link>
            <Link to="" class=' col-md-3 mt-4 mt-md-0'>
              <div class='icon-box'>
                <InsertLinkSharp/>
                <h3>
                  <a href=''>Sessions</a>
                </h3>
              </div>
            </Link>
            <Link to="" class=' col-md-3 mt-4 mt-md-0'>
              <div class='icon-box'>
                <DateRange/>
                <h3>
                  <a href=''>Dates</a>
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Body;
