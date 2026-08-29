// src/hooks/useOllama.js

import { useState, useCallback } from 'react';
import { generateResponse } from '../api/ollama';

export function useOllama() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendPrompt = useCallback(async (prompt) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await generateResponse(prompt);
      setIsLoading(false);
      return response;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      return 'Hubo un error al procesar tu solicitud.';
    }
  }, []);

  return { sendPrompt, isLoading, error };
}