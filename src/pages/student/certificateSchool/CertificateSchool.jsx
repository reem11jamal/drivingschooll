import React from 'react'

function CertificateSchool() {
    const pages = [
        {
          name: "fdfddf",
          location: "fd-fdfdd",
          info: "dsopjd oisid posaidops dop",
        },
        {
          name: "fdfddf",
          location: "fd-fdfdd",
          info: "dsopjd oisid posaidops dop",
        },
        {
          name: "fdfddf",
          location: "fd-fdfdd",
          info: "dsopjd oisid posaidops dop",
        },
        {
          name: "fdfddf",
          location: "fd-fdfdd",
          info: "dsopjd oisid posaidops dop",
        },
        {
          name: "fdfddf",
          location: "fd-fdfdd",
          info: "dsopjd oisid posaidops dop",
        },
      ];
      return (
        <>
          <div className=' products p-2'>
            <div
              className='py-3 px-4 mt-2 fs-4 fw-bold text-center'
              style={{ borderBottom: "1px solid #999" }}>
              International certification
            </div>
            <div className='' style={{ minHeight: "300px" }}>
              <div className='row d-flex flex-wrap gap-3 justify-content-center m-0 p-0 '>
                {pages?.map((post) => (
                  <div class='card' style={{ width: "20rem" }}>
                    <div class='card-body'>
                      <h5 class='card-title text-center'>#{post.name}</h5>
                      <p class='card-text'></p>
                    </div>
                    <ul class='list-group list-group-flush'>
                      <li class='list-group-item'>
                        Location :{" "}
                        <span className='fw-bold'>{post.location}</span>
                      </li>
                      <li class='list-group-item'>
                        Information : <span className='fw-bold'>{post.info}</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      );
}

export default CertificateSchool
