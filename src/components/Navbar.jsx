import { Search, Bell } from 'lucide-react';
import logo from '../assets/logo/logo.png'
import profileImage from '../assets/sidebar/profile.webp';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={logo} alt="" />
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-blue-600 font-medium text-sm hover:text-blue-700">Find Jobs</a>
            <a href="#" className="text-gray-600 font-medium text-sm hover:text-gray-900">Top Companies</a>
            <a href="#" className="text-gray-600 font-medium text-sm hover:text-gray-900">Job Tracker</a>
            <a href="#" className="text-gray-600 font-medium text-sm hover:text-gray-900">My Calendar</a>
            <a href="#" className="text-gray-600 font-medium text-sm hover:text-gray-900">Documents</a>
            <a href="#" className="text-gray-600 font-medium text-sm hover:text-gray-900">Messages</a>
            <a href="#" className="text-gray-600 font-medium text-sm hover:text-gray-900">Notifications</a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center bg-gray-50 rounded-lg px-4 py-2 space-x-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none text-sm w-48"
            />
          </div>

          <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            Resume Builder
          </button>

          <button className="relative p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <img
            src={profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
}
