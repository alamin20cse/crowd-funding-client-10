import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">Campaign Management</h6>
    <a className="link link-hover">Fundraising Ideas</a>
    <a className="link link-hover">Marketing Strategies</a>
    <a className="link link-hover">Customer Support</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Campaign</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>

  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;