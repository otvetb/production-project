import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    borderRadius?: string;
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        className,
        height,
        width,
        borderRadius,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
};
