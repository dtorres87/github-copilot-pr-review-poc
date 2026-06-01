import React from 'react';
import { User } from '../types/User';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>
        <strong>{user.name}</strong> <span>({user.email})</span>
      </li>
    ))}
  </ul>
);

export default UserList;
