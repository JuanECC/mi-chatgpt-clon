export const initialState = {
  messages: [],
  history: JSON.parse(localStorage.getItem('chatHistory')) || [],
};

export function chatReducer(state, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case 'CLEAR_CHAT':
      return {
        ...state,
        messages: [],
      };
    case 'SAVE_HISTORY':
      localStorage.setItem('chatHistory', JSON.stringify(state.messages));
      return {
        ...state,
        history: state.messages,
      };
    case 'LOAD_HISTORY':
      return {
        ...state,
        messages: action.payload,
      };
    default:
      return state;
  }
}