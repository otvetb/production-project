import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NotificationList } from '@/entities/Notifications';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import cls from './NotificationButton.module.scss';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { Popover } from '@/shared/ui/redesigned/Popups';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [isOpened, setIsOpened] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpened(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpened(false);
    }, []);

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
            }
            off={
                <ButtonDeprecated
                    onClick={onOpenDrawer}
                    theme={ButtonTheme.CLEAR}
                >
                    <IconDeprecated Svg={NotificationIconDeprecated} inverted />
                </ButtonDeprecated>
            }
        />
    );

    return (
        <div>
            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Popover
                            className={classNames(cls.NotificationButton, {}, [
                                className,
                            ])}
                            trigger={trigger}
                            direction="bottomLeft"
                        >
                            <NotificationList className={cls.notifications} />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            className={classNames(cls.NotificationButton, {}, [
                                className,
                            ])}
                            trigger={trigger}
                            direction="bottomLeft"
                        >
                            <NotificationList className={cls.notifications} />
                        </PopoverDeprecated>
                    }
                />
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpened} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
});
