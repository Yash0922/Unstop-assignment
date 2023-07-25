import React from 'react';
import Navbar from "./DestopWidth/Navbar"
import AssignmentOverview from './DestopWidth/AssignmentOverview';
import MyAssignment from './DestopWidth/MyAssignment';
function MainContainer(props) {
    return (
        <div style={{background:"white",margin:"10px",borderRadius:"12px 12px 0px 0px",padding:"20px"}}>
            
            <Navbar/>
            <AssignmentOverview/>
            <MyAssignment/>
        </div>
    );
}

export default MainContainer;