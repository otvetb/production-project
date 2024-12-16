import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames('lds-ring', {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
export default Loader;
