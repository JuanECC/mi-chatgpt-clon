import React from 'react';
import { useChat } from '../context/ChatContext';

function History({ isOpen, onClose }) {
  const { history, loadHistory } = useChat();

  const handleLoad = () => {
    loadHistory(history);
  };

  return (
    <div className={`sidebar ${isOpen ? '' : 'closed'}`}>
      <div className="sidebar-header">
        <h2 className="sidebar-title">📜 Historial</h2>
        <button className="sidebar-close" onClick={onClose}>×</button>
      </div>
      <div className="sidebar-content">
        <button className="btn-primary" onClick={handleLoad}>
          Cargar último historial
        </button>
        <ul className="history-list mt-4">
          {history.length === 0 ? (
            <li className="text-gray-500 text-sm mt-3">No hay historial guardado.</li>
          ) : (
            history.map((msg, index) => (
              <li key={index} className="history-item">
                <span className="history-item-text">
                  <strong>{msg.sender === 'user' ? 'Tú' : 'Bot'}:</strong> {msg.text}
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default History;