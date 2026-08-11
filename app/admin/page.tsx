export const metadata = {
  title: 'Admin Dashboard',
  description: 'Rwanda Notice Board Admin Panel',
};

export default function AdminDashboard() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">📊 Admin Dashboard</h1>
        <p className="text-gray-600 mb-8">
          Welcome to the Rwanda Notice Board Admin Panel.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Users', value: '0', icon: '👥' },
            { label: 'Published Articles', value: '0', icon: '📰' },
            { label: 'Pending Reports', value: '0', icon: '📋' },
            { label: 'Subscribers', value: '0', icon: '📧' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-rwanda-600">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'News Management', link: '/admin/news' },
              { title: 'Announcements', link: '/admin/announcements' },
              { title: 'Jobs', link: '/admin/jobs' },
              { title: 'Users', link: '/admin/users' },
              { title: 'Reports', link: '/admin/reports' },
              { title: 'Settings', link: '/admin/settings' },
            ].map((action) => (
              <button
                key={action.title}
                className="p-4 bg-rwanda-50 border border-rwanda-200 rounded-lg hover:bg-rwanda-100 transition text-left font-semibold text-rwanda-700"
              >
                {action.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
