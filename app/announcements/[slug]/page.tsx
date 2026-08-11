export const metadata = {
  title: 'Announcement',
  description: 'Read the full announcement',
};

export default function AnnouncementDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Announcement: {params.slug}</h1>
        <p className="text-gray-600">
          Announcement content coming soon.
        </p>
      </div>
    </div>
  );
}
