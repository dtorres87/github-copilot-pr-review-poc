import { User } from '../types/User';

const mockUsers: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { id: 2, name: 'Bob Smith', email: 'bob.smith@example.com' },
  { id: 3, name: 'Carol Lee', email: 'carol.lee@example.com' },
  { id: 4, name: 'David Kim', email: 'david.kim@example.com' },
  { id: 5, name: 'Eve Watson', email: 'eve.watson@example.com' }
];

// Simulate async API call
export function getUsers(): Promise<User[]> {
  return Promise.resolve(mockUsers);
}
