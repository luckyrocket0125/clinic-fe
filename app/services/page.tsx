'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/lib/translations';

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="services-page">
      <section className="hero">
        <div className="container">
          <h1>{t.services.title}</h1>
          <p className="subtitle">{t.services.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {t.services.list.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-page {
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
          padding: 3rem 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .service-card {
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .service-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .service-card h3 {
          color: #1e40af;
          font-size: 1.125rem;
          font-weight: 600;
        }

        @media (min-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }

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

