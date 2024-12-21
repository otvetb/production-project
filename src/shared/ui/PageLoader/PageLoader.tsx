import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import Loader from '../Loader/Loader';
import cls from './PageLoader.module.scss';
import L123 from '../Loader/L123';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <L123 />
        </div>
    );
};
export default PageLoader;
