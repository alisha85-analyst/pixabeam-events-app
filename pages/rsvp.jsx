// pages/rsvp.jsx
import { useEffect, useState } from 'react';
import supabase from '../lib/supabaseClient';

export default function RSVPPage() {
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({ user_id: '', event_id: '', status: 'Yes' });

  useEffect(() => {
    supabase.from('users').select('*').then(({ data }) => setUsers(data));
    supabase.from('events').select('*').then(({ data }) => setEvents(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('rsvps').insert([form]);
    alert('✅ RSVP submitted!');
  };

  return (
    <div>
      <h1>RSVP for Pixabeam Event</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select User:
          <select onChange={e => setForm({ ...form, user_id: e.target.value })}>
            <option value="">-- Choose a user --</option>
            {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
          </select>
        </label>
        <br />
        <label>
          Select Event:
          <select onChange={e => setForm({ ...form, event_id: e.target.value })}>
            <option value="">-- Choose an event --</option>
            {events.map(ev => <option key={ev.id} value={ev.id}>{ev.title}</option>)}
          </select>
        </label>
        <br />
        <label>
          RSVP Status:
          <select onChange={e => setForm({ ...form, status: e.target.value })}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Maybe">Maybe</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit RSVP</button>
      </form>
    </div>
  );
}
