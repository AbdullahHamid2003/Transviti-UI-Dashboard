import JobCard from './JobCard';

export default function JobList({ title, link, horizontal, jobs }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        {link && (
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline">
            {link}
          </a>
        )}
      </div>

      {horizontal ? (
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      )}

    </div>
  );
}
