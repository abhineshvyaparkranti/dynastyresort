  import React from 'react';
 
 const TermsCondition = () => {
   return (
     <div className="container py-5">
       <div className="row justify-content-center">
         <div className="col-12 col-lg-10">
           <div className="card shadow-sm">
             <div className="card-body p-4 p-md-5">
               <h1 className="text-center fw-bold mb-4">Terms and Conditions</h1>
               <p className="text-muted text-center mb-4">Last Updated: May 5, 2025</p>
               
               <div className="mb-5">
                 <h2 className="h4 fw-bold">1. Introduction</h2>
                 <p>Welcome to [Your Company] ("Company", "we", "our", "us"). These Terms and Conditions ("Terms", "Terms and Conditions") govern your use of our website and services (collectively, the "Service") operated by [Your Company].</p>
                 <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.</p>
               </div>
               
               <div className="mb-5">
                 <h2 className="h4 fw-bold">2. User Accounts</h2>
                 <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
                 <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
               </div>
               
               <div className="mb-5">
                 <h2 className="h4 fw-bold">3. Intellectual Property</h2>
                 <p>The Service and its original content, features, and functionality are and will remain the exclusive property of [Your Company] and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of [Your Company].</p>
               </div>
               
               <div className="mb-5">
                 <h2 className="h4 fw-bold">4. Links To Other Websites</h2>
                 <p>Our Service may contain links to third-party websites or services that are not owned or controlled by [Your Company].</p>
                 <p>[Your Company] has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that [Your Company] shall not be responsible or liable, directly or indirectly,  for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.</p>
                 <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.</p>
               </div>
               
               <div className="mb-5">
                 <h2 className="h4 fw-bold">5. Termination</h2>
                 <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                 <p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>
               </div>
               
               <div className="mb-5">
                 <h2 className="h4 fw-bold">6. Limitation Of Liability</h2>
                 <p>In no event shall [Your Company], nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.</p>
               </div>
               
               <div className="mb-5">
                 <h2 className="h4 fw-bold">7. Disclaimer</h2>
                 <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
                 <p>[Your Company], its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.</p>
               </div>
               
               <div className="mb-5">
                 <h2 className="h4 fw-bold">8. Governing Law</h2>
                 <p>These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.</p>
                 <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
               </div>
               
               <div className="mb-5">
                 <h2 className="h4 fw-bold">9. Changes</h2>
                 <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                 <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
               </div>
               
               <div className="mb-5">
                 <h2 className="h4 fw-bold">10. Contact Us</h2>
                 <p>If you have any questions about these Terms, please contact us at:</p>
                 <ul className="list-unstyled">
                   <li><strong>Email:</strong> legal@yourcompany.com</li>
                   <li><strong>Phone:</strong> (555) 123-4567</li>
                   <li><strong>Address:</strong> 123 Legal Street, Business City, ST 12345</li>
                 </ul>
               </div>
               
               <div className="alert alert-secondary mt-5">
                 <div className="d-flex align-items-center">
                   <div className="flex-shrink-0">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-info-circle me-2" viewBox="0 0 16 16">
                       <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                       <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                     </svg>
                   </div>
                   <div>
                     <p className="mb-0">This document is a template and should be reviewed by a legal professional before use. It may not cover all legal requirements for your specific business or jurisdiction.</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           
           <div className="text-center mt-4">
             <button className="btn btn-primary me-2">Accept Terms</button>
             <button className="btn btn-outline-secondary">Print Terms</button>
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default TermsCondition;