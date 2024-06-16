import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    username: "",
    gender: "Male",
    password: "",
    confirmPassword: "",
  });

  const { signup } = useSignup();

  const handleSubmit = () => {
    signup(inputs);
  };

  return (
    <div
      className="login-wrapper flex items-center justify-center column flex-col bg-slate-950 py-10 mx-5"
      style={{ width: 500, minHeight: 450 }}
    >
      <h1 className="text-3xl mb-3 text-white ">Signup to Chatter</h1>

      <input
        type="text"
        placeholder="Username"
        class="input input-bordered input-info w-full max-w-xs my-3"
        value={inputs.username}
        onChange={(event) => {
          setInputs({ ...inputs, username: event.target.value });
        }}
      />
      <select
        value={inputs.gender}
        onChange={(event) => {
          setInputs({ ...inputs, gender: event.target.value });
        }}
        class="select select-info w-full max-w-xs my-3"
      >
        <option disabled selected>
          Select Gender
        </option>
        <option value={"Male"}>Male</option>
        <option value={"Female"}>Female</option>
      </select>
      <input
        value={inputs.password}
        onChange={(event) => {
          setInputs({ ...inputs, password: event.target.value });
        }}
        type="password"
        placeholder="Enter your password"
        class="input input-bordered input-info w-full max-w-xs my-3"
      />
      <input
        value={inputs.confirmPassword}
        onChange={(event) => {
          setInputs({ ...inputs, confirmPassword: event.target.value });
        }}
        type="password"
        placeholder="Enter your password"
        class="input input-bordered input-info w-full max-w-xs my-3"
      />
      <button className="btn btn-primary w-40 mt-3" onClick={handleSubmit}>
        Sign Up
      </button>
      <p className="text-white">
        Already have an account?{" "}
        <Link to={"/login"}>
          <button className="btn btn-neutral btn-sm mt-5">Log in</button>
        </Link>
      </p>
    </div>
  );
};

export default Signup;
