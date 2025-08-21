import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Pixabeam Events App</h1>
      <p>
        Check out the list of upcoming events or RSVP to an event.
      </p>
      <ul>
        <li>
          <Link href="/events">
            Go to Events Page
          </Link>
        </li>
        <li>
          <Link href="/rsvp">
            Go to RSVP Page
          </Link>
        </li>
      </ul>
    </div>
  );
}