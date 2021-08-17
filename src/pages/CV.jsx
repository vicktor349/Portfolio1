import React from 'react';
import '../styles/CV.css'
import cv from '../img/cvv.png';
import cv_doc from '../download/cv_doc.docx'
const CV = () => {
    return (
        <div>
            <img src={cv} alt="cvv_" className="cv_img"/>
            <button><span style={{paddingRight:"10px"}}><i class="fas fa-download"></i></span><a href={cv_doc} download>Download</a></button>
        </div>
    );
}
 
export default CV;