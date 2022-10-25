import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screen/home";
import Login from "../screen/login";
import Signup from "../screen/signup";
import ToDoList from '../screen/ToDoList'
function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path='todoapp' element={<ToDoList/>}/>
        </Routes>
      </Router>
    </>
  );
}
export default AppRouter;
