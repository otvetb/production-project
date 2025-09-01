import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation('articleEdit');
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Page className={classNames('', {}, [className])}>
            {isEdit
                ? t('Редактирование статьи с ID = ') + id
                : t('Создание новой статьи')}
        </Page>
    );
});

export default ArticleEditPage;
