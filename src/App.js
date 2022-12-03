import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/user-info/login/Login";
import Register from "./pages/user-info/register/Register";
import User from "./pages/user-info/user/User";
import StepGoal from "./pages/steps/step-goal/StepGoal";
import StepTargetBodyDelgado from "./pages/steps/step-target-body/StepTargetBodyDelgado";
import StepTargetBodyMusculo from "./pages/steps/step-target-body/StepTargetBodyMusculo";
import StepTargetBodyDefinir from "./pages/steps/step-target-body/StepTargetBodyDefinir";
import StepFinal from "./pages/steps/step-final/StepFinal";
import StepBodytype from "./pages/steps/step-bodytype/StepBodytype";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/User" element={<User />}/>
        <Route path="/step-goal" element={<StepGoal />}/>
        <Route path="/step-target-body-perder-peso" element={<StepTargetBodyDelgado />}/>
        <Route path="/step-target-body-crecer-musculo" element={<StepTargetBodyMusculo />}/>
        <Route path="/step-target-body-definir" element={<StepTargetBodyDefinir />}/>
        <Route path="/step-final" element={<StepFinal />}/>
        <Route path="/step-bodytype" element={<StepBodytype />} />
      </Routes>
    </div>
  );
}

export default App;
