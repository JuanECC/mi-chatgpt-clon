import React from 'react';
import { useChat } from '../context/ChatContext';

function History({ isOpen, onClose }) {
  const { state, loadHistory } = useChat();

  const handleLoad = () => {
    loadHistory(state.history);
  };

  return (
    <div className={`sidebar ${isOpen ? '' : 'closed'}`}>
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-bold" style={{ color: 'var(--color-coffee)' }}>
          Historial
        </h2>
        <button
          onClick={onClose}
          className="btn-secondary rounded-full w-8 h-8 flex items-center justify-center"
        >
          ×
        </button>
      </div>

      <div className="p-4">
        <button
          onClick={handleLoad}
          className="btn-primary w-full py-2 rounded-lg mb-4"
        >
          Cargar último historial
        </button>

        <ul className="space-y-2">
          {state.history.length === 0 ? (
            <li className="text-gray-500">No hay historial guardado.</li>
          ) : (
            state.history.map((msg, index) => (
              <li key={index} className="truncate text-sm">
                {msg.sender === 'user' ? 'Tú' : 'Bot'}: {msg.text}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default History;