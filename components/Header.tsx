'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { getTranslations } from '@/lib/translations';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = getTranslations(language);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo">
            <h1>Vintage Family Medicine</h1>
          </Link>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.home}
            </Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.services}
            </Link>
            <Link href="/scheduling" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.scheduling}
            </Link>
            <Link href="/patient-portal" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.patientPortal}
            </Link>
            <Link href="/billing" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.billing}
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.contact}
            </Link>
            <Link href="/resources" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.resources}
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.about}
            </Link>
          </nav>

          <button 
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </div>
      <style jsx>{`
        .header {
          background-color: #1e40af;
          color: white;
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .logo h1 {
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
        }

        .mobile-menu-toggle {
          display: flex;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu-toggle span {
          width: 25px;
          height: 3px;
          background-color: white;
          transition: all 0.3s;
        }

        .nav {
          display: none;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: #1e40af;
          padding: 1rem;
          gap: 0.5rem;
        }

        .nav-open {
          display: flex;
        }

        .nav a {
          color: white;
          padding: 0.75rem 1rem;
          border-radius: 0.375rem;
          transition: background-color 0.2s;
        }

        .nav a:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .language-toggle {
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.2s;
        }

        .language-toggle:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }

        @media (min-width: 768px) {
          .mobile-menu-toggle {
            display: none;
          }

          .nav {
            display: flex;
            flex-direction: row;
            position: static;
            background-color: transparent;
            padding: 0;
            gap: 0.5rem;
          }

          .nav a {
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </header>
  );
}

