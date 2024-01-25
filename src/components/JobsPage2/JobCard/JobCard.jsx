import React from 'react';
import './JobCard.css'; 
import JobLogo from '../../Assets/JobLogo.png'
import inlogo from '../../Assets/inlogo.png'
import ProfileIcon from '../../Assets/profileIcon.png'
import CloseIcon from '../../Assets/CloseIcon.png'

function JobCard() {
  return (
    <div className="job-card">
        <div className='centerOptimizer'>
        <div className="job-logo">
        <img src={JobLogo} alt="" />
      </div>
      <div className="job-info">
        <h2>Progettista elettrico</h2>
        <h3>Eco Engineering</h3>
        <p>Cremona, Lombardia, Italia (In sede)</p>
        <p> <img src={ProfileIcon} alt="" />Il tuo profilo è in linea con questa offerta di lavoro</p>
        <p>Promosso · <img className='inlogo' src={inlogo} alt="" /> Candidatura semplice</p>
      
      </div>

        </div>
        <div className='CloseIcon'><img src={CloseIcon} alt="" /></div>
      
      
     
    </div>
  );
}

export default JobCard;
