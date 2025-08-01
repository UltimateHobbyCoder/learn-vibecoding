import React from 'react'

interface ChapterProps {
  onNext: () => void
}

const Chapter1: React.FC<ChapterProps> = ({ onNext }) => {
  return (
    <div>
      <h1>Chapter 1: What the Heck is Vibe Coding?</h1>
      
      <p>
        Welcome to the future of programming, where you describe what you want in plain English 
        and AI writes the code for you. If that sounds too good to be true, I get it. But here's 
        the thing – it's not only true, it's happening right now, and people are building entire 
        applications this way.
      </p>

      <h2>The "Just Tell Me What You Want" Approach</h2>
      
      <p>
        Imagine sitting down at your computer and instead of wrestling with semicolons, brackets, 
        and syntax errors, you just... talk. You describe what you want to build, and the computer 
        figures out how to make it happen.
      </p>

      <p>Here's what a typical vibe coding session looks like:</p>

      <pre><code>Prompt: Create a simple web page with a header that says "Welcome to My App" 
and a button that shows an alert when clicked.</code></pre>

      <p>And boom – you get working HTML, CSS, and JavaScript that does exactly that. No Stack Overflow. No debugging mysterious error messages. Just working code.</p>

      <pre><code>{`Code:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Welcome to My App</h1>
    <button onclick="alert('Hello! Welcome to the app!')">Click Me</button>
</body>
</html>`}</code></pre>

      <h2>Why This Feels Like Magic (But Isn't)</h2>
      
      <p>
        The first time you see vibe coding in action, it feels like magic. You're basically having 
        a conversation with a computer that understands not just what you're saying, but what you 
        <em>mean</em>. But it's not magic – it's the result of massive advances in AI language models 
        that have been trained on millions of lines of code.
      </p>

      <p>
        These AI models have seen so much code that they understand patterns, best practices, and 
        even the quirks of different programming languages. When you describe what you want, they 
        can predict what code would accomplish that goal.
      </p>

      <blockquote>
        <p>
          Think of it like having a really smart programming buddy who's memorized every tutorial, 
          documentation page, and Stack Overflow answer ever written, and can instantly apply that 
          knowledge to your specific problem.
        </p>
      </blockquote>

      <h2>Who's Already Doing This?</h2>
      
      <p>You might be surprised by who's already jumped on the vibe coding train:</p>

      <ul>
        <li><strong>Startups</strong> – Building MVPs in days instead of months</li>
        <li><strong>Experienced developers</strong> – Speeding up routine tasks and exploring new technologies</li>
        <li><strong>Designers</strong> – Turning mockups into working prototypes without waiting for developers</li>
        <li><strong>Students</strong> – Learning programming concepts without getting stuck on syntax</li>
        <li><strong>Non-technical founders</strong> – Building their own tools and automations</li>
      </ul>

      <p>
        The common thread? They all realized that the bottleneck in building software isn't having 
        ideas – it's translating those ideas into working code. Vibe coding removes that bottleneck.
      </p>

      <h2>Your First Taste of Vibe Coding</h2>
      
      <p>
        Let's try something simple. Here's how you might create a basic to-do list app using vibe coding:
      </p>

      <pre><code>Prompt: Create a simple to-do list web app where users can:
- Add new tasks by typing and pressing enter
- Mark tasks as complete by clicking them
- Delete tasks with a delete button
- See how many tasks are remaining

Make it look clean and modern.</code></pre>

      <p>
        With traditional coding, this would involve setting up HTML structure, styling with CSS, 
        managing state with JavaScript, handling events, and probably several trips to Google when 
        things don't work as expected.
      </p>

      <p>
        With vibe coding, you describe what you want and get a working app. The AI handles all the 
        technical details – the DOM manipulation, event listeners, CSS styling, and even best 
        practices like accessibility features.
      </p>

      <h2>What You Can (and Can't) Expect</h2>
      
      <p>Let's set realistic expectations right off the bat:</p>

      <h3>What Vibe Coding Is Great At:</h3>
      <ul>
        <li>Building standard web interfaces (forms, dashboards, landing pages)</li>
        <li>Creating APIs and backend services</li>
        <li>Setting up databases and data models</li>
        <li>Implementing common features (authentication, payments, etc.)</li>
        <li>Rapid prototyping and experimentation</li>
        <li>Learning new technologies and frameworks</li>
      </ul>

      <h3>What Vibe Coding Struggles With:</h3>
      <ul>
        <li>Highly complex, domain-specific algorithms</li>
        <li>Performance-critical code that needs fine-tuning</li>
        <li>Large, enterprise-scale architecture decisions</li>
        <li>Debugging existing codebases with lots of legacy code</li>
        <li>Real-time systems with strict timing requirements</li>
      </ul>

      <p>
        The sweet spot for vibe coding is in the 80% of software development that involves building 
        standard features, connecting systems, and creating user interfaces. It's not going to 
        replace human expertise entirely, but it can handle the heavy lifting so you can focus on 
        the interesting problems.
      </p>

      <blockquote>
        <p>
          <strong>Reality Check:</strong> Vibe coding doesn't make you a programmer overnight. 
          But it does remove the biggest barrier to getting started – learning syntax and 
          dealing with technical minutiae that have nothing to do with solving your actual problem.
        </p>
      </blockquote>

      <h3>A Quick Example: Building a Weather App</h3>
      
      <p>
        To wrap up this chapter, let's look at how you might approach building a weather app 
        with vibe coding:
      </p>

      <pre><code>Prompt: Create a weather app that:
- Shows current weather for the user's location
- Displays a 5-day forecast
- Has a search function to check weather in other cities
- Shows weather icons and feels nice to use
- Works on mobile phones

Use a free weather API and make sure to handle errors gracefully.</code></pre>

      <p>
        The AI would generate a complete application including:
      </p>
      <ul>
        <li>HTML structure with responsive design</li>
        <li>CSS styling with weather icons and animations</li>
        <li>JavaScript to fetch weather data from an API</li>
        <li>Geolocation functionality</li>
        <li>Error handling for network issues</li>
        <li>Mobile-friendly responsive design</li>
      </ul>

      <p>
        What traditionally might take a beginner weeks to figure out (API integration, responsive 
        design, error handling) becomes a 5-minute conversation with AI.
      </p>

      <div className="call-to-action">
        <p>
          <strong>Ready to dive deeper?</strong> In the next chapter, we'll explore why this 
          approach is more than just a neat trick – it's fundamentally changing how software 
          gets built and who gets to build it.
        </p>
        <button onClick={onNext}>Continue to Chapter 2 →</button>
      </div>

      <div className="reading-time">
        <em>Estimated reading time: 8 minutes</em>
      </div>
    </div>
  )
}

export default Chapter1
