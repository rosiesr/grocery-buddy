import './App.css'

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="emoji-header">🛒🏡✨</div>
        <h1>Grocery Buddy</h1>
        <p className="tagline">Shop smarter with your roommates</p>
      </header>

      <main className="content">
        <section className="intro">
          <p className="lead">
            Stop buying duplicates. Reduce food waste. 
            Plan groceries together—<em>even when life gets messy</em>.
          </p>
        </section>

        <section className="features">
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Shared Memory</h3>
            <p>See what might already be in the kitchen—no perfect tracking needed</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Smart Suggestions</h3>
            <p>Get helpful hints before you shop, based on what your household bought recently</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Your List, Your Way</h3>
            <p>Keep your personal items private while sharing the staples that matter</p>
          </div>
        </section>

        <section className="cta-section">
          <button className="cta-button">Start Planning Together</button>
          <p className="subtext">Free for households. No perfect inventory required.</p>
        </section>

        <section className="value-prop">
          <div className="stat">
            <div className="stat-number">40%</div>
            <div className="stat-label">of food waste is preventable</div>
          </div>
          <div className="stat">
            <div className="stat-number">2-3x</div>
            <div className="stat-label">duplicates bought by roommates</div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Built for real households, messy kitchens, and uncertain schedules 💚</p>
      </footer>
    </div>
  )
}

export default App
