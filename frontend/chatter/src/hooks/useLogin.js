import { useAuthContext } from "../context/authContext";
import { toast } from "react-toastify";

const useLogin = () => {
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    const inputs = JSON.stringify({ username, password });
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: inputs,
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      console.log(data);

      if (data.error) {
        throw new Error(data.error);
      }

      setAuthUser(data);
      localStorage.setItem("chat-user", JSON.stringify(data));
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { login };
};

export default useLogin;
