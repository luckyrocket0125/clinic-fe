'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/lib/translations';

export default function Billing() {
  const { language } = useLanguage();
  const t = translations[language];
  const [amount, setAmount] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    
    // TODO: Integrate with payment processor (Stripe/PayPal)
    setTimeout(() => {
      setProcessing(false);
      alert(language === 'en' 
        ? 'Payment processing will be integrated with your payment provider.'
        : 'El procesamiento de pagos se integrará con su proveedor de pagos.');
    }, 1000);
  };

  return (
    <div className="billing-page">
      <section className="hero">
        <div className="container">
          <h1>{t.billing.title}</h1>
          <p className="subtitle">{t.billing.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="billing-content">
            <p className="description">{t.billing.description}</p>
            <form className="payment-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="amount">
                  {language === 'en' ? 'Amount ($)' : 'Cantidad ($)'}
                </label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-large"
                disabled={processing}
              >
                {processing 
                  ? (language === 'en' ? 'Processing...' : 'Procesando...')
                  : t.billing.payButton}
              </button>
            </form>
          </div>
        </div>
      </section>

      <style jsx>{`
        .billing-page {
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

        .billing-content {
          max-width: 500px;
          margin: 0 auto;
        }

        .description {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          color: #374151;
          text-align: center;
        }

        .payment-form {
          background-color: #f9fafb;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          padding: 2rem;
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

        .form-group input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          font-size: 1rem;
        }

        .form-group input:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .btn-large {
          width: 100%;
          font-size: 1.125rem;
          padding: 1rem;
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
        }
      `}</style>
    </div>
  );
}

