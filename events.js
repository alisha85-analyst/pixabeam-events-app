// pages/events.js
import { useEffect, useState } from 'react';
import supabase from '../lib/supabaseClient';

export default function EventsPage() {
  const [events, setEvents] = useState([]);

 useEffect(() => {
  const fetchEvents = async () => {
    const today = new Date().toISOString().split('T')[0];

    const { data, error } = await supabase
      .from('events')
      .select('*')
      .gte('date', today)
      .order('date', { ascending: true });

    if (error) {
      console.error("Error fetching events:", error);
    } else {
      setEvents(data);
    }
  };

  fetchEvents();
}, []);

  return (
    <div>
      <h1>Upcoming Events</h1>
      <ul>
        {events.map(ev => (
          <li key={ev.id}>
            <strong>{ev.title}</strong> – {ev.city} on {ev.date}
            <p>{ev.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
