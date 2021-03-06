import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            className="nav-link active"
            id="nav-home-tab"
            data-toggle="tab"
            href="www.google.com"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Home
          </a>
          <a
            className="nav-link"
            id="nav-profile-tab"
            data-toggle="tab"
            href="www.google.com"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Profile
          </a>
          <a
            className="nav-link"
            id="nav-contact-tab"
            data-toggle="tab"
            href="www.google.com"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Contact
          </a>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          ...
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          ...
        </div>
        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          ...
        </div>
      </div>
    </div>
  );
};
export default Navbar;
