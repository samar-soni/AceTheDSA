import react from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>AceTheDSA</h4>
          <p>Your one-stop destination for mastering Data Structures and Algorithms.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/practice">Practice</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="/tutorials">Tutorials</a></li>
            <li><a href="/problems">Problem Set</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect With Us</h4>
          <ul>
            <li><a href="https://github.com">GitHub</a></li>
            <li><a href="https://linkedin.com">LinkedIn</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="mailto:contact@acethedsa.com">Email</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AceTheDSA. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
