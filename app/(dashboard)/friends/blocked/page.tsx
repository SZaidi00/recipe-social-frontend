"use client"

import { UserX } from 'lucide-react';
import UserCard from '@/components/ui/user-card-friends';
import EmptyState from '@/components/ui/empty-state-friends';


export default function BlockedUsers({ blockedUsers, onAction, searchTerm }) {
  const filteredBlockedUsers = blockedUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredBlockedUsers.length === 0) {
    return (
      <EmptyState
        title={searchTerm ? 'No results found' : 'No blocked users'}
        description={searchTerm ? 'Try adjusting your search terms' : 'No blocked users at the moment'}
        icon={UserX}
      />
    );
  }

  return (
    <div className="space-y-4">
      {filteredBlockedUsers.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          actions={
            <button
              onClick={() => onAction('unblock', user.id, user.name)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Unblock
            </button>
          }
        />
      ))}
    </div>
  );
};