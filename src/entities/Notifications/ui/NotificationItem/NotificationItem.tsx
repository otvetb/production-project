import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import TextDeprecated from '@/shared/ui/deprecated/Text';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import Text from '@/shared/ui/redesigned/Text';

interface NotificationItemProps {
    className?: string;
    notification: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, notification } = props;

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <Text
                        title={notification.title}
                        text={notification.description}
                    />
                </Card>
            }
            off={
                <CardDeprecated
                    theme={CardTheme.OUTLINED}
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <TextDeprecated
                        title={notification.title}
                        text={notification.description}
                    />
                </CardDeprecated>
            }
        />
    );

    if (notification.href) {
        return (
            <a className={cls.link} href={notification.href} target="__blank">
                {content}
            </a>
        );
    }

    return content;
});
