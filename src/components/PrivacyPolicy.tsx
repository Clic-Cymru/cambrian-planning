import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="privacy-section">
      <div className="container">
        <div className="privacy-card">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-date">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="privacy-content">
            <h2>1. Introduction</h2>
            <p>Welcome to Cambrian Planning and Development Ltd. We respect your privacy and are committed to protecting your personal data. This privacy Notice tells you what to expect in relation to personal information about you which is collected, handled, and processed by us.</p>
            <p>We adhere to the regulations established by the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018 (DPA 2018).</p>

            <h2>2. Data Controller</h2>
            <p>Cambrian Planning and Development Ltd is the controller and responsible for your personal data. If you have any questions about this privacy notice, including any requests to exercise your legal rights, please contact us using the details set out below.</p>

            <h2>3. The Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul>
              <li><strong>Identity Data</strong> includes first name, last name, and title.</li>
              <li><strong>Contact Data</strong> includes billing address, site or delivery address, email address, and telephone numbers.</li>
            </ul>

            <h2>4. Analytics &amp; Cookies</h2>
            <p>This website uses <strong>Google Analytics</strong> to track user interactions and evaluate website traffic to help us improve our services. We have explicitly configured Google Analytics to operate strictly on an <strong>anonymous basis</strong>.</p>
            <ul>
              <li><strong>IP Anonymization:</strong> Your IP address is masked automatically, ensuring no personally identifiable tracking occurs.</li>
              <li><strong>No Advertising Tracking:</strong> We do not use your data for targeted advertising or remarketing purposes.</li>
              <li><strong>Cookies:</strong> General, minimized cookies are used strictly to run technical analytics safely.</li>
            </ul>

            <h2>5. How We Use Your Personal Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following legal circumstances:</p>
            <ul>
              <li><strong>Performance of Contract:</strong> Where we need to perform the consultation or planning contract we are about to enter into or have entered into with you.</li>
              <li><strong>Legitimate Interests:</strong> Where it is necessary for our legitimate business interests, and your interests and fundamental rights do not override those.</li>
              <li><strong>Legal Obligation:</strong> Where we need to comply with a legal or regulatory duty.</li>
            </ul>

            <h2>6. Data Security &amp; Retention</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. We limit access to your personal data to those employees or agents who have a business need to know. We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including satisfying any legal, accounting, or reporting requirements.</p>

            <h2>7. Your Legal Rights</h2>
            <p>Under certain circumstances, you have rights under UK data protection laws in relation to your personal data, including the right to:</p>
            <ul>
              <li>Request access to your personal data.</li>
              <li>Request correction of the personal data that we hold about you.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing of your personal data.</li>
              <li>Request the transfer of your personal data to you or to a third party.</li>
              <li>Withdraw consent at any time where we are relying on consent to process your personal data.</li>
            </ul>

            <h2>8. Contact Us</h2>
            <p>If you have any questions about this privacy policy or wish to exercise any of your rights, please contact us at:</p>
            <p>
              <strong>Email:</strong> mark@cambrianplanning.co.uk<br/>
              <strong>Address:</strong> 11 High Street, Malltraeth, Bodorgan, Isle of Anglesey, LL77 7EN
            </p>
            <p>You have the right to make a complaint at any time to the Information Commissioner's Office (ICO), the UK supervisory authority for data protection issues (www.ico.org.uk).</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
