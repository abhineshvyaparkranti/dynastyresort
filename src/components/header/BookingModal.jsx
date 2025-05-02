 import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col, Placeholder } from 'react-bootstrap';

function BookingModal({ show, handleClose }) {
  const [loading, setLoading] = useState(true);
  
  // Reset loading state when modal opens
  useEffect(() => {
    if (show) {
      setLoading(true);
      const loadingTimer = setTimeout(() => {
        setLoading(false);
      }, 2000); // 2 seconds of skeleton loading
      
      return () => clearTimeout(loadingTimer);
    }
  }, [show]);
  
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Book Your Room</Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="p-0">
        <Row className="g-0">
          {/* Left side banner for ads */}
          <Col md={5} className="bg-light d-flex flex-column justify-content-center align-items-center p-4">
            <div className="text-center">
              <p>Book now and get 20% off on your first stay!</p>
              <div className="my-4">
                {loading ? (
                  <Placeholder animation="glow" className="w-100">
                    <Placeholder xs={12} style={{ height: '200px' }} className="rounded" />
                  </Placeholder>
                ) : (
                  <img 
                    src="https://static.vecteezy.com/system/resources/previews/011/883/276/original/modern-graphic-apple-fruit-colorful-logo-good-for-technology-logo-fruits-logo-apple-logo-nutrition-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg" 
                    alt="Special promotion"
                    className="img-fluid rounded shadow"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </Col>
          
          {/* Right side form */}
          <Col md={7} className="p-4">
            <h4 className="mb-4">Enter Your Details</h4>
            <Form>
              {loading ? (
                <>
                  <Placeholder animation="glow" className="mb-3">
                    <Placeholder xs={4} className="mb-1" />
                    <Placeholder xs={12} style={{ height: '38px' }} />
                  </Placeholder>
                  
                  <Placeholder animation="glow" className="mb-3">
                    <Placeholder xs={4} className="mb-1" />
                    <Placeholder xs={12} style={{ height: '38px' }} />
                  </Placeholder>
                  
                  <Placeholder animation="glow" className="mb-3">
                    <Placeholder xs={4} className="mb-1" />
                    <Placeholder xs={12} style={{ height: '90px' }} />
                  </Placeholder>
                  
                  <Placeholder.Button xs={12} style={{ height: '38px' }} />
                </>
              ) : (
                <>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter your mobile number" />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Write your message" />
                  </Form.Group>
                  
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                    style={{
                      backgroundColor: 'var(--btn-1)',
                      border: 'none'
                    }}
                  >
                    Submit
                  </Button>
                </>
              )}
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default BookingModal;