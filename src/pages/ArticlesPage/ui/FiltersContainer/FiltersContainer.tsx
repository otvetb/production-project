import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const {
        sort,
        order,
        search,
        type,
        onSortOrder,
        onChangeOrder,
        onChangeSearch,
        onChangeType,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            className={classNames('', {}, [className])}
            sort={sort}
            order={order}
            search={search}
            type={type}
            onSortOrder={onSortOrder}
            onChangeOrder={onChangeOrder}
            onChangeSearch={onChangeSearch}
            onChangeType={onChangeType}
        />
    );
});
