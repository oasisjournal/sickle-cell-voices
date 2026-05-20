'use client'

export default function Home() {
  const headingStyle = {
    fontWeight: '700',
    fontSize: '28px',
    color: '#3f5f3f',
    marginBottom: '10px',
  }

  const cardStyle = {
    flex: 1,
    minWidth: '250px',
    background: 'white',
    padding: '20px',
    borderRadius: '12px',
    transition: '0.2s',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  }

  return (
    <main
      style={{
        fontFamily: 'Arial, sans-serif',
        background: '#f4f6f1',
        minHeight: '100vh',
        color: '#2f3e2f',
      }}
    >

      {/* HERO */}
      <section
        style={{
          position: 'relative',
          minHeight: '420px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('/oasis-leaves.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.65)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(25,40,25,0.35), rgba(25,40,25,0.55))',
          }}
        />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px' }}>
          <p style={{ letterSpacing: '2px' }}>by Oasis 🌿</p>

          <h1 style={{ fontSize: '58px', margin: '20px 0', fontWeight: 500 }}>
            Sickle Cell Voices
          </h1>

          <p style={{ fontSize: '22px', lineHeight: '1.7' }}>
            A calm space where people living with sickle cell can share how they feel —
            anonymously, honestly, and without judgment.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px' }}>

        {/* WHY EXISTS */}
        <div style={{ background: '#fbfbf8', padding: '30px', borderRadius: '18px', marginBottom: '30px' }}>
          <h2 style={headingStyle}>🌿 Why this space exists</h2>

          <p style={{ lineHeight: '1.8', fontSize: '18px' }}>
            Living with sickle cell has affected every part of life—not just physically, but mentally and emotionally as well.
            <br /><br />
            Over time, it becomes clear that the condition goes beyond pain. It influences how you think, how you cope, and how you move through the world.
            <br /><br />
            There are moments of exhaustion that people don’t always see, and moments where strength is expected even when it feels impossible.
            <br /><br />
            Experiences with loss and emotional strain can make that weight even heavier.
            <br /><br />
            This space was created to allow people living with sickle cell to express not only their physical pain, but also their mental and emotional realities—openly, honestly, and without judgment.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
          
          <div
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0px)')}
          >
            <h3 style={{ fontWeight: '700', fontSize: '20px', color: '#3f5f3f' }}>
              🌱 Mental Health
            </h3>
            <p>Share feelings, anxiety, exhaustion, and emotional experiences.</p>
          </div>

          <div
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0px)')}
          >
            <h3 style={{ fontWeight: '700', fontSize: '20px', color: '#3f5f3f' }}>
              🍃 Real Experiences
            </h3>
            <p>Talk about pain, hospitals, life challenges, and resilience.</p>
          </div>

          <div
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0px)')}
          >
            <h3 style={{ fontWeight: '700', fontSize: '20px', color: '#3f5f3f' }}>
              🌾 Safe Space
            </h3>
            <p>No names. No judgment. Just honest voices.</p>
          </div>

        </div>

        {/* FORM */}
        <div style={{ background: '#fbfbf8', padding: '30px', borderRadius: '18px', marginBottom: '40px' }}>
          <h2 style={headingStyle}>🌿 Share Your Story</h2>

          <p><strong>Reminder:</strong> Do not include personal details.</p>

          <input
            placeholder="Story title"
            style={{ width: '100%', padding: '14px', marginBottom: '12px' }}
          />

          <select style={{ width: '100%', padding: '14px', marginBottom: '12px' }}>
            <option>How are you feeling?</option>
            <option>🌿 Calm</option>
            <option>😔 Tired</option>
            <option>💭 Overwhelmed</option>
            <option>🌱 Hopeful</option>
            <option>😣 Pain</option>
          </select>

          <textarea
            placeholder="Write your story..."
            style={{ width: '100%', height: '150px', padding: '14px', marginBottom: '14px' }}
          />

          <button
            style={{
              background: '#5d7c5d',
              color: 'white',
              padding: '13px 22px',
              border: 'none',
              borderRadius: '999px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Submit Anonymously
          </button>
        </div>

        {/* STORIES */}
        <div>
          <h2 style={headingStyle}>🌿 Community Voices</h2>

          <div style={{ background: 'white', padding: '24px', borderRadius: '16px', marginBottom: '16px' }}>
            <p><strong>Anonymous • 😔 Tired</strong></p>
            <p>Today felt heavy. Not just physically, but mentally.</p>
          </div>

          <div style={{ background: 'white', padding: '24px', borderRadius: '16px' }}>
            <p><strong>Anonymous • 💭 Overwhelmed</strong></p>
            <p>Sometimes I feel like I have to explain my pain too much.</p>
          </div>
        </div>

        {/* EDUCATION SECTION */}
        <div style={{ marginTop: '40px', background: '#fbfbf8', padding: '30px', borderRadius: '18px' }}>
          <h2 style={headingStyle}>🩸 What is sickle cell disease?</h2>

          <p style={{ lineHeight: '1.8', marginBottom: '14px' }}>
            Sickle cell disease is a group of inherited blood disorders that affects hemoglobin, the protein in red blood cells that carries oxygen through the body.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '14px' }}>
            For many people, it can cause episodes of pain, fatigue, anemia, and other complications that affect daily life, mental health, school, work, and relationships.
          </p>

          <p style={{ lineHeight: '1.8' }}>
            This platform shares lived experiences from people affected by sickle cell. It is meant for awareness and expression, not medical advice.
          </p>
        </div>

        {/* OASIS */}
        <div style={{ marginTop: '40px', background: '#e7efe4', padding: '30px', borderRadius: '18px' }}>
          <h2 style={headingStyle}>🌿 Why Oasis?</h2>

          <p style={{ lineHeight: '1.8' }}>
            An oasis is a place of relief in the middle of something overwhelming.
            This platform is meant to be that space—a place to pause, breathe, and be heard.
          </p>
        </div>

      </section>
    </main>
  )
}