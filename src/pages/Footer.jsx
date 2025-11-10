import React from 'react';
import { CiYoutube } from 'react-icons/ci';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Career</a>
    
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
       <FaXTwitter />
      </a>
      <a>
        <CiYoutube />
      </a>
      <a>
      <FaFacebookF />
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Book Heaven Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;