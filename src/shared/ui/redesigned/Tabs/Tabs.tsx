import { useTranslation } from 'react-i18next';
import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card } from '../Card';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
    direction?: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, value, onTabClick, direction = 'row' } = props;
    const { t } = useTranslation();

    const clickHandle = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <Flex
            direction={direction}
            gap="8"
            align="start"
            className={classNames(cls.Tabs, {}, [className])}
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value;
                return (
                    <Card
                        variant={tab.value === value ? 'light' : 'normal'}
                        className={classNames(cls.tab, {
                            [cls.selected]: isSelected,
                        })}
                        key={tab.value}
                        onClick={clickHandle(tab)}
                        border="round"
                        padding={isSelected ? '16' : '8'}
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
});
