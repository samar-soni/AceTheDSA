import react from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Master Data Structures & Algorithms</h1>
        <p>
          Welcome to AceTheDSA - your ultimate resource for mastering Data Structures and Algorithms. 
          We provide comprehensive learning materials, practice problems, and interview preparation resources 
          to help you excel in technical interviews and become a better programmer.
        </p>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Structured Learning</h3>
          <p>Follow our carefully designed curriculum that takes you from basics to advanced concepts in DSA.</p>
        </div>

        <div className="feature-card">
          <h3>Practice Problems</h3>
          <p>Sharpen your skills with our collection of handpicked coding problems, ranging from easy to hard.</p>
        </div>

        <div className="feature-card">
          <h3>Interview Prep</h3>
          <p>Get ready for technical interviews with our interview-focused problem sets and tips.</p>
        </div>
      </section>

      <section className="add-question">
        <h2>Ready to start your DSA journey?</h2>
        <button className="add-btn" > <a href="/practice">Get Started</a></button>
      </section>
    </div>
  )
}

export default Home
