export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fff', color: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>NoNvme</h1>
      <p>Придумай имя и войди</p>
      <input placeholder="Имя пользователя" style={{ padding: '10px', fontSize: '16px' }} />
      <button style={{ marginTop: '10px', padding: '10px 20px', fontSize: '16px' }}>Войти</button>
    </div>
  );
}
