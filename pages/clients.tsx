import { useState, useEffect, FormEvent } from 'react';
import type { NextPage } from 'next';
import { supabase } from '../lib/supabaseClient';

interface Client {
  id: string;
  demographics: { name?: string } | null;
}

const Clients: NextPage = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [newClientName, setNewClientName] = useState('');

  useEffect(() => {
    // Fetch clients when component mounts
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const { data, error } = await supabase.from('clients').select('*');
    if (error) {
      console.error('Error fetching clients:', error.message);
    } else if (data) {
      setClients(data as Client[]);
    }
  };

  const handleAddClient = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newClientName) return;
    const { error } = await supabase.from('clients').insert([
      {
        demographics: { name: newClientName },
      },
    ]);
    if (error) {
      console.error('Error adding client:', error.message);
    } else {
      setNewClientName('');
      fetchClients();
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Clients</h1>
      {/* Form to add a new client */}
      <form onSubmit={handleAddClient} className="mb-4 flex gap-2">
        <input
          type="text"
          className="border p-2 flex-1"
          placeholder="Client name"
          value={newClientName}
          onChange={(e) => setNewClientName(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Client
        </button>
      </form>
      {/* List of existing clients */}
      <ul className="space-y-2">
        {clients.map((client) => (
          <li key={client.id} className="border p-2 rounded">
            {client.demographics?.name ?? 'Unnamed Client'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;

