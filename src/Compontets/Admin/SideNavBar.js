import React from "react";
import { Link } from "react-router-dom";

const SideNavBar = () => {
  return (
    <>
      <ul className="list-unstyled">
        <li>
          <Link
            className="add-nav-link my-3"
            to="/admin-pannel/volunteer-resigter-list"
          >
            Volunterr Register List
          </Link>
        </li>
        <li>
          <Link className="add-nav-link" to="/admin-pannel/add-event">
            Add Event
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SideNavBar;
