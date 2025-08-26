import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from '@headlessui/react';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import cls from './Drawer.module.scss';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClick?: () => void;
    lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        isOpen,
        onClick,
        lazy,
    } = props;

    const { theme } = useTheme();

    const { isClosing, isMounted, close } = useModal({ onClose: onClick, isOpen, animationDelay: 300 });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>

    );
});
