import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

export const newsSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  titleKin: z.string().optional(),
  excerpt: z.string().min(10, 'Excerpt must be at least 10 characters'),
  excerptKin: z.string().optional(),
  content: z.string().min(50, 'Content must be at least 50 characters'),
  contentKin: z.string().optional(),
  categoryId: z.string().min(1, 'Category is required'),
  isFeatured: z.boolean().optional(),
  isUrgent: z.boolean().optional(),
});

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().optional(),
});

export const reportSchema = z.object({
  reason: z.enum(['FALSE_INFORMATION', 'SPAM', 'INAPPROPRIATE_CONTENT', 'SCAM', 'COPYRIGHT_ISSUE', 'OTHER']),
  description: z.string().optional(),
  reporterEmail: z.string().email('Invalid email address').optional(),
});
