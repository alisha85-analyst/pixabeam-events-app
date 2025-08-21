// pages/index.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Pixabeam Events App</h1>
      <ul>
        <li><Link href="/events">View Upcoming Events</Link></li>
        <li><Link href="/rsvp">RSVP to an Event</Link></li>
      </ul>
    </div>
  );
}
