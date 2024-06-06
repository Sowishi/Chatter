import { toast } from "react-toastify";
import { useAuthContext } from "../context/authContext";

const useLogout = () => {
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    try {
      const res = await fetch("api/auth/logout", {
        method: "POST",
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user");
      setAuthUser(null);
      toast.success("Logout Successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { logout };
};

export default useLogout;
