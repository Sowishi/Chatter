import Conversation from "../components/conversation";
import Sidebar from "../components/sidebar";
import useConversation from "../zustand/useConversation";

const Home = () => {
  const { selectedConversation } = useConversation();
  console.log(selectedConversation);
  return (
    <>
      <div className="desktop container bg-slate-950 h-[580px] flex mx-5 hidden md:flex">
        <div className="w-full md:w-1/4 ">
          <Sidebar />
        </div>
        <div className="w-3/4 hidden md:block">
          <Conversation />
        </div>
      </div>

      <div className="mobile container bg-slate-950 h-[580px] flex mx-5 flex md:hidden">
        <div
          className={`w-full ${selectedConversation != null ? "hidden" : ""}`}
        >
          <Sidebar />
        </div>
        <div
          className={`w-full   ${selectedConversation == null ? "hidden" : ""}`}
        >
          <Conversation />
        </div>
      </div>
    </>
  );
};

export default Home;
