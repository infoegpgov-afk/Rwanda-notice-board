export const SITE_NAME = 'Rwanda Notice Board';
export const SITE_DESCRIPTION = 'Amakuru • Amatangazo • Amahirwe';
export const SITE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const USER_ROLES = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  AUTHOR: 'AUTHOR',
  MODERATOR: 'MODERATOR',
  USER: 'USER',
} as const;

export const VERIFICATION_STATUS = {
  VERIFIED: 'VERIFIED',
  PENDING: 'PENDING',
  UNVERIFIED: 'UNVERIFIED',
} as const;

export const CONTENT_TYPES = {
  NEWS: 'NEWS',
  ANNOUNCEMENT: 'ANNOUNCEMENT',
  JOB: 'JOB',
  OPPORTUNITY: 'OPPORTUNITY',
  EDUCATION: 'EDUCATION',
  HEALTH: 'HEALTH',
  BUSINESS: 'BUSINESS',
  EVENT: 'EVENT',
  TOURISM: 'TOURISM',
} as const;

export const ITEMS_PER_PAGE = 12;
export const ITEMS_PER_ADMIN_PAGE = 20;
