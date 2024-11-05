import React, { useState } from 'react';
import logo from '../../../assets/app-icons/Friend-Analytics-logo.png'
import { Home, TrendingUp, Bell, Brain, Search, Menu, X, User, InfoIcon, Wallet, CandlestickChart } from 'lucide-react';
import SafaIcon from "../../../assets/about-me/PersonalPic.png"
import About from './About';
import Dashboard from './Dashboard';
import Portfolio from './Portfolio';
import Trending from './Trending';
import Alerts from './Alerts';
import Analysis from './Analysis';

const FriendAnalytics = () => {
  const [activePage, setActivePage] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItem = ({ id, icon: Icon, label, onClick }) => (
    <button
      onClick={() => {
        setActivePage(id);
        onClick?.();
      }}
      className={`
        w-full flex items-center gap-3 px-4 py-3 rounded-lg
        transition-all duration-200
        ${activePage === id
          ? 'bg-blue-500/10 text-blue-500'
          : 'text-gray-400 hover:bg-gray-800'
        }
      `}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <About />;
      case 'dashboard':
        return <Dashboard />;
      case 'portfolio':
        return <Portfolio />;
      case 'trending':
        return <Trending />;
      case 'alerts':
        return <Alerts />;
      case 'analysis':
        return <Analysis />;
      default:
        return <div className="text-gray-400">Select a page</div>;
    }
  };

  const Logo = () => (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
        <img src={logo} className='w-fit h-full rounded-lg' />
      </div>
      <span className="font-bold text-white">friend.tech analytics</span>
    </div>
  );

  const SearchBar = () => (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );

  const UserProfile = () => (
    <div className="flex items-center gap-3">
      <img src={SafaIcon} className="w-8 h-9 bg-gray-700 rounded-full" />
      <div className="hidden sm:block">
        <div className="text-sm font-medium text-white">Safa Karagoz</div>
        <div className="text-xs text-gray-400">@SafaKaragoz06</div>
      </div>
    </div>
  );

  return (
    <div className="w-full h-[600px] bg-gray-900 rounded-b-lg flex flex-col md:flex-row overflow-hidden">
      {/* Mobile Header */}
      <div className="md:hidden border-b border-gray-800">
        <div className="p-4 flex items-center justify-between">
          <Logo />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-400 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div className={`
          ${isMobileMenuOpen ? 'max-h-[400px]' : 'max-h-0'}
          transition-all duration-300 ease-in-out overflow-hidden
        `}>
          <div className="p-4 space-y-4">
            <SearchBar />
            <nav className="space-y-1">
              <NavItem id="about" icon={InfoIcon} label="About" onClick={() => setIsMobileMenuOpen(false)} />
              <NavItem id="dashboard" icon={Home} label="Dashboard" onClick={() => setIsMobileMenuOpen(false)} />
              <NavItem id="trending" icon={TrendingUp} label="Trending" onClick={() => setIsMobileMenuOpen(false)} />
              <NavItem id="portfolio" icon={Wallet} label="Portfolio" onClick={() => setIsMobileMenuOpen(false)} />
              <NavItem id="alerts" icon={Bell} label="Alerts" onClick={() => setIsMobileMenuOpen(false)} />
              <NavItem id="analysis" icon={CandlestickChart} label="Analysis" onClick={() => setIsMobileMenuOpen(false)} />
            </nav>
            <div className="pt-4 border-t border-gray-800">
              <UserProfile />
            </div>
          </div>
        </div>
      </div>


      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 border-r border-gray-800 flex-col">
        <div className="p-4 border-b border-gray-800">
          <Logo />
        </div>

        <div className="p-4">
          <SearchBar />
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <NavItem id="about" icon={InfoIcon} label="About" />
          <NavItem id="dashboard" icon={Home} label="Dashboard" />
          <NavItem id="trending" icon={TrendingUp} label="Trending" />
          <NavItem id="portfolio" icon={Wallet} label="Portfolio" />
          <NavItem id="alerts" icon={Bell} label="Alerts" />
          <NavItem id="analysis" icon={CandlestickChart} label="Analysis" />
        </nav>

        <div className="p-4 border-t border-gray-800">
          <UserProfile />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 font-Kanit">
          <div className="w-full max-w-6xl mx-auto px-4 py-6">
            {renderPage()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendAnalytics;