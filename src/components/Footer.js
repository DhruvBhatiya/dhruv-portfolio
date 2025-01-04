import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  // console.log("year", year)
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <h1 style={{ color: "#fff" }}>DHRUV BHATIYA</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/dhruv-bhatiya-765975b8/"
                target="_blank"
              >
                <img src={navIcon1} alt="" />
              </a>
              {/* <a
                href="https://www.facebook.com/dhruv.bhatiya.14"
                target="_blank"
              >
                <img src={navIcon2} alt="" />
              </a> */}
              <a
                href="https://www.instagram.com/dhruv_web.developer/"
                target="_blank"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright {year}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
