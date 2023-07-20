import { useTranslation } from 'react-i18next';

export const ErrorPage = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <button onClick={reloadPage} type="button">
        {t('Обновить страницу')}
      </button>
    </div>
  );
};
