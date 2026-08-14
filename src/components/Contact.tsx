import { Mail, MapPin, CheckCircle2, AlertCircle, Loader2, ArrowUp } from 'lucide-react'
import { supabase } from '../lib/supabase'
import type { ContactFormData } from '../types'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const initialForm: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'gananya547@gmail.com',
    href: 'mailto:gananya547@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kolkata, West Bengal',
    href: null,
  },
]

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()
  const [formData, setFormData] = useState<ContactFormData>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const validate = (data: ContactFormData): FormErrors => {
    const newErrors: FormErrors = {}

    if (!data.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (data.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    } else if (data.name.trim().length > 80) {
      newErrors.name = 'Name must be less than 80 characters'
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!data.subject.trim()) {
      newErrors.subject = 'Subject is required'
    } else if (data.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters'
    } else if (data.subject.trim().length > 120) {
      newErrors.subject = 'Subject must be less than 120 characters'
    }

    if (!data.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (data.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    } else if (data.message.trim().length > 2000) {
      newErrors.message = 'Message must be less than 2000 characters'
    }

    return newErrors
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
    if (status === 'error' || status === 'success') {
      setStatus('idle')
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const validationErrors = validate(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setStatus('loading')
    setErrorMessage('')

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      })

      if (error) throw error

      setStatus('success')
      setFormData(initialForm)

      // Automatically hide the success message after 2 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 2000)

    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again later.'
      )
    }
  }

  const inputClasses = (fieldName: keyof FormErrors) =>
    `w-full px-4 py-3 bg-neutral-800 border rounded-xl text-white placeholder:text-neutral-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/40 ${
      errors[fieldName]
        ? 'border-error-500 focus:border-error-500'
        : 'border-neutral-700 focus:border-primary-500'
    }`

  return (
    <section id="contact" className="py-20 md:py-32 bg-neutral-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-600/10 rounded-full blur-3xl" />

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
              04. Contact
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Let's build something together.</h3>
              <p className="text-neutral-400 text-base leading-relaxed">
                I'm currently open to freelance opportunities and full-time positions. Whether you
                have a question about my work, a project you'd like to discuss, or just want to
                connect, feel free to reach out.
              </p>

              <div className="space-y-4 pt-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="p-3 bg-primary-500/10 border border-primary-500/20 rounded-xl">
                      <Icon className="text-primary-400" size={22} />
                    </div>
                    <div>
                      <p className="text-neutral-500 text-sm">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-white font-medium hover:text-primary-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 space-y-5"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={inputClasses('name')}
                    disabled={status === 'loading'}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-error-400 flex items-center gap-1.5">
                      <AlertCircle size={14} />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className={inputClasses('email')}
                    disabled={status === 'loading'}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-error-400 flex items-center gap-1.5">
                      <AlertCircle size={14} />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Let's work together on..."
                    className={inputClasses('subject')}
                    disabled={status === 'loading'}
                  />
                  {errors.subject && (
                    <p className="mt-2 text-sm text-error-400 flex items-center gap-1.5">
                      <AlertCircle size={14} />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className={`${inputClasses('message')} resize-none`}
                    disabled={status === 'loading'}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-error-400 flex items-center gap-1.5">
                      <AlertCircle size={14} />
                      {errors.message}
                    </p>
                  )}
                  <p className="mt-2 text-xs text-neutral-500 text-right">
                    {formData.message.length}/2000
                  </p>
                </div>

                {/* Success message */}
                {status === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-success-500/10 border border-success-500/20 rounded-xl">
                    <CheckCircle2 className="text-success-400 flex-shrink-0" size={20} />
                    <p className="text-success-400 text-sm font-medium">
                      Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </p>
                  </div>
                )}

                {/* Error message */}
                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-error-500/10 border border-error-500/20 rounded-xl">
                    <AlertCircle className="text-error-400 flex-shrink-0" size={20} />
                    <p className="text-error-400 text-sm font-medium">
                      {errorMessage || 'Something went wrong. Please try again.'}
                    </p>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-600 hover:bg-primary-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-600/30"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <ArrowUp size={18} />
                      Submit
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}