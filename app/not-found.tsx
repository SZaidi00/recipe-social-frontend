"use client"

import React from 'react';
import { Home, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function notFound() {
const router = useRouter(); 

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            onClick={() => {
              router.push("/feed");
            }}
          >
            <Home className="w-4 h-4" />
            Go Home
          </button>
          
        </div>
      </div>
    </div>
  );
}