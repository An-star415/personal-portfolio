# Personal Portfolio Website

A modern, responsive personal developer portfolio showcasing technical projects, skill proficiencies, and contact information. Built with React, TypeScript, and Tailwind CSS.
Live Demo: https://ananyaghosh-portfolio.vercel.app/
🚀 Features

* **Responsive Design:** Optimized for all screen sizes (mobile, tablet, and desktop).
* **Interactive UI & Animations:** Smooth scrolling animations and modern card layouts.
* **Projects Showcase:** Detailed cards featuring descriptions, tech stacks, live demo links, and GitHub repository links.
* **Skills Matrix:** Categorized overview of languages, frameworks, developer tools, and core CS fundamentals.
* **Production Build Optimization:** Bundled with Vite for fast HMR and optimized static asset delivery.
🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | React 18, TypeScript |
| **Styling & UI** | Tailwind CSS, Lucide Icons |
| **Build Tool & Bundler** | Vite |
| **Hosting & CI/CD** | Vercel |

📁 Project Structure

├── public/                 # Static assets, icons, and CV/Resume
├── src/
│   ├── components/         # Modular UI sections (Hero, About, Projects, Skills, Contact, Footer, Navbar)
│   ├── data/               # Dynamic project and profile content (content.ts)
│   ├── hooks/              # Custom React hooks (e.g., scroll animations)
│   ├── types/              # TypeScript interfaces and type definitions
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global Tailwind and custom styles
├── .env.example            # Environment variable template
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration