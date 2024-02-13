import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={{color:"LightGray",background:"black",marginTop:"30px"}}>
      <Container>
        <Row>
          <Col md={6}>
            <p>DevRev</p>
            <p>123 Main Street</p>
            <p>Anytown, USA 12345</p>
          
          </Col>
          <Col md={6}  style={{textAlign:"right"}}>
            <p>Contact Us</p>
            <p>Phone: 555-555-5555</p>
            <p>Email: info@mycompany.com</p>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{textAlign:"center"}}>
            <p>&copy; 2023 DevRev. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
