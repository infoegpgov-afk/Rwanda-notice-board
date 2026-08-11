export const metadata = {
  title: 'News',
  description: 'Latest news from Rwanda',
};

export default function NewsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">📰 Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <p className="text-gray-600 col-span-full">
            News content coming soon. Content will be fetched from the database and displayed here.
          </p>
        </div>
      </div>
    </div>
  );
}
