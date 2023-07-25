import React ,{useState}from 'react';
import AddButton from "../Logo/add.svg"
import AssessmentLOgo from "../Logo/Frame 1000008703.svg"
import divider from "../Logo/Vector 333.svg";
import calender from "../Logo/calendar_today.svg";
import threedot from "../Logo/3 dot.svg"
import Link from "../Logo/link.svg"
import CreateAssignmentPopup from './CreateAssignmentPopup';

function MyAssignment(props) {

    const [showPopup,setShowPopup] =useState(false);

    const togglePopup =()=>{
        setShowPopup(!showPopup)
    }
    const handleOverlayClick = () => {
        setShowPopup(false);
    };
    return (
        <div>
            <h3 id='MyAssessmentHeading'>My Assessment</h3>
            <div id="assessentContainer">
                <div className="NewAssessmentBox">
                        <div className="addAssigmnetButton">
                            <img src={AddButton} alt="" onClick={togglePopup}/>
                        </div>
                        <div className="subHeadNewAssigemnt">
                            <h4>New Assessment</h4>
                        </div>
                        <div className="subHeadandInfo">
                            <p>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
                        </div>
                </div>
               
                <div className="mathAssessment">
                    <div className="upperBox">
                    <div className="MathAssessmentbox">
                        <div className="MathAssessmentLogo">
                            <img src={AssessmentLOgo}alt="" />
                        </div>
                        <h4>Math Assessment</h4>
                        <div className="JobBox">
                            <div className='job'>Job</div>
                            <div className="divider">
                        <img src={divider} alt="" />
                       </div>
                       <div className="calenderlogo">
                        <img src={calender} alt="" />
                       </div>
                       <div className='date'>20 Apr 2023</div>
                        </div>
                    </div>
                    <div id='blank_box'>

                    </div>
                    <div className="3dotlogo">
                        <img src={threedot} alt="" />
                    </div>
                </div>
                <div className="lowerbox">
                <div className="Duration">
                        <div className='DurationNumber'>
                            00
                        </div>
                        <div className='Dsubhead'>Duration</div>
                    </div>
                    <div className="Questions">
                        <div className='QuestionsNumber'>
                            00
                        </div>
                        <div className='Qsubhead'>Questions</div>
                    </div>
                    <div className="Sharebutton">
                        <img src={Link} alt="" />
                        <div>Share</div>
                    </div>
                    <div className="userLogo">
                        LP
                    </div>
                </div>
                
                </div>
                <div className="mathAssessment">
                    <div className="upperBox">
                    <div className="MathAssessmentbox">
                        <div className="MathAssessmentLogo">
                            <img src={AssessmentLOgo}alt="" />
                        </div>
                        <h4>Math Assessment</h4>
                        <div className="JobBox">
                        <div className='job'>Job</div>
                            <div className="divider">
                        <img src={divider} alt="" />
                       </div>
                       <div className="calenderlogo">
                        <img src={calender} alt="" />
                       </div>
                       <div className='date'>20 Apr 2023</div>
                        </div>
                    </div>
                    <div id='blank_box'>

                    </div>
                    <div className="3dotlogo">
                        <img src={threedot} alt="" />
                    </div>
                </div>
                <div className="lowerbox">
                    <div className="Duration">
                        <div className='DurationNumber'>
                            00
                        </div>
                        <div className='Dsubhead'>Duration</div>
                    </div>
                    <div className="Questions">
                        <div className='QuestionsNumber'>
                            00
                        </div>
                        <div className='Qsubhead'>Questions</div>
                    </div>
                    <div className="Sharebutton">
                        <img src={Link} alt="" />
                        <div>Share</div>
                    </div>
                    <div className="userLogo">
                        LP
                    </div>
                </div>
                
                </div>
            </div>
            {showPopup && <div className="popup-overlay" onClick={handleOverlayClick}></div>}
            {showPopup && <CreateAssignmentPopup handleClose={() => setShowPopup(false)} visible={showPopup}/>}
        </div>
        
    );
}

export default MyAssignment;