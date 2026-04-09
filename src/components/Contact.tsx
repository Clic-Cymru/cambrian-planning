import React, { useState, useEffect } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import './Contact.css';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error' | 'rate-limited'>('idle');
  const [captchaToken, setCaptchaToken] = useState('');

  // Advanced client-side rate limiting (allows up to 2 submissions in 5 minutes)
  useEffect(() => {
    try {
      const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
      const recentSubmissions = submissions.filter((time: number) => Date.now() - time < 300000);
      if (recentSubmissions.length >= 2) {
        setFormStatus('rate-limited');
      }
    } catch {
      localStorage.removeItem('formSubmissions');
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formStatus === 'rate-limited') return;
    if (!captchaToken) {
      setFormStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    
    // Web3Forms natively grabs the h-captcha-response if it exists in the standard form DOM
    const object = Object.fromEntries(formData);
    object['h-captcha-response'] = captchaToken;
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: json
      });
      
      const result = await response.json();
      if (result.success) {
        const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
        const recentSubmissions = submissions.filter((time: number) => Date.now() - time < 300000);
        recentSubmissions.push(Date.now());
        localStorage.setItem('formSubmissions', JSON.stringify(recentSubmissions));
        
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
        console.error(result);
      }
    } catch (error) {
      setFormStatus('error');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-wrapper">
          
          {/* Left Column: Contact Information */}
          <div className="contact-info">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>Get in Touch</h2>
            <p className="contact-intro">
              Whether you're planning a new build, a conversion, or need appeal advice, our experienced team is here to help clear the path to your project's success.
            </p>
            
            <div className="info-item">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className="info-text">
                <h4>Anglesey Office</h4>
                <p>
                  Cambrian Planning and Development Ltd<br />
                  11 High Street, Malltraeth<br />
                  Bodorgan, Isle of Anglesey<br />
                  LL77 7EN
                </p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="info-text">
                <h4>Call Us</h4>
                <p>
                  <a href="tel:01407840522">01407 840 522</a><br />
                  <a href="tel:07502089743">07502 089 743</a>
                </p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className="info-text">
                <h4>Email Us</h4>
                <p>
                  <a href="mailto:mark@cambrianplanning.co.uk">mark@cambrianplanning.co.uk</a>
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Web3Forms Contact Form */}
          <div className="contact-form-card">
            {formStatus === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 20px', color: '#38a169' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3>Message Sent Successfully!</h3>
                <p style={{ color: '#4a5568', marginTop: '10px' }}>Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  className="btn-submit" 
                  style={{ marginTop: '30px' }} 
                  onClick={() => {
                    const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
                    const recentSubmissions = submissions.filter((time: number) => Date.now() - time < 300000);
                    if (recentSubmissions.length >= 2) {
                      setFormStatus('rate-limited');
                    } else {
                      setFormStatus('idle');
                    }
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : formStatus === 'rate-limited' ? (
              <div style={{ textAlign: 'center', padding: '40px 20px', color: '#e53e3e' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <h3>Please Wait</h3>
                <p style={{ color: '#4a5568', marginTop: '10px' }}>You have recently submitted a message. Please wait a few minutes before trying again.</p>
              </div>
            ) : (
             <form className="modern-form" onSubmit={handleSubmit}>
                
                {/* Web3Forms required token */}
                <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
                <input type="hidden" name="subject" value="New Inquiry from Cambrian Planning Website" />
                
                <div className="form-row">
                  <div className="input-group">
                    <label>First Name</label>
                    <input type="text" name="first_name" className="modern-input" placeholder="John" required />
                  </div>
                  <div className="input-group">
                    <label>Last Name</label>
                    <input type="text" name="last_name" className="modern-input" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="input-group">
                    <label>Email Address</label>
                    <input type="email" name="email" className="modern-input" placeholder="john@example.com" required />
                  </div>
                  <div className="input-group">
                    <label>Phone (Optional)</label>
                    <input type="tel" name="phone" className="modern-input" placeholder="07123 456 789" />
                  </div>
                </div>
                
                <div className="input-group">
                  <label>Your Message</label>
                  <textarea name="message" className="modern-input" rows={5} placeholder="Tell us about your project or inquiry..." required></textarea>
                </div>
                
                <div className="input-group" style={{ display: 'none' }}>
                  {/* Honeypot Spam Protection */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                </div>
                
                {/* Web3Forms required hCaptcha Integration */}
                <div style={{ marginTop: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
                  <HCaptcha
                    sitekey={import.meta.env.VITE_HCAPTCHA_SITEKEY}
                    onVerify={(token) => {
                      setCaptchaToken(token);
                      if (formStatus === 'error') setFormStatus('idle'); // Reset error if they solve it
                    }}
                  />
                </div>
                
                <button type="submit" className="btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {formStatus === 'error' && (
                  <p style={{ color: '#e53e3e', fontSize: '14px', marginTop: '10px' }}>
                    {!captchaToken ? "Please complete the CAPTCHA to verify you are human." : "There was an error sending your message. Please try again later."}
                  </p>
                )}
             </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
