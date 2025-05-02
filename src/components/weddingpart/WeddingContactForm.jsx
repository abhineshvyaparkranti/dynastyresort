import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHeart, FaGlassCheers, FaRing, FaCalendarAlt, FaUtensils, FaCamera, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
 

function WeddingContactForm() {

     const [isVisible, setIsVisible] = useState({
    form: false
    // Add other sections if needed
  });
  return (
    <div>
      {/* Contact Form */}
      <section id="section-form" className="py-5 text-white" style={{ backgroundColor: 'var(--btn-1)' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className={`text-center ${isVisible.form ? 'animate__animated animate__fadeInUp' : ''}`}>
              <h2 className="display-5 mb-4">Begin Your Wedding Journey</h2>
              <p className="lead mb-5">Contact our wedding specialists to start planning your perfect day</p>
              
              <Card className="border-0 p-4 text-dark">
                <Card.Body>
                  <Form>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Partner's Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter your partner's name" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Phone</Form.Label>
                          <Form.Control type="tel" placeholder="Enter phone number" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Estimated Guest Count</Form.Label>
                          <Form.Select>
                            <option>Select guest count</option>
                            <option>Less than 50</option>
                            <option>50-100</option>
                            <option>100-150</option>
                            <option>150-200</option>
                            <option>200+</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Preferred Wedding Date</Form.Label>
                          <Form.Control type="date" />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label>Additional Details</Form.Label>
                          <Form.Control as="textarea" rows={3} placeholder="Tell us about your vision for your special day" />
                        </Form.Group>
                      </Col>
                      <Col md={12} className="text-center mt-4">
                        <Button variant="primary" size="lg" className="px-5 btn-custom">Submit Request</Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default WeddingContactForm
