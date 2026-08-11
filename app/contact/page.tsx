export const metadata = {
  title: 'Contact Us',
  description: 'Contact Rwanda Notice Board',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-center text-gray-600 mb-8">
          Have feedback or want to contribute? We'd love to hear from you.
        </p>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rwanda-600"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rwanda-600"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rwanda-600"
                placeholder="Subject"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rwanda-600 h-32"
                placeholder="Your message"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-rwanda-600 text-white py-2 rounded-lg font-bold hover:bg-rwanda-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
