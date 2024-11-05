import React from 'react';
import { Pencil, Trash2, User } from 'lucide-react';

const Alerts = () => {
  const alerts = [
    {
      id: 1,
      user: 'moon.crypto',
      address: '0xa62...5b42',
      condition: 'goes over',
      price: '0.022 ETH',
      status: 'Active',
      description: 'Super Important'
    },
    {
      id: 2,
      user: 'CryptoKing',
      address: '0x78c...e1ec',
      condition: 'goes over',
      price: '0.003 ETH',
      status: 'Active',
      description: ''
    },
    {
      id: 3,
      user: 'CryptoBro',
      address: '0x78c...e1ec',
      condition: 'goes under',
      price: '0.003 ETH',
      status: 'Active',
      description: ''
    }
  ];

  const AlertCard = ({ alert }) => (
   <div className="bg-gray-800/50 rounded-lg overflow-hidden mb-4 w-full">
     <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
       <div className="flex items-center gap-3">
         <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
           <User className="w-5 h-5 text-gray-400" />
         </div>
         <div>
           <span className="text-white font-medium">{alert.user}</span>
           <span className="text-gray-500 ml-2 text-sm">{alert.address}</span>
         </div>
       </div>
       <div className="flex items-center">
         <span className={`px-2 py-1 rounded-full text-xs 
           ${alert.status === 'Active' 
             ? 'text-green-400 bg-green-400/10' 
             : 'text-gray-400 bg-gray-400/10'
           }`}>
           {alert.status}
         </span>
       </div>
     </div>

     <div className="p-4 w-full">
       <div className="flex items-center justify-between">
         <div className="space-y-1">
           <div className="text-white">
             Alert me when price{' '}
             <span className={alert.condition.includes('under') ? 'text-red-400' : 'text-green-400'}>
               {alert.condition} {alert.price}
             </span>
           </div>
           {alert.description && (
             <div className="text-gray-500 text-sm">
               {alert.description}
             </div>
           )}
         </div>
         <div className="flex gap-2">
           <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors">
             <Pencil size={18} />
           </button>
           <button className="p-2 text-gray-400 hover:text-red-400 hover:bg-gray-700/50 rounded-lg transition-colors">
             <Trash2 size={18} />
           </button>
         </div>
       </div>
     </div>
   </div>
 );

 return (
   <div className="w-full">
     <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
       <h1 className="text-2xl font-bold text-white">
         Alerts Overview
       </h1>
       <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
         New Alert
       </button>
     </div>

     <div className="w-full">
       {alerts.map(alert => (
         <AlertCard key={alert.id} alert={alert} />
       ))}
     </div>
   </div>
 );
};

export default Alerts;
