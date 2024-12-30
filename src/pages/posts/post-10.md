---
layout: ../../layouts/MarkdownPostLayout.astro
title:  GSAP integration.
author: Astro Learner
description: "front-end JavaScript framework"
image: 
    url: "https://media.istockphoto.com/id/545458888/photo/ring-binders.jpg?s=612x612&w=0&k=20&c=gaR24qZAecjJ_rVxLgfbXMQEl7gv8xclCMwRnCcUUPc="
    alt: "The Astro logo on a dark background with a purple gradient arc."
pubDate: 2022-07-08
tags: ["GSAP, Framer Motion, Anime.js, Three.js "]
---

When organizing your project with GSAP (or any front-end JavaScript framework), it's important to structure your files in a way that makes it easy to maintain and scale your project. Below is a recommended file structure for a typical React or Astro project with GSAP animations, assuming you’re using both CSS for styling and GSAP for animations.

### **Recommended File Structure**

```bash
/project-root
│
├── /public/                       # Static assets like images, fonts, icons, etc.
│   ├── /images/                   # Image files
│   ├── /fonts/                    # Font files (if using custom fonts)
│   └── index.html                 # HTML entry point (for static sites)
│
├── /src/                          # Source code files
│   ├── /components/               # React or Astro components
│   │   ├── App.jsx                # Main application component
│   │   ├── Greeting.jsx           # Greeting component (with GSAP animation)
│   │   └── VideoPlayer.jsx        # A video player component (example)
│   │
│   ├── /pages/                    # Page components (Astro, React, etc.)
│   │   ├── index.astro            # Main homepage (Astro page)
│   │   └── blog.astro             # Blog page (Astro page)
│   │
│   ├── /styles/                   # CSS or SCSS files
│   │   ├── global.css             # Global styles for the project
│   │   ├── markdown.css           # Styles specific to Markdown content
│   │   └── greeting.css           # CSS for Greeting component (animation and styles)
│   │
│   ├── /utils/                    # Utility functions (optional)
│   │   └── gsapAnimations.js      # Custom GSAP utility functions (optional)
│   │
│   ├── /assets/                   # Static assets for components (images, fonts)
│   └── /scripts/                  # JavaScript files for specific functionality
│       └── animation.js           # GSAP animations for various components
│
├── /node_modules/                 # NPM packages (auto-generated)
│
├── package.json                   # Project metadata and dependencies
├── package-lock.json              # Dependency lock file (auto-generated)
├── .gitignore                     # Git ignore file
└── README.md                      # Project README
```

### **Explanation of the File Structure:**

1. **`/public/`**:
   - Static assets such as images, icons, fonts, and the `index.html` file.
   - Everything inside this directory is publicly accessible, so it's ideal for assets like images or icons.

2. **`/src/`**:
   - This is where your main source code lives, including components, pages, styles, and utilities.
   
   - **`/components/`**:
     - Contains React or Astro components. These components can be styled and animated with GSAP. For example, the `Greeting.jsx` component will contain your greeting text and the associated GSAP animations.
   
   - **`/pages/`**:
     - Contains your Astro or React pages, like `index.astro` or `blog.astro`. Pages are the routes in your application.
   
   - **`/styles/`**:
     - Contains all your CSS or SCSS files. You can keep global styles here (like `global.css`), specific styles for components (like `greeting.css`), or styles for Markdown content (like `markdown.css`).

   - **`/utils/`**:
     - Contains utility functions and JavaScript logic. For example, you can place reusable GSAP animation logic in `gsapAnimations.js`.

   - **`/assets/`**:
     - If you need images or other assets that will be imported directly into components, they should go here.

   - **`/scripts/`**:
     - If you have custom JavaScript files, for example, specific GSAP animations or effects for your entire app, they go here.
  
3. **Root Files:**
   - `package.json`: Defines your project dependencies and scripts (including GSAP).
   - `package-lock.json`: Automatically generated when you run `npm install`. Locks the versions of dependencies.
   - `.gitignore`: Specifies files/folders to ignore in Git (e.g., `node_modules/`, `dist/`, etc.).
   - `README.md`: Contains documentation for the project.

### **Example of Key Files:**

#### **1. `/src/components/Greeting.jsx`**
```bash
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import './greeting.css';

const Greeting = ({ messages }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // Change the greeting every 3 seconds

    return () => clearInterval(intervalId); // Clear the interval when the component is unmounted
  }, [messages.length]);

  useEffect(() => {
    gsap.fromTo(
      '.greeting-text',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1 }
    );
  }, [index]);

  return (
    <div className="greeting-container">
      <p className="greeting-text">{messages[index]}</p>
    </div>
  );
};

export default Greeting;
```

#### **2. `/src/styles/greeting.css`**
```css
.greeting-container {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  padding: 20px;
}

.greeting-text {
  font-size: 2rem;
  color: #333;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .greeting-text {
    font-size: 1.5rem;
  }
}
```

#### **3. `/src/pages/index.astro`**
```astro
---
import Greeting from '../components/Greeting.jsx';
const greetings = ["Hej", "Hallo", "Hola", "Habari"];
---

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Welcome to My Website</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/styles/global.css" />
  </head>
  <body>
    <div class="content-wrapper">
      <h1>Welcome to My Website</h1>
      <Greeting client:load messages={greetings} />
    </div>
  </body>
</html>
```

#### **4. `/src/styles/global.css`**
```bash
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

.content-wrapper {
  padding: 50px;
  text-align: center;
}
```

### **GSAP and CSS:**
- GSAP is usually imported in your components (like `Greeting.jsx`), and your animation logic is handled there.
- CSS is either imported globally (via `global.css`) or scoped to specific components (like `greeting.css`).

This structure will keep your project organized and scalable, separating different concerns (components, styles, scripts) while ensuring that everything related to your GSAP animations is easy to locate and modify.