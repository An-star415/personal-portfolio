import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/An-star415', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ananyaghosh547/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:gananya547@gmail.com', label: 'Email' },
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="font-mono text-xl font-bold text-white hover:text-primary-400 transition-colors"
            >
              <span className="text-primary-500">&lt;</span>
              AG
              <span className="text-primary-500">/&gt;</span>
            </a>
            <p className="mt-3 text-neutral-400 text-sm leading-relaxed max-w-xs">
              Full-stack developer building modern web applications with passion and precision.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-neutral-400 hover:text-primary-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Connect</h3>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 bg-neutral-800/50 hover:bg-primary-600 text-neutral-300 hover:text-white rounded-lg transition-all duration-200 border border-neutral-700/50 hover:border-primary-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Ananya Ghosh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
