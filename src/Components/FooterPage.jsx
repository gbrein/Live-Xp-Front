import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="stylish-color-dark" className="page-footer fixed-bottom font-small pt-4 mt-4">
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/gbrein"> Gbrein </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;