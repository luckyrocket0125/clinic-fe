'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/lib/translations';

export default function PatientPortal() {
  const { language } = useLanguage();
  const t = translations[language];
  const athenaUrl = process.env.NEXT_PUBLIC_ATHENAONE_URL || '#';

  return (
    <div className="portal-page">
      <section className="hero">
        <div className="container">
          <h1>{t.patientPortal.title}</h1>
          <p className="subtitle">{t.patientPortal.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="portal-content">
            <p className="description">{t.patientPortal.description}</p>
            <div className="portal-box">
              <a 
                href={athenaUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-large"
              >
                {t.patientPortal.button}
              </a>
              <p className="note">
                {language === 'en'
                  ? 'You will be redirected to AthenaOne to access your patient portal.'
                  : 'Será redirigido a AthenaOne para acceder a su portal de pacientes.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .portal-page {
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
          margin-bottom: 1rem;
        }

        .subtitle {
          font-size: 1.125rem;
          opacity: 0.95;
        }

        .section {
          padding: 4rem 0;
        }

        .portal-content {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .description {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          color: #374151;
        }

        .portal-box {
          background-color: #f9fafb;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          padding: 3rem 2rem;
        }

        .btn-large {
          font-size: 1.25rem;
          padding: 1rem 2rem;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .note {
          color: #6b7280;
          font-size: 0.875rem;
          margin-top: 1rem;
        }

        @media (min-width: 768px) {
          .hero {
            padding: 4rem 0;
          }

          .hero h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}

