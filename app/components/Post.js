import React, { useState } from 'react';
import Chart from 'chart.js/auto';



const ThreadMessage = ({ message, user, timestamp }) => (
    <div className="thread-message">
        <div className="user-info">
            <span className="username">{user}</span>
            <span className="timestamp">{timestamp}</span>
        </div>
        <p className="message-content">{message}</p>
    </div>
);

const Post = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const sendMessage = () => {
        if (newMessage.trim()) { // Avoid sending empty messages
            const timestamp = new Date().toLocaleString();
            setMessages([...messages, { message: newMessage, user: 'You', timestamp }]);
            setNewMessage(''); // Clear message input after sending
        }
    };

    return (
        <div className="support-thread">
            <h2>Recet Post</h2>
            <div className="thread-container">
                {/* List previously sent messages */}
                {messages.map((message) => (
                    <ThreadMessage key={message.timestamp} {...message} />
                ))}
            </div>
            <div className="message-composer">
                <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Post;