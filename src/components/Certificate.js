import React from 'react';
import './styles/Certificate.css';

import webDesignCertificate from '../assets/webdesign_certificate.png';
import jsAlgorithmsCertificate from '../assets/jsalgorithms_certificate.png';

const Certificate = () => {
  return (
    <div className="page-container">
      <h2>Certificate Page</h2>
      <div className="certificates-container">
        <div className="certificate">
          <h3>Web Design Certificate</h3>
          <img src={webDesignCertificate} alt="Web Design Certificate" className="certificate-image" />
          <a href={webDesignCertificate} download="webdesign_certificate.png" className="download-button">
            Download
          </a>
        </div>
        <div className="certificate">
          <h3>JavaScript Algorithms Certificate</h3>
          <img src={jsAlgorithmsCertificate} alt="JS Algorithms Certificate" className="certificate-image" />
          <a href={jsAlgorithmsCertificate} download="jsalgorithms_certificate.png" className="download-button">
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
