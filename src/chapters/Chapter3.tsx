import React from 'react'

interface ChapterProps {
  onNext: () => void
}

const Chapter3: React.FC<ChapterProps> = ({ onNext }) => {
  return (
    <div>
      <h1>Chapter 3: Getting Your Hands Dirty - Tools & Setup</h1>
      
      <p>
        Enough theory - let's get you set up to actually start vibe coding. The good news? 
        The setup is much simpler than traditional programming. The bad news? There are so 
        many AI tools popping up that choosing can feel overwhelming. Don't worry, I'll cut 
        through the noise and get you started with the essentials.
      </p>
      <h3>The costs of the tools mentioned may vary. Please always look at the providers pricing list for further information!</h3>
      <h2>Picking Your AI Sidekick</h2>
      
      <p>
        Your AI coding assistant is like choosing a programming buddy. Different tools have 
        different personalities, strengths, and quirks. Here's the honest rundown of the 
        major players:
      </p>

      <h3><a href='https://github.com/features/copilot?ref='>GitHub Copilot - The Established Pro</a></h3>

      <p><strong>Best for:</strong> Developers who want AI assistance within their existing workflow</p>
      
      <ul>
        <li><strong>Strengths:</strong> Excellent code completion, integrates with VS Code, great at understanding context</li>
        <li><strong>Weaknesses:</strong> Requires some programming knowledge, monthly subscription</li>
        <li><strong>Cost:</strong> $10/month for individuals</li>
        <li><strong>Learning curve:</strong> Medium</li>
      </ul>

      <pre><code>{`Example Copilot interaction:
// Type a comment and Copilot suggests code
// Create a function to validate email addresses
function validateEmail(email) {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email);
}`}</code></pre>      <h3><a href='https://chat.openai.com/?ref=https://learn-vibecoding.ftp.sh'>ChatGPT</a>/<a href='https://claude.ai/?ref=https://learn-vibecoding.ftp.sh'>Claude - The Conversational Teacher</a></h3>

      <p><strong>Best for:</strong> Beginners who want to learn while building</p>
      
      <ul>
        <li><strong>Strengths:</strong> Explains code, handles full conversations, great for learning</li>
        <li><strong>Weaknesses:</strong> Copy-paste workflow, sometimes generates outdated code</li>
        <li><strong>Cost:</strong> Free tier available, $20/month for premium</li>
        <li><strong>Learning curve:</strong> Low</li>
      </ul>

      <pre><code>{`Example ChatGPT conversation:
You: "Create a simple todo app with add, delete, and mark complete features"

ChatGPT: "I'll create a todo app for you. Here's the HTML structure..."
[Provides complete working code with explanations]`}</code></pre>

      <h3><a href='https://cursor.com/?ref=https://learn-vibecoding.ftp.sh'>Cursor - The IDE for AI-Powered Development</a></h3>

      <p><strong>Best for:</strong> People who want a full IDE experience built around AI</p>
      
      <ul>
        <li><strong>Strengths:</strong> Built from the ground up for AI coding, excellent context awareness</li>
        <li><strong>Weaknesses:</strong> Newer tool, smaller community</li>
        <li><strong>Cost:</strong> Free tier, $20/month for pro features</li>
        <li><strong>Learning curve:</strong> Low to medium</li>
      </ul>

      <h3><a href='https://windsurf.com/?ref=https://learn-vibecoding.ftp.sh'>Windsurf IDE - The Collaborative AI Partner</a></h3>

      <p><strong>Best for:</strong> Developers who want an AI that understands entire projects and can work collaboratively</p>
      
      <ul>
        <li><strong>Strengths:</strong> Multi-file context awareness, collaborative editing, understands project structure</li>
        <li><strong>Weaknesses:</strong> Very new in the market, still evolving features</li>
        <li><strong>Cost:</strong> Free tier available, premium features for subscribers</li>
        <li><strong>Learning curve:</strong> Low to medium</li>
      </ul>

      <h3><a href='https://replit.com/?ref=https://learn-vibecoding.ftp.sh'>Replit - The Beginner's Paradise</a></h3>

      <p><strong>Best for:</strong> Complete beginners who want everything in the browser</p>
      
      <ul>
        <li><strong>Strengths:</strong> No setup required, runs in browser, great for learning</li>
        <li><strong>Weaknesses:</strong> Limited for complex projects</li>
        <li><strong>Cost:</strong> Free tier, $20/month or more for more features</li>
        <li><strong>Learning curve:</strong> Very low</li>
      </ul>

      <h3>My Recommendation for Getting Started</h3>
      
      <p>
        If you're completely new to programming: Start with <strong><a href='https://chat.openai.com/?ref=https://learn-vibecoding.ftp.sh'>ChatGPT</a> or <a href='https://claude.ai/?ref=https://learn-vibecoding.ftp.sh'>Claude</a></strong>. 
        They're the most beginner-friendly and will teach you as you go.
      </p>
      
      <p>
        If you have some programming experience: Try <strong><a href='https://cursor.com/?ref=https://learn-vibecoding.ftp.sh'>Cursor</a>, <a href='https://windsurf.com/?ref=https://learn-vibecoding.ftp.sh'>Windsurf</a>, or <a href='https://github.com/features/copilot?ref=https://learn-vibecoding.ftp.sh'>GitHub Copilot</a></strong>. 
        They'll boost your productivity while letting you stay in a proper development environment.
      </p>

      <p>
        If you want something in between: <strong><a href='https://replit.com/?ref=https://learn-vibecoding.ftp.sh'>Replit</a></strong> gives you a real development environment 
        without the setup complexity, and it's great for learning and sharing projects.
      </p>

      <h2>Setting Up Your Development Environment</h2>
      
      <p>
        Unlike traditional programming where you might spend days fighting with environment setup, 
        vibe coding can get you started in minutes. Here are three paths, from easiest to most powerful:
      </p>

      <h3>Path 1: Browser-Only (Easiest)</h3>
      
      <p>Perfect for beginners or quick experiments:</p>
      
      <ol>
        <li>Open <strong><a href='https://replit.com/?ref=https://learn-vibecoding.ftp.sh'>replit.com</a></strong> or <strong><a href='https://stackblitz.com/?ref=https://learn-vibecoding.ftp.sh'>stackblitz.com</a></strong></li>
        <li>Create a new project</li>
        <li>Start coding immediately</li>
      </ol>

      <p><strong>Pros:</strong> Zero setup, works anywhere, great for learning</p>
      <p><strong>Cons:</strong> Limited for complex projects, requires internet</p>

      <h3>Path 2: Local Setup with AI Assistant (Recommended)</h3>
      
      <p>The sweet spot for most people:</p>
      
      <ol>
        <li><strong>Download <a href='https://code.visualstudio.com/?ref=https://learn-vibecoding.ftp.sh'>VS Code</a> or your preferred code editor/IDE</strong> </li>
        <li><strong>Install <a href='https://nodejs.org/?ref=https://learn-vibecoding.ftp.sh'>Node.js</a></strong> </li>
        <li><strong>Add <a href='https://github.com/features/copilot?ref=https://learn-vibecoding.ftp.sh'>GitHub Copilot</a> or <a href='https://cursor.com/?ref=https://learn-vibecoding.ftp.sh'>Cursor</a> extension</strong></li>
        <li><strong>Install <a href='https://git-scm.com/?ref=https://learn-vibecoding.ftp.sh'>Git</a></strong> (CRITICAL - your safety net for when things go wrong)</li>
      </ol>

      <blockquote>
        <p>
          <strong>⚠️ Git is Your Lifeline:</strong> This isn't optional. Git saves every version of your code. 
          When you accidentally break something (and you will), Git lets you go back to the working version 
          instantly. It's like having unlimited "undo" for your entire project. Don't skip this step!
        </p>
      </blockquote>

      <pre><code>{`Quick setup commands (copy-paste into terminal):
# Install Node.js version manager (macOS/Linux)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# For Windows, download Node.js directly from nodejs.org

# Install latest Node.js
nvm install node

# Verify installation
node --version
npm --version

# Setup Git (ESSENTIAL!)
git --version
# If Git isn't installed, download from git-scm.com

# Configure Git with your info
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"`}</code></pre>

      <h3>Path 3: Full Developer Setup (For Ambitious Beginners)</h3>
      
      <p>If you want to go all-in from the start:</p>
      
      <ul>
        <li><strong>Code Editor:</strong> <a href='https://code.visualstudio.com/?ref=https://learn-vibecoding.ftp.sh'>VS Code</a> with extensions</li>
        <li><strong>Runtime:</strong> <a href='https://nodejs.org/?ref=https://learn-vibecoding.ftp.sh'>Node.js</a> for JavaScript, <a href='https://www.python.org/?ref=https://learn-vibecoding.ftp.sh'>Python</a> for data/AI projects</li>
        <li><strong>Database:</strong> Start with <a href='https://www.sqlite.org/index.html?ref=https://learn-vibecoding.ftp.sh'>SQLite</a>, upgrade to <a href='https://www.postgresql.org/?ref=https://learn-vibecoding.ftp.sh'>PostgreSQL</a> later</li>
        <li><strong>Version Control:</strong> <a href='https://git-scm.com/?ref=https://learn-vibecoding.ftp.sh'>Git</a> and <a href='https://github.com/?ref=https://learn-vibecoding.ftp.sh'>GitHub</a></li>
        <li><strong>Deployment:</strong> <a href='https://vercel.com/?ref=https://learn-vibecoding.ftp.sh'>Vercel</a> or <a href='https://www.netlify.com/?ref=https://learn-vibecoding.ftp.sh'>Netlify</a> for frontend, <a href='https://railway.app/?ref=https://learn-vibecoding.ftp.sh'>Railway</a> for full-stack</li>
      </ul>

      <h2>The Basic Vibe Coding Workflow</h2>
      
      <p>
        Once you're set up, here's the fundamental pattern you'll use for every project:
      </p>

      <h3>The Core Loop</h3>
      
      <ol>
        <li><strong>Describe:</strong> Tell the AI what you want to build</li>
        <li><strong>Generate:</strong> Get the initial code</li>
        <li><strong>Test:</strong> Run it and see what happens</li>
        <li><strong>Iterate:</strong> Ask for changes and improvements</li>
        <li><strong>Deploy:</strong> Put it online for others to use</li>
      </ol>

      <h3>Example: Building a Weather App</h3>
      
      <p>Let's walk through this workflow with a real example:</p>

      <p><strong>Step 1: Describe</strong></p>
      <pre><code>{`Prompt: "Create a weather app that shows current weather for a city. 
Include temperature, description, and an icon. Use a free weather API 
and make it look modern with a clean design."`}</code></pre>

      <p><strong>Step 2: Generate</strong></p>
      <p>AI provides complete HTML, CSS, and JavaScript code.</p>

      <p><strong>Step 3: Test</strong></p>
      <p>Save the files, open in browser, test with different cities.</p>

      <p><strong>Step 4: Iterate</strong></p>
      <pre><code>{`Follow-up prompts:
- "Add a 5-day forecast"
- "Make it work on mobile phones"
- "Add the ability to save favorite cities"
- "Change the color scheme to blue and white"`}</code></pre>

      <p><strong>Step 5: Deploy</strong></p>
      <pre><code>{`Deployment prompt: "How do I put this weather app online so others can use it?"

AI provides step-by-step instructions for free hosting platforms.`}</code></pre>

      <h2>Essential Browser Tools</h2>
      
      <p>
        Even with AI doing the heavy lifting, you'll need to understand some basic browser 
        developer tools. Don't worry - these are much simpler than they look:
      </p>

      <h3>Opening Developer Tools</h3>
      
      <ul>
        <li><strong>Chrome/Edge:</strong> Press F12 or right-click → "Inspect"</li>
        <li><strong>Firefox:</strong> Press F12 or right-click → "Inspect Element"</li>
        <li><strong>Safari:</strong> Enable Developer menu first, then press Cmd+Opt+I</li>
      </ul>

      <h3>The Three Tabs You Actually Need</h3>
      
      <ol>
        <li><strong>Console:</strong> See error messages and test JavaScript code</li>
        <li><strong>Elements:</strong> View and edit HTML/CSS live</li>
        <li><strong>Network:</strong> See if your API calls are working</li>
      </ol>

      <blockquote>
        <p>
          <strong>Pro Tip:</strong> When something doesn't work, always check the Console tab first. 
          The error messages there will tell you exactly what's wrong, and you can copy-paste 
          them to your AI assistant for help.
        </p>
      </blockquote>

      <h2>Making Frontend, Backend, and Database Tools Play Nice</h2>
      
      <p>
        One of the trickiest parts of traditional development is getting all the pieces to work 
        together. Here's how vibe coding simplifies this:
      </p>

      <h3>The Modern Stack (Simplified)</h3>
      
      <ul>
        <li><strong>Frontend:</strong> What users see (HTML, CSS, JavaScript)</li>
        <li><strong>Backend:</strong> Server logic and APIs (Node.js, Python, etc.)</li>
        <li><strong>Database:</strong> Where data lives (SQLite, PostgreSQL, etc.)</li>
      </ul>

      <h3>AI-Friendly Development Patterns</h3>
      
      <p>Instead of learning complex deployment pipelines, use AI-friendly approaches:</p>

      <pre><code>{`Simple Full-Stack Pattern:
1. Frontend: HTML/CSS/JS that runs in the browser
2. Backend: Simple API (Express.js or FastAPI)
3. Database: Start with JSON files, upgrade to real DB later
4. Deployment: Use platforms like Vercel, Netlify, or Railway`}</code></pre>

      <h3>The "Good Enough" Philosophy</h3>
      
      <p>
        Traditional developers often over-engineer solutions. Vibe coding embraces "good enough":
      </p>

      <ul>
        <li><strong>Don't optimize prematurely</strong> - build it first, improve it later</li>
        <li><strong>Use simple solutions</strong> - SQLite instead of PostgreSQL for small projects</li>
        <li><strong>Embrace serverless</strong> - let the platform handle scaling</li>
        <li><strong>Start small</strong> - add complexity only when needed</li>
      </ul>

      <h2>When Things Go Wrong (They Will)</h2>
      
      <p>
        Even with AI assistance, things will break. Here's how to handle common issues:
      </p>

      <h3>The Universal Debugging Process</h3>
      
      <ol>
        <li><strong>Check the Console:</strong> What error messages do you see?</li>
        <li><strong>Ask AI:</strong> "I'm getting this error: [paste error message]. How do I fix it?"</li>
        <li><strong>Test Incrementally:</strong> Does a simpler version work?</li>
        <li><strong>Start Fresh:</strong> Sometimes it's faster to regenerate the code</li>
      </ol>

      <h3>Common Issues and Quick Fixes</h3>

      <pre><code>{`Problem: "Nothing happens when I click the button"
Solution: Check Console for JavaScript errors

Problem: "API calls aren't working"
Solution: Check Network tab, look for CORS issues

Problem: "Styles aren't loading"
Solution: Check file paths and CSS syntax

Problem: "Database connection fails"
Solution: Verify connection strings and credentials`}</code></pre>

      <h3>Building Your Troubleshooting Toolkit</h3>
      
      <ul>
        <li><strong>Browser Console:</strong> Your first stop for any issue</li>
        <li><strong>AI Assistant:</strong> Paste error messages for instant help</li>
        <li><strong>Simple Test Cases:</strong> Break complex problems into smaller pieces</li>
        <li><strong>Git Version Control:</strong> The ultimate safety net - save working versions so you can always go back</li>
      </ul>

      <h3>The Git Safety Net</h3>
      
      <p>
        Let me be super clear about this: <strong>Git is not optional</strong>. It's your insurance policy 
        against catastrophic mistakes. Here's why every vibe coder needs Git:
      </p>

      <ul>
        <li><strong>Unlimited Undo:</strong> Made a change that broke everything? `git checkout` back to when it worked</li>
        <li><strong>Experiment Fearlessly:</strong> Try risky changes knowing you can always go back</li>
        <li><strong>Track Progress:</strong> See exactly what changed between working and broken versions</li>
        <li><strong>Backup Everything:</strong> Push to GitHub and never lose your work again</li>
      </ul>

      <pre><code>{`Essential Git commands for vibe coding:
# Start tracking your project
git init
git add .
git commit -m "Initial working version"

# Save your progress frequently
git add .
git commit -m "Added weather widget - working!"

# Something broke? See what changed
git diff

# Go back to the last working version
git log --oneline
git checkout [commit-hash]

# Create a backup on GitHub
git remote add origin https://github.com/yourusername/your-project.git
git push -u origin main`}</code></pre>

      <h2>Your First Project Setup</h2>
      
      <p>
        Let's put it all together with a step-by-step setup for your first vibe coding project:
      </p>

      <h3>Project: Personal Dashboard</h3>
      
      <p>We'll build a simple dashboard that shows weather, news, and your calendar:</p>

      <ol>
        <li><strong>Choose your tool:</strong> ChatGPT for beginners, Cursor for more advanced</li>
        <li><strong>Create project folder:</strong> Make a new folder on your computer</li>
        <li><strong>Start with a prompt:</strong></li>
      </ol>

      <pre><code>{`Prompt: "Create a personal dashboard webpage that shows:
1. Current weather for my city
2. Latest news headlines
3. Today's date and time
4. A simple note-taking section

Make it look clean and modern, use a nice color scheme, 
and make sure it works on both desktop and mobile."`}</code></pre>

      <p><strong>Expected result:</strong> Complete HTML file with embedded CSS and JavaScript</p>

      <h3>Testing Your Setup</h3>
      
      <ol>
        <li>Save the generated code as <code>dashboard.html</code></li>
        <li>Double-click the file to open it in your browser</li>
        <li>Open developer tools (F12) and check for any errors</li>
        <li>Try the features - weather, news, notes</li>
      </ol>

      <h3>Your First Iterations</h3>
      
      <p>Once the basic version works, try these improvements:</p>

      <pre><code>{`Iteration prompts:
- "Add a dark mode toggle button"
- "Save notes to local storage so they persist"
- "Add a section for quick links to my favorite websites"
- "Make the weather update automatically every hour"
- "Add a simple calendar widget"`}</code></pre>

      <h2>Setting Realistic Expectations</h2>
      
      <p>
        Before you dive in, let's set some realistic expectations about what vibe coding 
        can and can't do:
      </p>

      <h3>What Works Really Well</h3>
      
      <ul>
        <li><strong>Standard web interfaces:</strong> Forms, dashboards, landing pages</li>
        <li><strong>CRUD applications:</strong> Todo lists, simple databases, user management</li>
        <li><strong>API integrations:</strong> Weather, news, social media data</li>
        <li><strong>Automation scripts:</strong> Data processing, file manipulation</li>
        <li><strong>Simple games:</strong> Tic-tac-toe, memory games, puzzles</li>
      </ul>

      <h3>What's Challenging</h3>
      
      <ul>
        <li><strong>Complex algorithms:</strong> AI might not get the logic right on first try</li>
        <li><strong>Real-time features:</strong> Chat apps, collaborative editing</li>
        <li><strong>Advanced graphics:</strong> 3D rendering, complex animations</li>
        <li><strong>Performance optimization:</strong> Handling thousands of users</li>
        <li><strong>Legacy system integration:</strong> Working with old, complex systems</li>
      </ul>

      <h3>The 80/20 Rule</h3>
      
      <p>
        Vibe coding is fantastic for the 80% of software that's pretty standard - websites, 
        simple apps, automation tools, prototypes. For the 20% that's highly specialized, 
        you might still need traditional development skills.
      </p>

      <p>
        But here's the thing: most people's projects fall into that 80%. Your business website, 
        personal projects, simple tools, and learning exercises are all perfect for vibe coding.
      </p>

      <h2>Other Popular Vibe Coding Tools</h2>
      
      <p>
        The AI coding space is exploding with new tools. Here are some other popular options 
        that are worth knowing about:
      </p>
        <h3>AI-Powered IDEs</h3>
        <ul>
          <li>
            <strong>Kiro:</strong> Amazons AI IDE for developing production-ready applications.
          </li>
          <li>
            <strong>PearAI:</strong> Opensource AI IDE.
          </li>
        </ul>
        <p>
        These tools integrate AI directly into your coding environment, making it easier to get
        suggestions and fix errors as you type.
        </p>
        <h3>AI-Powered Terminal Tools</h3>
        <ul>
          <li>
            <strong>Claude Code:</strong> Similar to GitHub Copilot, but focused on terminal workflows.
          </li>
          <li>
            <strong>Gemini CLI:</strong> Google's version of AI coding assistant for terminal use. Offers a solid free tier.
          </li>
          <li>
            <strong>Crush(formerly known as Opencode):</strong> Open source AI coding assistant that can use a variety of ai models from big tech aswell as local models for coding.
          </li>
        </ul>
      <h3>Web-Based AI Development Platforms</h3>
      
      <ul>
        <li>
          <strong>bolt.new (by StackBlitz):</strong> Build and deploy full-stack apps directly in the browser. 
          Great for quick prototypes and sharing projects instantly.
        </li>
        <li>
          <strong>lovable.dev:</strong> AI-powered web app builder with a focus on beautiful, 
          production-ready applications. Excellent for non-technical users.
        </li>
        <li>
          <strong>v0.dev (by Vercel):</strong> Generate React components from text descriptions. 
          Perfect for quickly building UI components.
        </li>
        <li>
          <strong>Claude Artifacts:</strong> Anthropic's Claude can now generate and run code 
          directly in the chat interface - great for quick experiments.
        </li>
      </ul>

      <h3>Specialized AI Coding Tools</h3>
      
      <ul>
        <li>
          <strong>Codeium:</strong> Free alternative to GitHub Copilot with support for 70+ programming languages.
        </li>
        <li>
          <strong>Tabnine:</strong> Privacy-focused AI code assistant that can run on your local machine.
        </li>
     
        
      </ul>

      <h3>No-Code/Low-Code with AI</h3>
      
      <ul>
        <li>
          <strong>Webflow + AI:</strong> Visual web design with AI-powered content generation.
        </li>
        <li>
          <strong>Framer:</strong> Design tool with AI features for generating layouts and content.
        </li>
        <li>
          <strong>Bubble:</strong> No-code platform that's adding more AI capabilities for app development.
        </li>
      </ul>

      <h3>Which Tool Should You Try Next?</h3>
      
      <p>
        Once you're comfortable with your primary tool, experiment with these based on your needs:
      </p>

      <ul>
        <li><strong>For quick prototypes:</strong> bolt.new or lovable.dev</li>
        <li><strong>For learning different approaches:</strong> Try Claude Artifacts or v0.dev</li>
        <li><strong>For team collaboration:</strong> Explore Sourcegraph Cody or Windsurf</li>
        <li><strong>For privacy-conscious development:</strong> Tabnine or local AI tools</li>
      </ul>

      <blockquote>
        <p>
          <strong>Tool Fatigue Warning:</strong> Don't try to learn all these tools at once! 
          Pick one primary tool, get really good with it, then gradually explore others. 
          The prompting and vibe coding skills transfer between tools.
        </p>
      </blockquote>

      <div className="call-to-action">
        <p>
          <strong>Ready to learn the secret sauce?</strong> In the next chapter, we'll dive deep 
          into prompting techniques - the art of communicating with AI to get exactly the code you want.
        </p>
        <button onClick={onNext}>Continue to Chapter 4 →</button>
      </div>

      <div className="reading-time">
        <em>Estimated reading time: 15 minutes</em>
      </div>
    </div>
  )
}

export default Chapter3
