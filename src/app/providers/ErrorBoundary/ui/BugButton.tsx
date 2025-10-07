import { FC, useEffect, useState } from 'react';
import { Button } from '@/shared/ui/deprecated/Button';

export const BugButton: FC = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return <Button onClick={onThrow}>123</Button>;
};
export default BugButton;
