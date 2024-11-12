import React, { useState } from 'react';
import { TrendingUp, Star, Bell, User, ChevronDown } from 'lucide-react';

const Dashboard = () => {
  const [timeFilter, setTimeFilter] = useState('ALL TIME');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeFilterOptions = ['ALL TIME', '12 MONTHS', '30 DAYS', '7 DAYS', '24 HOUR'];

  const favoriteKeys = [
    { 
      id: 1,
      name: "jpegstrader",
      eth: "0.011",
      change: "-",
      volume: "13",
      isPinned: true 
    },
    { 
      id: 2,
      name: "topshot",
      eth: "0.264",
      change: "-",
      volume: "65",
      isPinned: true 
    }
  ];

  const StatCard = ({ title, value, ethValue, change }) => (
    <div className="bg-gray-800 rounded-xl p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="text-blue-400" size={20} />
        <span className="text-gray-300">{title}</span>
      </div>
      <div className="text-3xl font-bold text-white mb-1">
        ${value}
      </div>
      <div className="text-gray-400 mb-2">
        {ethValue} ETH
      </div>
      {change && (
        <div className="text-green-400">
          {change}
        </div>
      )}
    </div>
  );

  // Mobile Time Group Dropdown 
  const TimeFilterDropdown = () => (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg flex items-center justify-between"
      >
        <span>{timeFilter}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isDropdownOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50">
          {timeFilterOptions.map((option) => (
            <button
              key={option}
              onClick={() => {
                setTimeFilter(option);
                setIsDropdownOpen(false);
              }}
              className={`
                w-full px-4 py-2 text-left transition-colors
                ${timeFilter === option ? 'bg-blue-500 text-white' : 'text-gray-400 hover:bg-gray-700'}
              `}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  // Desktop Time Group Button 
  const TimeFilterButtons = () => (
    <div className="flex gap-2">
      {timeFilterOptions.map((filter) => (
        <button
          key={filter}
          onClick={() => setTimeFilter(filter)}
          className={`px-4 py-2 rounded-lg text-sm transition-colors ${
            timeFilter === filter
              ? 'bg-blue-500 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );

  return (
    <div className="space-y-8 w-full">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Welcome back, Safa
        </h1>
        <p className="text-gray-400">
          Track and manage your keys
        </p>
      </div>

      <div>
        <div className="block md:hidden">
          <TimeFilterDropdown />
        </div>
        <div className="hidden md:block">
          <TimeFilterButtons />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <StatCard 
          title="Portfolio Value"
          value="2651.00"
          ethValue="1.09"
          change="+10%"
        />
        <StatCard 
          title="Personal Key"
          value="1.36"
          ethValue="0.001"
          change="+6%"
        />
      </div>

      {/* Favorite Keys Table */}
      <div className="bg-gray-800/50 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-white">Favorite Keys</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="text-left text-gray-400 p-4">Favorite</th>
                <th className="text-left text-gray-400 p-4">Eth</th>
                <th className="text-left text-gray-400 p-4">Change</th>
                <th className="text-left text-gray-400 p-4">Volume</th>
                <th className="text-left text-gray-400 p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {favoriteKeys.map((key) => (
                <tr key={key.id} className="hover:bg-gray-800/50">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <User className="w-6 h-6 text-[#01bbfc]" />
                      <span className="text-white">{key.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-white">{key.eth}</td>
                  <td className="p-4 text-gray-400">{key.change}</td>
                  <td className="p-4 text-white">{key.volume}</td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-yellow-400 hover:bg-gray-700 rounded-lg">
                        <Star size={16} />
                      </button>
                      <button className="p-2 text-blue-400 hover:bg-gray-700 rounded-lg">
                        <Bell size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;