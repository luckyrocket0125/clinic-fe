'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { getTranslations } from '@/lib/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Vintage Family Medicine</h3>
            <p>{t.footer.tagline}</p>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>{t.footer.address}</p>
            <p>{t.footer.city}</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link href="/services">{t.nav.services}</Link>
            <Link href="/scheduling">{t.nav.scheduling}</Link>
            <Link href="/patient-portal">{t.nav.patientPortal}</Link>
            <Link href="/contact">{t.nav.contact}</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vintage Family Medicine and Pediatrics. All rights reserved.</p>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: #1f2937;
          color: #e5e7eb;
          padding: 3rem 0 1.5rem;
          margin-top: 4rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3,
        .footer-section h4 {
          color: white;
          margin-bottom: 1rem;
          font-size: 1.125rem;
        }

        .footer-section p {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }

        .footer-section a {
          display: block;
          color: #d1d5db;
          margin-bottom: 0.5rem;
          transition: color 0.2s;
        }

        .footer-section a:hover {
          color: white;
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 1.5rem;
          text-align: center;
          color: #9ca3af;
        }

        @media (min-width: 768px) {
          .footer-content {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </footer>
  );
}

