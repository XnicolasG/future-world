'use client'

import React, { useState } from 'react'

 const ChatBot = () => {
  const [state, setState] = useState({
    messages: [],
    userInput: ''
  });
  const updateState = (updates: any) => {
    setState((prevState) =>( {
      ...prevState,
      ...updates
    }))
  }
  const handleSubmit = async (e : Event) =>{
    e.preventDefault();
    updateState({
      messages: [...state.messages, {role: 'user', content:state.userInput}],
      userInput: ''
    });

    try {
      
    } catch (error: any) {
      console.log(error);
      
    }
  }
  return (
    <div>Chat</div>
  )
}
export default ChatBot
