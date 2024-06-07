import { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../context/authContext.jsx";
import useLogout from "../hooks/useLogout";
import useConversation from "../zustand/useConversation.js";
import useSendMessage from "../hooks/useSendMessage.js";
import useGetMessages from "../hooks/useGetMessages.js";
import useListenMessage from "../hooks/useListenMessage.js";

const Conversation = () => {
  const [message, setMessage] = useState();

  const { selectedConversation, setSelectedConversation } = useConversation();
  const { authUser } = useAuthContext();
  const { logout } = useLogout();
  const { sendMessage } = useSendMessage();
  const { getMessages, messages } = useGetMessages();

  const lastMessageRef = useRef();

  useListenMessage();

  //This fucntion check if selected conversation is null then get the data if not null
  const getSelectedConversation = () => {
    if (selectedConversation == null) {
      return false;
    }

    return selectedConversation;
  };

  useEffect(() => {
    getMessages(selectedConversation ? selectedConversation._id : "");
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedConversation, sendMessage]);

  if (selectedConversation == null) {
    return <NoSelectedConversation />;
  }

  return (
    <>
      <div className="flex-1 border-l border-gray-800">
        <div className="wrapper h-[580px]  flex flex-col">
          <div className="convo-header w-100 bg-blue-950 p-3 px-5 flex items-center justify-between">
            <h1 className="font-bold">{getSelectedConversation().fullname}</h1>
            <button className="btn btn-error btn-sm" onClick={logout}>
              Log out
            </button>
          </div>

          <div className="wrapper h-[500px] overflow-scroll">
            {messages?.length >= 1 && (
              <div className="conversation-body flex-1 m-5">
                {messages.map((message, index) => {
                  let own = false;
                  if (message.senderID == authUser._id) own = true;

                  return (
                    <div
                      ref={
                        index === messages.length - 1 ? lastMessageRef : null
                      }
                      key={index}
                      class={`chat ${own ? "chat-end" : "chat-start"}`}
                    >
                      <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS chat bubble component"
                            src={
                              own
                                ? authUser.profilePic
                                : selectedConversation.profilePic
                            }
                          />
                        </div>
                      </div>
                      <div class="chat-header">
                        {own
                          ? authUser.fullname
                          : selectedConversation.fullname}
                      </div>
                      <div class="chat-bubble">{message.message}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="send flex flex-row justify-center items-center m-3">
            <input
              value={message}
              onChange={(e) => setMessage(event.target.value)}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  sendMessage(selectedConversation._id, message);
                  setMessage("");
                }
              }}
              type="text"
              placeholder="Type message here..."
              class="input input-bordered input-info w-full "
            />
            <button
              className="btn btn-neutral ml-3"
              onClick={() => {
                sendMessage(selectedConversation._id, message);
                setMessage("");
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const NoSelectedConversation = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex-1 border-l border-gray-800">
      <div className="wrapper h-[580px]  flex justify-center items-center mx-20">
        {authUser && (
          <h1 className="text-3xl text-center">
            Hello, {authUser.fullname}. Click to the user icon to start a
            conversation👋
          </h1>
        )}
      </div>
    </div>
  );
};

export default Conversation;
