import React from 'react';
import boxIcons from "../Logo/view_agenda.svg"
import Frame from "../Logo/Frame 1000009353.svg"
import web from "../Logo/Frame 1000005832.svg"
import link from "../Logo/Frame 1000009100.svg"
import divider from "../Logo/Vector 250.svg"
function AssignmentOverview(props) {
    return (
        <div >
            <h3 id='headingAssigmentOverview'>Assessment Overview</h3>
            <div id="assignemntContainer">
                <div id="TotalAssessmet">
                    <h4>Total Assessment</h4>
                    <div className="assignmentBox">
                        <div className='boxIcons'>
                        <img src={boxIcons} alt="" />
                        </div>
                    
                        <p style={{marginTop:"10px"}}>34</p>
                    </div>
                </div>
                <div id='Candidate'>
                    <h4>Candidates</h4>
                    <div className="CadidateBox">
                        <div className='CandiateLogo'>
                            <img src={Frame} alt="" />
                        </div>
                        <div className='TotalCandidate'>
                            <p className='numbers'>11,145 <span>+85</span></p>
                            <p className='subheading'>Total Candidate</p>
                        </div>
                       <div className="divider">
                        <img src={divider} alt="" />
                       </div>
                        <div className='WhoAttemped'>
                            <p className='numbers'>1,14 <span>+89</span></p>
                            <p className='subheading'>Who Attamped</p>
                        </div>
                    </div>
                </div>
                <div id="CandidateScore">
                   <h4>Candidates Source</h4>
                   <div className="CandidatesSourcebox">
                    <div className='webLogo'>
                        <img src={web} alt="" />
                    </div>
                    <div className="email">
                    <p className='numbers'>11,000<span>+89</span></p>
                        <p className='subheading'>E-mail</p>
                    </div>
                    <div className="divider">
                        <img src={divider} alt="" />
                       </div>
                    <div className="SocialShare">
                    <p className='numbers'>145<span>+89</span></p>
                        <p className='subheading'> Social Share</p>
                    </div>
                    <div className="divider">
                        <img src={divider} alt="" />
                       </div>
                    <div className="UniqueLink">
                    <p className='numbers'>145<span>+89</span></p>
                        <p className='subheading'>Unique Link</p>
                    </div>
                   </div>
                </div>
                <div id="totalPurpose">
                    <h4>Total Purpose</h4>
                    <div className='linkPurpose'>
                        <div className="linkLogo">
                            <img src={link} alt="" />
                        </div>
                        <p className='numbers'>11</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AssignmentOverview;