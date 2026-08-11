export const metadata = {
  title: 'Jobs',
  description: 'Latest job opportunities in Rwanda',
};

export default function JobsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">💼 Job Opportunities</h1>
        <p className="text-gray-600">
          Job listings will be displayed here.
        </p>
      </div>
    </div>
  );
}
