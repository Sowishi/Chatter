const Signup = () => {
  return (
    <div
      className="login-wrapper flex items-center justify-center column flex-col bg-slate-950 py-10"
      style={{ width: 500, minHeight: 450 }}
    >
      <h1 className="text-3xl mb-3 ">Signup to Chatter</h1>
      <input
        type="text"
        placeholder="Fullname"
        class="input input-bordered input-info w-full max-w-xs my-3"
      />
      <input
        type="text"
        placeholder="Username"
        class="input input-bordered input-info w-full max-w-xs my-3"
      />
      <select class="select select-info w-full max-w-xs my-3">
        <option disabled selected>
          Select Gender
        </option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <input
        type="password"
        placeholder="Enter your password"
        class="input input-bordered input-info w-full max-w-xs my-3"
      />
      <input
        type="password"
        placeholder="Enter your password"
        class="input input-bordered input-info w-full max-w-xs my-3"
      />
      <button className="btn btn-primary w-40 mt-3">Sign Up</button>
      <p>
        Already have an account?{" "}
        <button className="btn btn-neutral btn-sm mt-5">Log in</button>
      </p>
    </div>
  );
};

export default Signup;
