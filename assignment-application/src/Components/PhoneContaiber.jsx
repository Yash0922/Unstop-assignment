import React from 'react';
import PhoneNavbar from './PhoneWidth/phoneNavbar';
import PhoneMyAssessment from './PhoneWidth/PhoneMyAssessment';
function PhoneContaiber(props) {
    return (
        <div className='phone-container'>
            <PhoneNavbar/>
      <PhoneMyAssessment/>
        </div>
    );
}

export default PhoneContaiber;