import Link from 'next/link';
import { NewsCard } from '@/components/NewsCard';

export const metadata = {
  title: 'Home',
  description: 'Welcome to Rwanda Notice Board - Your trusted source for news and information',
};

// Mock data for development
const featuredNews = [
  {
    id: '1',
    title: 'Rwanda Launches Digital Transformation Initiative',
    titleKin: 'Rwanda yatangije Porogaramu y\'Ubwenge bw\'Interineti',
    slug: 'rwanda-digital-transformation',
    excerpt: 'Rwanda announces major digital transformation initiative to boost tech sector.',
    excerptKin: 'Rwanda yatangije Porogaramu yo guteza imbere ikoranabuhanga.',
    content: 'The Government of Rwanda has announced a comprehensive digital transformation initiative...',
    contentKin: 'Guverinema y\'u Rwanda yatangije Porogaramu...',
    authorId: 'author1',
    categoryId: 'cat1',
    featuredImage: null,
    isFeatured: true,
    isUrgent: false,
    verificationStatus: 'VERIFIED',
    publishedAt: new Date(),
  },
  {
    id: '2',
    title: 'Kigali Tech Hub Wins International Recognition',
    titleKin: 'Kigali Tech Hub yahuye n\'ubwenge mu Isi',
    slug: 'kigali-tech-hub-recognition',
    excerpt: 'Kigali Innovation City receives prestigious international tech award.',
    excerptKin: 'Kigali Innovation City yahuye n\'agihugu k\'ubwenge.',
    content: 'Kigali Innovation City has been recognized as one of the leading technology hubs in Africa...',
    contentKin: 'Kigali Innovation City yemewe nk\'amu mahanga y\'ubwenge...',
    authorId: 'author2',
    categoryId: 'cat1',
    featuredImage: null,
    isFeatured: true,
    isUrgent: false,
    verificationStatus: 'VERIFIED',
    publishedAt: new Date(),
  },
];

const featuredJobs = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    slug: 'senior-software-engineer',
    company: 'Tech Rwanda Inc',
    location: 'Kigali',
    salary: '2,500,000 - 3,500,000 RWF',
    isFeatured: true,
    isUrgent: false,
    verificationStatus: 'VERIFIED',
    publishedAt: new Date(),
  },
];

const featuredEvents = [
  {
    id: '1',
    title: 'Rwanda Tech Summit 2024',
    slug: 'rwanda-tech-summit-2024',
    location: 'Kigali Convention Center',
    eventDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
    isFeatured: true,
    isUrgent: false,
    verificationStatus: 'VERIFIED',
    publishedAt: new Date(),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rwanda-700 to-rwanda-600 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              🇷🇼 Rwanda Notice Board
            </h1>
            <p className="text-xl md:text-2xl mb-2 font-semibold">
              Amakuru • Amatangazo • Amahirwe
            </p>
            <p className="text-lg text-gray-100 mb-8">
              Your trusted source for news, announcements, jobs, opportunities, education, health, business, events, tourism and more.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/news"
                className="bg-white text-rwanda-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                📰 Read News
              </Link>
              <Link
                href="/jobs"
                className="bg-rwanda-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-rwanda-900 transition border-2 border-white"
              >
                💼 View Jobs
              </Link>
              <Link
                href="/search"
                className="bg-rwanda-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-rwanda-900 transition border-2 border-white"
              >
                🔍 Search
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: '📰', label: 'News', href: '/news' },
              { icon: '📢', label: 'Announcements', href: '/announcements' },
              { icon: '💼', label: 'Jobs', href: '/jobs' },
              { icon: '⭐', label: 'Opportunities', href: '/opportunities' },
              { icon: '🎓', label: 'Education', href: '/education' },
              { icon: '🏥', label: 'Health', href: '/health' },
              { icon: '🏢', label: 'Business', href: '/business' },
              { icon: '🎉', label: 'Events', href: '/events' },
              { icon: '✈️', label: 'Tourism', href: '/tourism' },
              { icon: '📱', label: 'More', href: '/about' },
            ].map((category) => (
              <Link
                key={category.label}
                href={category.href}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center hover:text-rwanda-600"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="font-semibold text-sm">{category.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured News</h2>
            <Link href="/news" className="text-rwanda-600 hover:text-rwanda-700 font-semibold">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredNews.map((article) => (
              <NewsCard
                key={article.id}
                id={article.id}
                title={article.title}
                slug={article.slug}
                excerpt={article.excerpt}
                isFeatured={article.isFeatured}
                isUrgent={article.isUrgent}
                verificationStatus={article.verificationStatus}
                publishedAt={article.publishedAt}
                featuredImage={article.featuredImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Jobs</h2>
            <Link href="/jobs" className="text-rwanda-600 hover:text-rwanda-700 font-semibold">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredJobs.map((job) => (
              <Link
                key={job.id}
                href={`/jobs/${job.slug}`}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-2 hover:text-rwanda-600">{job.title}</h3>
                <p className="text-gray-600 mb-2">{job.company}</p>
                <p className="text-sm text-gray-500 mb-3">📍 {job.location}</p>
                <p className="text-rwanda-600 font-semibold">{job.salary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <Link href="/events" className="text-rwanda-600 hover:text-rwanda-700 font-semibold">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.slug}`}
                className="bg-gradient-to-r from-rwanda-50 to-blue-50 p-6 rounded-lg border-l-4 border-rwanda-600 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-2 hover:text-rwanda-600">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-2">📅 {event.eventDate?.toLocaleDateString()}</p>
                <p className="text-sm text-gray-600">📍 {event.location}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rwanda-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest news, job opportunities, and announcements from Rwanda.
          </p>
          <form className="max-w-md mx-auto flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-rwanda-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
