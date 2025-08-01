import React from 'react'

interface ChapterProps {
  onNext: () => void
}

const Chapter2: React.FC<ChapterProps> = ({ onNext }) => {
  return (
    <div>
      <h1>Chapter 2: Why Should You Care About This?</h1>
      
      <p>
        Alright, so AI can write code. But why should you, specifically, care about this? 
        Whether you're a complete beginner who's never written a line of code, or a seasoned 
        developer who's been debugging CSS for longer than you'd like to admit, vibe coding 
        is about to change your world in ways you might not expect.
      </p>

      <h2>The Old Way vs. The Vibe Way</h2>
      
      <p>
        Let's be honest about how software development traditionally works. You have an idea. 
        Maybe it's a simple website for your local bakery, or a tool to help you organize your 
        vinyl collection. Here's what usually happens next:
      </p>

      <h3>The Traditional Path (AKA The Pain Train)</h3>
      
      <ol>
        <li><strong>Research Phase:</strong> Spend hours googling "how to build a website" and get overwhelmed by 47 different frameworks</li>
        <li><strong>Setup Hell:</strong> Install Node.js, configure webpack, fight with package managers, wonder why nothing works</li>
        <li><strong>Tutorial Maze:</strong> Follow 12 different tutorials that all conflict with each other</li>
        <li><strong>Stack Overflow Addiction:</strong> Copy-paste code you don't understand and pray it works</li>
        <li><strong>Debugging Nightmare:</strong> Spend 3 hours discovering your error was a missing semicolon</li>
        <li><strong>Version Hell:</strong> Everything breaks when you update one dependency</li>
        <li><strong>Deployment Panic:</strong> "It works on my machine" becomes your personal motto</li>
      </ol>

      <p>
        Sound familiar? If you've ever tried to learn programming, you've probably experienced 
        at least half of these. The tragic part? Most of this pain has nothing to do with 
        solving your actual problem.
      </p>

      <h3>The Vibe Coding Way</h3>
      
      <ol>
        <li><strong>Describe Your Idea:</strong> "I need a website where people can browse cupcakes and place orders"</li>
        <li><strong>Get Working Code:</strong> AI generates a complete solution with HTML, CSS, JavaScript, and backend</li>
        <li><strong>Iterate and Improve:</strong> "Make the buttons bigger" or "Add a checkout system"</li>
        <li><strong>Deploy:</strong> "How do I put this online?" - get step-by-step deployment instructions</li>
        <li><strong>You're Done:</strong> Seriously. That's it.</li>
      </ol>

      <blockquote>
        <p>
          <strong>Real Example:</strong> Sarah, a small business owner, wanted a booking system 
          for her massage therapy practice. Traditional route: 6+ months learning to code or 
          $15,000 for a custom developer. Vibe coding route: 2 days and max $20, building exactly 
          what she needed with AI assistance.
        </p>
      </blockquote>

      <h2>Making Programming Less Scary</h2>
      
      <p>
        Here's the thing about traditional programming that nobody talks about: it's designed 
        to be intimidating. Not intentionally, but the entire ecosystem has evolved in a way 
        that creates massive barriers to entry.
      </p>

      <h3>The Fear Factors</h3>
      
      <ul>
        <li><strong>Syntax Terror:</strong> Miss one bracket and nothing works</li>
        <li><strong>Jargon Overload:</strong> APIs, frameworks, dependencies, DevOps - it's like learning a foreign language</li>
        <li><strong>Environment Setup:</strong> Spending days just getting tools to work</li>
        <li><strong>Version Conflicts:</strong> Everything breaking when you update something</li>
        <li><strong>Imposter Syndrome:</strong> Feeling like everyone else knows some secret you don't</li>
      </ul>

      <p>
        Vibe coding doesn't eliminate these concepts entirely, but it removes them as barriers 
        to getting started. You can focus on what you want to build instead of how to wrestle 
        with tools.
      </p>

      <h3>Learning by Building, Not by Studying</h3>
      
      <p>
        Traditional programming education puts the cart before the horse. Learn variables, 
        then loops, then functions, then maybe after 6 months you can build something simple. 
        Vibe coding flips this:
      </p>

      <pre><code>Traditional: Learn → Practice → Build
Vibe Coding: Build → Understand → Improve</code></pre>

      <p>
        You start with working code for something you actually want, then learn by asking 
        "how does this work?" and "what if I change this?"
      </p>

      <h2>The Speed Factor (And What You Trade Off)</h2>
      
      <p>
        Let's talk numbers. Here are some real-world comparisons of traditional development 
        vs. vibe coding for common projects:
      </p>

      <h3>Project Time Comparisons</h3>
      
      <ul>
        <li><strong>Personal Portfolio Website:</strong> Traditional: 2-4 weeks → Vibe: 2-4 hours</li>
        <li><strong>Todo App with Database:</strong> Traditional: 1-2 months → Vibe: 1-2 days</li>
        <li><strong>E-commerce Store:</strong> Traditional: 3-6 months → Vibe: 1-2 weeks</li>
        <li><strong>REST API Backend:</strong> Traditional: 2-4 weeks → Vibe: 2-4 hours</li>
        <li><strong>Data Dashboard:</strong> Traditional: 1-3 months → Vibe: 3-7 days</li>
      </ul>

      <p>
        Those aren't typos. The speed difference is genuinely that dramatic for most common 
        applications.
      </p>

      <h3>But What Do You Give Up?</h3>
      
      <p>
        Nothing is free, and vibe coding has trade-offs. Let's be honest about them:
      </p>

      <ul>
        <li><strong>Deep Understanding:</strong> You might not understand every line of generated code initially</li>
        <li><strong>Optimization Control:</strong> AI writes "good enough" code, not always the most efficient</li>
        <li><strong>Debugging Skills:</strong> Traditional debugging experience comes slower</li>
        <li><strong>Architecture Decisions:</strong> Less practice with large-scale system design</li>
        <li><strong>Tool Familiarity:</strong> Might miss some nuances of development tools</li>
      </ul>

      <p>
        Here's the key insight: these trade-offs matter differently depending on your goals. 
        If you want to build a startup MVP, launch a side project, or automate something at 
        work, the speed and accessibility benefits far outweigh the drawbacks.
      </p>

      <p>
        If you're planning to become a senior software engineer at Google, you'll still need 
        deep technical knowledge. But vibe coding can get you building and learning much faster 
        than traditional approaches.
      </p>

      <h2>Breaking Down the Gatekeeping</h2>
      
      <p>
        Let's address the elephant in the room: some people in tech don't want programming to 
        become accessible. There's a certain pride in having mastered complex tools and syntax. 
        Making coding easier threatens their perceived value.
      </p>

      <p>
        But here's the thing - we've seen this pattern before:
      </p>

      <ul>
        <li><strong>Photography:</strong> Cameras on Phones didn't kill professional photographers</li>
        <li><strong>Design:</strong> Photoshop and Canva didn't eliminate graphic designers</li>
        <li><strong>Writing:</strong> Word processors didn't replace professional writers</li>
      </ul>

      <p>
        What these tools did was democratize access. More people could participate, experiment, 
        and create. The professionals adapted and found new ways to add value.
      </p>

      <p>
        Vibe coding is doing the same thing for software development. It's not replacing 
        professional developers - it's enabling more people to solve problems with software.
      </p>

      <h3>The Rising Tide Effect</h3>
      
      <p>
        When more people can build software, several things happen:
      </p>

      <ul>
        <li><strong>More Innovation:</strong> Ideas that would never have been built become reality</li>
        <li><strong>Better Products:</strong> Non-technical domain experts can build solutions they actually understand</li>
        <li><strong>Faster Iteration:</strong> Changes and improvements happen in hours, not months</li>
        <li><strong>Lower Costs:</strong> Small businesses and individuals can afford custom solutions</li>
        <li><strong>Education Revolution:</strong> Learning becomes hands-on and project-based</li>
      </ul>

      <h2>What This Means for Different Groups</h2>
      
      <h3>For Complete Beginners</h3>
      <p>
        You can start building real things immediately. No need to spend months learning syntax 
        before you can create anything useful. Start with your actual goals and learn along the way.
      </p>

      <h3>For Small Business Owners</h3>
      <p>
        Custom software is now accessible. Instead of choosing between expensive developers and 
        cookie-cutter solutions, you can build exactly what your business needs.
      </p>

      <h3>For Students and Educators</h3>
      <p>
        Learning becomes project-driven. Build the thing, then understand how it works. Computer 
        science education can focus on problem-solving rather than syntax memorization.
      </p>

      <h3>For Experienced Developers</h3>
      <p>
        Vibe coding is a superpower, not a threat. Use it for rapid prototyping, boilerplate 
        generation, exploring new technologies, and focusing on high-level architecture instead 
        of repetitive implementation.
      </p>

      <h3>For Entrepreneurs and Innovators</h3>
      <p>
        The barrier between idea and execution just got much lower. Test concepts quickly, build 
        MVPs rapidly, and iterate based on real user feedback instead of spending months building 
        in isolation.
      </p>

      <h2>The Bigger Picture</h2>
      
      <p>
        Vibe coding isn't just about making programming easier - it's about changing who gets 
        to participate in shaping our digital world. When software creation becomes accessible 
        to non-programmers, we get:
      </p>

      <ul>
        <li><strong>Diverse Perspectives:</strong> Solutions built by people who actually face the problems</li>
        <li><strong>Niche Solutions:</strong> Software for small, underserved communities becomes viable</li>
        <li><strong>Rapid Innovation:</strong> Ideas can be tested and iterated much faster</li>
        <li><strong>Economic Opportunities:</strong> More people can create digital products and services</li>
        <li><strong>Educational Transformation:</strong> Learning becomes hands-on and immediately applicable</li>
      </ul>

      <p>
        We're not just talking about a new way to write code. We're talking about democratizing 
        the ability to solve problems with software.
      </p>

      <div className="call-to-action">
        <p>
          <strong>Ready to get your hands dirty?</strong> In the next chapter, we'll dive into 
          the actual tools and setup you need to start vibe coding today.
        </p>
        <button onClick={onNext}>Continue to Chapter 3 →</button>
      </div>

      <div className="reading-time">
        <em>Estimated reading time: 12 minutes</em>
      </div>
    </div>
  )
}

export default Chapter2
