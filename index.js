// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to Pixabeam Events</h1>
      <p>Discover upcoming events and RSVP easily.</p>
      <Link href="/events" className="button">Show Events</Link>

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 4rem auto;
          padding: 2rem;
          text-align: center;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        h1 {
          color: #333;
        }
        p {
          margin-bottom: 2rem;
          color: #666;
        }
        .button {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background-color: #0070f3;
          color: white;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
        }
        .button:hover {
          background-color: #0059c1;
        }
      `}</style>
    </div>
  );
}