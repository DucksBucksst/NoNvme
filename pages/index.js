import { useState, useEffect } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');
  const [tgUser, setTgUser] = useState(null);

  useEffect(() => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.expand(); // разворачивает WebApp
      const user = window.Telegram.WebApp.initDataUnsafe?.user;
      setTgUser(user);
    }
  }, []);

  const handleVote = (voteType) => {
    console.log('Голос:', voteType);
    console.log('Пользователь:', tgUser?.id, tgUser?.username || tgUser?.first_name);
    // Тут можно отправить голос на backend
  };

  return (
    <div style={{
      fontFamily: 'sans-serif',
      backgroundColor: '#fff',
      color: '#000',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    }}>
      <h1>NoNvme</h1>
      <p>Оцени проект ниже:</p>

      {/* КАРТОЧКА ПРОЕКТА */}
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '15px',
        maxWidth: '400px',
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        <img src="https://via.placeholder.com/300x150" alt="Project" style={{ width: '100%', borderRadius: '8px' }} />
        <h2>Название проекта</h2>
        <p>Описание проекта: кратко и понятно объясняет суть.</p>
      </div>

      {/* КНОПКИ ГОЛОСОВАНИЯ */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => handleVote('top')} style={{ padding: '10px 20px' }}>Топ проект</button>
        <button onClick={() => handleVote('scam')} style={{ padding: '10px 20px', backgroundColor: '#f66', color: '#fff' }}>Скам</button>
        <button onClick={() => handleVote('skip')} style={{ padding: '10px 20px', backgroundColor: '#ccc' }}>Не участвую</button>
      </div>
    </div>
  );
}
