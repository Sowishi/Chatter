import { useEffect, useState } from "react";

const useGetMessages = () => {
  const [messages, setMessages] = useState([]);

  const getMessages = async (id) => {
    try {
      const res = await fetch(`/api/messages/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setMessages(data.messages);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { getMessages, messages };
};

export default useGetMessages;
