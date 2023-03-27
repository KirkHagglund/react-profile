import React from "react";
import '../styles/footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer">
        <a className="footer-link" href="https://www.github.com/kirkhagglund" rel="noreferrer" target="_blank">
          <FaGithub size={50} />
        </a>
        <a className="footer-link" href="https://twitter.com/hagglundkirk" rel="noreferrer" target="_blank">
          <FaTwitter size={50} />
        </a>
        <a className="footer-link" href="https://www.linkedin.com/in/kirk-hagglund-20b24726b/" rel="noreferrer" target="_blank">
          <FaLinkedin size={50} />
        </a>
    </div>
  );
}
