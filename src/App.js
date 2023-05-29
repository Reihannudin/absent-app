import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Test from "./pages/Test";
import Classes from "./pages/Classes";
import DetailActivities from "./pages/DetailActivities";
import DetailClasses from "./pages/DetailClasses";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DetailMyClass from "./pages/DetailMyClass";
import DetailMyActivities from "./pages/DetailMyActivities";
import AddPassword from "./pages/AddPassword";
import AddInformation from "./pages/AddInformation";
import Logout from "./pages/Logout";
import {PopUpCardHistoryComponent} from "./component/card/popup/PopUpCardHistory.Component";
import {PopUpCardActivityComponent} from "./component/card/popup/PopUpCardActivity.Component";
import {PopUpCardAbsentClassComponent} from "./component/card/popup/PopUpCardAbsentClass.Component";
import CreateActivities from "./pages/CreateActivities";
import UpdateActivities from "./pages/UpdateActivities";

function App() {
  return (
    <div className="App" style={{ minWidth:"560px"}}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test/:test" element={<Test />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/activities/:id" element={<PopUpCardActivityComponent/>} />
            <Route path="/absent/:id" element={<PopUpCardHistoryComponent/>} />
            <Route path="/absent/detail/:id/class/:class_id" element={<DetailActivities />} />
            <Route path="/absent/:id/detail/:absent_id" element={<PopUpCardAbsentClassComponent />} />
            <Route path="/class" element={<Classes />} />
            <Route path="/class/detail/:id" element={<DetailClasses />} />
            <Route path="/my/class/detail/:id" element={<DetailMyClass />} />
            <Route path="/my/class/create/absent/:id" element={<CreateActivities />} />
            <Route path="/my/class/update/absent/:id" element={<UpdateActivities />} />
            <Route path="/my/absent/detail/:id" element={<DetailMyActivities  />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/redirect" element={<Login />} />
            <Route path="/logout" element={<Logout />}/>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-up/add/password" element={<AddPassword />}/>
            <Route path="/sign-up/add/information/:email" element={<AddInformation />} />
        </Routes>
    </div>
  );
}

export default App;
