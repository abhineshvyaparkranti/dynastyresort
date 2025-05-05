 import React from 'react';

const Refund = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="text-center fw-bold mb-4">Refund Policy</h1>
              
              <div className="mb-4">
                <h2 className="h4 fw-bold">Our Commitment</h2>
                <p>At [Your Company], we are committed to ensuring your satisfaction with our products and services. We understand that sometimes a purchase may not meet your expectations, which is why we have a straightforward refund policy in place.</p>
              </div>
              
              <div className="mb-4">
                <h2 className="h4 fw-bold">Refund Eligibility</h2>
                <p>To be eligible for a refund, please make sure that:</p>
                <ul className="mb-3">
                  <li>Your request is made within 30 days of purchase</li>
                  <li>The product is in its original condition</li>
                  <li>You have a valid proof of purchase</li>
                </ul>
                <p>Please note that certain products and services may have specific refund conditions which will be clearly communicated at the time of purchase.</p>
              </div>
              
              <div className="mb-4">
                <h2 className="h4 fw-bold">Refund Process</h2>
                <p>Once we receive your refund request:</p>
                <ol className="mb-3">
                  <li>Our team will review your request within 2-3 business days</li>
                  <li>We will inform you of the approval or rejection of your refund</li>
                  <li>If approved, your refund will be processed within 5-7 business days</li>
                  <li>Depending on your payment method and bank, it may take an additional 5-10 business days for the refund to reflect in your account</li>
                </ol>
              </div>
              
              <div className="mb-4">
                <h2 className="h4 fw-bold">Non-Refundable Items</h2>
                <p>The following items are generally not eligible for refund:</p>
                <ul className="mb-3">
                  <li>Digital products after they have been downloaded</li>
                  <li>Services that have been fully performed</li>
                  <li>Customized or personalized products</li>
                  <li>Items marked as non-refundable at time of purchase</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h2 className="h4 fw-bold">Contact Information</h2>
                <p>If you have any questions about our refund policy or wish to request a refund, please contact our customer support team:</p>
                <p className="mb-1"><strong>Email:</strong> support@yourcompany.com</p>
                <p className="mb-1"><strong>Phone:</strong> (555) 123-4567</p>
                <p className="mb-1"><strong>Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM EST</p>
              </div>
              
              <div className="alert alert-info mt-4">
                <p className="mb-0 text-center">This refund policy was last updated on May 5, 2025.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <button className="btn btn-primary me-2">Submit Refund Request</button>
            <button className="btn btn-outline-secondary">Contact Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refund;
