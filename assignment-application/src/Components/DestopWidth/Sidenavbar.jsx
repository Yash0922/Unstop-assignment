import React from 'react';
import dashboardImage from '../Logo/dashboard.svg';
import assessmentImage from '../Logo/note_alt.svg';
import LibraryImage from "../Logo/quiz.svg";
import RoundStatusImage from "../Logo/admin_meds.svg"
function SideNavbar(props) {
    return (
        <div id='sideNavbar' style={{background:"white"}}>
            <div id="DashbordBox">
            <img src={dashboardImage} alt="" />
<p>Dashboard</p>
</div>

<div id="assessmentBox">
<img src={assessmentImage} alt="" />
<p>Assessment</p>

</div>
<div id="libaryBox">
<img src={LibraryImage} alt="" />
    <p>My Library</p>

</div>
<div id='RoundStatusBox'>
    <div id='admin'>Admin</div>
<img src={RoundStatusImage} alt="" />
<p>Round Status</p>
</div> 
        </div>
    );
}

export default SideNavbar;