import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean
}

const options = [
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Europe, content: Country.Europe },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.USA, content: Country.USA },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
