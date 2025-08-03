"use client";

import React, { useState } from "react";

import { Search, UserPlus, Users, Clock, Ban } from 'lucide-react';

import FriendSuggestions from "./suggestions/page";
import FriendRequests from "@/app/(dashboard)/friends/requests/page";
import SentRequests from "./inivites/page";
import BlockedUsers from "./blocked/page";



const FriendsManager = () => {
   const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('suggestions');

  const handleAction = (action:string, userId, userName) => {
    
    // Make API calls to handle the actions
  };

  const [suggestions] = useState([
    { id: 1, name: 'Alex Chen', username: '@alexchen', avatar: 'AC', mutualFriends: 12, status: 'suggested' },
    { id: 2, name: 'Sarah Williams', username: '@sarahw', avatar: 'SW', mutualFriends: 8, status: 'suggested' },
    { id: 3, name: 'Marcus Johnson', username: '@mjohnson', avatar: 'MJ', mutualFriends: 15, status: 'suggested' },
    { id: 4, name: 'Emma Davis', username: '@emmad', avatar: 'ED', mutualFriends: 5, status: 'suggested' },
    { id: 5, name: 'David Miller', username: '@davidm', avatar: 'DM', mutualFriends: 7, status: 'suggested' },
    { id: 6, name: 'Jessica Brown', username: '@jessicab', avatar: 'JB', mutualFriends: 3, status: 'suggested' },
  ]);

  const [requests] = useState([
    { id: 7, name: 'James Wilson', username: '@jameswilson', avatar: 'JW', time: '2 hours ago', status: 'pending' },
    { id: 8, name: 'Lisa Anderson', username: '@lisaa', avatar: 'LA', time: '1 day ago', status: 'pending' },
    { id: 9, name: 'David Brown', username: '@davidb', avatar: 'DB', time: '3 days ago', status: 'pending' },
  ]);

  const [sentRequests] = useState([
    { id: 10, name: 'Michael Taylor', username: '@mtaylor', avatar: 'MT', time: '1 hour ago', status: 'sent' },
    { id: 11, name: 'Rachel Green', username: '@rachelg', avatar: 'RG', time: '2 days ago', status: 'sent' },
    { id: 12, name: 'Kevin Lee', username: '@kevinlee', avatar: 'KL', time: '1 week ago', status: 'sent' },
  ]);

  const [blockedUsers] = useState([
    { id: 13, name: 'John Smith', username: '@johnsmith', avatar: 'JS', blockedDate: '2 weeks ago', status: 'blocked' },
    { id: 14, name: 'Anna White', username: '@annawhite', avatar: 'AW', blockedDate: '1 month ago', status: 'blocked' },
  ]);

  const tabs = [
   { id: 'suggestions', name: 'Suggestions', count: suggestions.length, icon: Users },
    { id: 'requests', name: 'Requests', count: requests.length, icon: Clock },
    { id: 'sent', name: 'Sent', count: sentRequests.length, icon: UserPlus },
    { id: 'blocked', name: 'Blocked', count: blockedUsers.length, icon: Ban },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'suggestions':
        return <FriendSuggestions suggestions={suggestions} onAction={handleAction} searchTerm={searchTerm} />;
      case 'requests':
        return <FriendRequests requests={requests} onAction={handleAction} searchTerm={searchTerm} />;
      case 'sent':
        return <SentRequests sentRequests={sentRequests} onAction={handleAction} searchTerm={searchTerm} />;
      case 'blocked':
        return <BlockedUsers blockedUsers={blockedUsers} onAction={handleAction} searchTerm={searchTerm} />;
      default:
        return null;
    }
  };

return (
    <div className="w-full max-w-6xl p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Friends</h1>
        
        {/* Search Bar */}
        {/* <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search friends..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div> */}
      </div>

      <div className="flex min-h-96 w-full border border-gray-200 rounded-lg overflow-hidden">
        {/* Tab Triggers - Vertical on the left */}
        <div className="flex flex-col w-16 md:w-fit bg-gray-50 border-r border-gray-200">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 md:px-6 py-4 text-center md:text-left font-medium transition-colors duration-200 border-b border-gray-200 last:border-b-0 flex items-center justify-center md:justify-between relative ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
                title={`${tab.name} (${tab.count})`} // Tooltip for icon-only view
              >
                <div className="flex items-center gap-0 md:gap-3">
                  <IconComponent className="w-5 h-5 flex-shrink-0" />
                  <span className="hidden md:block">{tab.name}</span>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full absolute top-1 right-1 md:static md:px-2 md:py-1 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content - On the right */}
        <div className="flex-1 p-8 bg-white overflow-y-auto">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}


export default FriendsManager;