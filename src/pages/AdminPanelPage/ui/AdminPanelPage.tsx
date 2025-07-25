import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const AdminPanelPage = memo(() => {
    const { t } = useTranslation('adminPanel');

    return (
        <Page>
            {t('Админ панель')}
        </Page>
    );
});

export default AdminPanelPage;
