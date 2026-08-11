export type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'EDITOR' | 'AUTHOR' | 'MODERATOR' | 'USER';

export type VerificationStatus = 'VERIFIED' | 'PENDING' | 'UNVERIFIED';

export type ContentType = 'NEWS' | 'ANNOUNCEMENT' | 'JOB' | 'OPPORTUNITY' | 'EDUCATION' | 'HEALTH' | 'BUSINESS' | 'EVENT' | 'TOURISM';

export type ReportReason = 'FALSE_INFORMATION' | 'SPAM' | 'INAPPROPRIATE_CONTENT' | 'SCAM' | 'COPYRIGHT_ISSUE' | 'OTHER';

export interface User {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
}

export interface ContentItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  authorId: string;
  categoryId: string;
  isFeatured: boolean;
  isUrgent: boolean;
  verificationStatus: VerificationStatus;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface News extends ContentItem {
  featuredImage: string | null;
}

export interface Announcement extends ContentItem {
  featuredImage: string | null;
}

export interface Job extends ContentItem {
  company: string;
  location: string;
  jobType: string;
  salary: string | null;
  applicationUrl: string | null;
  deadlineAt: Date | null;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string | null;
  contentType: ContentType;
  isActive: boolean;
}
