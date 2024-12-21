import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            {/* asdfa */}
        </div>
    );
};
export default PageLoader;
