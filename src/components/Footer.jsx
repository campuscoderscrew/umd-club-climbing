import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Section */}
      <div className="footer-left">
        <div className="logo">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="4" />
          </svg>
          <span>Index</span>
        </div>
        <p>Crafted by hand — Powered by data.</p>
        <div className="socials">
          <span>Credits</span>
          <span>X</span>
          <span>in</span>
          <span>Slack</span>
        </div>
      </div>

      {/* Link Sections */}
      <div className="footer-links">
        <div>
          <h4>Features</h4>
          <ul>
            <li>Customer Dashboards</li>
            <li>Integrations</li>
            <li>Editor</li>
            <li>Visualization</li>
            <li>Customization</li>
            <li>Speed</li>
            <li>Collaboration</li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>Pricing</li>
            <li>Changelog</li>
            <li>Careers</li>
            <li>Support</li>
            <li>Community</li>
            <li>Book demo</li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li>Glossary</li>
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
            <li>Security</li>
            <li>Brand</li>
            <li>Documentation</li>
          </ul>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .footer {
          display: flex;
          justify-content: space-between;
          padding: 40px 80px;
          background-color: white;
          color: black;
          font-family: Arial, sans-serif;
          flex-wrap: wrap;
          gap: 40px;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex: 1 1 250px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: bold;
          font-size: 18px;
        }

        .socials {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
        }

        .footer-links {
          display: flex;
          gap: 60px;
          flex: 2 1 500px;
          flex-wrap: wrap;
        }

        .footer-links div {
          min-width: 150px;
        }

        .footer-links h4 {
          margin-bottom: 12px;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        @media (max-width: 900px) {
          .footer {
            padding: 30px 20px;
            flex-direction: column;
            gap: 40px;
          }
          .footer-links {
            gap: 40px;
          }
        }

        @media (max-width: 600px) {
          .footer {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-links {
            flex-direction: column;
            gap: 20px;
          }

          .footer-left {
            gap: 15px;
          }

          .logo {
            font-size: 16px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
