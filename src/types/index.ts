export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  is_read: boolean
  created_at: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  imageUrl: string
  liveUrl: string
  codeUrl: string
  featured: boolean
}

export interface Skill {
  name: string
  level?: string
  icon: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}
