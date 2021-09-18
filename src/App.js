
import './App.css';
import Navbar from "./Navbar.js";
import Main from "./Main.js";
import Foto from "./Foto.js";
import SecondaryNavbar from "./SecondaryNavbar.js";

function App() {

  
  return (
    <div className="App">
      <SecondaryNavbar />
      <Navbar />
      
      <Main />
      <Foto />
      <p className="end">all my life i tried escaping what i thought was easy to grasp, all my life</p>
    </div>
  );
}

export default App;
