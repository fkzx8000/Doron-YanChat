import { useEffect, useRef, useState } from 'react';
import useQueryBot from '../hooks/useQueryBot';
import { useQuery } from '@tanstack/react-query';
import { Spinner, Text } from '@chakra-ui/react';

const Chat = () => {
  const [messages, setMessages] = useState<{ type: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const { refetch, isLoading } = useQuery({
    queryKey: ['Query'],
    queryFn: async () => {
      useQueryBot(input).then((mess) =>  setMessages((prev) => [...prev, { type: 'bot', text: mess.toString() }]) )
      return messages
    },
    enabled: false, // לא מפעיל את השאילתה אוטומטית
  });

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages((prev) => [...prev, { type: 'user', text: input }]);
    setInput(''); 
    refetch(); 
  };
  // גלילה אוטומטית לתחתית בכל עדכון של ההודעות
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  return (
    <div style={{ padding: '1rem',width: '100%', margin: 'auto', border: '1px solid #ddd' }}>
      <h1>Chat</h1>
      <div
        style={{
          height: '300px',
          maxHeight: '300px',
          overflowY: 'auto',
          marginBottom: '1rem',
          padding: '0.5rem',
          border: '1px solid #ddd',
        }}
      >
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div
              key={index}
              style={{
                textAlign: message.type === 'user' ? 'right' : 'left',
                margin: '0.5rem 0',
              }}
            >
              <strong>{message.type === 'user' ? 'You: ' : 'Bot: '}</strong>
              <span>{message.text}</span>
            </div>
          ))
        ) : (
          <p>No messages yet. Type a message to start the chat!</p>
        )}
        {/* אלמנט ריק שמשמש לנקודת גלילה */}
        <div ref={messagesEndRef} />
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
      {isLoading ?  <><Text color={"red"}>Thinking </Text><Spinner color='red.500' /></> : <Text></Text> }
        
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{ flex: 1, padding: '0.5rem', border: '1px solid #ddd' }}
        />
        <button onClick={sendMessage} style={{ padding: '0.5rem 1rem' }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
