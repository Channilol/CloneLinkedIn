import React from 'react';
import './EducationComponent.css'; 
import logouni from '../../Assets/logouni.png'
import pen from '../../Assets/pen_edit_icon_177296.png'
import Plus from '../../Assets/Plus.png'

const EducationComponent = () => {
  return (
    <div className="education-container">
      <div className="title-section">
        <h2>Formazione</h2>
        <div className="icons">
          <img className='Plus' src={Plus} alt="" />
          <img  src={pen} alt="" />
        </div>
      </div>
      <div className="education-entry">
        
        <div className="education-details">
          
        <img className='logo' src={logouni} alt=""  />
        <div>
        <h3>Università degli stranieri di Perugia</h3>
          <p>Diploma Istituto Tecnico e Professionale, Graphic Design</p>
          <p>2016 - 2020</p>

        </div>
         
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;
