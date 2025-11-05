import { Search, MapPin, ChevronDown } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Job Title, Company, or Keyword"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>Select Location</option>
            <option>Seattle, USA (Remote)</option>
            <option>New York, USA</option>
            <option>San Francisco, USA</option>
          </select>
          <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative">
          <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>Job Type</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Contract</option>
            <option>Remote</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        <button className="bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center space-x-2">
          <Search className="w-4 h-4" />
          <span>Search</span>
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="text-base text-gray-600 mr-2 mt-1">Similar:</span>
        <button className="px-4 py-1.5 bg-gray-200 text-green-700 rounded-full text-sm hover:bg-gray-300 transition">
          Frontend Developer
        </button>
        <button className="px-4 py-1.5 bg-gray-200 text-green-700 rounded-full text-sm hover:bg-gray-300 transition">
          Backend Developer
        </button>
        <button className="px-4 py-1.5 bg-gray-200 text-green-700 rounded-full text-sm hover:bg-gray-300 transition">
          Graphic Designer
        </button>
      </div>
    </div>
  );
}
