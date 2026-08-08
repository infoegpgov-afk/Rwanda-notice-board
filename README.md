# 🇷🇼 Rwanda Notice Board

**Amakuru • Amatangazo • Amahirwe 🇷🇼**

A professional Rwanda information platform for sharing reliable news, announcements, jobs, opportunities, education, health, business, events, tourism and other useful information for Rwandans.

## Features

- 📰 News Management
- 📢 Announcements
- 💼 Jobs & Opportunities
- 🎓 Education
- 🏥 Health Information
- 🏢 Business
- 🎉 Events
- ✈️ Tourism
- 🔍 Global Search
- 👤 User Authentication
- 🛡️ Role-Based Access Control
- ✅ Content Verification
- 📊 Admin Dashboard
- 🌐 Multi-language Support (Kinyarwanda, English)
- 📱 Mobile-First Responsive Design
- 🔒 Secure & SEO Optimized

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth/Auth.js
- **Validation**: Zod
- **Security**: bcryptjs for password hashing

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/infoegpgov-afk/Rwanda-notice-board.git
cd Rwanda-notice-board
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your PostgreSQL connection in `.env.local`:
```
DATABASE_URL="postgresql://user:password@localhost:5432/rwanda_notice_board"
NEXTAUTH_SECRET="your-32-char-random-secret-here"
```

5. Generate Prisma client:
```bash
npm run prisma:generate
```

6. Run database migrations:
```bash
npx prisma migrate dev --name init
```

7. Seed the database (optional):
```bash
npm run prisma:seed
```

8. Start the development server:
```bash
npm run dev
```

9. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Admin Dashboard

Access the admin dashboard at `/admin` with admin credentials:
- **Email**: admin@example.com
- **Password**: AdminPassword123! (change in production)

## User Roles

- **SUPER_ADMIN**: Full system access
- **ADMIN**: Administrative functions
- **EDITOR**: Content editing and moderation
- **AUTHOR**: Content creation
- **MODERATOR**: Content review and reporting
- **USER**: Basic user access

## Project Structure

```
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # Reusable components
│   ├── lib/             # Utilities and helpers
│   ├── types/           # TypeScript types
│   └── middleware.ts    # Authentication middleware
├── prisma/
│   ├── schema.prisma    # Database schema
│   └── seed.ts          # Seed data
├── public/              # Static assets
└── README.md
```

## Available Routes

### Public Routes
- `/` - Homepage
- `/news` - News list
- `/news/[slug]` - News detail
- `/announcements` - Announcements
- `/jobs` - Job listings
- `/opportunities` - Opportunities
- `/education` - Education info
- `/health` - Health info
- `/business` - Business info
- `/events` - Events
- `/tourism` - Tourism
- `/search` - Global search
- `/about` - About page
- `/contact` - Contact page
- `/login` - Login
- `/register` - Register

### Admin Routes
- `/admin` - Dashboard
- `/admin/news` - News management
- `/admin/announcements` - Announcements management
- `/admin/users` - User management
- `/admin/reports` - Content reports
- `/admin/settings` - Settings

## Database Schema

The application uses a comprehensive PostgreSQL schema with the following main tables:

- `User` - User accounts and profiles
- `News` - News articles
- `Announcement` - Public announcements
- `Job` - Job listings
- `Opportunity` - General opportunities
- `Education` - Educational content
- `Health` - Health information
- `Business` - Business information
- `Event` - Events
- `Tourism` - Tourism information
- `Category` - Content categories
- `ContentReport` - User reports
- `Verification` - Content verification status
- `Newsletter` - Newsletter subscribers
- `ContactMessage` - Contact form submissions

## Content Verification

All major content types support three verification statuses:
- **VERIFIED** - Content verified by administrator
- **PENDING** - Under review
- **UNVERIFIED** - Not verified

## Security Features

- Password hashing with bcryptjs
- Role-based authorization
- Secure session management
- Input validation with Zod
- SQL injection prevention via Prisma
- Environment-based configuration
- CORS protection
- Secure headers

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Generate Prisma client
npm run prisma:generate

# Validate Prisma schema
npm run prisma:validate

# Create and run migrations
npm run prisma:migrate -- [migration-name]

# Seed database
npm run prisma:seed

# Open Prisma Studio
npm run prisma:studio
```

## Contributing

Contributions are welcome! Please follow the existing code style and submit pull requests to the `develop` branch.

## License

MIT License - see LICENSE file for details

## Support

For support, please contact: support@rwandanoticeboard.rw

---

**Made with ❤️ for Rwanda**
