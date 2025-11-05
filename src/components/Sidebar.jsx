import { MapPin, ChevronDown } from 'lucide-react';
import coverImage from '../assets/sidebar/cover.png';
import profileImage from '../assets/sidebar/profile.webp';

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-[350px] bg-[F4F4F4] border-r border-gray-200 p-6 space-y-4 overflow-y-auto h-screen sticky top-0">
      <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-visible relative">
        {/* Background Cover Image */}
        <div className="relative h-32 overflow-hidden rounded-t-2xl">
          <img
            src={coverImage}
            alt="Cover"
            className="w-full h-full object-fill"
          />
        </div>

        {/* Profile Image */}
        <div className="absolute left-1/2 top-14 transform -translate-x-1/2">
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
          />
        </div>

        {/* Info Section */}
        <div className="text-center px-6 pb-6 pt-8">
          <h3 className="text-lg font-semibold text-gray-900">Albert Flores</h3>
          <p className="text-sm text-gray-600 mt-1">
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web
          </p>

          <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Clinton, Maryland</span>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Profile Visitors</span>
          <span className="text-sm font-bold text-blue-600">140</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Resume Viewers</span>
          <span className="text-sm font-bold text-blue-600">20</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">My Jobs</span>
          <span className="text-sm font-bold text-blue-600">88</span>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition">
        <div>
          <h4 className="font-semibold text-sm">My calendar</h4>
          <p className="text-xs text-gray-500">Upcoming Interviews</p>
        </div>
        <div>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </aside>
  );
}
