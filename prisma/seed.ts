import { PrismaClient, UserRole, ContentType, VerificationStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Clean up existing data
  await prisma.contentReport.deleteMany({});
  await prisma.verification.deleteMany({});
  await prisma.media.deleteMany({});
  await prisma.newsletterSubscriber.deleteMany({});
  await prisma.contactMessage.deleteMany({});
  await prisma.tourism.deleteMany({});
  await prisma.event.deleteMany({});
  await prisma.business.deleteMany({});
  await prisma.health.deleteMany({});
  await prisma.education.deleteMany({});
  await prisma.opportunity.deleteMany({});
  await prisma.job.deleteMany({});
  await prisma.announcement.deleteMany({});
  await prisma.news.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.session.deleteMany({});
  await prisma.account.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.siteSettings.deleteMany({});

  console.log('✓ Cleaned up existing data');

  // Create users
  const hashedAdminPassword = await bcrypt.hash('AdminPassword123!', 10);
  const hashedAuthorPassword = await bcrypt.hash('AuthorPassword123!', 10);
  const hashedUserPassword = await bcrypt.hash('UserPassword123!', 10);

  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: hashedAdminPassword,
      name: 'Admin User',
      role: UserRole.SUPER_ADMIN,
      isActive: true,
      emailVerified: new Date(),
    },
  });

  const editorUser = await prisma.user.create({
    data: {
      email: 'editor@example.com',
      password: hashedAuthorPassword,
      name: 'Editor User',
      role: UserRole.EDITOR,
      isActive: true,
      emailVerified: new Date(),
    },
  });

  const authorUser = await prisma.user.create({
    data: {
      email: 'author@example.com',
      password: hashedAuthorPassword,
      name: 'Author User',
      role: UserRole.AUTHOR,
      isActive: true,
      emailVerified: new Date(),
    },
  });

  const moderatorUser = await prisma.user.create({
    data: {
      email: 'moderator@example.com',
      password: hashedUserPassword,
      name: 'Moderator User',
      role: UserRole.MODERATOR,
      isActive: true,
      emailVerified: new Date(),
    },
  });

  const regularUser = await prisma.user.create({
    data: {
      email: 'user@example.com',
      password: hashedUserPassword,
      name: 'Regular User',
      role: UserRole.USER,
      isActive: true,
      emailVerified: new Date(),
    },
  });

  console.log('✓ Created users');

  // Create categories for each content type
  const newsCategory = await prisma.category.create({
    data: {
      name: 'Breaking News',
      nameKin: 'Amakuru Yo Kugira Neza',
      slug: 'breaking-news',
      contentType: ContentType.NEWS,
      isActive: true,
    },
  });

  const announcementCategory = await prisma.category.create({
    data: {
      name: 'Government Announcements',
      nameKin: 'Amamenyesho y\'Igihugu',
      slug: 'government-announcements',
      contentType: ContentType.ANNOUNCEMENT,
      isActive: true,
    },
  });

  const jobCategory = await prisma.category.create({
    data: {
      name: 'Tech Jobs',
      nameKin: 'Inzira z\'Akazi',
      slug: 'tech-jobs',
      contentType: ContentType.JOB,
      isActive: true,
    },
  });

  const educationCategory = await prisma.category.create({
    data: {
      name: 'University Scholarships',
      nameKin: 'Amasomo yo mu Kigali',
      slug: 'university-scholarships',
      contentType: ContentType.EDUCATION,
      isActive: true,
    },
  });

  const healthCategory = await prisma.category.create({
    data: {
      name: 'Public Health',
      nameKin: 'Ubwire bw\'Umuntu',
      slug: 'public-health',
      contentType: ContentType.HEALTH,
      isActive: true,
    },
  });

  const businessCategory = await prisma.category.create({
    data: {
      name: 'Business Opportunities',
      nameKin: 'Amahirwe yo mu Bizimu',
      slug: 'business-opportunities',
      contentType: ContentType.BUSINESS,
      isActive: true,
    },
  });

  const eventCategory = await prisma.category.create({
    data: {
      name: 'National Events',
      nameKin: 'Ibiganiro byo mu Rwanda',
      slug: 'national-events',
      contentType: ContentType.EVENT,
      isActive: true,
    },
  });

  const tourismCategory = await prisma.category.create({
    data: {
      name: 'Tourism Destinations',
      nameKin: 'Ahantu ho kumurika',
      slug: 'tourism-destinations',
      contentType: ContentType.TOURISM,
      isActive: true,
    },
  });

  console.log('✓ Created categories');

  // Create sample news articles
  const news1 = await prisma.news.create({
    data: {
      title: 'Rwanda Launches Digital Transformation Initiative',
      titleKin: 'Rwanda yatangije Porogaramu y\'Ubwenge bw\'Interineti',
      slug: 'rwanda-digital-transformation',
      excerpt: 'Rwanda announces major digital transformation initiative to boost tech sector.',
      excerptKin: 'Rwanda yatangije Porogaramu yo guteza imbere ikoranabuhanga.',
      content: 'The Government of Rwanda has announced a comprehensive digital transformation initiative aimed at modernizing key sectors of the economy...',
      contentKin: 'Guverinema y\'u Rwanda yatangije Porogaramu...',
      authorId: editorUser.id,
      categoryId: newsCategory.id,
      isFeatured: true,
      isUrgent: false,
      verificationStatus: VerificationStatus.VERIFIED,
      publishedAt: new Date(),
    },
  });

  const news2 = await prisma.news.create({
    data: {
      title: 'Kigali Tech Hub Wins International Recognition',
      titleKin: 'Kigali Tech Hub yahuye n\'ubwenge mu Isi',
      slug: 'kigali-tech-hub-recognition',
      excerpt: 'Kigali Innovation City receives prestigious international tech award.',
      excerptKin: 'Kigali Innovation City yahuye n\'agihugu k\'ubwenge.',
      content: 'Kigali Innovation City has been recognized as one of the leading technology hubs in Africa...',
      contentKin: 'Kigali Innovation City yemewe nk\'amu mahanga y\'ubwenge...',
      authorId: authorUser.id,
      categoryId: newsCategory.id,
      isFeatured: true,
      isUrgent: false,
      verificationStatus: VerificationStatus.VERIFIED,
      publishedAt: new Date(),
    },
  });

  console.log('✓ Created news articles');

  // Create sample announcements
  const announcement1 = await prisma.announcement.create({
    data: {
      title: 'National Census 2024 Registration Open',
      titleKin: 'Ubwigire bw\'Abantu 2024 Bivugurutswe',
      slug: 'national-census-2024',
      excerpt: 'Citizens can now register for the national census.',
      excerptKin: 'Abantu bashobora kugaba magambo mu bubwigire.',
      content: 'The Rwanda National Statistics Office announces that registration for the 2024 National Census is now open to all citizens...',
      contentKin: 'Ofisi y\'Imibare y\'u Rwanda yatangije...',
      authorId: adminUser.id,
      categoryId: announcementCategory.id,
      isFeatured: true,
      isUrgent: true,
      verificationStatus: VerificationStatus.VERIFIED,
      publishedAt: new Date(),
    },
  });

  console.log('✓ Created announcements');

  // Create sample job listings
  const job1 = await prisma.job.create({
    data: {
      title: 'Senior Software Engineer',
      titleKin: 'Inyanya y\'Umuhanzi w\'Inyama Nkuru',
      slug: 'senior-software-engineer',
      excerpt: 'Exciting opportunity to join a leading tech company in Kigali.',
      excerptKin: 'Amahirwe yo kwakira mu kimpanyi y\'ubwenge.',
      description: 'We are looking for an experienced Senior Software Engineer with 5+ years in full-stack development...',
      descriptionKin: 'Twahamagara Inyanya y\'umuhanzi...',
      company: 'Tech Rwanda Inc',
      location: 'Kigali',
      jobType: 'Full-time',
      salary: '2,500,000 - 3,500,000 RWF',
      authorId: authorUser.id,
      categoryId: jobCategory.id,
      isFeatured: true,
      isUrgent: false,
      verificationStatus: VerificationStatus.VERIFIED,
      applicationUrl: 'https://techrwanda.rw/apply',
      deadlineAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      publishedAt: new Date(),
    },
  });

  console.log('✓ Created jobs');

  // Create sample opportunities
  const opportunity1 = await prisma.opportunity.create({
    data: {
      title: 'African Leadership Scholarship 2024',
      titleKin: 'Inzira zo Kwiga mu Isi',
      slug: 'african-leadership-scholarship',
      excerpt: 'Full scholarship for African leaders to study in top universities.',
      excerptKin: 'Inzira yo kwiga ku ijoro ryo mu isi.',
      description: 'The African Leadership Scholarship provides comprehensive support for exceptional students from Rwanda...',
      descriptionKin: 'Inzira y\'umuryango...',
      opportunityType: 'Full Scholarship',
      authorId: editorUser.id,
      categoryId: educationCategory.id,
      isFeatured: true,
      isUrgent: true,
      verificationStatus: VerificationStatus.VERIFIED,
      applicationUrl: 'https://scholarships.example.com',
      deadlineAt: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000),
      publishedAt: new Date(),
    },
  });

  console.log('✓ Created opportunities');

  // Create sample events
  const event1 = await prisma.event.create({
    data: {
      title: 'Rwanda Tech Summit 2024',
      titleKin: 'Kigali Tech Summit 2024',
      slug: 'rwanda-tech-summit-2024',
      excerpt: 'Join Rwanda\'s largest technology conference.',
      excerptKin: 'Kigali Summit yo mu byubwenge.',
      description: 'Rwanda Tech Summit brings together innovators, entrepreneurs, and tech leaders for three days of networking and learning...',
      descriptionKin: 'Rwanda Tech Summit yitiranya...',
      authorId: authorUser.id,
      categoryId: eventCategory.id,
      isFeatured: true,
      isUrgent: false,
      verificationStatus: VerificationStatus.VERIFIED,
      location: 'Kigali Convention Center',
      eventDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
      eventEndDate: new Date(Date.now() + 62 * 24 * 60 * 60 * 1000),
      eventUrl: 'https://techsummit.rw',
      publishedAt: new Date(),
    },
  });

  console.log('✓ Created events');

  // Create sample tourism content
  const tourism1 = await prisma.tourism.create({
    data: {
      title: 'Volcanoes National Park - Rwanda\'s Crown Jewel',
      titleKin: 'Igihugu c\'Ibirunga - Inzira y\'u Rwanda',
      slug: 'volcanoes-national-park',
      excerpt: 'Experience mountain gorilla trekking in Rwanda\'s most visited park.',
      excerptKin: 'Murika Igihugu c\'Ibirunga...',
      content: 'Volcanoes National Park is home to approximately half of the world\'s mountain gorillas. Visitors can trek through misty forests...',
      contentKin: 'Igihugu c\'Ibirunga...',
      authorId: editorUser.id,
      categoryId: tourismCategory.id,
      isFeatured: true,
      isUrgent: false,
      verificationStatus: VerificationStatus.VERIFIED,
      location: 'Northern Province, Rwanda',
      website: 'https://www.rwandatourism.com',
      phone: '+250 788 123 456',
      publishedAt: new Date(),
    },
  });

  console.log('✓ Created tourism content');

  // Create sample newsletter subscribers
  await prisma.newsletterSubscriber.create({
    data: {
      email: 'subscriber@example.com',
      name: 'Test Subscriber',
      isActive: true,
    },
  });

  console.log('✓ Created newsletter subscribers');

  // Create site settings
  await prisma.siteSettings.create({
    data: {
      key: 'site_name',
      value: 'Rwanda Notice Board',
      description: 'Main site name',
    },
  });

  await prisma.siteSettings.create({
    data: {
      key: 'site_description',
      value: 'Professional Rwanda information platform for news, announcements, jobs, and opportunities',
      description: 'Site description for SEO',
    },
  });

  await prisma.siteSettings.create({
    data: {
      key: 'contact_email',
      value: 'info@rwandanoticeboard.rw',
      description: 'Contact email address',
    },
  });

  console.log('✓ Created site settings');

  console.log('\n✅ Database seed completed successfully!');
  console.log('\nDefault Credentials:');
  console.log('Admin: admin@example.com / AdminPassword123!');
  console.log('Editor: editor@example.com / AuthorPassword123!');
  console.log('Author: author@example.com / AuthorPassword123!');
  console.log('Moderator: moderator@example.com / UserPassword123!');
  console.log('User: user@example.com / UserPassword123!');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
