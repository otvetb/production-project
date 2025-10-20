import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localStorage';

const MainPage = memo(() => {
    const { t } = useTranslation();
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_LAST_DESIGN_KEY, 'new');
    });

    return <Page data-testid="MainPage">{t('Главная страница')}</Page>;
});

export default MainPage;
