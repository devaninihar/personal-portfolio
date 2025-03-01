import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img
              src={logo}
              alt="Nihar"
              style={{ width: "350px", height: "auto", margin: "20px", marginLeft: "-11rem" }}
            />

          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/devani-nihar-766b5b292"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/nihar.devani.90"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/_.nihardevani._/?next=%2F&hl=en"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
