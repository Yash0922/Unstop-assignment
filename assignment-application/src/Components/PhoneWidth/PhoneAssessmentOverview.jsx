import React from 'react';
import boxIcons from "../Logo/view_agenda.svg"
import Frame from "../Logo/Frame 1000009353.svg"
import web from "../Logo/Frame 1000005832.svg"
import link from "../Logo/Frame 1000009100.svg"
import divider from "../Logo/Vector 250.svg"
function PhoneAssessmentOverview(props) {
    return (
        <div id='OverviewContainer'>
            <div className="uperOverview">
                <div className="TotalAssessmentPhone">
                        <h4>Total Assessment</h4>
                        <div className="TotalContainerPhone">
                            <div id='TotalContainerPhonebox'>
                            <img src={boxIcons} alt="" />
                            </div>
                            
                            <div>34</div>
                        </div>
                </div>
                <div className="TotalPurposePhone">
                <h4>Total Purpose</h4>
                <div className="TotalContainerPhone">
                            <img src={link} alt="" />
                            <div>11</div>
                        </div>
                </div>

            </div>
            <div className="midOverview">
                <h4>Candidates</h4>
                <div className="CandidateContainerPhone">
                    <div className="CandidateLogoPhone">
                        <img src={Frame} alt="" />
                    </div>
                    <div className="TotalCandidatePhone">
                    <p className='numbers'>11,145 <span>+85</span></p>
                            <p className='subheading'>Total Candidate</p>
                    </div>
                    <img src={divider} alt="" />
                    <div className="WhoAttemptPhone">
                    <p className='numbers'>1,14 <span>+89</span></p>
                            <p className='subheading'>Who Attamped</p>
                    </div>
                </div>
            </div>
            <div className="lowerOverview">
                <h4>Candidates Source</h4>
                <div className="CandidatescoreConatinerPhone">
                <div className="emailLogoPhone">
                    <img src={web} alt="" />
                </div>
                <div className="EmailPhone">
                <p className='numbers'>11,000<span>+89</span></p>
                        <p className='subheading'>E-mail</p>
                </div>
                <img src={divider} alt="" />
                <div className="SocialSharePhone">
                <p className='numbers'>145<span>+89</span></p>
                        <p className='subheading'> Social Share</p>
                </div>
                <img src={divider} alt="" />
                <div className="UniqueLinkPhone">
                <p className='numbers'>145<span>+89</span></p>
                        <p className='subheading'>Unique Link</p>
                </div>
                </div>

            </div>
        </div>
    );
}

export default PhoneAssessmentOverview;