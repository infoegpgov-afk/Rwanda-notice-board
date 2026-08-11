import Link from 'next/link';
import { formatDate } from '@/lib/utils';

interface NewsCardProps {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  isFeatured: boolean;
  isUrgent: boolean;
  verificationStatus: string;
  publishedAt: Date | null;
  featuredImage?: string | null;
}

export function NewsCard({
  title,
  slug,
  excerpt,
  isFeatured,
  isUrgent,
  verificationStatus,
  publishedAt,
  featuredImage,
}: NewsCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
      {/* Image */}
      {featuredImage && (
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          <img
            src={featuredImage}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition"
          />
          {isUrgent && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              🚨 URGENT
            </div>
          )}
          {isFeatured && (
            <div className="absolute top-2 left-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              ⭐ Featured
            </div>
          )}
        </div>
      )}

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 hover:text-rwanda-600">
          <Link href={`/news/${slug}`}>{title}</Link>
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{publishedAt && formatDate(publishedAt)}</span>
          {verificationStatus === 'VERIFIED' && (
            <span className="text-green-600 font-semibold">✓ Verified</span>
          )}
        </div>
      </div>
    </article>
  );
}
