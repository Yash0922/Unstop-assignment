import React from 'react';
import cut from "../Logo/cut.svg"
function CreateAssignmentPopup({handleClose,visible  }) {

    
    return (

            <>
             {visible && (
            <div className="popup-container animation-slide-in" >
        <div style={{margin:"auto",background:"white",width:"40%",position:"fixed",right:"25%",bottom:"6%",borderRadius:"25px"}}>
            <div id="CreateAssigment">
                <div>Create new assessment</div>
                <div><img onClick={handleClose} src={cut} alt="" /></div>
            </div>
            <div id="form">
                <div className='nameOfAssessement'>
                    <label >Name of assessment</label>
                <input type="text" placeholder='Type here'  />
                </div>
                <div className="purposeOftest">
                    <label >Purpose of the test is</label>
                    <select name="select" id="">
                        <option value="select">Select</option>
                    </select>
                </div>
                <div className="Description">
                    <label >Description</label>
                    <select name="select" id="">
                        <option value="select">Select</option>
                    </select>
                </div>
                <div className="Skills">
                    <label >Skills</label>
                    <div className="box_of_skills">

                    </div>
                    <input type="text" placeholder='Type here' />
                </div>
                <div className="DurationOFAssessment">
                    <label >Duration of assessment</label>
                    <input type="text" placeholder='HH:MM:SS' />
                </div>
                
            </div>
            <div className="Submit_div">
                <button id='submit'>Save</button>
            </div>
            
        </div>
        </div>
        )}
        </>
       
    );
}

export default CreateAssignmentPopup;