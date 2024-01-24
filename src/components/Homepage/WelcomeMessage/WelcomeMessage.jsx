// React Component
import React from 'react';
import './WelcomeMessage.css'; 
import add from '../../Assets/add.png';
import element from '../../Assets/element.png'
import camera from '../../Assets/camera.png'


const WelcomeMessage = () => {
  return (
    <div className="welcome-container">
        <div className='topProfile'>
        <div className="profile-photo">
       
       <img className='camera' src={camera} alt="" /> 
     </div>
        </div>
      
      <h1>Ti diamo il benvenuto Francesco!</h1>
      <a href="#" className="add-photo-link">
      Aggiungi una foto
    </a>
    <hr />
      <div className="network-expand">
        <div>
        <p>Collegamenti</p>
        <span><p>Espandi la tua rete</p></span>
      </div>
      <div>
        <img className='addIcon' src={add} alt="" />
      </div>


        </div>
        
      <hr />
      <div className='elementContainer'>
      <div className='elementicon'>
      <img className='element' src={element} alt="" /></div>
      <div>
      <span><p>I miei elementi</p></span>
      </div>

      </div>
      
      


      
    </div>
  );
};

export default WelcomeMessage;
