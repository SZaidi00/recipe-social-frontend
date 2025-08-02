"use client"
import UserCard from '@/components/ui/user-card-friends';
import EmptyState from '@/components/ui/empty-state-friends';
import { UserPlus, X} from 'lucide-react';

export default function FriendSuggestions  ({ suggestions, onAction, searchTerm }) {
  const filteredSuggestions = suggestions.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredSuggestions.length === 0) {
    return (
      <EmptyState
        title={searchTerm ? 'No results found' : 'No suggestions available'}
        description={searchTerm ? 'Try adjusting your search terms' : 'Check back later for new friend suggestions'}
        icon={UserPlus}
      />
    );
  }

  return (
    <div className="space-y-4">
      {filteredSuggestions.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          actions={
            <>
              <button
                onClick={() => onAction('add', user.id, user.name)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
              >
                <UserPlus size={16} />
                <span>Add Friend</span>
              </button>
              <button
                onClick={() => onAction('remove', user.id, user.name)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors duration-200"
              >
                <X size={16} />
              </button>
            </>
          }
        />
      ))}
    </div>
  );
};