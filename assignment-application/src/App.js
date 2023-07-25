
import './App.css';
import MainContainer from './Components/MainContainer';
import SideNavbar from './Components/DestopWidth/Sidenavbar';
// import CreateAssignmentPopup from './Components/DestopWidth/CreateAssignmentPopup';
function App() {
  return (
    <div className="App">
      <SideNavbar/>
      <MainContainer/>
    {/* <CreateAssignmentPopup/> */}
    </div>
  );
}

export default App;
