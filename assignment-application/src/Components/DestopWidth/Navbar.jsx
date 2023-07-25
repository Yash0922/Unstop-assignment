import React from 'react';

function Navbar(props) {
    return (
        <div style={{background:"white"}}>
            <nav id='nav-elment'>
                <div>
                    <h2>  Assessments</h2>
                  
                </div>
                <div className='line'></div>
                <div >
                    <h3>
                    My Assessments
                    
                    </h3>
                    
                    <div id='blue_line'></div>
                </div>
                
            </nav>
        </div>
    );
}

export default Navbar;