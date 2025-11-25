'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/lib/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="about-page">
      <section className="hero">
        <div className="container">
          <h1>{t.about.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="doctor-section">
              <h2>{t.about.doctorTitle}</h2>
              <h3>{t.about.doctorSubtitle}</h3>
              <p className="biography">{t.about.biography}</p>
            </div>

            <div className="info-section">
              <div className="info-block">
                <h3>{t.about.education.title}</h3>
                <ul>
                  <li>{t.about.education.medical}</li>
                  <li>{t.about.education.internships}</li>
                  <li>{t.about.education.surgical}</li>
                  <li>{t.about.education.family}</li>
                </ul>
              </div>

              <div className="info-block">
                <h3>{t.about.appointments.title}</h3>
                <ul>
                  {t.about.appointments.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="info-block">
                <h3>{t.about.directorships.title}</h3>
                <ul>
                  {t.about.directorships.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mission-vision">
              <div className="mission-block">
                <h3>{t.about.mission.title}</h3>
                <ul>
                  {t.about.mission.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="vision-block">
                <h3>{t.about.vision.title}</h3>
                <ul>
                  {t.about.vision.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
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
          padding: 4rem 0;
        }

        .about-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .doctor-section {
          text-align: center;
          margin-bottom: 3rem;
          padding-bottom: 3rem;
          border-bottom: 2px solid #e5e7eb;
        }

        .doctor-section h2 {
          font-size: 2rem;
          color: #1e40af;
          margin-bottom: 0.5rem;
        }

        .doctor-section h3 {
          font-size: 1.25rem;
          color: #6b7280;
          margin-bottom: 1rem;
          font-weight: 400;
        }

        .biography {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #374151;
          max-width: 800px;
          margin: 0 auto;
        }

        .info-section {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .info-block {
          background-color: #f9fafb;
          padding: 2rem;
          border-radius: 0.5rem;
        }

        .info-block h3 {
          font-size: 1.5rem;
          color: #1e40af;
          margin-bottom: 1rem;
        }

        .info-block ul {
          list-style: none;
          padding: 0;
        }

        .info-block li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.6;
        }

        .info-block li:before {
          content: '•';
          position: absolute;
          left: 0;
          color: #1e40af;
          font-weight: bold;
        }

        .mission-vision {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .mission-block,
        .vision-block {
          background-color: #f9fafb;
          padding: 2rem;
          border-radius: 0.5rem;
        }

        .mission-block h3,
        .vision-block h3 {
          font-size: 1.5rem;
          color: #1e40af;
          margin-bottom: 1rem;
        }

        .mission-block ul,
        .vision-block ul {
          list-style: none;
          padding: 0;
        }

        .mission-block li,
        .vision-block li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.6;
        }

        .mission-block li:before,
        .vision-block li:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }

        @media (min-width: 768px) {
          .hero {
            padding: 4rem 0;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .info-section {
            grid-template-columns: repeat(2, 1fr);
          }

          .mission-vision {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

