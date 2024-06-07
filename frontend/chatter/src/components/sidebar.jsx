import { useState } from "react";
import useGetConversation from "../hooks/useGetConversation";
import useConversation from "../zustand/useConversation.js";

const Sidebar = () => {
  const { conversation } = useGetConversation();
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [search, setSerach] = useState("");

  const isSelected = (id) => {
    if (selectedConversation == null) {
      return "";
    }

    if (selectedConversation._id !== id) {
      return "";
    }

    return "bg-blue-600";
  };

  const queryConversation = conversation.filter((convo) => {
    if (convo.fullname.toLowerCase().startsWith(search.toLowerCase())) {
      return convo;
    }
  });

  return (
    <>
      <div className="flex-none w-80">
        <label class="input input-bordered flex items-center gap-2 m-3">
          <input
            type="text"
            class="grow"
            placeholder="Search User"
            onChange={(e) => setSerach(e.target.value)}
          />
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
          {queryConversation.map((convo) => {
            return (
              <div
                onClick={() => setSelectedConversation(convo)}
                className={`${isSelected(
                  convo._id
                )} user flex items-center justify-start mb-5 p-1 px-2 hover:bg-blue-600 hover:font-bold`}
              >
                <img style={{ width: 50 }} src={convo.profilePic} alt="" />
                <p className="mx-3">{convo.fullname}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
