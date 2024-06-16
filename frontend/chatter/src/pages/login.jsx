import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { useState } from "react";

const Login = () => {
  const { login } = useLogin();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div
      className="login-wrapper flex items-center justify-center column flex-col bg-slate-950 mx-5 "
      style={{ width: 500, height: 450 }}
    >
      <h1 className="text-3xl text-white ">Login to Chatter</h1>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Enter your username"
        class="input input-bordered input-info w-full max-w-xs my-5"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter your password"
        class="input input-bordered input-info w-full max-w-xs my-5"
      />
      <button
        className="btn btn-primary w-40 mt-3"
        onClick={() => login(username, password)}
      >
        Login
      </button>
      <p class="text-white">
        Don't have an account?{" "}
        <Link to={"/signup"}>
          <button className="btn btn-neutral btn-sm mt-5">Sign up</button>
        </Link>
      </p>
    </div>
  );
};

export default Login;
