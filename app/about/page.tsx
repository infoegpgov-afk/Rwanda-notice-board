export const metadata = {
  title: 'About Us',
  description: 'About Rwanda Notice Board',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">About Rwanda Notice Board</h1>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p>
            <strong>Rwanda Notice Board</strong> is a professional information platform dedicated to providing reliable news, announcements, job opportunities, and other valuable information for Rwandans.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-3">Our Mission</h2>
          <p>
            To empower Rwandans with timely, accurate, and accessible information about news, jobs, education, business, health, events, and tourism opportunities.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-3">Our Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reliability and accuracy</li>
            <li>Transparency and integrity</li>
            <li>Community engagement</li>
            <li>Digital inclusion</li>
            <li>Kinyarwanda and English support</li>
          </ul>
          <h2 className="text-2xl font-bold mt-6 mb-3">Contact Us</h2>
          <p>
            Have questions or feedback? <a href="/contact" className="text-rwanda-600 font-bold hover:text-rwanda-700">Get in touch</a>
          </p>
        </div>
      </div>
    </div>
  );
}
