import { Download } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden">
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
              01. About Me
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Who I Am
            </h2>
          </div>

          {/* Text content */}
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed text-center sm:text-left">
              I'm <span className="text-white font-semibold">Ananya Ghosh</span>, a computer science student and full-stack
              developer based in Kolkata, India, passionate about building intelligent and scalable digital products. My journey in technology started with web development, and I've since expanded my expertise into the JavaScript ecosystem, working extensively with{' '}
              <span className="text-primary-400 font-medium">React</span>,{' '}
              <span className="text-primary-400 font-medium">Node.js</span>, and{' '}
              <span className="text-primary-400 font-medium">MySQL</span> to architect end-to-end solutions.
            </p>
            
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed text-center sm:text-left">
              Whether it's architecting a new application from scratch or optimizing an existing codebase, I thrive on turning complex problems into elegant, maintainable code. Beyond traditional web development, I have a strong foundation in C, Java, and Python, with a growing focus on integrating Generative AI and Machine Learning concepts into modern applications.
            </p>
            
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed text-center sm:text-left">
              When I'm not coding, you'll find me contributing to open-source projects, writing technical blog posts, or exploring the latest advancements in AI.
            </p>

            {/* Resume button */}
            <div className="pt-8 flex justify-center">
              <a
                href="/Ananya_Ghosh_CV.pdf"
                download="Ananya_Ghosh_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:border-primary-500 text-neutral-200 hover:text-primary-400 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}