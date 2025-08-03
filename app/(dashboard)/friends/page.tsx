"use client"

import React, { useState } from 'react';
import { Search } from 'lucide-react';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/shadcn_components/tabs';

import FriendSuggestions from './suggestions/page';
import FriendRequests from '@/app/(dashboard)/friends/requests/page';
import SentRequests from './inivites/page';
import BlockedUsers from './blocked/page';

import {Tabs, Tab, Card, CardBody, RadioGroup, Radio} from "@heroui/react";

// Main FriendsManager Component
// const FriendsManager = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   // Mock data
//   const [suggestions] = useState([
//     { id: 1, name: 'Alex Chen', username: '@alexchen', avatar: 'AC', mutualFriends: 12, status: 'suggested' },
//     { id: 2, name: 'Sarah Williams', username: '@sarahw', avatar: 'SW', mutualFriends: 8, status: 'suggested' },
//     { id: 3, name: 'Marcus Johnson', username: '@mjohnson', avatar: 'MJ', mutualFriends: 15, status: 'suggested' },
//     { id: 4, name: 'Emma Davis', username: '@emmad', avatar: 'ED', mutualFriends: 5, status: 'suggested' },
//     { id: 5, name: 'Emma Davis', username: '@emmad', avatar: 'ED', mutualFriends: 5, status: 'suggested' },
//     { id: 6, name: 'Emma Davis', username: '@emmad', avatar: 'ED', mutualFriends: 5, status: 'suggested' },
//   ]);

//   const [requests] = useState([
//     { id: 5, name: 'James Wilson', username: '@jameswilson', avatar: 'JW', time: '2 hours ago', status: 'pending' },
//     { id: 6, name: 'Lisa Anderson', username: '@lisaa', avatar: 'LA', time: '1 day ago', status: 'pending' },
//     { id: 7, name: 'David Brown', username: '@davidb', avatar: 'DB', time: '3 days ago', status: 'pending' },
//   ]);

//   const [sentRequests] = useState([
//     { id: 8, name: 'Michael Taylor', username: '@mtaylor', avatar: 'MT', time: '1 hour ago', status: 'sent' },
//     { id: 9, name: 'Rachel Green', username: '@rachelg', avatar: 'RG', time: '2 days ago', status: 'sent' },
//     { id: 10, name: 'Kevin Lee', username: '@kevinlee', avatar: 'KL', time: '1 week ago', status: 'sent' },
//   ]);

//   const [blockedUsers] = useState([
//     { id: 11, name: 'John Smith', username: '@johnsmith', avatar: 'JS', blockedDate: '2 weeks ago', status: 'blocked' },
//     { id: 12, name: 'Anna White', username: '@annawhite', avatar: 'AW', blockedDate: '1 month ago', status: 'blocked' },
//   ]);

//   const handleAction = (action: string, userId: number, userName: string) => {
//     // console.log(`${action} action for user ${userId} (${userName})`);
//     // make API calls to handle the actions
//   };

//   const tabs = [
//     { id: 'suggestions', name: 'Suggestions', count: suggestions.length },
//     { id: 'requests', name: 'Requests', count: requests.length },
//     { id: 'sent', name: 'Sent', count: sentRequests.length },
//     { id: 'blocked', name: 'Blocked', count: blockedUsers.length },
//   ];

//   return (
//     <div className="h-full bg-[#FAF9EE] no-scrollbar">
//       <div className="mx-auto py-8 px-4">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Friends</h1>
//           <p className="text-gray-600">Manage your connections and discover new friends</p>
//         </div>

//         {/* Search Bar */}
//         <div className="mb-6">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="text"
//               placeholder="Search people..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//             />
//           </div>
//         </div>

//         {/* Tabs */}
//         <Tabs defaultValue="suggestions" className="w-full">
//           <TabsList className="grid w-full grid-cols-4 mb-6">
//             {tabs.map((tab) => (
//               <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2">
//                 {tab.name}
//                 {tab.count > 0 && (
//                   <span className="ml-1 py-0.5 px-2 rounded-full text-xs bg-muted text-muted-foreground">
//                     {tab.count}
//                   </span>
//                 )}
//               </TabsTrigger>
//             ))}
//           </TabsList>

//           <TabsContent value="suggestions">
//             <FriendSuggestions suggestions={suggestions} onAction={handleAction} searchTerm={searchTerm} />
//           </TabsContent>

//           <TabsContent value="requests">
//             <FriendRequests requests={requests} onAction={handleAction} searchTerm={searchTerm} />
//           </TabsContent>

//           <TabsContent value="sent">
//             <SentRequests sentRequests={sentRequests} onAction={handleAction} searchTerm={searchTerm} />
//           </TabsContent>

//           <TabsContent value="blocked">
//             <BlockedUsers blockedUsers={blockedUsers} onAction={handleAction} searchTerm={searchTerm} />
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

const FriendsManager = () => {
    const [placement, setPlacement] = React.useState("top");
 
 return (
    <div>
      <div>
        Friends 

      </div>

        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" placement={"start"} className="bg-amber-100">
            <Tab key="photos" title="Photos" className="bg-blue-200">
              <Card className="bg-amber-500">
                <CardBody className="bg-amber-950">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="music" title="Music">
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="videos" title="Videos">
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>


    </div>


  );
}

export default FriendsManager;