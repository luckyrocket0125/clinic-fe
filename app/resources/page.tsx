'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/lib/translations';

export default function Resources() {
  const { language } = useLanguage();
  const t = translations[language];

  const resources = [
    {
      name: t.resources.links.cdc,
      url: 'https://www.cdc.gov',
      description: language === 'en' 
        ? 'Centers for Disease Control and Prevention - Trusted health information'
        : 'Centros para el Control y la Prevención de Enfermedades - Información de salud confiable',
    },
    {
      name: t.resources.links.nih,
      url: 'https://www.nih.gov',
      description: language === 'en'
        ? 'National Institutes of Health - Medical research and health information'
        : 'Institutos Nacionales de Salud - Investigación médica e información de salud',
    },
    {
      name: t.resources.links.familyDoctor,
      url: 'https://familydoctor.org',
      description: language === 'en'
        ? 'FamilyDoctor.org - Health information for the whole family'
        : 'FamilyDoctor.org - Información de salud para toda la familia',
    },
    {
      name: t.resources.links.aap,
      url: 'https://www.aap.org',
      description: language === 'en'
        ? 'American Academy of Pediatrics - Pediatric health resources'
        : 'Academia Estadounidense de Pediatría - Recursos de salud pediátrica',
    },
  ];

  return (
    <div className="resources-page">
      <section className="hero">
        <div className="container">
          <h1>{t.resources.title}</h1>
          <p className="subtitle">{t.resources.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="description">{t.resources.description}</p>
          <div className="resources-grid">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >
                <h3>{resource.name}</h3>
                <p>{resource.description}</p>
                <span className="link-text">
                  {language === 'en' ? 'Visit Website →' : 'Visitar Sitio Web →'}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .resources-page {
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

        .description {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          text-align: center;
          color: #374151;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .resource-card {
          background-color: white;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          padding: 2rem;
          display: block;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
          text-decoration: none;
          color: inherit;
        }

        .resource-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          border-color: #2563eb;
        }

        .resource-card h3 {
          color: #1e40af;
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .resource-card p {
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .link-text {
          color: #2563eb;
          font-weight: 600;
          display: inline-block;
        }

        .resource-card:hover .link-text {
          text-decoration: underline;
        }

        @media (min-width: 768px) {
          .hero {
            padding: 4rem 0;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .resources-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

