import React from 'react';
import cut from "../Logo/cut red.svg"
function SubSetDetail({handleClose,visible  }) {
    return (
        <>
             {visible && ( 
            <div className="popup-containerP animation-slide-in" >
        <div className='popup-container-childP'>
            <div id="CreateAssigmentP">
                <div>Sub-Section Details</div>
                <div onClick={handleClose} id='mobile_close-Button'><img  src={cut} alt="" /></div>
            </div>
            <div id="formP">
                <div className='nameOfAssessementP'>
                    <label >Name of assessment</label>
                <input type="text" placeholder='Type here'  />
                </div>
                <div className="purposeOftestP">
                    <label >Purpose of the test is</label>
                    <select name="select" id="">
                        <option value="select">Select</option>
                    </select>
                </div>
                <div className="DescriptionP">
                    <label >Description</label>
                    <select name="select" id="">
                        <option value="select">Select</option>
                    </select>
                </div>
                <div className="SkillsP">
                    <label >Skills</label>
                    <div className="box_of_skills">

                    </div>
                    <input type="text" placeholder='Type here' />
                </div>
               
                
            </div>
            <div className="Submit_divP">
                <button id='submitP'>Next</button>
            </div>
            
        </div>
        </div>
 )}
        </>
    );
}

export default SubSetDetail;