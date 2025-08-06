"use client";

export default function UserCard({ user, actions }) {
  return (
    <div className="bg-white rounded-lg border border-green-100 p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
            {user.avatar}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{user.name}</h3>
            <p className="text-sm text-gray-600">{user.username}</p>
            {user.mutualFriends && (
              <p className="text-xs text-green-600 mt-1">
                {user.mutualFriends} mutual friends
              </p>
            )}
            {user.time && (
              <p className="text-xs text-gray-500 mt-1">{user.time}</p>
            )}
            {user.blockedDate && (
              <p className="text-xs text-gray-500 mt-1">
                Blocked {user.blockedDate}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">{actions}</div>
      </div>
    </div>
  );
}
