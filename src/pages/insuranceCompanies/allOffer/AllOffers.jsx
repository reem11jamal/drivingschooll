import { Link, useParams } from "react-router-dom";
import { Search } from "@material-ui/icons";
function AllOffers() {
  const pages = [
    {
      InsuranceType: "okdfd pofidf",
      price: 45,
      priceCar: 88,
      duration:455
    },
  ];
  return (
    <>
      <div className=' products p-2'>
        <div
          className='py-3 px-4 mt-2 fs-4 fw-bold text-center'
          style={{ borderBottom: "1px solid #999" }}>
          All Offers
        </div>
        <div className=' sort d-flex align-items-center justify-content-center'>
          <form className='w-50 position-relative my-3 mx-2' role='search'>
            <input
              className='form-control bg-white fw-bold'
              type='search'
              placeholder='Find the offer you want'
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
            Add Offer
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
                    price :{" "}
                    <span className='fw-bold'>{post.price}</span>
                  </li>
                  <li class='list-group-item'>
                    Price Car : <span className='fw-bold'>{post.priceCar}</span>
                  </li>
                  <li class='list-group-item'>
                  Duration : <span className='fw-bold'>{post.duration}</span>
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

export default AllOffers;
