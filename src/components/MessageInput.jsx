import React, { useState } from 'react';
import { useChat } from '../context/ChatContext';
import { useOllama } from '../hooks/useOllama';

function MessageInput() {
  const [input, setInput] = useState('');
  const { addMessage, saveHistory } = useChat();
  const { sendPrompt, isLoading } = useOllama();

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    addMessage({ text: input, sender: 'user' });
    setInput('');

    const botResponse = await sendPrompt(input);
    addMessage({ text: botResponse, sender: 'bot' });
    saveHistory();
  };

  return (
    <form onSubmit={handleSend} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe tu mensaje..."
        disabled={isLoading}
        className="flex-1 rounded-lg px-4 py-2 border"
        style={{
          backgroundColor: 'var(--color-cream)',
          borderColor: 'var(--color-coffee)',
          color: 'var(--color-black)'
        }}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary py-2 px-6 rounded-lg"
      >
        {isLoading ? 'Pensando...' : 'Enviar'}
      </button>
    </form>
  );
}

export default MessageInput;