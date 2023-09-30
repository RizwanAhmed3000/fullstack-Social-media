import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profilePage/Profile";
import Signup from "./pages/signup/Signup";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
