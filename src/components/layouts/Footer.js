import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/*Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Contact us</h4>
              <ul className="list-unstyled">
                <li>E-mail: hello@gmail.com</li>
                <li>Phone: 557 557 557</li>
                <li>Address: Happy Avenue</li>
              </ul>
            </div>
            {/*Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>Column 2</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Dummy One</a>
                </li>
                <li>
                  <a href="/">Dummy One</a>
                </li>
                <li>
                  <a href="/">Dummy One</a>
                </li>
                <li>
                  <a href="/">Dummy One</a>
                </li>
              </ul>
            </div>
            {/*Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>Column 3</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Dummy One</a>
                </li>
                <li>
                  <a href="/">Dummy One</a>
                </li>
                <li>
                  <a href="/">Dummy One</a>
                </li>
                <li>
                  <a href="/">Dummy One</a>
                </li>
              </ul>
            </div>
            {/*Column 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>Column 4</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Dummy One</a>
                </li>
                <li>
                  <a href="/">Dummy One</a>
                </li>
                <li>
                  <a href="/">Dummy One</a>
                </li>
                <li>
                  <a href="/">Dummy One</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom  */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} City Guide App
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
