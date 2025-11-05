import SearchBar from '../components/SearchBar';
import JobList from '../components/JobList';

const featuredJobs = [
  {
    id: '1',
    title: 'UI/UX Designer',
    company: 'Teams',
    location: 'Seattle, USA (Remote)',
    timePosted: '1 day ago',
    applicants: 22,
    promoted: true,
    Estimated: '$70k - $90k / year',
  },
  {
    id: '2',
    title: 'UI/UX Designer',
    company: 'Teams',
    location: 'Seattle, USA (Remote)',
    timePosted: '1 day ago',
    applicants: 22,
    promoted: true,
    Estimated: '$70k - $90k / year',
  },
  {
    id: '3',
    title: 'UI/UX Designer',
    company: 'Teams',
    location: 'Seattle, USA (Remote)',
    timePosted: '1 day ago',
    applicants: 22,
    promoted: true,
    Estimated: '$70k - $90k / year',
  },
  {
    id: '4',
    title: 'UI/UX Designer',
    company: 'Teams',
    location: 'Seattle, USA (Remote)',
    timePosted: '1 day ago',
    applicants: 22,
    promoted: true,
    Estimated: '$70k - $90k / year',
  },
  {
    id: '5',
    title: 'UI/UX Designer',
    company: 'Teams',
    location: 'Seattle, USA (Remote)',
    timePosted: '1 day ago',
    applicants: 22,
    promoted: true,
    Estimated: '$70k - $90k / year',
  },
];

const recommendedJobs = [
  {
    id: '6',
    title: 'UI/UX Designer',
    company: 'Teams',
    location: 'Seattle, USA (Remote)',
    timePosted: '1 day ago',
    applicants: 22,
    Estimated: '$70k - $90k / year',
  },
  {
    id: '7',
    title: 'UI/UX Designer',
    company: 'Teams',
    location: 'Seattle, USA (Remote)',
    timePosted: '1 day ago',
    applicants: 22,
    Estimated: '$70k - $90k / year',
  },
  {
    id: '8',
    title: 'UI/UX Designer',
    company: 'Teams',
    location: 'Seattle, USA (Remote)',
    timePosted: '1 day ago',
    applicants: 22,
    Estimated: '$70k - $90k / year',
  },
  {
    id: '9',
    title: 'UI/UX Designer',
    company: 'Teams',
    location: 'Seattle, USA (Remote)',
    timePosted: '1 day ago',
    applicants: 22,
    Estimated: '$70k - $90k / year',
  },
  {
    id: '10',
    title: 'UI/UX Designer',
    company: 'Teams',
    location: 'Seattle, USA (Remote)',
    timePosted: '1 day ago',
    applicants: 22,
    Estimated: '$70k - $90k / year',
  },
  {
    id: '11',
    title: 'UI/UX Designer',
    company: 'Teams',
    location: 'Seattle, USA (Remote)',
    timePosted: '1 day ago',
    applicants: 22,
    Estimated: '$70k - $90k / year',
  },
];

const latestJobs = [
  {
    id: '12',
    title: 'UI/UX Designer',
    company: 'Teams',
    location: 'Seattle, USA (Remote)',
    timePosted: '1 day ago',
    applicants: 22,
    Estimated: '$70k - $90k / year',
  },
  {
    id: '13',
    title: 'UI/UX Designer',
    company: 'Teams',
    location: 'Seattle, USA (Remote)',
    timePosted: '1 day ago',
    applicants: 22,
    Estimated: '$70k - $90k / year',
  },
  {
    id: '14',
    title: 'UI/UX Designer',
    company: 'Teams',
    location: 'Seattle, USA (Remote)',
    timePosted: '1 day ago',
    applicants: 22,
    Estimated: '$70k - $90k / year',
  },
  {
    id: '15',
    title: 'UI/UX Designer',
    company: 'Teams',
    location: 'Seattle, USA (Remote)',
    timePosted: '1 day ago',
    applicants: 22,
    Estimated: '$70k - $90k / year',
  },
  {
    id: '16',
    title: 'UI/UX Designer',
    company: 'Teams',
    location: 'Seattle, USA (Remote)',
    timePosted: '1 day ago',
    applicants: 22,
    Estimated: '$70k - $90k / year',
  },
  {
    id: '17',
    title: 'UI/UX Designer',
    company: 'Teams',
    location: 'Seattle, USA (Remote)',
    timePosted: '1 day ago',
    applicants: 22,
    Estimated: '$70k - $90k / year',
  },
];

export default function Dashboard() {
  return (
    <div className="flex-1 p-6 lg:p-8 bg-gray-50 overflow-auto">
      <div className="max-w-[1800px] mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Find your Dream Job, <span className="text-blue-600">Albert</span>!
          </h1>
          <p className="text-gray-600">
            Explore the latest job openings and apply for the best opportunities available today!
          </p>
        </div>

        <SearchBar />

        <JobList
          title="Featured Jobs"
          link="See Featured Jobs"
          horizontal={true}
          jobs={featuredJobs}
        />

        <JobList
          title="Recommended Jobs"
          link="See Recommended Jobs"
          jobs={recommendedJobs}
        />
        <JobList
          title="Latest Jobs"
          link="See Latest Jobs"
          jobs={latestJobs}
        />
      </div>
    </div>
  );
}
