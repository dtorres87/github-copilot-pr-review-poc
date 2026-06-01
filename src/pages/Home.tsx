import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
import { User } from '../types/User';
import UserList from '../components/UserList';
import SearchBar from '../components/SearchBar';

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: 500, margin: '2em auto', padding: '1em' }}>
      <h1>User Directory</h1>
      <SearchBar value={search} onChange={setSearch} />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default Home;
