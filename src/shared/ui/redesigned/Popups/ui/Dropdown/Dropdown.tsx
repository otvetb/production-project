import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './Dropdown.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { AppLink } from '../../../AppLink';

export interface DropdownItem {
    content?: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    direction?: DropdownDirection;
    trigger: ReactNode;
}

export function Dropdown(props: DropdownProps) {
    const { className, items, trigger, direction = 'bottomRight' } = props;
    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [
                className,
                popupCls.popup,
            ])}
        >
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items
                className={classNames(cls.options, {}, [
                    popupCls[direction],
                    popupCls.menu,
                ])}
            >
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            className={classNames(
                                cls.item,
                                { [popupCls.active]: active },
                                [],
                            )}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                                key={`dropdown-ley-${index}`}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            disabled={item.disabled}
                            key={`dropdown-ley-${index}`}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
