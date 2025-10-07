import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Popover = (props: PopoverProps) => {
    const { className, trigger, direction = 'bottomRight', children } = props;
    const { t } = useTranslation();

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel
                className={classNames(cls.panel, {}, [popupCls[direction]])}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
