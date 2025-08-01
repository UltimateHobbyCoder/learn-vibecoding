import React from 'react'

interface ChapterProps {
  onNext: () => void
}

const Chapter6: React.FC<ChapterProps> = ({ onNext }) => {
  return (
    <div>
      <h1>Chapter 6: Avoiding the Pitfalls - What Can Go Wrong and How to Fix It</h1>
      
      <p>
        Vibe coding feels like magic when it works, but like any powerful tool, it can go 
        spectacularly wrong if you're not careful. After seeing hundreds of people learn 
        vibe coding, I've seen the same mistakes over and over again.
      </p>

      <p>
        This chapter is your insurance policy. We'll cover the most common pitfalls, security 
        nightmares to avoid, and most importantly - when to recognize you need help beyond 
        what AI can provide.
      </p>

      <h2>The Big Pitfalls: What Goes Wrong Most Often</h2>
      
      <p>
        Let's start with the mistakes that trip up 90% of vibe coders. Recognizing these 
        patterns will save you hours of frustration.
      </p>

      <h3>Pitfall #1: The "Kitchen Sink" Problem</h3>
      
      <p><strong>What it looks like:</strong> Asking for everything at once</p>

      <pre><code>{`❌ Bad prompt:
"Create a full social media app with user authentication, posts, comments, likes, 
direct messages, video uploads, story features, live streaming, marketplace, 
gaming integration, AI content moderation, and mobile apps for iOS and Android."`}</code></pre>

      <p><strong>Why it fails:</strong></p>
      <ul>
        <li>AI gets overwhelmed and produces generic, broken code</li>
        <li>Too many moving parts to debug when things break</li>
        <li>No clear starting point for testing</li>
        <li>Impossible to iterate effectively</li>
      </ul>

      <p><strong>How to fix it:</strong></p>
      <pre><code>{`✅ Better approach:
1. "Create a simple post-sharing app with user login and basic posts"
2. Test and refine
3. "Add comments to posts"
4. Test and refine  
5. "Add like functionality"
6. Continue building incrementally`}</code></pre>

      <h3>Pitfall #2: The "Assumption Trap"</h3>
      
      <p><strong>What it looks like:</strong> Assuming AI knows your context</p>

      <pre><code>{`❌ Bad prompt:
"Make it responsive"
"Add authentication"
"Fix the styling"
"Make it faster"`}</code></pre>

      <p><strong>Why it fails:</strong></p>
      <ul>
        <li>AI doesn't know what "it" refers to</li>
        <li>No context about current state or requirements</li>
        <li>Generic solutions that don't fit your specific case</li>
        <li>Breaks existing functionality</li>
      </ul>

      <p><strong>How to fix it:</strong></p>
      <pre><code>{`✅ Better prompts:
"Make this contact form responsive for mobile screens under 768px width"
"Add JWT-based authentication to this Express.js API with protected routes"
"Fix the CSS so the sidebar doesn't overlap content on smaller screens"
"Optimize this React component that's re-rendering too often"`}</code></pre>

      <h3>Pitfall #3: The "Copy-Paste Disaster"</h3>
      
      <p><strong>What it looks like:</strong> Blindly copying AI-generated code without understanding</p>

      <p><strong>Why it's dangerous:</strong></p>
      <ul>
        <li>Security vulnerabilities you don't recognize</li>
        <li>Code that works in isolation but breaks your app</li>
        <li>Dependencies and configurations you don't understand</li>
        <li>Impossible to debug when things go wrong</li>
      </ul>

      <p><strong>How to fix it:</strong></p>
      <ol>
        <li><strong>Always ask for explanations:</strong> "Explain what this code does and why"</li>
        <li><strong>Test incrementally:</strong> Add small pieces and test each one</li>
        <li><strong>Read the code:</strong> Even if you don't understand everything, try to follow the logic</li>
        <li><strong>Ask about alternatives:</strong> "What other ways could this be implemented?"</li>
      </ol>

      <h3>Pitfall #4: The "Shiny Object" Syndrome</h3>
      
      <p><strong>What it looks like:</strong> Constantly switching tools and technologies</p>

      <pre><code>{`The journey:
Week 1: "Let's use React!"
Week 2: "Actually, Svelte is better"
Week 3: "Vue seems simpler"  
Week 4: "Maybe vanilla JavaScript?"
Week 5: Back to React, but now with Next.js
Week 6: "Have you heard of Astro?"`}</code></pre>

      <p><strong>Why it's problematic:</strong></p>
      <ul>
        <li>Never actually finish anything</li>
        <li>Shallow knowledge of everything, deep knowledge of nothing</li>
        <li>Constant context switching confuses AI assistants</li>
        <li>Analysis paralysis prevents progress</li>
      </ul>

      <p><strong>How to fix it:</strong></p>
      <ul>
        <li><strong>Pick a stack and stick with it</strong> for at least 3 complete projects</li>
        <li><strong>Focus on solving problems,</strong> not learning new tools</li>
        <li><strong>Remember:</strong> The best technology is the one that ships your project</li>
      </ul>

      <h2>Security Nightmares: Don't Let AI Make You Vulnerable</h2>
      
      <p>
        AI can generate functional code quickly, but it doesn't always generate secure code. 
        Here are the security pitfalls that could get you in serious trouble:
      </p>

      <h3>Security Pitfall #1: Authentication Disasters</h3>
      
      <p><strong>Common AI mistakes:</strong></p>
      <ul>
        <li>Storing passwords in plain text</li>
        <li>Using weak JWT secrets or no secrets at all</li>
        <li>No rate limiting on login attempts</li>
        <li>Exposing sensitive user data in API responses</li>
      </ul>

      <p><strong>Red flags to watch for:</strong></p>
      <pre><code>{`❌ Dangerous code patterns:
// Plain text passwords
user.password = req.body.password;

// Weak JWT secret
jwt.sign(payload, "secret123");

// No input validation
const email = req.body.email; // Could be anything!

// Exposing passwords in responses
res.json(user); // Includes password hash`}</code></pre>

      <p><strong>Security prompts that work:</strong></p>
      <pre><code>{`✅ Secure authentication prompts:
"Implement user authentication with bcrypt password hashing, strong JWT secrets, 
input validation, rate limiting, and ensure no sensitive data is exposed in API responses.
Include proper error handling that doesn't leak information about user existence."

"Add password reset functionality with secure tokens that expire after 15 minutes,
email verification, and protection against timing attacks."`}</code></pre>

      <h3>Security Pitfall #2: Database Injection Vulnerabilities</h3>
      
      <p><strong>What AI might generate:</strong></p>
      <pre><code>{`❌ SQL injection vulnerability:
const query = \`SELECT * FROM users WHERE email = '\${email}'\`;
db.query(query);

❌ NoSQL injection in MongoDB:
User.find({ email: req.body.email }); // Dangerous if email is an object`}</code></pre>

      <p><strong>How to prevent it:</strong></p>
      <pre><code>{`Secure database prompt:
"Create database queries using parameterized statements and proper input validation.
Use Prisma ORM with TypeScript for type safety, or if using raw SQL, ensure all 
user inputs are properly sanitized and use prepared statements."`}</code></pre>

      <h3>Security Pitfall #3: File Upload Vulnerabilities</h3>
      
      <p><strong>Dangerous AI-generated file uploads:</strong></p>
      <ul>
        <li>No file type validation</li>
        <li>No file size limits</li>
        <li>Storing files in publicly accessible locations</li>
        <li>No virus scanning</li>
        <li>Executable files allowed</li>
      </ul>

      <p><strong>Secure file upload prompt:</strong></p>
      <pre><code>{`✅ Secure file upload request:
"Implement file upload with strict validation: only allow specific file types 
(images: jpg, png; documents: pdf, docx), limit file sizes to 10MB, scan for malware,
store files in secure cloud storage with access controls, generate unique filenames
to prevent conflicts, and log all upload activities."`}</code></pre>

      <h3>Security Pitfall #4: API Vulnerabilities</h3>
      
      <p><strong>Common API security mistakes:</strong></p>
      <ul>
        <li>No rate limiting (vulnerable to DDoS)</li>
        <li>Exposing sensitive data in error messages</li>
        <li>No CORS configuration</li>
        <li>Missing input validation</li>
        <li>No API versioning</li>
      </ul>

      <p><strong>Security-focused API prompt:</strong></p>
      <pre><code>{`✅ Secure API development:
"Create a REST API with comprehensive security: rate limiting, input validation,
proper error handling that doesn't expose sensitive information, CORS configuration,
API versioning, request logging, and authentication middleware that validates 
tokens on protected routes."`}</code></pre>

      <h2>Performance Pitfalls: When Your App Becomes Unusably Slow</h2>
      
      <p>
        AI excels at making things work, but not always at making them work efficiently. 
        Here are performance pitfalls that can kill your app:
      </p>

      <h3>Frontend Performance Issues</h3>
      
      <p><strong>React performance killers AI might create:</strong></p>
      <ul>
        <li>Unnecessary re-renders on every state change</li>
        <li>Loading all data at once instead of pagination</li>
        <li>No image optimization</li>
        <li>Massive bundle sizes</li>
        <li>No caching strategies</li>
      </ul>

      <p><strong>Performance-focused prompts:</strong></p>
      <pre><code>{`✅ Optimized React development:
"Create a React component with performance optimizations: use React.memo for 
expensive components, implement virtual scrolling for large lists, add image 
lazy loading, implement proper caching with React Query, and use code splitting
for better bundle sizes."`}</code></pre>

      <h3>Backend Performance Issues</h3>
      
      <p><strong>Database performance killers:</strong></p>
      <ul>
        <li>N+1 query problems</li>
        <li>Missing database indexes</li>
        <li>Fetching entire datasets instead of pagination</li>
        <li>No caching layer</li>
        <li>Synchronous operations blocking the event loop</li>
      </ul>

      <p><strong>Performance-focused backend prompts:</strong></p>
      <pre><code>{`✅ Optimized backend development:
"Create database queries with proper indexing, implement pagination for large datasets,
add Redis caching for frequently accessed data, use database connection pooling,
and ensure all I/O operations are asynchronous to prevent blocking."`}</code></pre>

      <h2>The Debugging Nightmare: When Everything Breaks</h2>
      
      <p>
        Debugging AI-generated code can be uniquely frustrating. Here's how to approach it systematically:
      </p>

      <h3>The Systematic Debugging Process</h3>
      
      <ol>
        <li><strong>Isolate the Problem</strong>
          <ul>
            <li>What was the last thing that worked?</li>
            <li>What changed since then?</li>
            <li>Can you reproduce the issue consistently?</li>
          </ul>
        </li>
        
        <li><strong>Gather Information</strong>
          <ul>
            <li>Console errors (frontend)</li>
            <li>Server logs (backend)</li>
            <li>Network requests in browser dev tools</li>
            <li>Database query logs</li>
          </ul>
        </li>
        
        <li><strong>Create a Minimal Reproduction</strong>
          <ul>
            <li>Strip away everything except the broken functionality</li>
            <li>Use the simplest possible test case</li>
            <li>This makes it easier for AI to help</li>
          </ul>
        </li>
      </ol>

      <h3>Debug Prompts That Actually Help</h3>
      
      <pre><code>{`❌ Vague debug request:
"My app is broken, please fix it"

✅ Detailed debug request:
"I'm getting a 'Cannot read property 'map' of undefined' error in my React component
when trying to render a list of users. The error occurs on line 15 where I have:
users.map(user => <UserCard key={user.id} user={user} />)

The users data comes from a useState hook that's set by an API call. The API call 
works in isolation (I can see the data in Network tab), but the component renders 
before the data arrives. How can I handle the loading state properly?"`}</code></pre>

      <h2>When to Recognize You Need Human Help</h2>
      
      <p>
        AI is powerful, but it's not omniscient. Here are clear signs you need to step back 
        and seek human expertise:
      </p>

      <h3>Architecture and Design Decisions</h3>
      
      <p><strong>When to seek help:</strong></p>
      <ul>
        <li>Choosing between fundamentally different approaches</li>
        <li>Scaling decisions for high-traffic applications</li>
        <li>Complex business logic with many edge cases</li>
        <li>Integration with legacy or proprietary systems</li>
        <li>Compliance requirements (GDPR, HIPAA, financial regulations)</li>
      </ul>

      <h3>Performance and Optimization</h3>
      
      <p><strong>Signs you need expert help:</strong></p>
      <ul>
        <li>Performance problems that persist despite AI-suggested optimizations</li>
        <li>Memory leaks or resource exhaustion issues</li>
        <li>Database performance problems with complex queries</li>
        <li>Scaling challenges beyond basic horizontal scaling</li>
      </ul>

      <h3>Security and Compliance</h3>
      
      <p><strong>Always get human review for:</strong></p>
      <ul>
        <li>Applications handling sensitive data (medical, financial, personal)</li>
        <li>Production applications with paying customers</li>
        <li>Security audits and penetration testing</li>
        <li>Compliance certifications</li>
      </ul>

      <h3>Complex Integration Challenges</h3>
      
      <p><strong>When integration gets too complex:</strong></p>
      <ul>
        <li>Multiple third-party APIs with conflicting requirements</li>
        <li>Real-time systems with strict latency requirements</li>
        <li>Complex state management across multiple systems</li>
        <li>Custom protocols or non-standard integrations</li>
      </ul>

      <h2>Building Your Support Network</h2>
      
      <p>
        Even with vibe coding, you shouldn't code in isolation. Here's how to build a 
        support network that complements your AI assistance:
      </p>

      <h3>Online Communities</h3>
      
      <ul>
        <li><strong>Stack Overflow:</strong> For specific technical problems</li>
        <li><strong>Reddit (r/programming, r/webdev):</strong> For broader discussions</li>
        <li><strong>Discord/Slack communities:</strong> For real-time help</li>
        <li><strong>GitHub Discussions:</strong> For project-specific questions</li>
      </ul>

      <h3>Finding Mentors and Code Reviews</h3>
      
      <ul>
        <li><strong>CodeMentor:</strong> Paid expert consultations</li>
        <li><strong>GitHub:</strong> Open source contributions for feedback</li>
        <li><strong>Local meetups:</strong> In-person networking</li>
        <li><strong>Professional networks:</strong> LinkedIn, Twitter tech communities</li>
      </ul>

      <h3>When to Hire Professional Help</h3>
      
      <p><strong>Consider hiring experts when:</strong></p>
      <ul>
        <li>Building something with real business value</li>
        <li>Security requirements are critical</li>
        <li>You're stuck on the same problem for more than a week</li>
        <li>Performance requirements are strict</li>
        <li>You need to integrate with complex enterprise systems</li>
      </ul>

      <h2>Quality Assurance: Ensuring Your Vibe-Coded Apps Are Production-Ready</h2>
      
      <p>
        Just because AI helped you build it doesn't mean it's ready for real users. 
        Here's your quality checklist:
      </p>

      <h3>The Pre-Launch Checklist</h3>
      
      <h4>Security Audit</h4>
      <ul>
        <li>All user inputs are validated and sanitized</li>
        <li>Authentication is properly implemented</li>
        <li>Sensitive data is encrypted at rest and in transit</li>
        <li>API endpoints have proper authorization checks</li>
        <li>File uploads are restricted and validated</li>
        <li>Error messages don't leak sensitive information</li>
      </ul>

      <h4>Performance Testing</h4>
      <ul>
        <li>Load testing with realistic user scenarios</li>
        <li>Database query optimization</li>
        <li>Image and asset optimization</li>
        <li>CDN configuration for static assets</li>
        <li>Caching strategies implemented</li>
      </ul>

      <h4>User Experience</h4>
      <ul>
        <li>Mobile responsiveness tested on real devices</li>
        <li>Accessibility compliance (at least basic WCAG guidelines)</li>
        <li>Loading states and error handling</li>
        <li>Intuitive navigation and user flows</li>
        <li>Cross-browser compatibility</li>
      </ul>

      <h4>Monitoring and Maintenance</h4>
      <ul>
        <li>Error tracking (Sentry, LogRocket, etc.)</li>
        <li>Performance monitoring (New Relic, DataDog, etc.)</li>
        <li>Uptime monitoring</li>
        <li>Database backup strategies</li>
        <li>Update and maintenance procedures</li>
      </ul>

      <h2>The Continuous Learning Mindset</h2>
      
      <p>
        Vibe coding is rapidly evolving. Staying current requires a learning strategy:
      </p>

      <h3>Following the Right Sources</h3>
      
      <ul>
        <li><strong>AI Tool Updates:</strong> Follow official blogs and changelogs</li>
        <li><strong>Security News:</strong> Stay informed about new vulnerabilities</li>
        <li><strong>Performance Best Practices:</strong> Web.dev, performance-focused newsletters</li>
        <li><strong>Technology Trends:</strong> But don't chase every shiny object</li>
      </ul>

      <h3>Experimenting Safely</h3>
      
      <ul>
        <li>Create separate projects for experimenting with new techniques</li>
        <li>Use feature flags to test new functionality</li>
        <li>Maintain stable versions while trying new approaches</li>
        <li>Document what works and what doesn't</li>
      </ul>

      <h2>Red Flags: When to Stop and Reassess</h2>
      
      <p>
        Sometimes the best decision is to step back and reconsider your approach. 
        Here are the warning signs:
      </p>

      <h3>Technical Red Flags</h3>
      
      <ul>
        <li><strong>Repeated failures:</strong> The same type of bug keeps appearing</li>
        <li><strong>Increasing complexity:</strong> Solutions are getting more complex, not simpler</li>
        <li><strong>Performance degradation:</strong> Each new feature makes things slower</li>
        <li><strong>Integration nightmares:</strong> Simple changes break multiple things</li>
      </ul>

      <h3>Process Red Flags</h3>
      
      <ul>
        <li><strong>No clear progress:</strong> You're coding but not shipping</li>
        <li><strong>Constant starting over:</strong> Always rewriting instead of refining</li>
        <li><strong>Feature creep:</strong> Adding features instead of polishing core functionality</li>
        <li><strong>Avoiding deployment:</strong> Fear of putting your work online</li>
      </ul>

      <h3>When These Happen, Consider:</h3>
      
      <ul>
        <li><strong>Simplifying:</strong> Can you remove features instead of adding them?</li>
        <li><strong>Learning fundamentals:</strong> Maybe you need to understand the basics better</li>
        <li><strong>Getting help:</strong> Time to consult with an expert</li>
        <li><strong>Taking a break:</strong> Sometimes distance provides clarity</li>
      </ul>

      <blockquote>
        <p>
          <strong>Remember:</strong> The goal isn't to write perfect code. The goal is to solve 
          real problems for real people. If your vibe-coded solution works, serves users well, 
          and can be maintained, you've succeeded - regardless of how "traditional" developers 
          might judge your approach.
        </p>
      </blockquote>

      <div className="call-to-action">
        <p>
          <strong>Ready to evolve from beginner to expert?</strong> In the next chapter, we'll explore 
          how developers are evolving in the age of AI and what career paths look like in the vibe coding era.
        </p>
        <button onClick={onNext}>Continue to Chapter 7 →</button>
      </div>

      <div className="reading-time">
        <em>Estimated reading time: 20 minutes</em>
      </div>
    </div>
  )
}

export default Chapter6
