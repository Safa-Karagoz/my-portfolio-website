import React, { useState } from 'react';
import { User } from 'lucide-react';

const Trending = () => {
  const [activeTab, setActiveTab] = useState('highest-price');
  
  const users = [
    { 
      rank: 1,
      name: 'CL',
      holders: 117,
      supply: 119,
      price: 0.885
    },
    { 
      rank: 2,
      name: 'ROWDY',
      holders: 65,
      supply: 77,
      price: 0.371
    },
    {
      rank: 3,
      name: 'High Stakes Capital',
      holders: 33,
      supply: 76,
      price: 0.361
    },
    {
      rank: 4,
      name: 'cobie',
      holders: 64,
      supply: 80,
      price: 0.361
    },
    {
      rank: 5,
      name: 'Saajid',
      holders: 16,
      supply: 69,
      price: 0.298
    },
    {
      rank: 6,
      name: 'Racer',
      holders: 56,
      supply: 67,
      price: 0.281
    },
    {
      rank: 7,
      name: 'Hsaka',
      holders: 52,
      supply: 66,
      price: 0.272
    },
    {
      rank: 8,
      name: 'Z',
      holders: 60,
      supply: 65,
      price: 0.264
    },
    {
      rank: 9,
      name: 'Yantra Labs',
      holders: 35,
      supply: 65,
      price: 0.264
    },
    {
      rank: 10,
      name: 'Calli Manderino',
      holders: 4,
      supply: 65,
      price: 0.264
    }
  ];

  return (
    <div className="space-y-6 w-full">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white mb-4">
          General Market
        </h1>
        
        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-800">
          <button
            className={`pb-2 px-1 text-sm font-medium transition-colors relative ${
              activeTab === 'trending'
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('trending')}
          >
            Trending
            {activeTab === 'trending' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
            )}
          </button>
          <button
            className={`pb-2 px-1 text-sm font-medium transition-colors relative ${
              activeTab === 'highest-price'
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('highest-price')}
          >
            Highest Price
            {activeTab === 'highest-price' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
            )}
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-900/50 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-800/50">
              <th className="text-left text-gray-400 p-4 font-medium">User</th>
              <th className="text-left text-gray-400 p-4 font-medium">Holders</th>
              <th className="text-left text-gray-400 p-4 font-medium">Supply</th>
              <th className="text-right text-gray-400 p-4 font-medium">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/50">
            {users.map((user) => (
              <tr 
                key={user.rank}
                className="hover:bg-gray-800/30 transition-colors"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="text-gray-500 text-sm">#{user.rank}</div>
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                      <User className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="font-medium text-white">
                      {user.name}
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1">
                    <span className="text-blue-400 font-medium">
                      {user.holders}
                    </span>
                    <span className="text-gray-400">
                      Holders
                    </span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1">
                    <span className="text-blue-400 font-medium">
                      {user.supply}
                    </span>
                    <span className="text-gray-400">
                      Supply
                    </span>
                  </div>
                </td>
                <td className="p-4 text-right">
                  <span className="text-white font-medium">
                    {user.price} ETH
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trending;