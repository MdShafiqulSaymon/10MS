# IELTS Course Product Page Using Next , Docker with CICD

A modern, responsive product page for the IELTS Course by Munzereen Shahid, built with Next.js, TypeScript, and TailwindCSS.

## 🚀 Features

### Core Features
- **Course Hero Section** - Dynamic title and course overview
- **Course Information** - Comprehensive course details
- **Instructor Profiles** - Interactive instructor showcase
- **YouTube Video Player** - Embedded course trailer and content
- **SEO Optimization** - Complete meta tags and structured data
- **State Management** - Centralized store with custom hooks

### Advanced Features
- **Course Curriculum** - Detailed lesson and module breakdown
- **Course Structure** - Visual course layout with PDF resources
- **Learning Outcomes** - What students will achieve
- **Exclusive Features** - Course highlights and benefits
- **FAQ Section** - Comprehensive Q&A with support
- **Related Courses** - Additional course recommendations
- **Accordion Components** - Collapsible content sections
- **Empty State Handling** - Graceful error and loading states

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **State Management**: Custom hooks with centralized store
- **API Integration**: 10 Minute School Discovery API
- **Type Safety**: Comprehensive TypeScript definitions
- **Deployment**: Docker with GitHub Actions CI/CD

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (optional)
- Git

## 🏃‍♂️ Quick Start

### Option 1: Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/MdShafiqulSaymon/10MS.git
   cd 10MS
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Option 2: Using Docker (Recommended)

#### Pull from Docker Hub
```bash
# Pull the latest image
docker pull youknowwhoitssaymon/10ms:latest

# Run the container
docker run -p 3000:3000 youknowwhoitssaymon/10ms:latest
```

#### Build locally
```bash
# Build the Docker image
docker build -t 10ms .

# Run the container
docker run -p 3000:3000 10ms
```

## 📁 Project Structure

```
├── types/                        # Global type definitions
│   ├── cache-life.d.ts          # Cache lifecycle types
│   ├── package.json             # Type package config
│   └── app/
│       ├── layout.ts            # Layout types
│       └── page.ts              # Page types
├── public/                       # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
└── src/
    ├── app/
    │   ├── favicon.ico          # App favicon
    │   ├── globals.css          # Global styles
    │   ├── layout.tsx           # Root layout
    │   ├── not-found.tsx        # 404 page
    │   └── page.tsx             # Main product page
    ├── components/
    │   ├── CourseHero.tsx       # Hero section
    │   ├── CourseInfo.tsx       # Course information
    │   ├── Footer.tsx           # Site footer
    │   ├── Header.tsx           # Site header
    │   ├── Instructor.tsx       # Instructor profiles
    │   ├── SeoHead.tsx          # SEO meta tags
    │   ├── VideoPlay.tsx        # YouTube video player
    │   ├── Common/
    │   │   ├── AccordionItem.tsx # Reusable accordion
    │   │   └── EmptyState.tsx   # Empty state component
    │   ├── CourseDetails/
    │   │   └── CourseDetails.tsx # Course about section
    │   ├── CourseStructure/
    │   │   ├── CourseStructure.tsx # Course layout
    │   │   ├── FreePDFSection.tsx  # PDF resources
    │   │   └── StructureCard.tsx   # Structure card component
    │   ├── Curriculums/
    │   │   ├── Curriculum.tsx    # Course curriculum
    │   │   ├── LeassonItem.tsx   # Individual lesson
    │   │   └── ModuleItem.tsx    # Course module
    │   ├── FAQ/
    │   │   ├── FAQ.tsx           # FAQ section
    │   │   ├── FAQItem.tsx       # Individual FAQ
    │   │   └── FAQSupportSection.tsx # Support section
    │   ├── FeatureCourse/
    │   │   ├── CourseExclusiveFeatures.tsx # Exclusive features
    │   │   └── FeatureCard.tsx   # Feature card component
    │   ├── RelatedCourses/
    │   │   ├── CourseCard.tsx    # Course card
    │   │   └── RelatedCourses.tsx # Related courses section
    │   └── WhatYouLearn/
    │       ├── LearnItem.tsx     # Learning outcome item
    │       └── WhatYouLearn.tsx  # Learning outcomes section
    ├── hooks/
    │   └── useIELTSData.ts      # Custom hook for IELTS data
    ├── providers/
    │   └── store-provider.tsx   # Zustand store provider
    ├── store/
    │   └── useIELTSStore.ts     # Global state management
    └── types/
        └── types.ts             # Application type definitions
```

## 🔧 Key Components

### Layout Components
- **Header.tsx** - Navigation and branding
- **Footer.tsx** - Site footer with links
- **SeoHead.tsx** - Dynamic SEO meta tags

### Course Components
- **CourseHero.tsx** - Main hero section with title and overview
- **CourseInfo.tsx** - Detailed course information
- **Instructor.tsx** - Instructor profiles and credentials
- **VideoPlay.tsx** - YouTube video player integration

### Feature Sections
- **WhatYouLearn/** - Learning outcomes and objectives
- **FeatureCourse/** - Exclusive course features and benefits
- **CourseStructure/** - Course layout and PDF resources
- **Curriculums/** - Detailed curriculum with lessons and modules
- **RelatedCourses/** - Additional course recommendations
- **FAQ/** - Frequently asked questions with support

### Utility Components
- **Common/AccordionItem.tsx** - Reusable accordion component
- **Common/EmptyState.tsx** - Loading and error state handling

## 🏗️ Architecture

### State Management
The application uses a centralized store pattern:
```typescript
// Custom hook for IELTS data
useIELTSData.ts - API data fetching and caching

// Global state store
useIELTSStore.ts - Centralized state management

// Store provider
store-provider.tsx - Context provider wrapper
```

### Type Safety
```typescript
// Global type definitions
types/types.ts - Application-wide interfaces

// App-specific types
types/app/ - Layout and page type definitions
```

- **Endpoint**: `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course`
- **Language Support**: `?lang=en` or `?lang=bn`
- **Required Header**: `X-TENMS-SOURCE-PLATFORM: web`

## 🌐 API Integration

The application integrates with the 10 Minute School Discovery API:

## 🔧 Development Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

```

## 🐳 Docker Commands

```bash
# Build image
docker build -t 10ms .

# Run container
docker run -p 3000:3000 10ms

# Run in background
docker run -d -p 3000:3000 --name 10ms

# Stop container
docker stop 10ms

# Remove container
docker rm 10ms
```

## 🚀 CI/CD Pipeline

The project includes a complete GitHub Actions workflow that:

1. **Builds** the Next.js application
2. **Creates** Docker image
3. **Pushes** to Docker Hub
4. **Deploys** automatically on push to main branch

### Setup CI/CD:

1. Add Docker Hub credentials to GitHub Secrets:
   - `DOCKERHUB_USERNAME`
   - `DOCKERHUB_TOKEN`

2. Update the workflow file with your Docker Hub repository name

## 🎨 Customization

### Styling
- Modify `src/app/globals.css` for global styles
- Update component-specific styles in individual files
- Customize TailwindCSS configuration in `tailwind.config.js`


## 🐛 Troubleshooting

### Common Issues:

1. **Port already in use**
   ```bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **Docker build fails**
   ```bash
   # Clean Docker cache
   docker system prune -a
   ```

3. **API connection issues**
   - Check your internet connection
   - Verify API endpoint is accessible
   - Ensure correct headers are being sent

## 📄 License

This project is created for the 10 Minute School Frontend Engineer Assessment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you encounter any issues or have questions about the implementation, please create an issue in the GitHub repository.

---

**Built with ❤️ for 10 Minute School Frontend Engineer Assessment**
