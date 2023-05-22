import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Test from "./component/test";
import Classes from "./pages/Classes";
import DetailActivities from "./pages/DetailActivities";
import DetailClasses from "./pages/DetailClasses";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DetailMyClass from "./pages/DetailMyClass";
import DetailMyActivities from "./pages/DetailMyActivities";

function App() {
  return (
    <div className="App" style={{ minWidth:"530px"}}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/absent/detail/:id" element={<DetailActivities />} />
            <Route path="/class" element={<Classes />} />
            <Route path="/class/detail/:id" element={<DetailClasses />} />
            <Route path="/my/class/detail/:id" element={<DetailMyClass />} />
            <Route path="/my/absent/detail/:id" element={<DetailMyActivities  />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/test" element={<Test />} />

        </Routes>
    </div>
  );
}

export default App;
