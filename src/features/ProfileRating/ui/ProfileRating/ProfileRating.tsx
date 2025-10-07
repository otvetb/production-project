import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import {
    useGetProfileRating,
    useRateProfile,
} from '../../api/profileRatingApi';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

export const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const [rateProfileMutation] = useRateProfile();
    const { data, isLoading } = useGetProfileRating({
        userId: authData?.id || '',
        profileId,
    });

    const handleRateProfile = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateProfileMutation({
                    userId: authData?.id || '',
                    profileId,
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                console.log(e);
            }
        },
        [rateProfileMutation, authData, profileId],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateProfile(starsCount, feedback);
        },
        [handleRateProfile],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateProfile(starsCount);
        },
        [handleRateProfile],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            className={classNames('', {}, [className])}
            title={t('Ваш рейтинг')}
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            feedbackTitle={t('Оставьте свой отзыв')}
            hasFeedback
        />
    );
});

export default ProfileRating;
