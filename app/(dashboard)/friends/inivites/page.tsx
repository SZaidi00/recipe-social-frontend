"use client"

import { UserPlus } from 'lucide-react';
import UserCard from '@/components/ui/user-card-friends';
import EmptyState from '@/components/ui/empty-state-friends';

export default function SentRequests ({ sentRequests, onAction, searchTerm })  {
  const filteredSentRequests = sentRequests.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredSentRequests.length === 0) {
    return (
      <EmptyState
        title={searchTerm ? 'No results found' : 'No sent requests'}
        description={searchTerm ? 'Try adjusting your search terms' : 'No pending sent requests'}
        icon={UserPlus}
      />
    );
  }

  return (
    <div className="space-y-4">
      {filteredSentRequests.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          actions={
            <button
              onClick={() => onAction('cancel', user.id, user.name)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Cancel Request
            </button>
          }
        />
      ))}
    </div>
  );
};