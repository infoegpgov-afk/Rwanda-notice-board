export const metadata = {
  title: 'Search',
  description: 'Search for news and information',
};

export default function SearchPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">🔍 Search</h1>
        <div className="max-w-2xl mx-auto">
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search news, jobs, announcements..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rwanda-600"
            />
            <button
              type="submit"
              className="bg-rwanda-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-rwanda-700 transition"
            >
              Search
            </button>
          </form>
        </div>
        <p className="text-gray-600 text-center mt-8">
          Search results will be displayed here.
        </p>
      </div>
    </div>
  );
}
