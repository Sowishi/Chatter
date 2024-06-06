import Conversation from "../components/conversation";
import Sidebar from "../components/sidebar";

const Home = () => {
  return (
    <div className="container bg-slate-950 h-[580px] flex">
      <Sidebar />
      <Conversation />
    </div>
  );
};

export default Home;
