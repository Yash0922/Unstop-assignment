import React ,{useState }from 'react';
import Search from "../Logo/search.svg";
import filter from "..//Logo/filter_list_alt.svg";
import barChart from "../Logo/bar_chart.svg";
import AssessmentLOgo from "../Logo/Frame 1000008703.svg"
import divider from "../Logo/Vector 333.svg";
import calender from "../Logo/calendar_today.svg";
import threedot from "../Logo/3 dot.svg"
import Link from "../Logo/link.svg"
import AddButton from "../Logo/add.svg";
import PhoneAssessmentOverview from './PhoneAssessmentOverview';
import SubSetDetail from './SubSetDetail';
function PhoneMyAssessment(props) {

    const [showAssessmentOverview, setShowAssessmentOverview] = useState(false);

   
    const toggleAssessmentOverview = () => {
      setShowAssessmentOverview(!showAssessmentOverview);
    };
    const [showPopup,setShowPopup] =useState(false);

    const togglePopup =()=>{
        setShowPopup(!showPopup)
    }
    const handleOverlayClick = () => {
        setShowPopup(false);
    };
   
    return (
        <div id='PhonemainCntainer' className={showAssessmentOverview ? 'shifted' : ''}>
            {showAssessmentOverview && <PhoneAssessmentOverview  />}
            <div className="MyAssessmentSection" >
            
                <div className="headingP">
                My Assessment
                </div>
                <div className="searchIcon">
                    <img src={Search} alt="" />
                </div>
                <div className="FilterIcon">
                    <img src={filter} alt="" />
                </div>
                <div className="BarChatIcon" onClick={toggleAssessmentOverview}>
                    <img src={barChart} alt="" />
                </div>
            </div>
            <div className="AssessmentConatinerPhone">
            <div className="PNewAssessmentBox">
                        <div className="PaddAssigmnetButton">
                            <img src={AddButton} alt="" onClick={togglePopup} />
                        </div>
                        <div className="PsubHeadNewAssigemnt">
                            <h4>New Assessment</h4>
                        </div>
                        <div className="PsubHeadandInfo">
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
            {showPopup && <SubSetDetail handleClose={() => setShowPopup(false)} visible={showPopup}/>}
        </div>
    );
}

export default PhoneMyAssessment;