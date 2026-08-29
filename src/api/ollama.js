export async function generateResponse(prompt) {
  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-coder:1.3b',
        prompt: `Responde siempre en español: ${prompt}`,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error('Error al obtener respuesta de Ollama');
    }

    const data = await response.json();
    return data.response || 'Sin respuesta';
  } catch (error) {
    console.error('Error en generateResponse:', error);
    return 'Error: No se pudo conectar con Ollama.';
  }
}