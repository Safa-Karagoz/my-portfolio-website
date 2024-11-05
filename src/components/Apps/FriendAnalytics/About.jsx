import React from 'react';

const About = () => {
  const features = [
    {
      title: "Real-Time Analytics",
      description: "Track trading volume, key prices, and market activity in real time through blockchain scraping"
    },
    {
      title: "Market Insights",
      description: "Identify trending traders and analyze their performance metrics"
    },
    {
      title: "Price Alerts",
      description: "Set custom alerts for price movements and trading activity and recieve email notifications"
    },
    {
      title: "Portfolio Tracking",
      description: "Monitor your key holdings and trading performance"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto w-full">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          <span className="text-[#01bbfc]">friend.</span>tech analytics
        </h1>
        <p className="text-[#3e97b7] text-lg max-w-2xl mx-auto">
          Get Better at Making Friends <br />
          All the tools to buy friends more efficently

        </p>
        <p>
        </p>
      </div>

      {/* About Section */}
      <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">What is friend.tech?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Friend.tech is a decentralized social media platform built on the Base blockchain. 
          The platform allows users to buy and sell "keys" 
          representing relationships with creators and influencers. These keys grant access to 
          exclusive chats and content, creating a unique social marketplace.
        </p>
        <p className="text-gray-300 leading-relaxed">
          As the platform grows, traders need powerful tools to track market activity, monitor 
          trends, and make informed decisions. That's where friend.tech Analytics comes in.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Getting Started */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-blue-400 mb-4">
          This Showcase
        </h2>
        <div className="text-gray-300 space-y-3">
          This is a frontend demo of friend.tech Analytics, showcasing the key features and functionality of the platform with sample data
        </div>
      </div>
    </div>
  );
};

export default About;