import { Link, useParams } from "react-router-dom";

import { Search } from "@material-ui/icons";

function SelectSchool() {
  const pages = [
    {
      
       name: "name school",
      location: "12/5/2001",
       about : "the school about"
    },
    {
      
        name: "name school",
       location: "12/5/2001",
        about : "the school about"
     },
     {
      
        name: "name school",
       location: "12/5/2001",
        about : "the school about"
     },
     {
      
        name: "name school",
       location: "12/5/2001",
        about : "the school about"
     },
     {
      
        name: "name school",
       location: "12/5/2001",
        about : "the school about"
     },
     {
      
        name: "name school",
       location: "12/5/2001",
        about : "the school about"
     },
     {
      
        name: "name school",
       location: "12/5/2001",
        about : "the school about"
     },
     {
      
        name: "name school",
       location: "12/5/2001",
        about : "the school about"
     },
  ];
  return (
    <>
      <div
        className="products p-2 d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "100vh" }} // تعيين الحد الأدنى للارتفاع للمتصفح بالكامل
      >
        <div
          className="py-3 px-4 mt-2 fs-4 fw-bold text-center"
          style={{ borderBottom: "1px solid #999" }}
        >
          All Schools
        </div>
        <div className="sort d-flex align-items-center justify-content-center">
          <form className="w-50 position-relative my-3 mx-2" role="search">
            <input
              className="form-control bg-white fw-bold"
              type="search"
              placeholder="Find the course you want"
              style={{ height: "50px", fontFamily: "inherit " ,width:"300px"}}
            />
            <Search
              className="fs-3  position-absolute top-50"
              style={{
                alignItems:"flex-start",
                fontSize: "30",
                right: "10px",
                transform: "translateY(-50%)",
              }}
            />
          </form>
          
        </div>
        <div className="" style={{ width: "300%" }}>
          <div
            className="d-flex flex-wrap gap-3 justify-content-center m-0 p-0 "
            style={{ flexDirection: "column", alignItems: "center" }} // تغيير اتجاه العناصر إلى عمودي وتوسيطها عموديًا
          >
            {pages?.map((post) => (
              <div class="card" style={{ width: "50rem" }}>
                <div class="card-body">
                  <h5 class="card-title text-center">{post.name}</h5>
                  <p class="card-text"></p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    
                    <span className="fw-bold">{post.location}</span>
                  </li>
                  <li class="list-group-item">
                 
                    <span className="fw-bold">{post.about}</span>
                  </li>
                </ul>
                <div class="card-body d-flex align-items-center justify-content-center gap-2" style={{width:"200px", alignItems: "center" , marginLeft:"300px"}}>
                  <Link
                    to="/courses/12"
                    className="btn btn-primary text-white w-100"
                   
                  >
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

export default SelectSchool;
 