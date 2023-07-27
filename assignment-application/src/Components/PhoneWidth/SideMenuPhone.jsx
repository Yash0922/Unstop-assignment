import React from 'react';
import cut from "../Logo/cut red.svg"
import dashboardImage from '../Logo/dashboard.svg';
import assessmentImage from '../Logo/note_alt.svg';
import LibraryImage from "../Logo/quiz.svg";
import RoundStatusImage from "../Logo/admin_meds.svg"
function SideMenuPhone({isSideMenuOpen,close}) {
    return (
        <div id='SidebarPhone' className={isSideMenuOpen ? 'open' : ''}>
            <div className="MenuP">
                <div className='MenuItemP'>
                    Menu
                </div>
                <div className="CloseSidebarP">
                    <img src={cut} alt="" onClick={close}/>
                </div>
            </div>
            <div className="DashBoardP">
                <div className="DashboardLogoP">
                    <img src={dashboardImage} alt="" />
                </div>
                <div className='NameP'>Dashboard</div>
            </div>
            <div className="AssessmentP">
                <div className="AssessmentPLogo">
                    <img src={assessmentImage} alt="" />
                </div>
                <div className='NameP'>Assessment</div>
            </div>
            <div className="MyLiabraryP">
                <div className="MyLiabrabyLogoP">
                    <img src={LibraryImage} alt="" />
                </div>
                <div className='NameP'>My Library</div>
            </div>
            <div className="RoundStatusP">
                <div className="RoundStatusLogoP">
                    <img src={RoundStatusImage} alt="" />
                </div>
                <div className='NameP' style={{marginRight:"50%"}}>Round Status</div>
                <div className="AdminP">Admin</div>
            </div>
        </div>
    );
}

export default SideMenuPhone;