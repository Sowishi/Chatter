const Login = () => {
  return (
    <div
      className="login-wrapper flex items-center justify-center column flex-col bg-slate-950 "
      style={{ width: 500, height: 450 }}
    >
      <h1 className="text-3xl ">Login to Chatter</h1>
      <input
        type="text"
        placeholder="Enter your username"
        class="input input-bordered input-info w-full max-w-xs my-5"
      />
      <input
        type="password"
        placeholder="Enter your password"
        class="input input-bordered input-info w-full max-w-xs my-5"
      />
      <button className="btn btn-primary w-40 mt-3">Login</button>
      <p>
        Don't have an account?{" "}
        <button className="btn btn-neutral btn-sm mt-5">Sign up</button>
      </p>
    </div>
  );
};

export default Login;
