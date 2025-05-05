//  import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form, Row, Col, Placeholder } from 'react-bootstrap';

// function BookingModal({ show, handleClose }) {
//   const [loading, setLoading] = useState(true);
  
//   // Reset loading state when modal opens
//   useEffect(() => {
//     if (show) {
//       setLoading(true);
//       const loadingTimer = setTimeout(() => {
//         setLoading(false);
//       }, 2000); // 2 seconds of skeleton loading
      
//       return () => clearTimeout(loadingTimer);
//     }
//   }, [show]);
  
//   return (
//     <Modal show={show} onHide={handleClose} centered size="lg">
//       <Modal.Header closeButton>
//         <Modal.Title>Book Your Room</Modal.Title>
//       </Modal.Header>
      
//       <Modal.Body className="p-0">
//         <Row className="g-0">
//           {/* Left side banner for ads */}
//           <Col md={5} className="bg-light d-flex flex-column justify-content-center align-items-center p-4">
//             <div className="text-center">
//               <p>Book now and get 20% off on your first stay!</p>
//               <div className="my-4">
//                 {loading ? (
//                   <Placeholder animation="glow" className="w-100">
//                     <Placeholder xs={12} style={{ height: '200px' }} className="rounded" />
//                   </Placeholder>
//                 ) : (
//                   <img 
//                     src="https://static.vecteezy.com/system/resources/previews/011/883/276/original/modern-graphic-apple-fruit-colorful-logo-good-for-technology-logo-fruits-logo-apple-logo-nutrition-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg" 
//                     alt="Special promotion"
//                     className="img-fluid rounded shadow"
//                     loading="lazy"
//                   />
//                 )}
//               </div>
//             </div>
//           </Col>
          
//           {/* Right side form */}
//           <Col md={7} className="p-4">
//             <h4 className="mb-4">Enter Your Details</h4>
//             <Form>
//               {loading ? (
//                 <>
//                   <Placeholder animation="glow" className="mb-3">
//                     <Placeholder xs={4} className="mb-1" />
//                     <Placeholder xs={12} style={{ height: '38px' }} />
//                   </Placeholder>
                  
//                   <Placeholder animation="glow" className="mb-3">
//                     <Placeholder xs={4} className="mb-1" />
//                     <Placeholder xs={12} style={{ height: '38px' }} />
//                   </Placeholder>
                  
//                   <Placeholder animation="glow" className="mb-3">
//                     <Placeholder xs={4} className="mb-1" />
//                     <Placeholder xs={12} style={{ height: '90px' }} />
//                   </Placeholder>
                  
//                   <Placeholder.Button xs={12} style={{ height: '38px' }} />
//                 </>
//               ) : (
//                 <>
//                   <Form.Group className="mb-3" controlId="formName">
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control type="text" placeholder="Enter your name" />
//                   </Form.Group>
                  
//                   <Form.Group className="mb-3" controlId="formMobile">
//                     <Form.Label>Mobile</Form.Label>
//                     <Form.Control type="text" placeholder="Enter your mobile number" />
//                   </Form.Group>
                  
//                   <Form.Group className="mb-3" controlId="formMessage">
//                     <Form.Label>Message</Form.Label>
//                     <Form.Control as="textarea" rows={3} placeholder="Write your message" />
//                   </Form.Group>
                  
//                   <Button
//                     variant="primary"
//                     type="submit"
//                     className="w-100"
//                     style={{
//                       backgroundColor: 'var(--btn-1)',
//                       border: 'none'
//                     }}
//                   >
//                     Submit
//                   </Button>
//                 </>
//               )}
//             </Form>
//           </Col>
//         </Row>
//       </Modal.Body>
//     </Modal>
//   );
// }

// export default BookingModal;
 


import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col, Placeholder, Alert } from 'react-bootstrap';
import { postQuery } from '../../api/postQuery';
import { getQueryBanner } from '../../api/getQueryBanner';

function BookingModal({ show, handleClose }) {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    message: '',
    captchaAnswer: ''
  });
  const [captcha, setCaptcha] = useState({ question: '', answer: null });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [aboutus, setAboutus] = useState({});
 


  //  get api banner

  
    useEffect(() => {
      getQueryBanner()
        .then((data) => {
          setAboutus(data.enquiryImage);
          console.log("get api of banner data=============>", data.enquiryImage);
        })
        .catch((err) => {
          console.error("Error fetching about us data:", err);
        })
        .finally(() => setLoading(false));
    }, []);


  // get api banner end 

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setCaptcha({ question: `What is ${a} + ${b}?`, answer: (a + b).toString() });
  };

  useEffect(() => {
    if (show) {
      setLoading(true);
      setStatus(null);
      setFormData({
        name: '',
        email: '',
        phone_number: '',
        message: '',
        captchaAnswer: ''
      });
      generateCaptcha();
      const loadingTimer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(loadingTimer);
    }
  }, [show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone_number.trim()) newErrors.phone_number = 'Phone number is required';
    else if (!/^[0-9]{10}$/.test(formData.phone_number)) newErrors.phone_number = 'Phone number must be 10 digits';
    if (!formData.captchaAnswer.trim()) newErrors.captchaAnswer = 'CAPTCHA is required';
    else if (formData.captchaAnswer !== captcha.answer) newErrors.captchaAnswer = 'Incorrect CAPTCHA';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await postQuery({
        name: formData.name,
        email: formData.email,
        phone_number: formData.phone_number,
        message: formData.message
      });
      setStatus('Thank you! Your booking has been submitted.');
      setTimeout(() => {
        handleClose();
        setStatus(null);
      }, 3000);
    } catch (error) {
      console.error("Error submitting booking form:", error);
      if (
        error.response &&
        error.response.status === 500 &&
        error.response.data?.message?.toLowerCase().includes('phone')
      ) {
        setStatus('This phone number has already been used. Please use a different one.');
        setErrors({ phone_number: 'Phone number already used' });
      } else {
        setStatus('Failed to submit. Please try again later.');
      }
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Book Your Room</Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0">
        <Row className="g-0">
          <Col md={5} className="bg-light d-flex flex-column justify-content-center align-items-center p-4">
            <div className="text-center">
              <p>Welcome to Dynasty Resort — get some exciting offers!</p>

              <div className="my-4">
                {loading ? (
                  <Placeholder animation="glow" className="w-100">
                    <Placeholder xs={12} style={{ height: '200px' }} className="rounded" />
                  </Placeholder>
                ) : (
                  <img
                    src={aboutus}
                    alt="Special promotion"
                    className="img-fluid rounded shadow"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </Col>

          <Col md={7} className="p-4">
            <h4 className="mb-4">Enter Your Details</h4>
            <Form onSubmit={handleSubmit} noValidate>
              {loading ? (
                <>
                  {[...Array(4)].map((_, idx) => (
                    <Placeholder animation="glow" className="mb-3" key={idx}>
                      <Placeholder xs={4} className="mb-1" />
                      <Placeholder xs={12} style={{ height: '38px' }} />
                    </Placeholder>
                  ))}
                  <Placeholder.Button xs={12} style={{ height: '38px' }} />
                </>
              ) : (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone_number"
                      placeholder="Enter your mobile number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      isInvalid={!!errors.phone_number}
                    />
                    <Form.Control.Feedback type="invalid">{errors.phone_number}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="message"
                      placeholder="Write your message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>CAPTCHA: {captcha.question}</Form.Label>
                    <Form.Control
                      type="text"
                      name="captchaAnswer"
                      placeholder="Your answer"
                      value={formData.captchaAnswer}
                      onChange={handleChange}
                      isInvalid={!!errors.captchaAnswer}
                    />
                    <Form.Control.Feedback type="invalid">{errors.captchaAnswer}</Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                    style={{ backgroundColor: 'var(--btn-1)', border: 'none' }}
                  >
                    Submit
                  </Button>

                  {status && <Alert className="mt-3 text-center" variant="info">{status}</Alert>}
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
