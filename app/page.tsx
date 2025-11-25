'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/lib/translations';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>{t.home.heroTitle}</h1>
          <h2>{t.home.heroSubtitle}</h2>
          <p className="hero-description">{t.home.heroDescription}</p>
          <div className="hero-buttons">
            <Link href="/scheduling" className="btn">
              {t.nav.scheduling}
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </section>

      <section className="section care-section">
        <div className="container">
          <h2>{t.home.careTitle}</h2>
          <div className="care-points">
            {t.home.carePoints.map((point, index) => (
              <p key={index} className={index === 2 ? 'care-intro' : ''}>
                {point}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section quality-section">
        <div className="container">
          <h2>{t.home.qualityTitle}</h2>
          <h3>{t.home.qualitySubtitle}</h3>
          <p>{t.home.qualityDescription}</p>
          <ul className="features-list">
            {t.home.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <h2>{t.home.servicesTitle}</h2>
          <p>{t.home.servicesDescription}</p>
          <Link href="/services" className="btn">
            {t.nav.services}
          </Link>
        </div>
      </section>

      <section className="section images-section">
        <div className="container">
          <div className="images-grid">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <span>Exam Room</span>
              </div>
            </div>
            <div className="image-placeholder">
              <div className="placeholder-content">
                <span>Waiting Area</span>
              </div>
            </div>
            <div className="image-placeholder">
              <div className="placeholder-content">
                <span>Staff</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section preventive-section">
        <div className="container">
          <h2>{t.home.preventiveTitle}</h2>
          <p>{t.home.preventiveDescription}</p>
        </div>
      </section>

      <section className="section lifestyle-section">
        <div className="container">
          <h2>{t.home.lifestyleTitle}</h2>
          <p>{t.home.lifestyleDescription}</p>
        </div>
      </section>

      <section className="section video-section">
        <div className="container">
          <h2>{t.home.videoTitle}</h2>
          <p>{t.home.videoDescription}</p>
        </div>
      </section>

      <style jsx>{`
        .home {
          min-height: 100vh;
        }

        .hero {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          color: white;
          padding: 4rem 0;
          text-align: center;
        }

        .hero h1 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .hero h2 {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          font-weight: 400;
          opacity: 0.95;
        }

        .hero-description {
          font-size: 1.125rem;
          margin-bottom: 2rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .section {
          padding: 3rem 0;
        }

        .care-section {
          background-color: #f9fafb;
        }

        .care-section h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: #1e40af;
        }

        .care-points p {
          margin-bottom: 1rem;
          line-height: 1.8;
          font-size: 1.0625rem;
        }

        .care-intro {
          font-weight: 600;
          color: #1e40af;
          margin-top: 1rem;
        }

        .quality-section h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: #1e40af;
        }

        .quality-section h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #374151;
        }

        .quality-section p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          font-size: 1.0625rem;
        }

        .features-list {
          list-style: none;
          padding: 0;
        }

        .features-list li {
          padding: 0.75rem 0;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.6;
        }

        .features-list li:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
          font-size: 1.25rem;
        }

        .services-preview {
          background-color: #f9fafb;
          text-align: center;
        }

        .services-preview h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #1e40af;
        }

        .services-preview p {
          margin-bottom: 2rem;
          line-height: 1.8;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .images-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .image-placeholder {
          aspect-ratio: 16 / 9;
          background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px dashed #9ca3af;
        }

        .placeholder-content {
          text-align: center;
          color: #6b7280;
          font-weight: 600;
          font-size: 1.25rem;
        }

        .preventive-section,
        .lifestyle-section,
        .video-section {
          background-color: #f9fafb;
        }

        .preventive-section h2,
        .lifestyle-section h2,
        .video-section h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #1e40af;
        }

        .preventive-section p,
        .lifestyle-section p,
        .video-section p {
          line-height: 1.8;
          font-size: 1.0625rem;
        }

        @media (min-width: 768px) {
          .hero {
            padding: 6rem 0;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .hero h2 {
            font-size: 1.5rem;
          }

          .images-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .section {
            padding: 4rem 0;
          }
        }
      `}</style>
    </div>
  );
}

