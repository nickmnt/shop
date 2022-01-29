import { Outlet } from "react-router";
import "./App.css";

function App() {

  return (
    <div className="baseSettings" style={{width: '100%', height: '100%', overflow: 'hidden'}}>
      <Outlet />
    </div>
  )
}

export default App;
