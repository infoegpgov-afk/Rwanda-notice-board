export const metadata = {
  title: 'News Article',
  description: 'Read the full article',
};

export default function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">News Article: {params.slug}</h1>
        <p className="text-gray-600">
          Article content coming soon. This will display the full article based on the slug.
        </p>
      </div>
    </div>
  );
}
