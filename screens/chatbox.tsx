import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Modal, ScrollView, Alert, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EmojiSelector from 'react-native-emoji-selector';
import useChatStore, { Message } from '../stores/useChatStore';
import { fetchBotResponse } from '../components/api';
import ChatHistory from './chatHistory';
import Share from 'react-native-share';



const ChatBox = () => {
    const { messages, userInput, isLoading, addMessage, setUserInput, setIsLoading, clearUserInput } = useChatStore();
    const [showEmojiSelector, setShowEmojiSelector] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleSend = async () => {
        if (userInput.trim()) {
            const userMessage: Message = {
                id: messages.length + 1,
                text: userInput,
                sender: "user",
                type: "text",
                timestamp: new Date().toISOString(), // Add current timestamp
            };
            addMessage(userMessage);
            clearUserInput(); // Clear user input after sending

            setIsLoading(true);

            try {
                const botResponse = await fetchBotResponse(userInput);
                const botMessage: Message = {
                    id: messages.length + 2,
                    text: botResponse,
                    sender: "bot",
                    type: "text",
                    timestamp: new Date().toISOString(), // Add current timestamp
                };
                addMessage(botMessage);
            } catch (error) {
                console.error("Error fetching bot response:", error);
                Alert.alert("Error", "Failed to get response from the bot.");
            } finally {
                setIsLoading(false);
            }
        }
    };

    const parseResponse = (text: string): JSX.Element[] => {
        const parts = text.split(/\*(.*?)\*/g); // Split text by asterisks
        return parts.map((part, index) => {
            if (index % 2 === 1) {
                return <Text key={index} style={styles.boldText}>{part}</Text>;
            }
            return <Text key={index}>{part}</Text>; // Regular text
        });
    };

    const renderMessage = ({ item }: { item: Message }) => {
        const messageStyle = item.sender === 'user' ? styles.userMessage : styles.botMessage;

        return (
            <View style={messageStyle}>
                {item.type === 'preformatted' ? (
                    <Text style={[styles.botText, styles.preformattedText]}>{item.text}</Text>
                ) : (
                    <Text style={styles.botText}>{parseResponse(item.text)}</Text>
                )}
                <Text style={styles.timestamp}>{new Date(item.timestamp).toLocaleTimeString()}</Text> {/* Display timestamp */}
            </View>
        );
    };

    

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={80} // Adjust this value depending on your header height
        >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setShowMenu(!showMenu)} style={styles.menuButton}>
                    <Ionicons name="ellipsis-vertical" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(item) => item.id.toString()}
                style={styles.chatArea}
            />

            <View style={styles.inputArea}>
                <TouchableOpacity style={styles.emojiButton} onPress={() => setShowEmojiSelector(true)}>
                    <Ionicons name="happy-outline" size={24} color="gray" />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Type your message"
                    value={userInput}
                    onChangeText={setUserInput}
                    multiline
                    textAlignVertical="top"
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSend} disabled={isLoading}>
                    {isLoading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Ionicons name="send" size={24} color="white" />
                    )}
                </TouchableOpacity>
            </View>

            {/* Emoji Selector Modal */}
            <Modal visible={showEmojiSelector} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                    <ScrollView style={styles.emojiSelectorContainer}>
                        <EmojiSelector onEmojiSelected={(emoji) => {
                            setUserInput(userInput + emoji);
                            setShowEmojiSelector(false);
                        }} />
                    </ScrollView>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setShowEmojiSelector(false)}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    chatArea: {
        flex: 1,
        padding: 10,
    },
    botMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#E5E5EA',
        borderRadius: 15,
        padding: 10,
        marginVertical: 5,
        maxWidth: '80%',
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#007AFF',
        borderRadius: 15,
        padding: 10,
        marginVertical: 5,
        maxWidth: '80%',
    },
    botText: {
        color: '#000',
    },
    preformattedText: {
        fontFamily: 'monospace',
        backgroundColor: '#f0f0f0',
        padding: 5,
        borderRadius: 5,
    },
    timestamp: {
        fontSize: 10,
        color: '#999',
        marginTop: 5,
        alignSelf: 'flex-end',
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: '#E5E5EA',
    },
    input: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F0F0F0',
        borderRadius: 15,
        marginHorizontal: 5,
    },
    sendButton: {
        backgroundColor: '#007AFF',
        borderRadius: 15,
        padding: 10,
    },
    emojiButton: {
        marginRight: 10,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'flex-end',
    },
    emojiSelectorContainer: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 20,
        maxHeight: '70%',
    },
    closeButton: {
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#007AFF',
    },
    closeButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    boldText: {
        fontWeight: 'bold',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    menuButton: {
        alignSelf: 'flex-start',
    },
    menu: {
        position: 'absolute',
        top: 40,
        left: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        zIndex: 1000,
    },
    menuItem: {
        padding: 15,
    },
    menuItemText: {
        color: '#000',
    },
});

export default ChatBox;
