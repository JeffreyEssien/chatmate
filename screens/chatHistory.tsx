import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useChatStore, { Message } from '../stores/useChatStore';
import { Alert } from 'react-native';

const ChatHistory = () => {
    const { messages, addMessage, clearUserInput } = useChatStore();

    // Function to save messages to local storage
    const saveMessagesToStorage = async () => {
        try {
            const jsonMessages = JSON.stringify(messages);
            await AsyncStorage.setItem('@chat_history', jsonMessages);
        } catch (error) {
            console.error('Error saving messages to local storage:', error);
            Alert.alert('Error', 'Failed to save chat history.');
        }
    };

    // Function to load messages from local storage
    const loadMessagesFromStorage = async () => {
        try {
            const storedMessages = await AsyncStorage.getItem('@chat_history');
            if (storedMessages !== null) {
                const parsedMessages: Message[] = JSON.parse(storedMessages);
                clearUserInput(); // Clear existing messages in store before loading
                parsedMessages.forEach((message) => addMessage(message)); // Load stored messages
            }
        } catch (error) {
            console.error('Error loading messages from local storage:', error);
            Alert.alert('Error', 'Failed to load chat history.');
        }
    };

    // Load chat history when the component mounts
    useEffect(() => {
        loadMessagesFromStorage();
    }, []);

    // Save chat history whenever the messages change
    useEffect(() => {
        if (messages.length > 0) {
            saveMessagesToStorage();
        }
    }, [messages]);

    return null; // This component doesn't render anything visually
};

export default ChatHistory;
