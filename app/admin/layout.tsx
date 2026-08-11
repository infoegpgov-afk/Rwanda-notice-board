export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-rwanda-700 text-white py-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">🔐 Admin Panel</h1>
          <p className="text-sm text-rwanda-100">Rwanda Notice Board Management</p>
        </div>
      </div>
      {children}
    </div>
  );
}
