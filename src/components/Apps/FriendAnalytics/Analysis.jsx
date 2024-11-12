import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Star, Bell, Twitter, Send, User } from 'lucide-react';

const Analysis = () => {
   const priceHistory = [
      { date: 'Apr', price: 0.15 },
      { date: 'May', price: 0.20 },
      { date: 'Jun ', price: 0.21 },
      { date: 'Jul ', price: 0.18 },
      { date: 'Aug ', price: 0.22 },
      { date: 'Sep ', price: 0.20 },
      { date: 'Oct', price: 0.23 },
      { date: 'Nov', price: 0.22 }
   ];
   const transactions = [
      {
         date: '2024-11-05',
         trader: 'whale.eth',
         type: 'Buy',
         shares: 2,
         ethAmount: 0.53
      },
      {
         date: '2024-11-05',
         trader: 'diamond.hands',
         type: 'Sell',
         shares: 1,
         ethAmount: 0.28
      },
      {
         date: '2024-11-02',
         trader: 'degen.trader',
         type: 'Buy',
         shares: 3.0,
         ethAmount: 0.72
      },
      {
         date: '2024-11-01',
         trader: 'paper.hands',
         type: 'Sell',
         shares: 1,
         ethAmount: 0.18
      },
      {
         date: '2024-10-30',
         trader: 'moon.boy',
         type: 'Buy',
         shares: 1,
         ethAmount: 0.2
      }
   ];

   const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
         return (
            <div className="bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-700">
               <div className="text-white font-medium">
                  {payload[0].payload.date}
               </div>
               <div className="text-gray-400">
                  {payload[0].value.toFixed(2)} ETH
               </div>
            </div>
         );
      }
      return null;
   };

   return (
      <div className='w-full'>
         <div className="bg-gray-800/50 rounded-2xl p-4 md:p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
               {/* Left: Trader Info */}
               <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#1c1c1c] rounded-full flex items-center justify-center">
                     <User className="w-8 h-8 text-[#01bbfc]" />
                  </div>
                  <div>
                     <h2 className="text-2xl font-bold text-white mb-1">CryptoGuy</h2>
                     <div className="text-gray-400 text-sm">@whale.trader</div>
                  </div>
               </div>

               {/* Stats & Links */}
               <div className="flex flex-col sm:flex-row gap-6 lg:items-center">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 sm:gap-8">
                     <div className="text-center">
                        <div className="text-gray-400 text-sm">HOLDERS</div>
                        <div className="text-white font-medium">847</div>
                     </div>
                     <div className="text-center">
                        <div className="text-gray-400 text-sm">SUPPLY</div>
                        <div className="text-white font-medium">1000</div>
                     </div>
                     <div className="text-center">
                        <div className="text-gray-400 text-sm">WATCH LIST</div>
                        <div className="text-white font-medium">2.3K</div>
                     </div>
                  </div>

                  {/* Link Buttons */}
                  <div className="flex sm:flex-row gap-2 justify-center sm:justify-start">
                     <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                        <Twitter className="w-5 h-5 text-[#1DA1F2]" />
                     </button>
                     <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                        <Send className="w-5 h-5 text-gray-400" />
                     </button>
                     <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                        <Star className="w-5 h-5 text-[#FFD700]" fill="#FFD700" />
                     </button>
                     <button className="p-2 bg-[#FFD700] rounded-lg transition-colors">
                        <Bell className="w-5 h-5 text-black" />
                     </button>
                  </div>
               </div>
            </div>

            {/* Price Info */}
            <div className="mt-6">
               <div>
                  <div className="text-3xl font-bold text-white">$525.40</div>
                  <div className="text-gray-400">0.22 ETH</div>
               </div>
            </div>
         </div>

         {/* Price Chart */}
         <div className="bg-gray-800/50 rounded-2xl p-6 mb-8">
            <div className="h-[400px]">
               <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={priceHistory}>
                     <XAxis
                        dataKey="date"
                        stroke="#4B5563"
                        tick={{ fill: '#9CA3AF' }}
                     />
                     <YAxis
                        stroke="#4B5563"
                        tick={{ fill: '#9CA3AF' }}
                        domain={['auto', 'auto']}
                        tickFormatter={value => value.toFixed(0)}
                     />
                     <Tooltip content={<CustomTooltip />} />
                     <Line
                        type="monotone"
                        dataKey="price"
                        stroke="#ffffff"
                        strokeWidth={2}
                        dot={false}
                     />
                  </LineChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* Transactions */}
         <div className="bg-gray-800/50 rounded-2xl overflow-y-scroll">
            <table className="w-full">
               <thead>
                  <tr className="bg-gray-700/50">
                     <th className="text-left text-gray-400 p-4 font-medium">Date</th>
                     <th className="text-left text-gray-400 p-4 font-medium">Trader</th>
                     <th className="text-left text-gray-400 p-4 font-medium">Type</th>
                     <th className="text-left text-gray-400 p-4 font-medium">Shares</th>
                     <th className="text-left text-gray-400 p-4 font-medium">ETH Amount</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-700/50">
                  {transactions.map((tx, index) => (
                     <tr key={index} className="hover:bg-gray-700/30">
                        <td className="p-4 text-white">{tx.date}</td>
                        <td className="p-4 text-blue-400">{tx.trader}</td>
                        <td className="p-4">
                           <span className={`px-2 py-1 rounded-full text-xs ${tx.type === 'Buy'
                                 ? 'bg-green-400/10 text-green-400'
                                 : 'bg-red-400/10 text-red-400'
                              }`}>
                              {tx.type}
                           </span>
                        </td>
                        <td className="p-4 text-white">{tx.shares}</td>
                        <td className="p-4 text-white">{tx.ethAmount} ETH</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Analysis;