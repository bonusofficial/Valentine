import { useEffect } from 'react';

const emojis = ['❤️', '💘', '🌟', '🎉', '🌹'];
const duration = 10;

const EmojiRain = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const newEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      const emojiElement = document.createElement('div');
      emojiElement.innerText = newEmoji;
      emojiElement.classList.add('emoji');
      emojiElement.style.animationDuration = `${duration}s`;
      emojiElement.style.left = `${Math.random() * window.innerWidth}px`;
      document.body.appendChild(emojiElement);

      setTimeout(() => {
        document.body.removeChild(emojiElement);
      }, duration * 1000);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default EmojiRain;
