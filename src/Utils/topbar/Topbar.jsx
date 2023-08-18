import { Link } from "react-router-dom";
import "./topbar.css";
import {
  Search,
  Settings,
  Notifications,
 
} from "@material-ui/icons";

export default function Topbar() {
 
  return (
    <div className="topbarContainer">
      <div className="topbarLeft d-flex align-items-center justify-content-around">
        <Link to="/">
          <span className="logo">Logo</span>
        </Link>
      </div>
      <form className="w-50 position-relative my-3 mx-auto" role="search">
        <input
          className="form-control bg-white fw-bold"
          type="search"
          placeholder="Search"
          style={{ height: "30px", fontFamily: "inherit " }}
        />
        <Search
          className=" fs-3  position-absolute top-50"
          style={{
            fontSize: "30",
            right: "10px",
            transform: "translatey(-50%)",
          }}
        />
      </form>

      <div className="topbarCenter"></div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <Link to="">
            <div className="topbarIconItem">
              <Settings />
            </div>
          </Link>
          <Link to="">
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
          </Link>
        </div>
        <Link to="">
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </Link>
        <Link to="">
          <button className="btn btn-danger">Log out</button>
        </Link>
      </div>
    </div>
  );
}
