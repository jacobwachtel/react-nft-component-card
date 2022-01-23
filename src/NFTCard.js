import React from 'react';
import './NFTCard.css';
import iconEth from './images/icon-ethereum.svg';
import iconClock from './images/icon-clock.svg';
import profilePic from './images/image-avatar.png';

const NFTCard = () => {
   return (
      <div className="container">
         <div className="img"></div>
         <div className="content">
            <div className="heading">
               <h3 className="heading-primary">Equilibrium #3429</h3>
               <p className="paragraph">
                  Our Equilibrium collection promotes balance and calm
               </p>
            </div>
            <div className="stats">
               <div className="price">
                  <img src={iconEth} alt="Eth Icon" className="stat__eth" />
                  <h4 className="stat__price">0.041 ETH</h4>
               </div>
               <div className="sell-date">
                  <img src={iconClock} alt="clock icon" className="clock" />
                  <h4 className="stat__date">3 Days Left</h4>
               </div>
            </div>
         </div>
         <div className="footer">
            <img src={profilePic} alt="profile-pic" id="avatar" />
            <p>
               Creation of <span>Jules Wyvern</span>
            </p>
         </div>
      </div>
   );
};

export default NFTCard;
