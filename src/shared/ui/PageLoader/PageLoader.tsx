import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import L123 from 'shared/ui/Loader/L123';
import Loader from '../Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            
        </div>
    );
};
export default PageLoader;
