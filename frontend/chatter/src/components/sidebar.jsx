import { useState } from "react";
import useGetConversation from "../hooks/useGetConversation";
import useConversation from "../zustand/useConversation.js";
import { useSocketContext } from "../context/socketContext.jsx";

const Sidebar = () => {
  const { conversation } = useGetConversation();
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [search, setSerach] = useState("");

  const { onlineUsers } = useSocketContext();

  const isSelected = (id) => {
    if (selectedConversation == null) {
      return "";
    }

    if (selectedConversation._id !== id) {
      return "";
    }

    return "bg-blue-600";
  };

  let queryConversation = [];

  if (conversation.length >= 1) {
    queryConversation = conversation.filter((convo) => {
      if (convo.username.toLowerCase().startsWith(search.toLowerCase())) {
        return convo;
      }
    });
  }

  console.log(queryConversation, "Fdfl");

  return (
    <>
      <div className="flex-none w-100 overflow-hidden ">
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
        {queryConversation.length >= 1 && (
          <div className="users mx-3  overflow-scroll" style={{ height: 470 }}>
            {queryConversation.map((convo) => {
              let online = false;
              if (onlineUsers.includes(convo._id)) {
                online = true;
              }

              return (
                <div
                  onClick={() => setSelectedConversation(convo)}
                  className={`${isSelected(
                    convo._id
                  )} user flex items-center justify-start mb-5 p-1 px-2 hover:bg-blue-600 hover:font-bold`}
                >
                  <div className="wrapper" style={{ position: "relative" }}>
                    <div
                      className={`active ${online ? " bg-green-500" : ""}`}
                      style={{
                        width: 15,
                        height: 15,
                        borderRadius: 100,
                        position: "absolute",
                        right: 0,
                        top: 0,
                      }}
                    ></div>
                    <img style={{ width: 50 }} src={convo.profilePic} alt="" />
                  </div>
                  <p className="mx-3 text-white">{convo.username}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
