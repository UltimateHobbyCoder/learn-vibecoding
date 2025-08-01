import React from 'react'

interface ChapterProps {
  onNext: () => void
}

const Chapter8: React.FC<ChapterProps> = () => {
  return (
    <div>
      <h1>Chapter 8: Your Vibe Coding Toolkit - Resources, Communities & Next Steps</h1>
      
      <p>
        You've learned the fundamentals, built your first project, and understand the pitfalls 
        to avoid. Now it's time to accelerate your journey with the best resources, tools, 
        and communities in the vibe coding ecosystem.
      </p>

      <p>
        This chapter is your comprehensive resource guide - bookmark it, because you'll be 
        coming back to it as you grow from beginner to expert vibe coder.
      </p>

      <h2>🎥 Essential Learning Channels & Content</h2>
      
      <h3>YouTube Channels for Vibe Coders</h3>
      
      <div style={{background: 'var(--color-accent)', padding: '1rem', borderRadius: '8px', margin: '1rem 0'}}>
        <h4>🚀 <strong>@UltimateHobbyCoder</strong></h4>
        <p>
          My YouTube channel where I post software and hardware projects, tutorials, and tips for vibe coding.
        </p>
        <p><em>Subscribe: https://www.youtube.com/@UltimateHobbyCoder</em></p>
      </div>

      <h4>General Programming & AI</h4>
      <ul>
        <li><strong>Fireship:</strong> Quick, engaging tech tutorials and industry insights</li>
        <li><strong>Code with Antonio:</strong> Full-stack project tutorials with modern tools</li>
        <li><strong>Web Dev Simplified:</strong> Clear explanations of web development concepts</li>
        <li><strong>Theo - t3.gg:</strong> React, TypeScript, and modern web development</li>
        <li><strong>Ben Awad:</strong> Programming tutorials and career advice</li>
        <li><strong>Coding with Lewis:</strong> AI and machine learning content</li>
        <li><strong>AI Jason:</strong> AI tools and automation for developers</li>
      </ul>

      <h4>AI-Specific Channels</h4>
      <ul>
        <li><strong>AI Explained:</strong> Latest AI developments and tool reviews</li>
        <li><strong>Matthew Berman:</strong> AI tool demonstrations and comparisons</li>
        <li><strong>Prompt Engineering:</strong> Advanced prompting techniques</li>
        <li><strong>AI Advantage:</strong> Practical AI applications for productivity</li>
        <li><strong>CreatorMagic:</strong> A little less tech savvy, focusing on creative applications of AI based tools for normal users</li>
      </ul>

      <h3>Podcasts for the Commute</h3>
      <ul>
        <li><strong>Syntax:</strong> Web development discussions and trends</li>
        <li><strong>The Changelog:</strong> Developer-focused interviews and news</li>
        <li><strong>AI Breakdown:</strong> Weekly AI news and analysis</li>
        <li><strong>Practical AI:</strong> Real-world AI applications</li>
        <li><strong>The Stack Overflow Podcast:</strong> Developer community insights</li>
      </ul>

      <h2>🤖 Essential AI Coding Tools</h2>
      
      <h3>Primary Coding Assistants</h3>
      
      <h4>GitHub Copilot</h4>
      <ul>
        <li><strong>Best for:</strong> Inline code completion and suggestions</li>
        <li><strong>Pricing:</strong> $10/month individual, $19/month business</li>
        <li><strong>Strengths:</strong> Excellent context awareness, huge training dataset</li>
        <li><strong>Integration:</strong> VS Code, JetBrains, Vim, and more</li>
      </ul>

      <h4>Cursor IDE</h4>
      <ul>
        <li><strong>Best for:</strong> AI-first development environment</li>
        <li><strong>Pricing:</strong> Free tier, $20/month Pro</li>
        <li><strong>Strengths:</strong> Built-in AI chat, codebase understanding</li>
        <li><strong>Special feature:</strong> AI can read and understand your entire project</li>
      </ul>

      <h4>Windsurf IDE</h4>
      <ul>
        <li><strong>Best for:</strong> Collaborative AI development</li>
        <li><strong>Pricing:</strong> Free tier available</li>
        <li><strong>Strengths:</strong> Real-time collaboration, multi-file editing</li>
        <li><strong>Special feature:</strong> AI can modify multiple files simultaneously</li>
      </ul>

      <h4>Replit</h4>
      <ul>
        <li><strong>Best for:</strong> Browser-based development with AI</li>
        <li><strong>Pricing:</strong> Free tier, $20/month Hacker plan</li>
        <li><strong>Strengths:</strong> Instant deployment, collaborative coding</li>
        <li><strong>Perfect for:</strong> Quick prototypes and learning</li>
      </ul>

      <h3>Specialized AI Tools</h3>

      <h4>Code Generation</h4>
      <ul>
        <li><strong>v0.dev:</strong> AI-powered React component generation</li>
        <li><strong>Bolt.new:</strong> Full-stack application generator</li>
        <li><strong>Lovable:</strong> AI app builder with deployment</li>
        <li><strong>Claude Dev:</strong> Advanced coding assistance with reasoning</li>
        <li><strong>Tabnine:</strong> Code completion across languages</li>
      </ul>

      <h4>Design & UI</h4>
      <ul>
        <li><strong>Figma AI:</strong> Design generation and iteration</li>
        <li><strong>Uizard:</strong> Design to code conversion</li>
        <li><strong>Galileo AI:</strong> UI design from text descriptions</li>
        <li><strong>Relume:</strong> Website wireframe and content generation</li>
      </ul>

      <h4>Documentation & Learning</h4>
      <ul>
        <li><strong>Mintlify:</strong> Auto-generate documentation</li>
        <li><strong>Codeium:</strong> Free GitHub Copilot alternative</li>
        <li><strong>Phind:</strong> AI search engine for developers</li>
        <li><strong>Perplexity:</strong> Research assistant with citations</li>
      </ul>

      <h2>💻 Development Environment Setup</h2>
      
      <h3>Essential VS Code Extensions</h3>
      <ul>
        <li><strong>GitHub Copilot:</strong> AI pair programming</li>
        <li><strong>Auto Rename Tag:</strong> Sync HTML/JSX tag changes</li>
        <li><strong>Bracket Pair Colorizer:</strong> Visual bracket matching</li>
        <li><strong>ES7+ React/Redux snippets:</strong> Quick React code generation</li>
        <li><strong>Prettier:</strong> Code formatting</li>
        <li><strong>ESLint:</strong> Code quality and error detection</li>
        <li><strong>Live Server:</strong> Local development server</li>
        <li><strong>GitLens:</strong> Enhanced Git integration</li>
        <li><strong>Thunder Client:</strong> API testing within VS Code</li>
        <li><strong>Tailwind CSS IntelliSense:</strong> CSS framework assistance</li>
      </ul>

      <h3>Browser Tools</h3>
      <ul>
        <li><strong>React Developer Tools:</strong> Debug React applications</li>
        <li><strong>Redux DevTools:</strong> State management debugging</li>
        <li><strong>Web Developer:</strong> Various web development utilities</li>
        <li><strong>JSON Viewer:</strong> Format and validate JSON</li>
        <li><strong>ColorZilla:</strong> Color picker and palette generator</li>
      </ul>

      <h3>Command Line Tools</h3>
      <ul>
        <li><strong>Node.js:</strong> JavaScript runtime for backend development</li>
        <li><strong>Git:</strong> Version control (essential for all projects)</li>
        <li><strong>npm/yarn/pnpm:</strong> Package managers</li>
        <li><strong>Vite:</strong> Fast build tool for modern web apps</li>
        <li><strong>Vercel CLI:</strong> Easy deployment to Vercel</li>
        <li><strong>Netlify CLI:</strong> Deploy to Netlify from terminal</li>
      </ul>

      <h2>🌐 Hosting & Deployment Platforms</h2>
      
      <h3>Frontend Hosting (Free Tiers Available)</h3>
      <ul>
        <li><strong>Vercel:</strong> Perfect for React/Next.js apps, automatic deployments</li>
        <li><strong>Netlify:</strong> Great for static sites, form handling included</li>
        <li><strong>GitHub Pages:</strong> Free hosting for static sites from repositories</li>
        <li><strong>Surge.sh:</strong> Simple static web publishing</li>
        <li><strong>Firebase Hosting:</strong> Google's hosting platform with CDN</li>
      </ul>

      <h3>Full-Stack Platforms</h3>
      <ul>
        <li><strong>Railway:</strong> Deploy apps with databases easily</li>
        <li><strong>Render:</strong> Full-stack hosting with automatic SSL</li>
        <li><strong>Heroku:</strong> Classic platform-as-a-service (limited free tier)</li>
        <li><strong>DigitalOcean App Platform:</strong> Simple app deployment</li>
        <li><strong>AWS Amplify:</strong> Full-stack development platform</li>
      </ul>

      <h3>Database Hosting</h3>
      <ul>
        <li><strong>PlanetScale:</strong> MySQL-compatible serverless database</li>
        <li><strong>Supabase:</strong> Open-source Firebase alternative</li>
        <li><strong>MongoDB Atlas:</strong> Cloud MongoDB hosting</li>
        <li><strong>Airtable:</strong> Database with spreadsheet interface</li>
        <li><strong>FaunaDB:</strong> Serverless, globally distributed database</li>
      </ul>

      <h2>📚 Learning Resources & Documentation</h2>
      
      <h3>Interactive Learning Platforms</h3>
      <ul>
        <li><strong>FreeCodeCamp:</strong> Comprehensive web development curriculum</li>
        <li><strong>Codecademy:</strong> Interactive coding lessons</li>
        <li><strong>Scrimba:</strong> Interactive screencasts for web development</li>
        <li><strong>The Odin Project:</strong> Full-stack web development course</li>
        <li><strong>Frontend Mentor:</strong> Real-world project challenges</li>
        <li><strong>Exercism:</strong> Code practice with mentorship</li>
      </ul>

      <h3>Documentation & References</h3>
      <ul>
        <li><strong>MDN Web Docs:</strong> Definitive web technology documentation</li>
        <li><strong>React Documentation:</strong> Official React guides and API reference</li>
        <li><strong>Tailwind CSS Docs:</strong> Comprehensive utility-first CSS framework</li>
        <li><strong>Next.js Documentation:</strong> React framework for production</li>
        <li><strong>TypeScript Handbook:</strong> Learn typed JavaScript</li>
        <li><strong>Node.js Documentation:</strong> Server-side JavaScript reference</li>
      </ul>

      <h3>Project Ideas & Inspiration</h3>
      <ul>
        <li><strong>GitHub Explore:</strong> Trending repositories and projects</li>
        <li><strong>Product Hunt:</strong> Latest tech products and tools</li>
        <li><strong>Dribbble:</strong> Design inspiration for your apps</li>
        <li><strong>Awwwards:</strong> Best web design examples</li>
        <li><strong>CodePen:</strong> Frontend code examples and experiments</li>
        <li><strong>Dev.to:</strong> Developer articles and project showcases</li>
      </ul>

      <h2>👥 Communities & Networking</h2>
      
      <h3>Discord Communities</h3>
      <ul>
        <li><strong>The Programmer's Hangout:</strong> General programming community</li>
        <li><strong>Reactiflux:</strong> React developers community</li>
        <li><strong>AI/ML Community:</strong> Artificial intelligence discussions</li>
        <li><strong>Indie Hackers Discord:</strong> Entrepreneur developers</li>
        <li><strong>Frontend Developers:</strong> UI/UX and frontend focus</li>
      </ul>

      <h3>Reddit Communities</h3>
      <ul>
        <li><strong>r/webdev:</strong> Web development discussions</li>
        <li><strong>r/programming:</strong> General programming content</li>
        <li><strong>r/reactjs:</strong> React-specific community</li>
        <li><strong>r/MachineLearning:</strong> AI and ML discussions</li>
        <li><strong>r/cscareerquestions:</strong> Developer career advice</li>
        <li><strong>r/learnprogramming:</strong> Beginner-friendly community</li>
      </ul>

      <h3>Professional Networks</h3>
      <ul>
        <li><strong>LinkedIn:</strong> Professional networking and job opportunities</li>
        <li><strong>Twitter/X:</strong> Follow developers and AI researchers</li>
        <li><strong>Mastodon:</strong> Decentralized social network popular with developers</li>
        <li><strong>Stack Overflow:</strong> Q&A for programming questions</li>
        <li><strong>GitHub:</strong> Code collaboration and portfolio building</li>
      </ul>

      <h3>Local Communities</h3>
      <ul>
        <li><strong>Meetup.com:</strong> Find local developer meetups</li>
        <li><strong>Google Developer Groups:</strong> Local tech communities</li>
        <li><strong>Tech conferences:</strong> JSConf, ReactConf, AI conferences</li>
        <li><strong>Hackathons:</strong> Build projects in teams over weekends</li>
        <li><strong>Coworking spaces:</strong> Network with other developers</li>
      </ul>

      <h2>🎯 Project-Based Learning Path</h2>
      
      <h3>Beginner Projects (Weeks 1-4)</h3>
      <ol>
        <li><strong>Personal Portfolio:</strong> HTML, CSS, basic JavaScript</li>
        <li><strong>Todo List App:</strong> React with local storage</li>
        <li><strong>Weather App:</strong> API integration practice</li>
        <li><strong>Calculator:</strong> JavaScript logic and UI</li>
        <li><strong>Random Quote Generator:</strong> API calls and DOM manipulation</li>
      </ol>

      <h3>Intermediate Projects (Weeks 5-12)</h3>
      <ol>
        <li><strong>Task Management App:</strong> Full CRUD with backend</li>
        <li><strong>Recipe Finder:</strong> External API integration</li>
        <li><strong>Budget Tracker:</strong> Data visualization with charts</li>
        <li><strong>Blog Platform:</strong> User authentication and content management</li>
        <li><strong>E-commerce Store:</strong> Shopping cart and payment integration</li>
      </ol>

      <h3>Advanced Projects (Month 3+)</h3>
      <ol>
        <li><strong>Social Media App:</strong> Real-time features with WebSocket</li>
        <li><strong>Project Management Tool:</strong> Complex state management</li>
        <li><strong>AI-Powered App:</strong> Integrate AI APIs for unique functionality</li>
        <li><strong>Multi-tenant SaaS:</strong> Scalable architecture patterns</li>
        <li><strong>Mobile App:</strong> React Native or cross-platform development</li>
      </ol>

      <h2>💰 Monetization & Career Resources</h2>
      
      <h3>Freelancing Platforms</h3>
      <ul>
        <li><strong>Upwork:</strong> Large marketplace for freelance projects</li>
        <li><strong>Fiverr:</strong> Service-based freelancing platform</li>
        <li><strong>Toptal:</strong> Premium developer marketplace</li>
        <li><strong>99designs:</strong> Design and development contests</li>
        <li><strong>PeoplePerHour:</strong> UK-focused freelancing platform</li>
        <li><strong>Codementor:</strong> Mentoring and project assistance</li>
      </ul>

      <h3>Job Boards</h3>
      <ul>
        <li><strong>AngelList:</strong> Startup jobs and equity opportunities</li>
        <li><strong>Remote.co:</strong> Remote-first job opportunities</li>
        <li><strong>We Work Remotely:</strong> Remote job listings</li>
        <li><strong>Stack Overflow Jobs:</strong> Developer-focused positions</li>
        <li><strong>GitHub Jobs:</strong> Tech company positions</li>
        <li><strong>Indeed/LinkedIn:</strong> Traditional job search platforms</li>
      </ul>

      <h3>Building Your Brand</h3>
      <ul>
        <li><strong>Personal Website:</strong> Showcase your projects and skills</li>
        <li><strong>GitHub Portfolio:</strong> Open source contributions and projects</li>
        <li><strong>Technical Blog:</strong> Share your learning journey</li>
        <li><strong>YouTube Channel:</strong> Create coding tutorials and project walkthroughs</li>
        <li><strong>Speaking:</strong> Present at meetups and conferences</li>
        <li><strong>Mentoring:</strong> Help other developers learn</li>
      </ul>

      <h2>🔧 Productivity Tools & Workflows</h2>
      
      <h3>Project Management</h3>
      <ul>
        <li><strong>Notion:</strong> All-in-one workspace for notes and planning</li>
        <li><strong>Trello:</strong> Kanban boards for project organization</li>
        <li><strong>GitHub Projects:</strong> Integrated project management</li>
        <li><strong>Linear:</strong> Modern issue tracking for development teams</li>
        <li><strong>Asana:</strong> Team collaboration and task management</li>
      </ul>

      <h3>Design Tools</h3>
      <ul>
        <li><strong>Figma:</strong> Collaborative interface design</li>
        <li><strong>Canva:</strong> Quick graphics and social media assets</li>
        <li><strong>Unsplash:</strong> Free high-quality photos</li>
        <li><strong>Coolors:</strong> Color palette generator</li>
        <li><strong>Font Awesome:</strong> Icon library</li>
      </ul>

      <h3>Automation Tools</h3>
      <ul>
        <li><strong>Zapier:</strong> Connect different apps and automate workflows</li>
        <li><strong>IFTTT:</strong> Simple automation recipes</li>
        <li><strong>GitHub Actions:</strong> CI/CD and workflow automation</li>
        <li><strong>Netlify Functions:</strong> Serverless function deployment</li>
        <li><strong>Make (Integromat):</strong> Advanced automation platform</li>
      </ul>

      <h2>📈 Staying Updated & Continuous Learning</h2>
      
      <h3>News & Trends</h3>
      <ul>
        <li><strong>Hacker News:</strong> Tech industry news and discussions</li>
        <li><strong>TechCrunch:</strong> Startup and technology news</li>
        <li><strong>The Verge:</strong> Technology and culture coverage</li>
        <li><strong>Ars Technica:</strong> In-depth technology analysis</li>
        <li><strong>Wired:</strong> Technology and its impact on society</li>
      </ul>

      <h3>Newsletters</h3>
      <ul>
        <li><strong>JavaScript Weekly:</strong> Latest JS news and articles</li>
        <li><strong>React Status:</strong> React ecosystem updates</li>
        <li><strong>AI Research:</strong> Latest AI developments</li>
        <li><strong>Frontend Focus:</strong> Frontend development news</li>
        <li><strong>Node Weekly:</strong> Node.js ecosystem updates</li>
        <li><strong>CSS-Tricks Newsletter:</strong> Web design and development tips</li>
      </ul>

      <h3>Advanced Learning</h3>
      <ul>
        <li><strong>Pluralsight:</strong> Technical skill development</li>
        <li><strong>Udemy:</strong> Comprehensive course marketplace</li>
        <li><strong>Coursera:</strong> University-level computer science courses</li>
        <li><strong>edX:</strong> Free courses from top universities</li>
        <li><strong>MIT OpenCourseWare:</strong> Free MIT course materials</li>
        <li><strong>Khan Academy:</strong> Computer programming fundamentals</li>
      </ul>

      <h2>🎯 Your 90-Day Action Plan</h2>
      
      <h3>Days 1-30: Foundation Building</h3>
      <ul>
        <li>✅ Complete this vibe coding guide</li>
        <li>🔧 Set up your development environment</li>
        <li>📺 Subscribe to <strong>@UltimateHobbyCoder</strong> and 3 other learning channels</li>
        <li>🎯 Build your first 3 beginner projects</li>
        <li>💬 Join 2 developer communities</li>
        <li>📝 Start a learning journal</li>
      </ul>

      <h3>Days 31-60: Skill Development</h3>
      <ul>
        <li>🚀 Build 2 intermediate projects</li>
        <li>🎨 Create your portfolio website</li>
        <li>🔗 Connect with 10 developers online</li>
        <li>📖 Read 2 technical books or complete online courses</li>
        <li>🎤 Share your learning journey (blog, social media, or videos)</li>
        <li>🔍 Attend your first local meetup or online event</li>
      </ul>

      <h3>Days 61-90: Professional Preparation</h3>
      <ul>
        <li>💼 Build your professional online presence</li>
        <li>🎯 Complete one advanced project</li>
        <li>🤝 Find a mentor or become one</li>
        <li>💰 Start exploring freelance opportunities</li>
        <li>📊 Contribute to open source projects</li>
        <li>🎯 Define your specialization path</li>
      </ul>

      <h2>🚀 Final Words: Your Journey Starts Now</h2>
      
      <p>
        Vibe coding isn't just a new way to write code - it's a paradigm shift that's 
        democratizing software development. You're joining a movement that's making 
        programming more accessible, creative, and human-centered.
      </p>

      <blockquote>
        <p>
          <strong>Remember:</strong> The best time to start was yesterday. The second best 
          time is now. Every expert was once a beginner, and every pro was once an amateur. 
          Your vibe coding journey begins with a single prompt.
        </p>
      </blockquote>

      <h3>What Makes Successful Vibe Coders</h3>
      <ul>
        <li><strong>Consistency:</strong> Code a little bit every day</li>
        <li><strong>Curiosity:</strong> Always ask "what if?" and "how can I improve this?"</li>
        <li><strong>Community:</strong> Share your journey and help others</li>
        <li><strong>Persistence:</strong> Every bug is a learning opportunity</li>
        <li><strong>Adaptability:</strong> Embrace new tools and techniques</li>
      </ul>

      <h3>Your Next Steps</h3>
      <ol>
        <li><strong>Pick your first real project</strong> - Something you actually want to use</li>
        <li><strong>Start building today</strong> - Don't wait for the "perfect" moment</li>
        <li><strong>Share your progress</strong> - Document your journey publicly</li>
        <li><strong>Help others</strong> - Teach what you learn</li>
        <li><strong>Never stop learning</strong> - The field evolves rapidly</li>
      </ol>

      <div style={{background: 'var(--color-primary)', color: 'white', padding: '2rem', borderRadius: '8px', margin: '2rem 0', textAlign: 'center'}}>
        <h3>🎉 Congratulations!</h3>
        <p>
          You've completed the comprehensive guide to vibe coding. You now have the knowledge, 
          tools, and resources to build amazing applications with AI assistance.
        </p>
        <p>
          <strong>The future of development is collaborative, creative, and accessible. 
          You're ready to be part of it.</strong>
        </p>
      </div>

      <div className="call-to-action">
        <p>
          <strong>Ready to start your vibe coding journey?</strong> Begin with your first project, 
          join the community, and start building the future!
        </p>
        <button onClick={() => window.location.reload()}>Start the Guide Again →</button>
      </div>

      <div className="reading-time">
        <em>Estimated reading time: 25 minutes</em>
      </div>
    </div>
  )
}

export default Chapter8
