// pages/index.jsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Pixabeam Events</h1>
      <p>Custom Event Listing App</p>
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
          font-size: 2rem;
          color: #333;
        }
        p {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 2rem;
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
