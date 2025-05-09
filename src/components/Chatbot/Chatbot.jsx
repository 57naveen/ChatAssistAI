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
  const [showRecommeded, setShowRecommeded] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  let loadingIntervalRef = useRef(null);
  const [botTyping, setBotTyping] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setShowRecommeded(true);

    setLoading(true);
    setLoadingProgress(0);

    // Simulate real-time progress while waiting for API
    loadingIntervalRef.current = setInterval(() => {
      setLoadingProgress((prev) => (prev < 95 ? prev + 5 : prev));
    }, 200);

    try {
      const res = await fetch(
        "http://127.0.0.1:5000/api/processbusinesslogic",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: input }),
        }
      );

      const data = await res.json();
      const botReply =
        data.response.response || "Sorry, I couldn't understand that.";

      // Finish loading
      clearInterval(loadingIntervalRef.current);
      setLoadingProgress(100);

      // Delay just to show 100% momentarily
      setTimeout(() => {
        setLoading(false);

        // Start typing effect
        setBotTyping(""); // Reset previous typing state
        const lines = botReply.split("\n");
        let currentLine = 0;
        let charIndex = 0;

        setBotTyping(botReply.charAt(0));

        // Start typing the first letter immediately
        const typeNextChar = () => {
          if (currentLine < lines.length) {
            const line = lines[currentLine];
            if (charIndex < line.length) {
              // Update botTyping state with one character at a time
              setBotTyping((prev) => prev + line.charAt(charIndex));
              charIndex++;
              setTimeout(typeNextChar, 30); // typing speed
            } else {
              // Move to next line and reset charIndex
              setBotTyping((prev) => prev + "\n"); // add newline after a line
              currentLine++;
              charIndex = 0;
              setTimeout(typeNextChar, 300); // pause before next line
            }
          } else {
            // Done typing, add the final message
            setMessages((prev) => [
              ...newMessages,
              { role: "bot", text: botReply },
            ]);
            setBotTyping(""); // Reset typing state once finished
          }
        };

        // Start typing effect immediately
        typeNextChar();
      }, 300); // Delay to show the loading complete momentarily
    } catch (error) {
      clearInterval(loadingIntervalRef.current);
      setLoading(false);
      setLoadingProgress(0);
      console.error("API Error:", error);
      setMessages([
        ...newMessages,
        { role: "bot", text: "Oops! Something went wrong. Please try again." },
      ]);
    }
  };

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  return (
    <div className="w-full max-w-9xl mx-auto h-[87vh] mb-20 flex justify-around">
      {/* Chat Section */}
      <div className="w-[75%] flex flex-col border border-gray-200 rounded-3xl shadow-xl bg-white overflow-hidden">
        <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-4 font-semibold text-lg rounded-t-3xl">
          AI Assistant
        </div>

        <div
          ref={chatRef}
          className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#fffdf8]"
        >
          <div
            ref={chatRef}
            className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#fffdf8]"
          >
            {/* Render user and bot messages */}
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

            {/* Render typing message */}
            {botTyping && (
              <div className="flex justify-start">
                <div className="max-w-[75%] px-5 py-3 rounded-2xl bg-white text-gray-800 shadow text-sm whitespace-pre-line">
                  {botTyping}
                </div>
              </div>
            )}
          </div>

          {loading && (
            <div className="flex justify-start ml-7">
              <div className="px-4 py-3 bg-white border border-blue-200 rounded-2xl shadow flex items-center gap-2 text-blue-700 font-medium text-sm">
                <div className="flex gap-[2px]">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 ${
                        i < loadingProgress / 10 ? "bg-blue-600" : "bg-blue-200"
                      } rounded-sm transition-all duration-300`}
                    />
                  ))}
                </div>
                <span className="ml-2">{loadingProgress}%</span>
              </div>
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2 p-4 bg-white rounded-b-3xl"
        >
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-200 rounded-full text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white rounded-full p-2 shadow-md"
          >
            <Send size={20} />
          </button>
        </form>
      </div>

      {/* Recommended Section */}
      {showRecommeded && (
        <div className="">
          <p className="font-medium text-gray-700 flex justify-center items-center mb-3">
            Recommended for you:
          </p>
          <RecommendedCarousel items={recommendedItems} />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
