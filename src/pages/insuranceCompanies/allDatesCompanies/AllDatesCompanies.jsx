import { Link, useParams } from "react-router-dom";
import { Search } from "@material-ui/icons";

function AllDatesCompanies() {
  const pages = [
    {
      day: 5,
      start: "2021/5/2",
      end:"2021/6/2"
    },
  ];
  return (
    <>
      <div className=' products p-2'>
        <div
          className='py-3 px-4 mt-2 fs-4 fw-bold text-center'
          style={{ borderBottom: "1px solid #999" }}>
          All dates
        </div>
        <div className=' sort d-flex align-items-center justify-content-center'>
          <form className='w-50 position-relative my-3 mx-2' role='search'>
            <input
              className='form-control bg-white fw-bold'
              type='search'
              placeholder='Find the date you want'
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
          <Link to='/addCourse' className='btn btn-outline-primary'>
            Add date
          </Link>
        </div>
        <div className='' style={{ minHeight: "300px" }}>
          <div className='row d-flex flex-wrap gap-3 justify-content-center m-0 p-0 '>
            {pages?.map((post) => (
              <div class='card' style={{ width: "20rem" }}>
                <div class='card-body'>
                  <h5 class='card-title text-center'>#{post.InsuranceType}</h5>
                  <p class='card-text'></p>
                </div>
                <ul class='list-group list-group-flush'>
                  <li class='list-group-item'>
                    day :{" "}
                    <span className='fw-bold'>{post.price}</span>
                  </li>
                  <li class='list-group-item'>
                  Start Date : <span className='fw-bold'>{post.start}</span>
                  </li>
                  <li class='list-group-item'>
                  Expiry date : <span className='fw-bold'>{post.end}</span>
                  </li>
                </ul>
                <div class='card-body d-flex align-items-center justify-content-center gap-2'>
                  <Link
                    to='/courses/12'
                    className='btn btn-primary text-white w-100'>
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllDatesCompanies;
