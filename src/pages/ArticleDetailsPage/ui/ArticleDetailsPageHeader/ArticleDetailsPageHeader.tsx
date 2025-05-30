import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from 'entities/Article/model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);
    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    const canEdit = useSelector(getCanEditArticle);
    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button
                    onClick={onEditArticle}
                    className={cls.editBtn}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
});
