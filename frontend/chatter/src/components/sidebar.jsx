const Sidebar = () => {
  return (
    <>
      <div className="flex-none w-80">
        <label class="input input-bordered flex items-center gap-2 m-3">
          <input type="text" class="grow" placeholder="Search User" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4 opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </label>
        <div className="divider mx-3"></div>
        <div className="users mx-3  overflow-scroll" style={{ height: 500 }}>
          <div className="user flex items-center justify-start mb-5 p-1 px-2 hover:bg-blue-600 hover:font-bold">
            <img
              style={{ width: 50 }}
              src="https://avatar.iran.liara.run/public/boy?username=Sowishi69"
              alt=""
            />
            <p className="mx-3">Jhon Michael Molina</p>
          </div>
          <div className="user flex items-center justify-start mb-5 p-1 px-2 hover:bg-blue-600 hover:font-bold">
            <img
              style={{ width: 50 }}
              src="https://avatar.iran.liara.run/public/boy?username=Sowishi69"
              alt=""
            />
            <p className="mx-3">Jhon Michael Molina</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
