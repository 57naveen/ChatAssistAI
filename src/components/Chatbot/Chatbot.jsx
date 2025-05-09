import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import RecommendedCarousel from "./RecommendedCarousel";
import { recommendedItems } from "@/utils/constants";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi there! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);
  const [showRecommeded, setShowRecommeded] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setShowRecommeded(true);

    setTimeout(() => {
      setMessages([
        ...newMessages,
        { role: "bot", text: "Thanks for your question! Here's a guide." },
      ]);
    }, 800);
  };

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  return (
    <div className="w-full max-w-8xl mx-auto h-[85vh] mb-10 flex justify-around">
      
      {/* Chat Section */}
      <div className="w-[75%] flex flex-col border border-gray-200 rounded-3xl shadow-xl bg-white overflow-hidden">
        <div className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-4 font-semibold text-lg rounded-t-3xl">
           AI Assistant
        </div>

        <div
          ref={chatRef}
          className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#fffdf8]"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "bot" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-[75%] px-5 py-3 rounded-2xl text-sm ${
                  msg.role === "bot"
                    ? "bg-white text-gray-800 shadow"
                    : "bg-orange-100 text-orange-900"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 p-4 bg-white rounded-b-3xl">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-200 rounded-full text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white rounded-full p-2 shadow-md"
          >
            <Send size={20} />
          </button>
        </div>
      </div>

      {/* Recommended Section */}
      {showRecommeded && (
        <div className="mt-10">
         <p className="font-medium text-gray-700 flex justify-center items-center mb-3">Recommended for you:</p>
          <RecommendedCarousel items={recommendedItems} />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
