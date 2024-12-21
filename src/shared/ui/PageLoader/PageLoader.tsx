import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';

import cls from './PageLoader.module.scss';
import Loaders from '../Loaders/Loaders';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loaders />
        </div>
    );
};
export default PageLoader;
