import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient'; // Убедись, что этот файл есть

export default function Home() {
  const [tgUser, setTgUser] = useState(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.expand();
      const user = window.Telegram.WebApp.initDataUnsafe?.user;
      console.log('TG USER:', user); // Добавили лог
      setTgUser(user);
    } else {
      console.warn('Telegram WebApp не инициализирован');
    }
  }, []);

 const handleVote = async (voteType) => {
  if (!tgUser) {
    alert('Пользователь Telegram не найден.');
    return;
  }

  // Логирование данных, которые отправляются в Supabase
  console.log('Данные для отправки:', {
    telegram_id: tgUser.id.toString(),
    vote_type: voteType,
    project_id: 'project-001',  // Заменить на реальный ID проекта
  });

  // Отправка данных в Supabase
  const { data, error } = await supabase.from('votes').insert([
    {
      telegram_id: tgUser.id.toString(),
      vote_type: voteType,
      project_id: 'project-001',
    },
  ]);

  // Обработка ответа от Supabase
  if (error) {
    console.error('Ошибка при голосовании:', error.message);
    alert('Ошибка: ' + error.message);
  } else {
    alert('Спасибо за голос!');
    console.log('Голос успешно сохранён:', data);
  }
};

  // Отправляем данные в Supabase
  const { data, error } = await supabase.from('votes').insert([
    {
      telegram_id: tgUser.id.toString(),
      vote_type: voteType,
      project_id: 'project-001',
    },
  ]);

  if (error) {
    console.error('Ошибка при голосовании:', error.message);
    alert('Ошибка: ' + error.message);
  } else {
    alert('Спасибо за голос!');
    console.log('Голос успешно сохранён:', data);
  }
};

    const { data, error } = await supabase.from('votes').insert([
      {
        telegram_id: tgUser.id.toString(),
        vote_type: voteType,
        project_id: 'project-001',
      },
    ]);

    if (error) {
      console.error('Ошибка при голосовании:', error.message);
      alert('Ошибка: ' + error.message);
    } else {
      alert('Спасибо за голос!');
      console.log('Голос успешно сохранён:', data);
    }
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

      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => handleVote('top')} style={{ padding: '10px 20px' }}>Топ проект</button>
        <button onClick={() => handleVote('scam')} style={{ padding: '10px 20px', backgroundColor: '#f66', color: '#fff' }}>Скам</button>
        <button onClick={() => handleVote('skip')} style={{ padding: '10px 20px', backgroundColor: '#ccc' }}>Не участвую</button>
      </div>
    </div>
  );
}
