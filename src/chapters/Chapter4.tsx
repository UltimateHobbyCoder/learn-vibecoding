import React from 'react'

interface ChapterProps {
  onNext: () => void
}

const Chapter4: React.FC<ChapterProps> = ({ onNext }) => {
  return (
    <div>
      <h1>Chapter 4: The Art of AI Communication - Prompting Like a Pro</h1>
      
      <p>
        Here's where vibe coding gets really interesting. The difference between getting 
        mediocre code and getting exactly what you want often comes down to how you 
        communicate with the AI. Think of prompting as a new kind of programming language - 
        one where precision, context, and creativity all matter.
      </p>

      <p>
        In this chapter, we'll turn you from someone who gets "meh" results to someone 
        who consistently gets code that works beautifully on the first try.
      </p>

      <h2>The Psychology of AI Communication</h2>
      
      <p>
        Before diving into techniques, let's understand how AI "thinks" about code generation. 
        Unlike humans, AI doesn't have ego, doesn't get tired, and doesn't make assumptions 
        about what you "obviously" mean. But it also doesn't have real-world experience 
        or common sense.
      </p>

      <h3>What AI Excels At</h3>
      
      <ul>
        <li><strong>Pattern recognition:</strong> "Make this look like Bootstrap/Material Design/etc."</li>
        <li><strong>Following explicit instructions:</strong> Step-by-step requirements</li>
        <li><strong>Combining known concepts:</strong> "Like Instagram but for book reviews"</li>
        <li><strong>Consistency:</strong> Will maintain the same style/approach throughout</li>
      </ul>

      <h3>What AI Struggles With</h3>
      
      <ul>
        <li><strong>Implicit assumptions:</strong> "Make it user-friendly" (what does that mean?)</li>
        <li><strong>Context switching:</strong> Remembering details from earlier in long conversations</li>
        <li><strong>Edge cases:</strong> "What happens if the user does something weird?"</li>
        <li><strong>Performance implications:</strong> Might create code that works but is slow</li>
      </ul>

      <h2>The Anatomy of a Perfect Prompt</h2>
      
      <p>
        A great prompt has several key components. Let's break down the anatomy of a 
        prompt that gets you exactly what you want:
      </p>

      <h3>The Five-Layer Prompt Structure</h3>

      <ol>
        <li><strong>Context:</strong> What is this for?</li>
        <li><strong>Goal:</strong> What should it do?</li>
        <li><strong>Specifications:</strong> How should it work?</li>
        <li><strong>Constraints:</strong> What limitations exist?</li>
        <li><strong>Style:</strong> How should it look/feel?</li>
      </ol>

      <h3>Example: Bad vs. Good Prompts</h3>

      <p><strong>❌ Bad Prompt:</strong></p>
      <pre><code>{`"Create a website for my business"`}</code></pre>

      <p><strong>✅ Good Prompt:</strong></p>
      <pre><code>{`Context: I'm a freelance graphic designer who needs a portfolio website
Goal: Create a single-page website that showcases my work and gets clients to contact me
Specifications: 
- Hero section with my name and tagline
- Portfolio grid showing 6 projects with hover effects
- About section with my photo and bio
- Contact form with name, email, project type, and message fields
- Responsive design that works on mobile
Constraints: 
- Must load fast (no large images without optimization)
- Should work without JavaScript for the core content
- Need to integrate with Netlify forms for contact submissions
Style: 
- Clean, modern design similar to Dribbble portfolios
- Use a monochrome color scheme with one accent color
- Typography should be professional but friendly`}</code></pre>

      <h2>Context Is King</h2>
      
      <p>
        The most important skill in vibe coding is providing the right context. AI needs 
        to understand not just what you want, but why you want it and who will use it.
      </p>

      <h3>User Context</h3>
      
      <p>Always describe your users:</p>
      
      <ul>
        <li><strong>Who are they?</strong> "Busy parents," "college students," "small business owners"</li>
        <li><strong>What's their tech level?</strong> "Not tech-savvy," "developers," "general consumers"</li>
        <li><strong>What device do they use?</strong> "Mostly mobile," "desktop at work," "tablets"</li>
        <li><strong>What's their context?</strong> "Using while driving," "in a hurry," "researching carefully"</li>
      </ul>

      <h3>Business Context</h3>
      
      <p>Explain the purpose:</p>
      
      <ul>
        <li><strong>What's the goal?</strong> "Generate leads," "provide support," "showcase work"</li>
        <li><strong>What's success?</strong> "Users sign up," "people share content," "clients contact me"</li>
        <li><strong>What's the competition?</strong> "Like Airbnb but for workspaces"</li>
      </ul>

      <h3>Technical Context</h3>
      
      <p>Share constraints and preferences:</p>
      
      <ul>
        <li><strong>Platform:</strong> "Will be hosted on GitHub Pages," "needs to work in WordPress"</li>
        <li><strong>Integrations:</strong> "Must connect to Stripe," "uses Google Sheets as database"</li>
        <li><strong>Maintenance:</strong> "I can't code, so keep it simple," "I'm comfortable with React"</li>
      </ul>

      <h2>Specificity Techniques</h2>
      
      <p>
        Vague prompts get vague results. Here are techniques to be specific without 
        writing a novel:
      </p>

      <h3>Use Examples and References</h3>
      
      <pre><code>{`Instead of: "Make it look modern"
Try: "Use a design similar to Linear.app - clean, lots of white space, subtle gradients"

Instead of: "Add some interactivity"
Try: "Add hover effects like on Medium articles - text highlights and smooth transitions"`}</code></pre>

      <h3>Quantify Everything</h3>
      
      <pre><code>{`Instead of: "A few blog posts"
Try: "Display the 6 most recent blog posts"

Instead of: "Fast loading"
Try: "Should load in under 2 seconds on mobile"

Instead of: "Mobile-friendly"
Try: "Responsive design with breakpoints at 768px and 1024px"`}</code></pre>

      <h3>Describe the Flow</h3>
      
      <pre><code>{`Instead of: "A checkout process"
Try: "3-step checkout: 1) Cart review 2) Shipping info 3) Payment, with progress indicator"`}</code></pre>

      <h2>The Progressive Refinement Method</h2>
      
      <p>
        Don't try to get everything perfect in one prompt. Use the progressive refinement 
        method to iteratively improve your code:
      </p>

      <h3>Phase 1: Get the Structure</h3>
      
      <pre><code>{`"Create a basic todo app with:
- Add new tasks
- Mark tasks complete
- Delete tasks
- Filter by complete/incomplete
Keep it simple, just HTML/CSS/JS in one file"`}</code></pre>

      <h3>Phase 2: Improve Functionality</h3>
      
      <pre><code>{`"Improve the todo app by adding:
- Due dates for tasks
- Priority levels (high, medium, low)
- Local storage so tasks persist after page refresh
- Search/filter functionality"`}</code></pre>

      <h3>Phase 3: Polish the Interface</h3>
      
      <pre><code>{`"Make the UI more polished:
- Add smooth animations for adding/removing tasks
- Better color coding for priority levels
- Responsive design for mobile
- Dark mode toggle"`}</code></pre>

      <h3>Phase 4: Add Advanced Features</h3>
      
      <pre><code>{`"Add advanced features:
- Export tasks to CSV
- Drag and drop reordering
- Task categories/tags
- Keyboard shortcuts"`}</code></pre>

      <h2>Debugging Prompts</h2>
      
      <p>
        When code doesn't work as expected, how you describe the problem determines 
        how quickly it gets fixed:
      </p>

      <h3>The Debug Prompt Template</h3>
      
      <pre><code>{`"I have an issue with [specific component/feature]:

Expected behavior: [What should happen]
Actual behavior: [What's actually happening]
Error messages: [Any console errors]
Code context: [Relevant code snippet]

How can I fix this?"`}</code></pre>

      <h3>Real Debug Examples</h3>

      <p><strong>❌ Vague Debug Request:</strong></p>
      <pre><code>{`"My form isn't working"`}</code></pre>

      <p><strong>✅ Specific Debug Request:</strong></p>
      <pre><code>{`"I have an issue with my contact form:

Expected behavior: When user clicks submit, form data should be sent to my email
Actual behavior: Nothing happens when clicking submit button
Error messages: Console shows 'emailjs is not defined'
Code context: I'm using EmailJS but the form submission handler isn't triggering

Here's my form HTML: [paste relevant code]

How can I fix the EmailJS integration?"`}</code></pre>

      <h2>Advanced Prompting Patterns</h2>
      
      <p>
        Once you master the basics, here are some advanced patterns that can dramatically 
        improve your results:
      </p>

      <h3>The Constraint Pattern</h3>
      
      <p>Sometimes the best way to get what you want is to explicitly state what you don't want:</p>
      
      <pre><code>{`"Create a pricing page for my SaaS product:

DO include:
- 3 tiers: Basic ($9), Pro ($29), Enterprise ($99)
- Feature comparison table
- 'Most Popular' badge on Pro tier
- FAQ section

DON'T include:
- Annual/monthly toggle (just show monthly)
- Free trial messaging (we don't offer trials)
- Contact sales for Enterprise (direct signup only)
- Social proof/testimonials (separate page for that)"`}</code></pre>

      <h3>The Role-Playing Pattern</h3>
      
      <p>Ask the AI to adopt a specific perspective:</p>
      
      <pre><code>{`"Act as an experienced UX designer creating an onboarding flow for a meditation app:

User goal: Complete beginners want to start meditating but feel overwhelmed
Business goal: Get users to complete their first meditation session within 5 minutes
Design constraints: Mobile-first, accessible, minimal text

Create a 3-step onboarding sequence that reduces anxiety and builds confidence."`}</code></pre>

      <h3>The Comparison Pattern</h3>
      
      <p>Use comparisons to quickly convey complex requirements:</p>
      
      <pre><code>{`"Create a dashboard that's:
- As simple as Google Analytics but focused on social media metrics
- As visual as Spotify Wrapped but for business data
- As actionable as GitHub's insights but for content creators"`}</code></pre>

      <h3>The Iteration Pattern</h3>
      
      <p>Ask for multiple variations:</p>
      
      <pre><code>{`"Create 3 different hero section designs for a fitness app:
1. Version A: Motivation-focused with success stories
2. Version B: Feature-focused with app screenshots  
3. Version C: Benefit-focused with health statistics

For each version, include different headlines and call-to-action buttons."`}</code></pre>

      <h2>Platform-Specific Prompting</h2>
      
      <p>
        Different AI tools have different strengths. Here's how to optimize your prompts 
        for each platform:
      </p>

      <h3>ChatGPT/Claude Prompting</h3>
      
      <ul>
        <li><strong>Strength:</strong> Detailed explanations and teaching</li>
        <li><strong>Best for:</strong> Learning and understanding</li>
        <li><strong>Tip:</strong> Ask for explanations of the code</li>
      </ul>

      <pre><code>{`"Create a image gallery component and explain:
- How the CSS Grid layout works
- Why you chose specific JavaScript patterns
- What accessibility considerations you included
- How to customize it for different use cases"`}</code></pre>

      <h3>GitHub Copilot Prompting</h3>
      
      <ul>
        <li><strong>Strength:</strong> Context-aware code completion</li>
        <li><strong>Best for:</strong> Working within existing codebases</li>
        <li><strong>Tip:</strong> Use descriptive comments and variable names</li>
      </ul>

      <pre><code>{`// Create a function that validates user registration data
// Should check email format, password strength, and required fields
// Return an object with isValid boolean and error messages array
function validateRegistration(userData) {
  // Copilot will suggest the implementation
}`}</code></pre>

      <h3>Cursor Prompting(Windsurf is also a bit similar)</h3>

      <ul>
        <li><strong>Strength:</strong> Multi-file awareness and refactoring</li>
        <li><strong>Best for:</strong> Complex applications with multiple components</li>
        <li><strong>Tip:</strong> Reference other files and maintain consistency</li>
      </ul>

      <pre><code>{`"Update the UserProfile component to match the design system in DesignTokens.ts:
- Use the same color variables as LoginForm.tsx
- Apply consistent spacing patterns from the global styles
- Ensure the component API is similar to other form components"`}</code></pre>

      <h2>Common Prompting Mistakes (And How to Fix Them)</h2>
      
      <p>
        Let's look at the most common mistakes people make when prompting AI and how to avoid them:
      </p>

      <h3>Mistake 1: Assuming Context</h3>
      
      <p><strong>❌ Bad:</strong> "Make it better"</p>
      <p><strong>✅ Good:</strong> "Improve the visual hierarchy by increasing contrast and adding more white space"</p>

      <h3>Mistake 2: Overwhelming with Details</h3>
      
      <p><strong>❌ Bad:</strong> A 500-word prompt covering every possible feature</p>
      <p><strong>✅ Good:</strong> Focus on core requirements first, iterate with additional details</p>

      <h3>Mistake 3: Not Specifying Output Format</h3>
      
      <p><strong>❌ Bad:</strong> "Create a website"</p>
      <p><strong>✅ Good:</strong> "Create a single HTML file with embedded CSS and JavaScript"</p>

      <h3>Mistake 4: Forgetting About Users</h3>
      
      <p><strong>❌ Bad:</strong> Focus only on features and functionality</p>
      <p><strong>✅ Good:</strong> Always include user context and goals</p>

      <h3>Mistake 5: Not Testing Incrementally</h3>
      
      <p><strong>❌ Bad:</strong> Ask for a complete, complex application all at once</p>
      <p><strong>✅ Good:</strong> Build incrementally, testing each piece</p>

      <h2>The Art of Follow-up Prompts</h2>
      
      <p>
        Your first prompt rarely gets you the perfect result. The real skill is in 
        crafting effective follow-up prompts:
      </p>

      <h3>Refinement Patterns</h3>

      <pre><code>{`"The layout looks good, but can you:
- Make the header sticky when scrolling
- Increase the font size for better readability
- Add a subtle drop shadow to the cards"`}</code></pre>

      <h3>Alternative Requests</h3>

      <pre><code>{`"This approach works, but could you show me a version that:
- Uses CSS Grid instead of Flexbox
- Has a more minimalist design
- Prioritizes mobile performance"`}</code></pre>

      <h3>Explanation Requests</h3>

      <pre><code>{`"This code works perfectly! Can you explain:
- Why you chose this particular CSS technique
- How I could modify the colors easily
- What would break if I removed the JavaScript"`}</code></pre>

      <h2>Building Your Prompt Library</h2>
      
      <p>
        As you do more vibe coding, you'll discover prompts that work really well for you. 
        Start building a personal library of effective prompts:
      </p>

      <h3>Templates to Collect</h3>
      
      <ul>
        <li><strong>Landing page starter:</strong> Your go-to prompt for new landing pages</li>
        <li><strong>Dashboard layout:</strong> Structure for admin/analytics interfaces</li>
        <li><strong>Form handler:</strong> Contact forms, signup forms, etc.</li>
        <li><strong>API integration:</strong> Connecting to external services</li>
        <li><strong>Responsive fix:</strong> Making things work on mobile</li>
        <li><strong>Performance optimization:</strong> Speed improvements</li>
      </ul>

      <h3>Personalization Tips</h3>
      
      <ul>
        <li><strong>Include your preferences:</strong> "I prefer CSS Grid to Flexbox"</li>
        <li><strong>Reference your stack:</strong> "I'm using React with TypeScript"</li>
        <li><strong>Note your skill level:</strong> "Explain complex concepts as I'm still learning"</li>
        <li><strong>Specify your goals:</strong> "Focus on performance over features"</li>
      </ul>

      <h2>Testing Your Prompt Skills</h2>
      
      <p>
        Ready to practice? Here are some scenarios to test your prompting abilities:
      </p>

      <h3>Challenge 1: The Restaurant Website</h3>
      
      <p>
        Write a prompt to create a website for a local Italian restaurant. Think about:
        Who are the users? What do they need? What's the business goal?
      </p>

      <h3>Challenge 2: The Bug Fix</h3>
      
      <p>
        You have a image slider that works on desktop but breaks on mobile. 
        Write a debug prompt that would help the AI understand and fix the issue.
      </p>

      <h3>Challenge 3: The Feature Addition</h3>
      
      <p>
        You have a working todo app and want to add a "share list" feature. 
        Write a prompt that explains the new functionality clearly.
      </p>

      <blockquote>
        <p>
          <strong>Pro Tip:</strong> The best way to improve your prompting is to try the same 
          request with different levels of detail and see how the results change. 
          Start vague, then get specific, and notice the difference in quality.
        </p>
      </blockquote>

      <h2>When Prompting Isn't Enough</h2>
      
      <p>
        Sometimes, even perfect prompts won't solve your problem. Here's when to recognize 
        that you need a different approach:
      </p>

      <h3>Signs You Need to Break Down the Problem</h3>
      
      <ul>
        <li>AI keeps generating similar solutions that don't quite work</li>
        <li>The code works but performance is terrible</li>
        <li>You're asking for the same fixes repeatedly</li>
        <li>The solution is getting increasingly complex</li>
      </ul>

      <h3>Alternative Approaches</h3>
      
      <ul>
        <li><strong>Simplify:</strong> Maybe you're trying to do too much at once</li>
        <li><strong>Research:</strong> Look for existing solutions or libraries</li>
        <li><strong>Learn:</strong> Some concepts might need traditional learning</li>
        <li><strong>Collaborate:</strong> Sometimes you need human expertise</li>
      </ul>

      <div className="call-to-action">
        <p>
          <strong>Ready to see it all in action?</strong> In the next chapter, we'll build 
          a complete full-stack application using everything you've learned about vibe coding.
        </p>
        <button onClick={onNext}>Continue to Chapter 5 →</button>
      </div>

      <div className="reading-time">
        <em>Estimated reading time: 18 minutes</em>
      </div>
    </div>
  )
}

export default Chapter4
