import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { BadgeCheck } from 'lucide-react';

const Portfolio = () => {
  const holdings = [
    { 
      name: 'vitalik.eth', 
      keys: 1, 
      value: 1200.50,
      percentage: 45,
      verified: true 
    },
    { 
      name: 'punk6529', 
      keys: 3, 
      value: 800.30,
      percentage: 30,
      verified: true 
    },
    { 
      name: 'cobie', 
      keys: 2, 
      value: 650.20,
      percentage: 25,
      verified: true 
    }
  ];

  const totalValue = holdings.reduce((sum, holding) => sum + holding.value, 0);
  const totalKeys = holdings.reduce((sum, holding) => sum + holding.keys, 0);

  const COLORS = ['#3B82F6', '#6366F1', '#8B5CF6'];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-700">
          <div className="text-white font-medium">{payload[0].name}</div>
          <div className="text-gray-400">${payload[0].value.toFixed(2)}</div>
          <div className="text-gray-400">{payload[0].payload.percentage}%</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8 w-full">
      {/* Header */}
      <h1 className="text-2xl font-bold text-white">
        Portfolio & Wallet
      </h1>

      {/* Portfolio Stats */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <div className="text-white text-lg mb-2">
              Total Portfolio Value
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-white">
                ${totalValue.toFixed(2)}
              </span>
              <span className="text-xl text-gray-500">1.09 ETH</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-400 font-medium">$FRIEND</span>
              <span className="text-white">
                Held: {totalKeys.toFixed(2)}
              </span>
            </div>

            {/* Holdings */}
            <div className="space-y-4">
              {holdings.map((holding, index) => (
                <div 
                  key={holding.name}
                  className="bg-gray-800/40 p-4 rounded-lg border border-gray-700/50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium">
                        {holding.name[0].toUpperCase()}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-white font-medium">
                          {holding.name}
                        </span>
                        {holding.verified && (
                          <BadgeCheck size={16} className="text-blue-400" />
                        )}
                      </div>
                    </div>
                    <div 
                      className="text-sm font-medium"
                      style={{ color: COLORS[index] }}
                    >
                      {holding.percentage}%
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">
                      {holding.keys} keys
                    </span>
                    <span className="text-gray-400">
                      ${holding.value.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column  */}
        <div className="w-full lg:w-1/2 h-[400px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={holdings}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius="80%"
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
              >
                {holdings.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]} 
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-sm text-gray-400">Total Value</div>
            <div className="text-xl font-bold text-white">
              ${totalValue.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;