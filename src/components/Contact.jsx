import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: '' });

    try {
      // FormSubmit Ajax API directly routed to mishrat859@gmail.com without required API keys
      const response = await fetch('https://formsubmit.co/ajax/mishrat859@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Message from Portfolio (${formData.name})`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: 'Message delivered! Thank you for reaching out, Tushar will reply to you shortly.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Unable to submit form');
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Could not send directly. Please email me at mishrat859@gmail.com!',
      });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container animate-on-scroll">
        <h2 className="section-title">
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <div className="contact-content">
          <p className="contact-text">
            Have a project in mind, an opportunity, or just want to connect? Send me a message below and it will go directly to my inbox!
          </p>

          <a href="mailto:mishrat859@gmail.com" className="contact-email">
            <FiMail /> mishrat859@gmail.com
          </a>

          <div className="contact-info">
            <div className="contact-info-item">
              <FiPhone /> <span>+91-8009751879</span>
            </div>
            <div className="contact-info-item">
              <FiMapPin /> <span>Bhopal, India</span>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Tushar859"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link github"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mishtrat859"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:mishrat859@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} style={{ marginTop: '2.5rem', textAlign: 'left' }}>
            {status.success && (
              <div className="form-status-alert success">
                <FiCheckCircle className="status-alert-icon" />
                <span>{status.message}</span>
              </div>
            )}

            {status.error && (
              <div className="form-status-alert error">
                <FiAlertCircle className="status-alert-icon" />
                <span>{status.message}</span>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                disabled={status.submitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                disabled={status.submitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or inquiry..."
                required
                disabled={status.submitting}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`btn btn-primary ${status.submitting ? 'submitting' : ''}`} 
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={status.submitting}
            >
              {status.submitting ? (
                <>
                  <FiLoader className="spinning-icon" /> Sending Message...
                </>
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
