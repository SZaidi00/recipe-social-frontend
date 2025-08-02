"use client"
import { UserPlus, UserX, Check, X } from 'lucide-react';
import UserCard from '@/components/ui/user-card-friends';
import EmptyState from '@/components/ui/empty-state-friends';


export default function FriendRequests({ requests, onAction, searchTerm }) {
  const filteredRequests = requests.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredRequests.length === 0) {
    return (
      <EmptyState
        title={searchTerm ? 'No results found' : 'No pending requests'}
        description={searchTerm ? 'Try adjusting your search terms' : 'No friend requests at the moment'}
        icon={UserPlus}
      />
    );
  }

  return (
    <div className="space-y-4">
      {filteredRequests.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          actions={
            <>
              <button
                onClick={() => onAction('accept', user.id, user.name)}
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors duration-200"
                title="Accept request"
              >
                <Check size={16} />
              </button>
              <button
                onClick={() => onAction('decline', user.id, user.name)}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors duration-200"
                title="Decline request"
              >
                <X size={16} />
              </button>
              <button
                onClick={() => onAction('block', user.id, user.name)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors duration-200"
                title="Block user"
              >
                <UserX size={16} />
              </button>
            </>
          }
        />
      ))}
    </div>
  );
};