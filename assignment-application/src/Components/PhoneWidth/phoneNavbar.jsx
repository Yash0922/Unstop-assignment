import React from 'react';
import SideMenu from "../Logo/segment.svg"
function PhoneNavbar(props) {
    return (
        <div>
            <nav className='navbarP'>
                <div className="Assessmentphone">
                    <div className="sidemenubutton">
                        <img src={SideMenu} alt="" />
                    </div>
                    <div className='HeadingPhone'>
                        <h3>
                        Assessment
                        </h3>
                    </div>
                </div>
                <div className="LowerBoxPhone">
                <div className="myAssessemetPhone">
                    <h4>My Assessments</h4>
                </div>
                <div className="UnStopAssessemetPhone">
                    <h4>Unstop Assessments</h4>
                </div>
                </div>
               
            </nav>
            
        </div>
    );
}

export default PhoneNavbar;