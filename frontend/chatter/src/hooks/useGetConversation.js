import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetConversation = () => {
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        setConversation(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getConversation();
  }, []);

  return { conversation };
};

export default useGetConversation;
