import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import Section from './ui/Section';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    // CONFIGURATION: Replace these with your actual EmailJS credentials
    // Get them at https://dashboard.emailjs.com/
    const SERVICE_ID = 'service_fpmso35';
    const TEMPLATE_ID = 'template_bx8vyrc';
    const PUBLIC_KEY = '_rhZJfubFCTvxKkED';

    try {
      // Logic to send email
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Vo Quoc Dinh',
        },
        PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('error');
      
      // Reset status after 3 seconds so they can try again
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <Section id="contact" title="Get In Touch" subtitle="I'm open to new opportunities and collaborations.">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800/50">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:vqdinh2202@gmail.com" className="flex items-center gap-4 text-slate-400 hover:text-primary-400 transition-colors group">
                  <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-primary-500/10 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span>vqdinh2202@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="p-3 bg-slate-800 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <span>+84 399 967 453</span>
                </div>
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="p-3 bg-slate-800 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <span>Thu Duc City, HCMC, Vietnam</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://github.com/VQuocDinh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl flex justify-center items-center gap-2 transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/voquocdinh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-[#0077b5] hover:bg-[#006396] text-white py-3 rounded-xl flex justify-center items-center gap-2 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Functional Form */}
          <form className="space-y-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-800/50" onSubmit={handleSubmit}>
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Hello, I'd like to discuss..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full font-medium py-3 rounded-lg transition-all flex justify-center items-center gap-2 shadow-lg ${
                  status === 'success' 
                    ? 'bg-green-600 hover:bg-green-500 text-white shadow-green-500/20 cursor-default' 
                    : status === 'error'
                    ? 'bg-red-600 hover:bg-red-500 text-white shadow-red-500/20'
                    : 'bg-primary-600 hover:bg-primary-500 text-white shadow-primary-500/20 disabled:opacity-70 disabled:cursor-not-allowed'
                }`}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle size={18} />
                    Failed. Try Again.
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-20 text-center text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Vo Quoc Dinh. Built with React, Tailwind & Framer Motion.</p>
        </div>
      </Section>
    </footer>
  );
};

export default Contact;