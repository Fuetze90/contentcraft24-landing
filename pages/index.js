
export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#000',
      color: '#0ff',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <img src="/logo.png" alt="ContentCraft24 Logo" style={{ maxWidth: '300px', marginBottom: '2rem' }} />
      <h1 style={{ fontSize: '2rem' }}>Hier entsteht bald dein smarter KI-ContentBot.</h1>
      <p style={{ marginTop: '1rem', fontSize: '1rem' }}>powered by ContentCraft24</p>
    </main>
  );
}
