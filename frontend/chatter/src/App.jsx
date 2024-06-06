import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "./context/authContext";
function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <div className="container-xl bg-slate-900 h-screen mx-auto flex items-center justify-center">
        <Routes>
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <Signup />}
          />
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
      <ToastContainer position="top-center" theme="light" />
    </>
  );
}

export default App;
