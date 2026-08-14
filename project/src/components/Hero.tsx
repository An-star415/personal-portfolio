import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden bg-neutral-950 py-24 md:py-32"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-300 text-sm font-medium animate-fade-in">
            <Sparkles size={16} />
            <span>Available for new opportunities</span>
          </div>

          {/* Greeting */}
          <p className="text-neutral-400 text-lg md:text-xl mb-3 animate-fade-in-up">
            Hello, I'm
          </p>

          {/* Name */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 animate-fade-in-up tracking-tight"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            Ananya Ghosh
          </h1>

          {/* Role */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            Full-Stack Developer
          </h2>

          {/* Description */}
          <p
            className="max-w-2xl mx-auto text-neutral-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            I build modern, performant web applications from the ground up — crafting clean
            user interfaces and robust backend systems that scale.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-600/30 hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="w-full sm:w-auto px-8 py-3.5 border border-neutral-700 hover:border-primary-500 text-neutral-200 hover:text-primary-400 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #1e293b 1px, transparent 1px),
            linear-gradient(to bottom, #1e293b 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  )
}