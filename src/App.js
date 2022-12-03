import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/user-info/login/Login";
import Register from "./pages/user-info/register/Register";
import User from "./pages/user-info/user/User";
import StepGoal from "./pages/steps/step-goal/StepGoal";
import StepTargetBody from "./pages/steps/step-target-body/StepTargetBody";
import StepFinal from "./pages/steps/step-final/StepFinal";
import { checkSession } from "./redux/auth/auth.actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    token && dispatch(checkSession(token, navigate));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/User" element={<User></User>}></Route>
        <Route path="/step-goal" element={<StepGoal></StepGoal>}></Route>
        <Route
          path="/step-target-body"
          element={<StepTargetBody></StepTargetBody>}
        ></Route>
        <Route path="/step-final" element={<StepFinal />} />
      </Routes>
    </div>
  );
}

export default App;
