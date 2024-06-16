import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/authContext";

const useSignup = () => {
  const [loading, setLoading] = useState();
  const { authUser, setAuthUser } = useAuthContext();

  const signup = async (inputs) => {
    const success = validateInput(inputs);

    if (!success) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      console.log("fsdfld");
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
};

export default useSignup;

const validateInput = (inputs) => {
  const { username, gender, password, confirmPassword } = inputs;
  if ((!username, !gender, !password, !confirmPassword)) {
    toast.error("Please fill all field");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Password dont' match");
    return false;
  }
  return true;
};
