import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import './Loaders.scss';

interface LoaderProps {
    className?: string;
}

export const Loaders: FC<LoaderProps> = (props) => {
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
export default Loaders;
