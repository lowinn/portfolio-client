'use client';

import {useTranslations} from 'next-intl';
import ThemeSwitch from '../hooks/useTheme';
import LanguageSwitcher from '../hooks/useLocal';
 
export default function Index() {
  const t = useTranslations('Index');
  return (
    <div>

      <LanguageSwitcher/>
      <h1>{t('title')}</h1>

      <ThemeSwitch/>
      <p className='text-2xl'>ដោយយល់ឃើញថា ការមិនទទួលស្គាល់ និងការប្រមាថមើលងាយសិទ្ធិមនុស្ស នាំឱ្យមានអំពើ ព្រៃផ្សៃសាហាវយង់ឃ្នង ធ្វើឱ្យក្ដៅក្រហាយដល់សតិសម្បជញ្ញៈមនុស្សជាតិ</p>
      <h1>{t('title')}</h1>
      <h2>{t('title')}</h2>
      <h3>{t('title')}</h3>
      <h4>{t('title')}</h4>
      <h5>{t('title')}</h5>
      <h6>{t('title')}</h6>
    </div>
  );
}