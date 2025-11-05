import { MapPin, Clock, Users, Bookmark, Briefcase, DollarSign } from 'lucide-react';
import logo from '../assets/logo/logo.png';

export default function JobCard({ title, company, location, timePosted, applicants, promoted, Estimated }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-w-[280px] sm:w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

      {/* Promoted Tag */}
      {promoted && (
        <span className="inline-block bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 text-xs font-medium px-3 py-1 rounded-full mb-3 shadow-sm">
          Promoted
        </span>
      )}

      {/* Header Section */}
      <div className="flex items-start space-x-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
          <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 mb-0.5 truncate text-lg">{title}</h3>
          <p className="text-sm text-gray-600 truncate flex items-center gap-1">
            <Briefcase className="w-4 h-4 text-gray-400" />
            {company}
          </p>
        </div>
      </div>

      {/* Job Info */}
      <div className="space-y-2.5 mb-5">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
          <span className="truncate">{location}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
            <span>{timePosted}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
            <span className="text-blue-600 font-medium hover:underline cursor-pointer">
              {applicants} applicants
            </span>
          </div>
        </div>
        {/* Salary Section */}
        <div className="flex items-center text-sm text-gray-600">
          <DollarSign className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
          <span className="px-3 py-1.5 bg-green-100 text-green-800 font-semibold rounded-full text-sm">Estimated: {Estimated}</span>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex items-center space-x-2">
        <button className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 active:scale-[0.98] transition transform w-40 shadow-md">
          Apply Now
        </button>
        <button className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition">
          <Bookmark className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}