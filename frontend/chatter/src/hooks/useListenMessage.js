import { useEffect } from "react";
import { useSocketContext } from "../context/socketContext";
import useGetConversation from "./useGetConversation";
import useGetMessages from "./useGetMessages";
import notif from "../assets/notif.wav";

const useListenMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useGetMessages();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const audio = new Audio(notif);
      audio.play();
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenMessage;
