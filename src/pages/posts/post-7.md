

---
layout: ../../layouts/MarkdownPostLayout.astro
title: Bash Container
author: Astro Learner
description: "Bash container, copy code button_ChatGPT Style"
image:
    url: "https://upload.wikimedia.org/wikipedia/commons/2/24/GPT_logo_svg.svg"
    alt: "The Astro logo on a dark background with a purple gradient arc."
pubDate: 2022-07-08
tags: ["Bash, container, copy, code, box"]

---


To create an exact replica of the ChatGPT-style **bash code container** with a **copy code button**, here’s a step-by-step guide:

---

### **1. HTML Structure**
Here’s the markup for a styled code container with a copy button:

```html
<div class="bash-container">
  <pre>
<code class="language-bash">
# Example Bash Script
echo "Hello, World!"
ls -la /home
</code>
  </pre>
  <button class="copy-code-button" aria-label="Copy Code">
    📋 <!-- Replace with an SVG icon for better quality -->
  </button>
</div>
```

---

### **2. CSS Styles**
Add the following CSS to style the container and the copy button:

```css
/* Bash container styling */
.bash-container {
  position: relative; /* Establish context for positioning */
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #2d2d2d; /* Dark background like a terminal */
  color: #f8f8f2; /* Light text color for contrast */
  font-family: "Fira Code", monospace; /* Monospace font for code */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

/* Preformatted text styling */
pre {
  margin: 0; /* Remove default margins */
  overflow: auto; /* Enable horizontal scrolling for long code */
  padding-right: 3rem; /* Leave space for the button */
}

/* Copy button styling */
.copy-code-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: #007acc; /* Button color */
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  z-index: 1; /* Ensure it appears above the code content */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.copy-code-button:hover {
  background: #005f99; /* Darker shade on hover */
}
```

---

### **3. JavaScript for Copy Functionality**
Add a script to handle the copy-to-clipboard functionality:

```html
<script>
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".copy-code-button").forEach((button) => {
      button.addEventListener("click", (e) => {
        const codeBlock = e.target.closest(".bash-container").querySelector("code");
        navigator.clipboard.writeText(codeBlock.innerText).then(() => {
          // Show feedback for successful copy
          button.textContent = "Copied!";
          setTimeout(() => (button.textContent = "📋"), 2000); // Reset icon
        }).catch(err => console.error("Failed to copy text:", err));
      });
    });
  });
</script>
```

---

### **4. Optional Enhancements**
#### Syntax Highlighting
For syntax highlighting, integrate Prism.js or any other library:
1. Include the Prism.js stylesheet:
   ```html
   <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-okaidia.min.css" rel="stylesheet">
   ```
2. Add Prism.js to your page:
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js"></script>
   ```

#### Replace the Icon with an SVG
Replace the `📋` emoji with a high-quality SVG icon for better visuals:
```html
<button class="copy-code-button" aria-label="Copy Code">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M16 1H4a2 2 0 00-2 2v14H2V3a3 3 0 013-3h12a3 3 0 013 3v11h-2V3a2 2 0 00-2-2zm4 6h-9a2 2 0 00-2 2v11a2 2 0 002 2h9a2 2 0 002-2V9a2 2 0 00-2-2zm-9 2h9v11h-9V9z"></path>
  </svg>
</button>
```

---

### **Full Example**
Here’s the complete example:

```html
<div class="bash-container">
  <pre>
<code class="language-bash">
# Example Bash Script
echo "Hello, World!"
ls -la /home
</code>
  </pre>
  <button class="copy-code-button" aria-label="Copy Code">
    📋
  </button>
</div>

<style>
  /* Include the CSS styles from above */
</style>

<script>
  /* Include the JavaScript copy functionality */
</script>
```

---

This will give you a container that looks and behaves like ChatGPT’s bash code block with a fully functional copy button. Let me know if you'd like help tweaking it further!