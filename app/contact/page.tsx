'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/lib/translations';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="contact-page">
      <section className="hero">
        <div className="container">
          <h1>{t.contact.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>{language === 'en' ? 'Location' : 'Ubicación'}</h2>
              <p>{t.contact.address}</p>

              <h2>{t.contact.hours}</h2>
              <p>{t.contact.hoursWeekday}</p>
              <p>{t.contact.hoursLunch}</p>

              <h2>{t.contact.holidays}</h2>
              <ul>
                {t.contact.holidaysList.map((holiday, index) => (
                  <li key={index}>{holiday}</li>
                ))}
              </ul>
            </div>

            <div className="contact-form-wrapper">
              <h2>{language === 'en' ? 'Send us a Message' : 'Envíenos un Mensaje'}</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t.contact.formName} *</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t.contact.formEmail} *</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t.contact.formPhone}</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">{t.contact.formSubject}</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t.contact.formMessage} *</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                {status === 'success' && (
                  <div className="alert alert-success">{t.contact.formSuccess}</div>
                )}

                {status === 'error' && (
                  <div className="alert alert-error">{t.contact.formError}</div>
                )}

                <button 
                  type="submit" 
                  className="btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' 
                    ? (language === 'en' ? 'Sending...' : 'Enviando...')
                    : t.contact.formSubmit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          min-height: 100vh;
        }

        .hero {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          color: white;
          padding: 3rem 0;
          text-align: center;
        }

        .hero h1 {
          font-size: 2rem;
        }

        .section {
          padding: 3rem 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        .contact-info h2 {
          font-size: 1.5rem;
          color: #1e40af;
          margin-bottom: 1rem;
          margin-top: 2rem;
        }

        .contact-info h2:first-child {
          margin-top: 0;
        }

        .contact-info p {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }

        .contact-info ul {
          list-style: none;
          padding: 0;
        }

        .contact-info li {
          padding: 0.25rem 0;
          padding-left: 1.5rem;
          position: relative;
        }

        .contact-info li:before {
          content: '•';
          position: absolute;
          left: 0;
          color: #1e40af;
        }

        .contact-form-wrapper h2 {
          font-size: 1.5rem;
          color: #1e40af;
          margin-bottom: 1.5rem;
        }

        .contact-form {
          background-color: #f9fafb;
          padding: 2rem;
          border-radius: 0.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #374151;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          font-size: 1rem;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .alert {
          padding: 1rem;
          border-radius: 0.375rem;
          margin-bottom: 1rem;
        }

        .alert-success {
          background-color: #d1fae5;
          color: #065f46;
        }

        .alert-error {
          background-color: #fee2e2;
          color: #991b1b;
        }

        .btn {
          width: 100%;
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (min-width: 768px) {
          .hero {
            padding: 4rem 0;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .contact-grid {
            grid-template-columns: 1fr 1.5fr;
          }
        }
      `}</style>
    </div>
  );
}

