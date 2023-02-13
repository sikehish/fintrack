import "./App.css";
import Home from "./pages/home";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
