import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// Define the Message type for chat messages
export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  type: 'text' | 'preformatted';
  timestamp: string;
}

// Define the state shape for the chat store
export interface ChatState {
  messages: Message[];
  userInput: string;
  isLoading: boolean;
}

// Define action types for the chat store
export interface ChatActions {
  addMessage: (message: Message) => void;
  setUserInput: (input: string) => void;
  setIsLoading: (loading: boolean) => void;
  clearUserInput: () => void;
}

// Combine state and actions
export type ChatStore = ChatState & ChatActions;

// Initial state
const initialState: ChatState = {
  messages: [{ 
    id: 1, 
    text: "Hello! I'm Lex, your AI assistant.", 
    sender: 'bot', 
    type: 'text' ,
    timestamp: new Date().toISOString(),
  }],
  userInput: '',
  isLoading: false,
};

// Create the Zustand store with type definitions
const useChatStore = create<ChatStore>()(
  devtools((set) => ({
    ...initialState,
    addMessage: (message: Message) => set((state) => ({
      messages: [...state.messages, message],
    })),
    setUserInput: (input: string) => set({ userInput: input }),
    setIsLoading: (loading: boolean) => set({ isLoading: loading }),
    clearUserInput: () => set({ userInput: '' }),
  }))
);

// Export the store for use in components
export default useChatStore;