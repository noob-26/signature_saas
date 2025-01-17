import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Input, Label } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// // import images
// import americanEx from "../../assets/images/payments/american-ex.png";
// import discover from "../../assets/images/payments/discover.png";
// import masterCard from "../../assets/images/payments/master-card.png";
// import paypal from "../../assets/images/payments/paypal.png";
// import visa from "../../assets/images/payments/visa.png";

// //Import Images
// import logolight from "../../assets/images/logo-light.png";
// import logodark from "../../assets/images/logo-dark.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        { title: "Home", link: "/" },
        { title: "About us", link: "/page-aboutus" },
        { title: "Contact Us", link: "/page-contact-detail" },
        { title: "Support and FAQs", link: "/helpcenter-overview" }
      ],
      grid2: [
        { title: "Terms of Services", link: "/page-terms" },
        { title: "Privacy Policy", link: "/page-privacy" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer className={this.props.isLight ? "footer bg-light" : "footer"}>
          <Container>
            <Row>
              <Col
                lg="4"
                xs="12"
                className="mb-0 mb-md-4 pb-0 pb-md-2"
                name="footercolumn"
              >
                <Link to="#" className="logo-footer">
                  <h3>Company Name</h3>
                </Link>
                <p className={this.props.isLight ? "mt-4 text-muted" : "mt-4"}>
                  Start Working with  that can provide everything you
                  need to generate awareness, drive traffic, connect.
                </p>
                <ul className={this.props.isLight ? "list-unstyled social-icon social mb-0 m t-4" : "list-unstyled social-icon foot-social-icon mb-0 mt-4"}>
                  <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="facebook"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="instagram"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="twitter"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="linkedin"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                </ul>
              </Col>

              <Col
                lg="2"
                md="4"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Company
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid1.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-muted" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right me-1"></i>{" "}
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col
                lg="3"
                md="4"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Usefull Links
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid2.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-muted" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right me-1"></i>
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col
                lg="3"
                md="4"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Newsletter
                </h5>
                <p className="mt-4">
                  Sign up and receive the latest tips via email.
                </p>
                <Form>
                  <Row>
                    <Col lg="12">
                      <div
                        className={
                          this.props.isLight
                            ? "foot-subscribe mb-3 foot-white"
                            : "foot-subscribe mb-3"
                        }
                      >
                        <Label
                          className={this.props.isLight ? "form-label text-muted" : "form-label"}
                        >
                          Write your email{" "}
                          <span className="text-danger">*</span>
                        </Label>
                        <div className="form-icon position-relative">
                          <FeatherIcon
                            icon="mail"
                            className="fea icon-sm icons"
                          />
                        </div>
                        <Input
                          type="email"
                          name="email"
                          id="emailsubscribe"
                          className={
                            this.props.isLight
                              ? "ps-5 rounded bg-light border"
                              : "ps-5 rounded"
                          }
                          placeholder="Your email : "
                          required
                        />
                      </div>
                    </Col>
                    <Col lg="12">
                      <div className="d-grid">
                        <Input
                          type="submit"
                          id="submitsubscribefooter"
                          name="send"
                          className="btn btn-primary"
                          readOnly
                          value="Subscribe"
                        />
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </footer>
        <footer className="footer footer-bar">
          <Container className="text-center">
            <Row className="align-items-center">
              <Col sm="12">
                <div className="text-sm-start">
                  <p className="mb-0">
                    © 2020-21
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
