import React,{useState} from 'react';
import SideMenu from "../Logo/segment.svg"
import SideMenuPhone from './SideMenuPhone';
function PhoneNavbar(props) {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const toggleSideMenu = () => {
      setIsSideMenuOpen(!isSideMenuOpen);
    };
    const CloseSideMenu = () => {
        setIsSideMenuOpen(false);
      };
    return (
        <div>
            <nav className='navbarP'>
            {isSideMenuOpen && <SideMenuPhone  isSideMenuOpen={isSideMenuOpen} close={CloseSideMenu}/>}
                <div className="Assessmentphone">
                    <div className="sidemenubutton" onClick={toggleSideMenu}>
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