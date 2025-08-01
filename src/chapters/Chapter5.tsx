import React from 'react'

interface ChapterProps {
  onNext: () => void
}

const Chapter5: React.FC<ChapterProps> = ({ onNext }) => {
  return (
    <div>
      <h1>Chapter 5: Building Real Applications - Full-Stack Vibe Coding</h1>
      
      <p>
        Theory is great, but let's build something real. In this chapter, we'll create a complete 
        full-stack application from scratch using vibe coding techniques. You'll see how to go 
        from idea to deployed application in a matter of hours, not weeks.
      </p>

      <p>
        We're going to build <strong>TaskFlow</strong> - a project management app that teams can 
        actually use. It'll have user authentication, real-time updates, file uploads, and all 
        the features you'd expect from a modern web application.
      </p>

      <h2>The Project: TaskFlow - A Team Project Manager</h2>
      
      <p>
        Here's what we're building and why it's perfect for learning full-stack vibe coding:
      </p>

      <h3>Core Features</h3>
      
      <ul>
        <li><strong>User Management:</strong> Sign up, login, user profiles</li>
        <li><strong>Project Creation:</strong> Create and manage multiple projects</li>
        <li><strong>Task Management:</strong> Add, edit, assign, and track tasks</li>
        <li><strong>Team Collaboration:</strong> Invite team members, assign roles</li>
        <li><strong>File Sharing:</strong> Upload and share project files</li>
        <li><strong>Real-time Updates:</strong> See changes as they happen</li>
        <li><strong>Dashboard:</strong> Overview of all projects and tasks</li>
      </ul>

      <h3>Why This Project Is Perfect for Learning</h3>
      
      <ul>
        <li><strong>Real-world complexity:</strong> Not a toy app, but something people would actually use</li>
        <li><strong>Full-stack coverage:</strong> Frontend, backend, database, and deployment</li>
        <li><strong>Modern patterns:</strong> REST APIs, authentication, file handling</li>
        <li><strong>Scalable architecture:</strong> Built to handle growth</li>
      </ul>

      <h2>The Vibe Coding Approach to Full-Stack</h2>
      
      <p>
        Traditional full-stack development requires deep knowledge of multiple technologies. 
        Vibe coding lets us focus on what we want to build, not how to configure webpack 
        or set up database schemas.
      </p>

      <h3>Our Technology Stack</h3>
      
      <p>We'll use AI-friendly technologies that work well together:</p>
      
      <ul>
        <li><strong>Frontend:</strong> React with TypeScript (modern, well-documented)</li>
        <li><strong>Backend:</strong> Node.js with Express (simple, AI understands it well)</li>
        <li><strong>Database:</strong> PostgreSQL with Prisma (type-safe, great AI support)</li>
        <li><strong>Authentication:</strong> NextAuth.js (handles complexity for us)</li>
        <li><strong>File Storage:</strong> Cloudinary (AI-friendly setup)</li>
        <li><strong>Deployment:</strong> Vercel (frontend) + Railway (backend)</li>
      </ul>

      <h3>The Vibe Coding Development Process</h3>
      
      <p>Instead of planning everything upfront, we'll use the vibe coding approach:</p>
      
      <ol>
        <li><strong>Start with the UI:</strong> Build what users see first</li>
        <li><strong>Add fake data:</strong> Make it look real before making it real</li>
        <li><strong>Build the backend gradually:</strong> One feature at a time</li>
        <li><strong>Connect piece by piece:</strong> Get one thing working, then the next</li>
        <li><strong>Deploy early and often:</strong> See it working online immediately</li>
      </ol>

      <h2>Phase 1: Building the Frontend</h2>
      
      <p>
        Let's start by building the user interface. This gives us something visual to work 
        with and helps us understand what data we'll need.
      </p>

      <h3>Setting Up the Project</h3>
      
      <p>Here's our first prompt to get started:</p>

      <pre><code>{`Prompt: "Create a React TypeScript project for a project management app called TaskFlow. 

Features needed:
- Dashboard with project overview
- Project list with cards showing progress
- Task board with drag-and-drop columns (To Do, In Progress, Done)
- User profile section
- Clean, modern design similar to Linear or Notion

Use Tailwind CSS for styling and make it fully responsive. 
Create placeholder data so we can see how it looks with real content.
Set up the basic routing structure."`}</code></pre>

      <h3>What This Prompt Gets Us</h3>
      
      <ul>
        <li>Complete React project structure</li>
        <li>Multiple components for different sections</li>
        <li>Tailwind CSS setup and configuration</li>
        <li>Realistic placeholder data</li>
        <li>Basic routing between pages</li>
        <li>Responsive design that works on mobile</li>
      </ul>

      <h3>Iterating on the Design</h3>
      
      <p>Once we have the basic structure, we'll refine it:</p>

      <pre><code>{`Follow-up prompts:
- "Add a sidebar navigation with icons for Dashboard, Projects, Tasks, Team, and Settings"
- "Create a better task card design with priority indicators, due dates, and assignee avatars"
- "Add a search bar and filtering options to the project list"
- "Make the task board support drag and drop between columns"
- "Add dark mode support with a toggle button"`}</code></pre>

      <h2>Phase 2: Adding State Management</h2>
      
      <p>
        Real applications need to manage state across components. We'll add proper state 
        management to handle user data, projects, and tasks.
      </p>

      <h3>State Management Prompt</h3>

      <pre><code>{`Prompt: "Add state management to the TaskFlow app using React Context or Zustand.

State needed:
- User data (name, email, avatar, role)
- Projects list with metadata
- Tasks organized by project and status
- UI state (sidebar collapsed, dark mode, active filters)

Create proper TypeScript interfaces for all data types.
Add functions to:
- Add/edit/delete projects
- Add/edit/delete tasks
- Move tasks between columns
- Filter and search functionality

Make sure all components can access and update the shared state."`}</code></pre>

      <h3>What This Adds</h3>
      
      <ul>
        <li>Centralized state management</li>
        <li>TypeScript interfaces for type safety</li>
        <li>CRUD operations for projects and tasks</li>
        <li>Real interactivity (not just static UI)</li>
        <li>Proper data flow between components</li>
      </ul>

      <h2>Phase 3: Building the Backend API</h2>
      
      <p>
        Now we'll create a backend API to handle data persistence and user authentication.
      </p>

      <h3>Backend Setup Prompt</h3>

      <pre><code>{`Prompt: "Create a Node.js Express backend for the TaskFlow project management app.

Features needed:
- RESTful API with proper HTTP methods
- PostgreSQL database with Prisma ORM
- User authentication with JWT tokens
- CRUD endpoints for users, projects, and tasks
- File upload support for project attachments
- Input validation and error handling
- CORS setup for frontend connection

Database schema:
- Users (id, name, email, password_hash, avatar_url, role, created_at)
- Projects (id, name, description, created_by, team_members, created_at, updated_at)
- Tasks (id, title, description, status, priority, assigned_to, project_id, due_date, created_at)

Include proper TypeScript types and comprehensive error handling."`}</code></pre>

      <h3>API Endpoints We'll Get</h3>
      
      <ul>
        <li><strong>Authentication:</strong> /auth/register, /auth/login, /auth/verify</li>
        <li><strong>Users:</strong> GET/PUT /users/profile, GET /users/search</li>
        <li><strong>Projects:</strong> GET/POST/PUT/DELETE /projects</li>
        <li><strong>Tasks:</strong> GET/POST/PUT/DELETE /tasks</li>
        <li><strong>Files:</strong> POST /upload, GET /files/:id</li>
      </ul>

      <h2>Phase 4: Database Design and Setup</h2>
      
      <p>
        We'll set up our database schema and connect everything together.
      </p>

      <h3>Database Setup Prompt</h3>

      <pre><code>{`Prompt: "Set up the database for TaskFlow using Prisma with PostgreSQL.

Create a schema that supports:
- User management with secure password handling
- Projects with team member associations
- Tasks with status tracking and assignments
- File attachments linked to projects
- Activity logging for project changes

Include:
- Proper foreign key relationships
- Indexes for performance
- Default values and constraints
- Migration files for database setup
- Seed data for development testing

Make sure the schema is optimized for common queries like:
- Getting all projects for a user
- Getting all tasks for a project
- Getting user's assigned tasks across projects"`}</code></pre>

      <h3>Database Features</h3>
      
      <ul>
        <li>Normalized schema with proper relationships</li>
        <li>Performance optimizations</li>
        <li>Data validation at the database level</li>
        <li>Migration system for schema changes</li>
        <li>Seed data for testing</li>
      </ul>

      <h2>Phase 5: Authentication and Security</h2>
      
      <p>
        Security is crucial for any real application. We'll implement proper authentication 
        and authorization.
      </p>

      <h3>Authentication Prompt</h3>

      <pre><code>{`Prompt: "Implement secure authentication for TaskFlow.

Features needed:
- User registration with email verification
- Secure login with password hashing (bcrypt)
- JWT token-based authentication
- Password reset functionality
- Protected routes on both frontend and backend
- Role-based access control (admin, member, viewer)

Security measures:
- Input sanitization and validation
- Rate limiting on auth endpoints
- Secure password requirements
- HTTPS enforcement
- Token expiration and refresh

Frontend integration:
- Login/register forms with proper validation
- Persistent login state
- Automatic token refresh
- Logout functionality
- Protected route components"`}</code></pre>

      <h2>Phase 6: Real-time Features</h2>
      
      <p>
        Modern applications need real-time updates. We'll add WebSocket support for live 
        collaboration features.
      </p>

      <h3>Real-time Updates Prompt</h3>

      <pre><code>{`Prompt: "Add real-time collaboration features to TaskFlow using WebSockets.

Real-time features:
- Live task updates when team members make changes
- Online user presence indicators
- Real-time notifications for task assignments
- Live activity feed showing recent project changes
- Typing indicators when users are editing

Implementation:
- Socket.io for WebSocket management
- Room-based communication (one room per project)
- Event-driven updates for task changes
- User presence tracking
- Offline state handling

Frontend updates:
- Real-time task board updates
- Notification system with toast messages
- Online/offline user indicators
- Live activity feed component"`}</code></pre>

      <h2>Phase 7: File Upload and Management</h2>
      
      <p>
        Project management apps need file sharing capabilities. We'll add secure file uploads.
      </p>

      <h3>File Management Prompt</h3>

      <pre><code>{`Prompt: "Add file upload and management to TaskFlow.

Features:
- Drag-and-drop file upload interface
- Support for multiple file types (images, documents, PDFs)
- File preview for images and documents
- File organization by project
- Download and delete capabilities
- File size limits and type validation

Backend implementation:
- Cloudinary integration for file storage
- File metadata storage in database
- Secure file URLs with access control
- File compression for images
- Virus scanning for uploaded files

Frontend features:
- Progress indicators during upload
- File gallery view with thumbnails
- Search and filter uploaded files
- Share files with team members
- File version history"`}</code></pre>

      <h2>Phase 8: Advanced Features</h2>
      
      <p>
        Let's add some advanced features that make TaskFlow truly competitive with 
        commercial project management tools.
      </p>

      <h3>Advanced Features Prompt</h3>

      <pre><code>{`Prompt: "Add advanced project management features to TaskFlow.

Features to implement:
1. Project Templates - predefined project structures
2. Time Tracking - log hours spent on tasks
3. Reporting Dashboard - project analytics and charts
4. Email Notifications - digest emails and urgent alerts
5. Calendar Integration - task due dates in calendar view
6. Bulk Operations - select and modify multiple tasks
7. Project Archiving - archive completed projects
8. Team Permissions - granular access control
9. API Keys - allow third-party integrations
10. Export/Import - backup and restore project data

For each feature, provide:
- Database schema changes if needed
- Backend API endpoints
- Frontend components and UI
- Integration with existing features
- Testing considerations"`}</code></pre>

      <h2>Phase 9: Testing and Quality Assurance</h2>
      
      <p>
        Professional applications need proper testing. We'll add comprehensive test coverage.
      </p>

      <h3>Testing Strategy Prompt</h3>

      <pre><code>{`Prompt: "Add comprehensive testing to TaskFlow application.

Testing types needed:
1. Unit Tests - individual functions and components
2. Integration Tests - API endpoints and database operations
3. End-to-End Tests - complete user workflows
4. Performance Tests - load testing and optimization

Testing setup:
- Jest for unit and integration tests
- React Testing Library for component tests
- Cypress for end-to-end testing
- Lighthouse for performance auditing

Test coverage for:
- Authentication flows
- CRUD operations for projects/tasks
- Real-time features
- File upload functionality
- Error handling and edge cases

Include:
- Automated test running in CI/CD
- Code coverage reporting
- Performance monitoring
- Error tracking with Sentry"`}</code></pre>

      <h2>Phase 10: Deployment and DevOps</h2>
      
      <p>
        Finally, we'll deploy our application and set up proper DevOps practices.
      </p>

      <h3>Deployment Prompt</h3>

      <pre><code>{`Prompt: "Set up production deployment for TaskFlow.

Deployment strategy:
- Frontend: Deploy to Vercel with automatic builds
- Backend: Deploy to Railway with PostgreSQL database
- File Storage: Cloudinary for media files
- Monitoring: Set up error tracking and performance monitoring

DevOps setup:
- GitHub Actions for CI/CD pipeline
- Automated testing before deployment
- Environment variable management
- Database migrations in production
- Backup strategies for data protection

Production optimizations:
- Code splitting and lazy loading
- Image optimization and CDN
- API rate limiting and caching
- Database connection pooling
- SSL certificates and security headers

Monitoring and maintenance:
- Application performance monitoring
- Error tracking and alerting
- Database performance monitoring
- User analytics and usage tracking"`}</code></pre>

      <h2>Lessons Learned from Building TaskFlow</h2>
      
      <p>
        Building a full-stack application with vibe coding teaches us several important lessons:
      </p>

      <h3>What Worked Really Well</h3>
      
      <ul>
        <li><strong>Rapid prototyping:</strong> We built a working UI in hours, not days</li>
        <li><strong>Incremental complexity:</strong> Each phase added value without breaking existing features</li>
        <li><strong>AI-assisted debugging:</strong> When things broke, AI helped fix them quickly</li>
        <li><strong>Modern best practices:</strong> AI suggested secure, scalable patterns</li>
      </ul>

      <h3>Challenges We Overcame</h3>
      
      <ul>
        <li><strong>Integration complexity:</strong> Getting all pieces to work together</li>
        <li><strong>Real-time features:</strong> WebSocket management required careful planning</li>
        <li><strong>Security considerations:</strong> Making sure user data stays protected</li>
        <li><strong>Performance optimization:</strong> Keeping the app fast as it grew</li>
      </ul>

      <h3>Vibe Coding vs. Traditional Development</h3>
      
      <p>If we built TaskFlow traditionally, it would have taken:</p>
      
      <ul>
        <li><strong>Planning phase:</strong> 1-2 weeks of architecture and design</li>
        <li><strong>Setup and configuration:</strong> 2-3 days of tooling setup</li>
        <li><strong>Frontend development:</strong> 3-4 weeks of UI implementation</li>
        <li><strong>Backend development:</strong> 2-3 weeks of API development</li>
        <li><strong>Integration and testing:</strong> 1-2 weeks of connecting everything</li>
        <li><strong>Deployment setup:</strong> 3-5 days of DevOps configuration</li>
      </ul>

      <p>
        <strong>Total traditional time: 8-12 weeks</strong>
      </p>

      <p>With vibe coding, we built the same application in:</p>
      
      <ul>
        <li><strong>Initial UI:</strong> 2-3 hours</li>
        <li><strong>State management:</strong> 1 hour</li>
        <li><strong>Backend API:</strong> 3-4 hours</li>
        <li><strong>Database setup:</strong> 1 hour</li>
        <li><strong>Authentication:</strong> 2 hours</li>
        <li><strong>Real-time features:</strong> 2-3 hours</li>
        <li><strong>File uploads:</strong> 1-2 hours</li>
        <li><strong>Advanced features:</strong> 4-6 hours</li>
        <li><strong>Testing:</strong> 2-3 hours</li>
        <li><strong>Deployment:</strong> 1-2 hours</li>
      </ul>

      <p>
        <strong>Total vibe coding time: 20-30 hours (less than a week!)</strong>
      </p>

      <h2>Scaling Your Vibe Coding Projects</h2>
      
      <p>
        TaskFlow started as a learning project, but with vibe coding, you can scale it 
        into a real business:
      </p>

      <h3>Adding Commercial Features</h3>
      
      <pre><code>{`Prompts for commercial scaling:

"Add subscription billing to TaskFlow using Stripe:
- Multiple pricing tiers with feature limitations
- User seat management for teams
- Billing dashboard and invoice history
- Subscription upgrade/downgrade flows"

"Implement multi-tenancy for TaskFlow:
- Separate data for different organizations
- Custom branding for each tenant
- Admin panel for managing organizations
- Usage analytics and reporting"

"Add marketplace features:
- Third-party app integrations
- Plugin system for custom features
- API marketplace for developers
- Revenue sharing with plugin creators"`}</code></pre>

      <h3>Performance Optimization</h3>
      
      <pre><code>{`Performance optimization prompts:

"Optimize TaskFlow for high-traffic usage:
- Implement Redis caching for frequently accessed data
- Add database query optimization and indexing
- Set up CDN for static assets
- Implement horizontal scaling with load balancers"

"Add advanced monitoring to TaskFlow:
- Real-time performance metrics
- User behavior analytics
- Error tracking and alerting
- Capacity planning and scaling alerts"`}</code></pre>

      <h2>Your Next Full-Stack Project</h2>
      
      <p>
        Now that you've seen how to build TaskFlow, you're ready to tackle any full-stack 
        project. Here are some ideas to practice with:
      </p>

      <h3>Beginner Projects</h3>
      
      <ul>
        <li><strong>Personal Finance Tracker:</strong> Expense tracking with categories and budgets</li>
        <li><strong>Recipe Manager:</strong> Save recipes, meal planning, shopping lists</li>
        <li><strong>Fitness Tracker:</strong> Workout logging, progress tracking, social features</li>
        <li><strong>Book Club App:</strong> Reading lists, reviews, discussion forums</li>
      </ul>

      <h3>Intermediate Projects</h3>
      
      <ul>
        <li><strong>E-commerce Store:</strong> Product catalog, shopping cart, payment processing</li>
        <li><strong>Learning Management System:</strong> Courses, quizzes, progress tracking</li>
        <li><strong>Event Management Platform:</strong> Create events, sell tickets, manage attendees</li>
        <li><strong>Social Media Dashboard:</strong> Multi-platform posting, analytics, scheduling</li>
      </ul>

      <h3>Advanced Projects</h3>
      
      <ul>
        <li><strong>Video Streaming Platform:</strong> Upload, transcode, stream videos</li>
        <li><strong>Real Estate Marketplace:</strong> Property listings, search, virtual tours</li>
        <li><strong>Healthcare Management System:</strong> Patient records, appointments, telemedicine</li>
        <li><strong>Financial Trading Platform:</strong> Portfolio tracking, market data, automated trading</li>
      </ul>

      <blockquote>
        <p>
          <strong>Pro Tip:</strong> For each project, start with the core user journey. 
          What's the one thing users absolutely need to do? Build that first, then add features. 
          TaskFlow's core journey was "create project → add tasks → mark them complete." 
          Everything else was enhancement.
        </p>
      </blockquote>

      <div className="call-to-action">
        <p>
          <strong>Ready to avoid the biggest pitfalls?</strong> In the next chapter, we'll explore 
          common mistakes in vibe coding and how to avoid them, plus when to know you need help.
        </p>
        <button onClick={onNext}>Continue to Chapter 6 →</button>
      </div>

      <div className="reading-time">
        <em>Estimated reading time: 22 minutes</em>
      </div>
    </div>
  )
}

export default Chapter5
