import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import Text, { TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecomendationsListProps {
    className?: string;
}

export const ArticleRecomendationsList = memo((props: ArticleRecomendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { isLoading, data: articles, error } = useArticleRecommendationsList(3);
    if (isLoading || error || !articles) {
        return null;
    }
    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Рекомендуем')}
            />
            <ArticleList
                articles={articles}
                target="_blank"
            />
        </VStack>
    );
});
