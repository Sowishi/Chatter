const Conversation = () => {
  const convos = [
    { own: false, message: "Hello" },
    { own: true, message: "Hell din AHHA" },
  ];
  return (
    <>
      <div className="flex-1 border-l border-gray-800">
        <div className="wrapper h-[580px]  flex flex-col">
          <div className="convo-header w-100 bg-blue-950 p-3 px-5 flex items-center justify-between">
            <h1 className="font-bold">Micaela Serrano</h1>
            <button className="btn btn-error btn-sm">Log out</button>
          </div>
          <div className="conversation-body flex-1 m-5">
            <div class="chat chat-start">
              <div class="chat-image avatar">
                <div class="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <div class="chat-header">
                Obi-Wan Kenobi
                <time class="text-xs opacity-50">12:45</time>
              </div>
              <div class="chat-bubble">You were the Chosen One!</div>
              <div class="chat-footer opacity-50">Delivered</div>
            </div>
            <div class="chat chat-end">
              <div class="chat-image avatar">
                <div class="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <div class="chat-header">
                Anakin
                <time class="text-xs opacity-50">12:46</time>
              </div>
              <div class="chat-bubble">I hate you!</div>
              <div class="chat-footer opacity-50">Seen at 12:46</div>
            </div>
            <div class="chat chat-end">
              <div class="chat-image avatar">
                <div class="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <div class="chat-header">
                Anakin
                <time class="text-xs opacity-50">12:46</time>
              </div>
              <div class="chat-bubble">I hate you!</div>
              <div class="chat-footer opacity-50">Seen at 12:46</div>
            </div>
          </div>
          <div className="send flex flex-row justify-center items-center m-3">
            <input
              type="text"
              placeholder="Type message here..."
              class="input input-bordered input-info w-full "
            />
            <button className="btn btn-neutral ml-3">Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversation;
