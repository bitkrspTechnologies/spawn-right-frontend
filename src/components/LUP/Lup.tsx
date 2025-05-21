'use client';

import React, { useState } from 'react';

export default function Lup() {
  const [activeTab, setActiveTab] = useState('live');

  const tabs = [
    { key: 'live', label: 'Live' },
    { key: 'upcoming', label: 'Upcoming' },
    { key: 'past', label: 'Past' },
  ];

  return (
    <div className="flex justify-between bg-[#2a2a2a]  overflow-hidden">
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`w-full text-center py-2 text-sm font-semibold transition-all duration-200
            ${activeTab === tab.key ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-300'}
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}