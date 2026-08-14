import type { Project, SkillCategory } from '../types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'DevFlow - Project Management App',
    description:
      'A full-featured project management platform with real-time collaboration, task boards, time tracking, and team analytics. Built with a focus on performance and user experience.',
    techStack: ['React', 'Node.js', 'MySQL', 'Socket.io', 'Tailwind CSS'],
    imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: '#',
    codeUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'ShopSphere - E-Commerce Platform',
    description:
      'A modern e-commerce solution with product search, cart management, Stripe payments, order tracking, and an admin dashboard for inventory management.',
    techStack: ['React', 'TypeScript', 'MySQL', 'Stripe', 'Tailwind CSS'],
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: '',
    codeUrl: '#',
    featured: false,
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: '', icon: 'html5' },
      { name: 'CSS3', level: '', icon: 'css3' },
      { name: 'JavaScript (ES6+)', level: '', icon: 'javascript' },
      { name: 'TypeScript', level: '', icon: 'typescript' },
      { name: 'React', level: '', icon: 'react' },
      { name: 'Tailwind CSS', level: '', icon: 'tailwind' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: '', icon: 'nodejs' },
      { name: 'Python', level: '', icon: 'python' },
      { name: 'FastAPI', level: '', icon: 'fastapi' },
      { name: 'REST APIs', level: '', icon: 'rest' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', level: '', icon: 'mysql' },
      { name: 'Git', level: '', icon: 'git' },
    ],
  },
]

export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
