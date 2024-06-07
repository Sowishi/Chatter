const useSendMessage = () => {
  const sendMessage = async (id, message) => {
    try {
      const res = await fetch(`/api/messages/send/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { sendMessage };
};

export default useSendMessage;
