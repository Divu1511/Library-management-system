import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import contentImage from './content.png';

function Content() {
  return (
    <Container className='mt-5'>
    <Row className="align-items-center">
      <Col md={8}>
        <Image src={contentImage} alt="Content Image" fluid width={"800"} height={"500"} />
      </Col>
      <Col md={4}>
        <h2 style={{ fontFamily: 'Georgia, serif' }}>Some books leave us free and some books make us free.</h2>
        {/* <p>The library plays an important role in our academic and social lives. Library is an organized collection of information resources made accessible to a defined community for reference or borrowing and this collection of information may be in the form of books, newspapers, CD’s, journals and research papers etc. library provides us physical or digital access to material, and may be a physical building or room, or a virtual space, or both containing collection of informative material. </p> */}
      </Col>
    </Row>
  </Container>
  );
}

export default Content;
