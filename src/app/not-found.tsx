import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import './no-found.css';

export default async function NotFound() {
  const t = await getTranslations('error');

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">{t('pageNotFound')}</h2>
      <p className="notfound-desc">{t('pageNotFoundDesc')}</p>
      <Link
        href="/"
        className="notfound-link"
      >
        {t('backHome')}
      </Link>
    </div>
  );
}
