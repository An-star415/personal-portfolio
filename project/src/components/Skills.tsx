import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiMysql,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss,
} from 'react-icons/si'
import { Code2 } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

// We brought the skills data directly into this file to force it to update!
const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Python', icon: 'python' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'REST APIs', icon: 'rest' },
    ],
  },
  {
    // Updated Title Here!
    title: 'Database & Version Control',
    skills: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' }, // Added GitHub Here!
    ],
  },
]

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  html5: SiHtml5,
  css3: SiCss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  python: SiPython,
  fastapi: SiFastapi,
  rest: Code2,
  mysql: SiMysql,
  git: SiGit,
  github: SiGithub, // Ensures the GitHub icon renders
}

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="skills" className="py-20 md:py-32 bg-neutral-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

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
              02. Skills & Tools
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              My Tech Stack
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
              Here are the frameworks, tools, and languages I use to bring ideas to life.
            </p>
          </div>

          {/* Skill categories */}
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-950/20"
                style={{
                  transitionDelay: `${catIndex * 100}ms`,
                }}
              >
                {/* Category title */}
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full" />
                  {category.title}
                </h3>

                {/* Skills grid */}
                <div className="space-y-3">
                  {category.skills.map((skill) => {
                    const Icon = iconMap[skill.icon] || Code2
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center p-3 bg-neutral-800/50 rounded-xl border border-neutral-700/50 hover:bg-neutral-800 hover:border-neutral-600 transition-all duration-200 group"
                      >
                        <div className="p-2 bg-neutral-700/50 rounded-lg group-hover:bg-primary-500/10 transition-colors duration-200">
                          <Icon size={20} className="text-neutral-300 group-hover:text-primary-400 transition-colors" />
                        </div>
                        <span className="text-neutral-200 font-medium text-sm ml-3">
                          {skill.name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}