import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const [messages, setMessages] = useState([]);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setMessages([...messages, {
      id: Date.now(),
      user: 'Tú',
      text: data.message
    }]);
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <header className="bg-gray-900 p-4 shadow-lg">
        <h1 className="text-2xl font-bold text-center text-emerald-400">
          🧠 Mi ChatGPT Clon
        </h1>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full p-4 space-y-4 overflow-y-auto">
        {messages.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            Escribe un mensaje para comenzar la conversación.
          </p>
        ) : (
          messages.map(msg => (
            <div
              key={msg.id}
              className="bg-gray-800 rounded-lg p-4 shadow"
            >
              <span className="font-bold text-emerald-400">{msg.user}: </span>
              <span>{msg.text}</span>
            </div>
          ))
        )}
      </main>

      <footer className="bg-gray-900 p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto">
          <div className="flex gap-2">
            <input
              {...register('message', {
                required: 'El mensaje no puede estar vacío',
                minLength: {
                  value: 3,
                  message: 'El mensaje debe tener al menos 3 caracteres'
                },
                maxLength: {
                  value: 500,
                  message: 'El mensaje no puede exceder 500 caracteres'
                }
              })}
              placeholder="Escribe tu mensaje..."
              className="flex-1 bg-gray-800 rounded-lg px-4 py-2 text-gray-100 
                         border border-gray-700 focus:border-emerald-400 
                         focus:outline-none"
            />
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white 
                         font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Enviar
            </button>
          </div>
          {errors.message && (
            <p className="text-red-400 text-sm mt-2">
              {errors.message.message}
            </p>
          )}
        </form>
      </footer>
    </div>
  );
}

export default App;