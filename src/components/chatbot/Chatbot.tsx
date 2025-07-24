import React, { useState, useRef, useEffect } from 'react';
import styles from './Chatbot.module.css';
import { routeKnowledgeBase, faqKnowledgeBase, /* type RouteInfo */ } from '../../chatbot/knowledgeBase';
import { Link } from 'react-router-dom';
import { FaPaperPlane, FaCommentDots, FaTimes } from 'react-icons/fa';
import type { JSX } from 'react/jsx-runtime';
import logochat from '../../assets/logochat.png';

interface Message {
  id: number;
  text: string | React.ReactNode;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          id: Date.now(),
          text: '👋 ¡Hola! Soy tu asistente de SkillLink ✨. ¿En qué puedo ayudarte hoy?',
          sender: 'bot'
        }
      ]);
    } else {
      setMessages([]);
    }
  }, [isOpen]);

  const parseMarkdownLinks = (text: string): React.ReactNode => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      parts.push(text.substring(lastIndex, match.index));
      parts.push(
        <Link to={match[2]} onClick={() => setIsOpen(false)} key={match.index}>
          {match[1]}
        </Link>
      );
      lastIndex = linkRegex.lastIndex;
    }

    parts.push(text.substring(lastIndex));
    return <>{parts}</>;
  };

  const processMessage = (text: string): React.ReactNode => {
    const lowerText = text.toLowerCase();

    const routeMatch = routeKnowledgeBase.find(route =>
      route.keywords.some(keyword => lowerText.includes(keyword))
    );

    if (routeMatch) {
      return parseMarkdownLinks(`📅 ${routeMatch.response}`);
    }

    const faqMatch = faqKnowledgeBase.find(faq =>
      faq.keywords.some(keyword => lowerText.includes(keyword))
    );

    if (faqMatch) return `❓ ${faqMatch.answer}`;

    return "🤔 No entendí tu pregunta, prueba con palabras clave como 'proyectos', 'perfil', o 'mentores'.";
  };

  const handleSendMessage = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (inputValue.trim() === '') return;

    const userMessage: Message = { id: Date.now(), text: inputValue, sender: 'user' };
    const botResponseText = processMessage(inputValue);
    const botMessage: Message = { id: Date.now() + 1, text: botResponseText, sender: 'bot' };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInputValue('');
  };

  if (!isOpen) {
    return (
      <button className={styles.chatToggleButtonOpen} onClick={() => setIsOpen(true)} aria-label="Abrir chat">
        <FaCommentDots />
      </button>
    );
  }

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.chatHeader}>
        <img src={logochat} alt="logo" className={styles.logochat} />
        <span>SkillLink Asistente</span>
        <button onClick={() => setIsOpen(false)} className={styles.closeButton} aria-label="Cerrar chat">
          <FaTimes />
        </button>
      </div>
      <div className={styles.chatMessages}>
        {messages.map(msg => (
          <div key={msg.id} className={`${styles.message} ${styles[msg.sender]}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form className={styles.chatInputForm} onSubmit={handleSendMessage}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="✍️ Escribe tu pregunta..."
          className={styles.chatInput}
        />
        <button type="submit" className={styles.sendButton} aria-label="Enviar mensaje">
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default Chatbot;