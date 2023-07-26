import { useTranslation } from 'react-i18next';

export const ErrorPage = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div>
      <p>{t('An unexpected error has occurred')}</p>
      <button onClick={reloadPage} type="button">
        {t('Refresh the page')}
      </button>
    </div>
  );
};
