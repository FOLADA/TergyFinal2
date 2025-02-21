import { useState, useEffect, FormEvent } from "react";
import "./Chat.css";
import {
  db,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "./firebasechat";

interface Message {
  text: string;
  user: string;
  timestamp?: any;
}

interface ChatProps {
  user: string;
}

const Chat: React.FC<ChatProps> = ({ user }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(true);
  const [selectedTopic, setSelectedTopic] = useState<string>("სიმპოზიუმის სივრცე");

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data() as Message));
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    try {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        user: user || "Anonymous",
        timestamp: serverTimestamp(),
      });
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  const handleSidebarClick = (topic: string) => {
    setSelectedTopic(topic);
    setShowModal(true);
  };

  const getModalContent = () => {
    switch (selectedTopic) {
      case "ვეფხისტყაოსანი":
        return "ისაუბრეთ მხოლოდ ვეფხისტყაოსანზე";
      case "დავითიანი":
        return "ისაუბრეთ მხოლოდ დავითიანზე";
      case "დიდოსტატის მარჯვენა":
        return "ისაუბრეთ მხოლოდ დიდოსტატის მარჯვენაზე";
      default:
        return "ჩატის წესები";
    }
  };

  return (
    <div className="chat-wrapper">
      <div className="sidebar">
        <ul>
          <li onClick={() => handleSidebarClick("ვეფხისტყაოსანი")}>ვეფხისტყაოსანი</li>
          <li onClick={() => handleSidebarClick("დავითიანი")}>დავითიანი</li>
          <li onClick={() => handleSidebarClick("დიდოსტატის მარჯვენა")}>დიდოსტატის მარჯვენა</li>
        </ul>
      </div>

      <div className="chat-container">
        <h2 className="chat-header">{selectedTopic}</h2>

        <div className="message-container">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.user === user ? "sent" : "received"}`}
            >
              <div className="message-info">
                <span className="message-user">{msg.user}:</span>
                <p className="message-text">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={sendMessage} className="message-form">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="დაიწყე ბაასი..."
            className="message-input"
          />
          <button type="submit" className="send-button">
            გაგზავნა
          </button>
        </form>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>{selectedTopic}</h3>
              <p>{getModalContent()}</p>
              <button onClick={() => setShowModal(false)} className="close-modal">
                გავიგე
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;