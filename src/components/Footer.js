import React from 'react'
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <footer className='footer-section'>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Github Jobs</Col>
        </Row>
      </footer>
    </div>
  )
}

export default Footer