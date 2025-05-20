  import React from 'react';

const BankDetails = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-5 mb-4">
          {/* Left Side Image Banner */}
          <div className="card border-0 rounded-lg overflow-hidden shadow">
            {/* Top Banner Section */}
            <div className="bg-gradient-primary text-white p-4 text-center">
              <img 
                src="../../../assets/images/banner/paytmbanner.jpg" 
                alt="Paytm Logo" 
                className="img-fluid mb-2 mx-auto"
              />
               
            </div>
            
            {/* QR Code Section */}
            
            
            {/* Bottom Banner Section */}
            
          </div>
        </div>
        
        <div className="col-lg-7">
          {/* Bank Details Card - Right Side */}
          <div className="card h-50 border-0 rounded-lg shadow">
            <div className="card-header bg-gradient-primary text-white p-4">
              <div className="d-flex align-items-center">
                <i className="bi bi-bank2 fs-3 me-3"></i>
                <h3 className="mb-0 fw-bold">Bank Details</h3>
              </div>
            </div>
            
            <div className="card-body p-4">
              <div className="row">
                <div className="col-12">
                  <div className="p-4 bg-light rounded mb-4">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="d-flex align-items-center">
                          <div className=" p-3 rounded-circle text-white me-3" style={{background: '#ab8a62'}}>
                            <i className="bi bi-building"></i>
                          </div>
                          <div>
                            <p className="text-muted small mb-0">Account Name</p>
                            <h5 className="fw-bold mb-0">Dynasty Resorts</h5>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="d-flex align-items-center">
                          <div className=" p-3 rounded-circle text-white me-3" style={{background: '#ab8a62'}}>
                            <i className="bi bi-bank"></i>
                          </div>
                          <div>
                            <p className="text-muted small mb-0">Bank Name</p>
                            <h5 className="fw-bold mb-0">ICICI Bank</h5>
                            <p className="small text-muted">Green Park, New Delhi</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="d-flex align-items-center">
                          <div className=" p-3 rounded-circle text-white me-3" style={{background: '#ab8a62'}}>
                            <i className="bi bi-credit-card"></i>
                          </div>
                          <div>
                            <p className="text-muted small mb-0">Account Number</p>
                            <h5 className="fw-bold mb-0">007105002818</h5>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="d-flex align-items-center">
                          <div className=" p-3 rounded-circle text-white me-3" style={{background: '#ab8a62'}}>
                            <i className="bi bi-upc"></i>
                          </div>
                          <div>
                            <p className="text-muted small mb-0">IFSC Code</p>
                            <h5 className="fw-bold mb-0">ICIC0000071</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="alert  d-flex align-items-center p-4">
                    <div className=" p-3 rounded-circle text-primary me-3" style={{background: '#ab8a62'}} >
                      <i className="bi bi-phone"></i>
                    </div>
                    <div>
                      <p className="text-black small mb-0">Paytm Number</p>
                      <h5 className="fw-bold mb-0">+91-9999835288</h5>
                    </div>
                  </div>
                  
                  
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add these styles to your CSS file or use inline styles
// .bg-gradient-primary {
//   background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
// }

export default BankDetails;