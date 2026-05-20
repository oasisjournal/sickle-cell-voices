'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Story = {
  id: number
  title: string | null
  mood: string | null
  body: string
  created_at: string
}

export default function Home() {
  const [title, setTitle] = useState('')
  const [mood, setMood] = useState('')
  const [body, setBody] = useState('')
  const [stories, setStories] = useState<Story[]>([])
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const headingStyle = {
    fontWeight: '700' as const,
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

  async function loadStories() {
    const { data } = await supabase
      .from('stories')
      .select('id, title, mood, body, created_at')
      .eq('status', 'approved')
      .order('created_at', { ascending: false })

    if (data) setStories(data)
  }

  useEffect(() => {
    loadStories()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMessage('')

    if (!body.trim()) {
      setMessage('Please write your story first.')
      return
    }

    setLoading(true)

    const { error } = await supabase.from('stories').insert({
      title: title || null,
      mood: mood || null,
      body,
      status: 'pending',
    })

    setLoading(false)

    if (error) {
      setMessage('Something went wrong. Please try again.')
      return
    }

    setTitle('')
    setMood('')
    setBody('')
    setMessage('Your story was submitted for review.')
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

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', padding: '20px' }}>
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

      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px' }}>
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

        <div style={{ background: '#fbfbf8', padding: '30px', borderRadius: '18px', marginBottom: '40px' }}>
          <h2 style={headingStyle}>🌿 Share Your Story</h2>

          <form onSubmit={handleSubmit}>
            <p>
              <strong>Reminder:</strong> Do not include names, locations, hospitals, schools,
              phone numbers, or anything that can identify you.
            </p>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Story title"
              style={{ width: '100%', padding: '14px', marginBottom: '12px' }}
            />

            <select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              style={{ width: '100%', padding: '14px', marginBottom: '12px' }}
            >
              <option value="">How are you feeling?</option>
              <option value="Calm">🌿 Calm</option>
              <option value="Tired">😔 Tired</option>
              <option value="Overwhelmed">💭 Overwhelmed</option>
              <option value="Hopeful">🌱 Hopeful</option>
              <option value="Pain">😣 Pain</option>
            </select>

            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your story..."
              style={{
                width: '100%',
                height: '150px',
                padding: '14px',
                marginBottom: '14px',
              }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                background: '#5d7c5d',
                color: 'white',
                padding: '13px 22px',
                border: 'none',
                borderRadius: '999px',
                cursor: 'pointer',
                fontWeight: 'bold',
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? 'Submitting...' : 'Submit Anonymously'}
            </button>
          </form>

          {message && <p style={{ marginTop: '14px' }}>{message}</p>}
        </div>

        <div>
          <h2 style={headingStyle}>🌿 Community Voices</h2>

          {stories.length === 0 ? (
            <div style={{ background: 'white', padding: '24px', borderRadius: '16px' }}>
              <p>No approved stories yet.</p>
            </div>
          ) : (
            stories.map((story) => (
              <div
                key={story.id}
                style={{
                  background: 'white',
                  padding: '24px',
                  borderRadius: '16px',
                  marginBottom: '16px',
                }}
              >
                <p>
                  <strong>Anonymous{story.mood ? ` • ${story.mood}` : ''}</strong>
                </p>
                {story.title && <h3>{story.title}</h3>}
                <p style={{ lineHeight: '1.8' }}>{story.body}</p>
              </div>
            ))
          )}
        </div>

        <div style={{ marginTop: '40px', background: '#fbfbf8', padding: '30px', borderRadius: '18px' }}>
          <h2 style={headingStyle}>🩸 What is sickle cell disease?</h2>

          <p style={{ lineHeight: '1.8', marginBottom: '14px' }}>
            Sickle cell disease is a group of inherited blood disorders that affects
            hemoglobin, the protein in red blood cells that carries oxygen through the body.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '14px' }}>
            For many people, it can cause episodes of pain, fatigue, anemia, and other
            complications that affect daily life, mental health, school, work, and relationships.
          </p>

          <p style={{ lineHeight: '1.8' }}>
            This platform shares lived experiences from people affected by sickle cell.
            It is meant for awareness and expression, not medical advice.
          </p>
        </div>

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