import { ExternalLink, Star } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

// We removed the old import that was crashing the live server!
const myProjects = [
  {
    id: 1,
    title: 'PathAI',
    description: 'An AI-powered web application for path analysis and interactive workflows. It utilizes LangGraph for handling complex, multi-step AI reasoning and integrates the Groq API for lightning-fast LLM responses and data processing.',
    techStack: ['React', 'Node.js', 'LangGraph', 'Groq API'],
    imageUrl: '/pathai-preview.png',
    featured: true,
    liveUrl: 'https://pathai-project.vercel.app',
    codeUrl: 'https://github.com/An-star415/pathai-project'
  },
  {
    id: 2,
    title: 'City Weather App',
    description: 'A responsive weather application that lets users check the current weather conditions of any city worldwide. It displays real-time data including temperature, humidity, wind speed, and visual weather icons.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    imageUrl: '/weather-preview.png',
    featured: false,
    liveUrl: 'https://an-star415.github.io/city-weather2/',
    codeUrl: 'https://github.com/An-star415/city-weather2'
  }
];

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="projects" className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary-400 font-mono text-sm font-semibold mb-2 tracking-wider uppercase">
              03. Projects
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Work
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
              A selection of projects I've built — from full-stack applications to focused tools.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {myProjects.map((project, index) => (
              <article
                key={project.id}
                className="group bg-neutral-800/50 border border-neutral-700/50 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-950/30 hover:-translate-y-1"
                style={{
                  transitionDelay: `${index * 60}ms`,
                }}
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden bg-neutral-800">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent" />
                  {project.featured && (
                    <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full shadow-lg">
                      <Star size={12} fill="currentColor" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Project content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-neutral-700/60 text-neutral-300 text-xs font-medium rounded-md border border-neutral-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-2 border-t border-neutral-700/50">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-300 hover:text-primary-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 cursor-not-allowed">
                        <ExternalLink size={16} />
                        No Live Demo
                      </span>
                    )}
                    {project.liveUrl && project.codeUrl && (
                      <span className="text-neutral-600">|</span>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-300 hover:text-primary-400 transition-colors"
                      >
                        <FaGithub size={16} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}