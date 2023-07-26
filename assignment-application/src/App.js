
import './App.css';
import MainContainer from './Components/MainContainer';
import SideNavbar from './Components/DestopWidth/Sidenavbar';
import CreateAssignmentPopup from './Components/DestopWidth/CreateAssignmentPopup';
import PhoneContaiber from './Components/PhoneContaiber';
function App() {
  return (
    <div className="App">
      <div className="normal-view-container">
        <SideNavbar/>
        <MainContainer/> 
      </div>
      <CreateAssignmentPopup/> 
      <PhoneContaiber/>
    </div>
  );
}

export default App;
