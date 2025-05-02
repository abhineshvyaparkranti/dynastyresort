 import React, { useState } from 'react';
import { postNewsletter } from '../../api/postNewsletter';

const Newslatter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postNewsletter({ email_id: email }); // Correct key
      console.log("Newsletter subscription response================>:", response);
      setStatus('Subscribed successfully!');
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      setStatus('Failed to subscribe.');
    }
  };

  return (
    <div>
      <div className="row">
        <div className="footer__newsletter">
          <span className="h2">Join Our Newsletter</span>
          <div className="rts__form">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                id="subscription"
                placeholder="Enter your mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
            {status && <p>{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newslatter;
